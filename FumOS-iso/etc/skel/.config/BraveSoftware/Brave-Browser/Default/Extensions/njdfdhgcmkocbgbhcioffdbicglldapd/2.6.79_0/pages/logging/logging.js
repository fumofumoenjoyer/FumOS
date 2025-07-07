/**
 * Logging Page
 * Belongs to LocalCDN
 *
 * @author      nobody
 * @since       2021-02-19
 *
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';


/**
 * Logging Page
 */

let logging = {};

logging._onDocumentLoaded = function () {
    logging._getLoggingData()
        .then(logging._generateTable);
    document.getElementById('btn-reload').addEventListener('click', logging._resfresh);
    document.getElementById('btn-copy').addEventListener('click', logging._toggleCopySection);
    document.getElementById('btn-delete').addEventListener('click', logging._deleteLogs);

    document.getElementById('btn-raw').addEventListener('click', function () { logging._prepareCopiedData('btn-raw'); });
    document.getElementById('btn-markdown').addEventListener('click', function () { logging._prepareCopiedData('btn-markdown'); });
};

logging._generateTable = function () {
    let data = logging._data;
    if (data.length === 0) {
        logging._showTable(false);
        return;
    }

    for (let i = data.length - 1; i >= 0; i--) {
        let tbody, row, cell, content, redirect, initiator;

        tbody = document.getElementById('logging-content').getElementsByTagName('tbody')[0];
        row = tbody.insertRow();

        if (Object.values(data[i])[3]) {
            row.classList.add('missing');
        }

        cell = row.insertCell();
        content = document.createTextNode(i + 1);
        cell.appendChild(content);

        if (Object.values(data[i])[4] === '') {
            initiator = Object.values(data[i])[0];
        } else {
            initiator = `${Object.values(data[i])[0]}\n(i) ${Object.values(data[i])[4]}`;
        }

        cell = row.insertCell();
        content = document.createTextNode(initiator);
        cell.appendChild(content);

        cell = row.insertCell();
        content = document.createTextNode(Object.values(data[i])[1]);
        cell.appendChild(content);

        cell = row.insertCell();
        if (Object.values(data[i])[2] === '') {
            redirect = '-';
        } else {
            redirect = Object.values(data[i])[2];
        }
        content = document.createTextNode(redirect);
        cell.appendChild(content);
    }

    logging._showTable(true);
};

logging._deleteLogs = function () {
    if (confirm('Are you sure you want to delete these logs?')) {
        let message = {
            'topic': 'logs:delete',
            'value': '',
        };

        chrome.runtime.sendMessage(message);
        logging._resfresh();
    }
};

logging._getLoggingData = function () {
    return new Promise((resolve) => {
        let message = {
            'topic': 'logs:get'
        };

        chrome.runtime.sendMessage(message, function (data) {
            logging._data = data['logs'];
            resolve();
        });
    });
};

logging._showTable = function (value) {
    let v1, v2;

    v1 = value ? 'block' : 'none';
    v2 = value ? 'none' : 'block';

    document.getElementById('logging-content').style.display = v1;
    document.getElementById('btn-delete').style.display = v1;
    document.getElementById('btn-copy').style.display = v1;
    document.getElementById('no-logging-content').style.display = v2;
};

logging._resfresh = function () {
    location.reload();
};

logging._toggleCopySection = function () {
    let copyBtn, copySection;

    copyBtn = document.getElementById('btn-copy');
    copySection = document.getElementById('copy-to-clipboard-section');

    if (copyBtn.classList.contains('button-active')) {
        copyBtn.textContent = 'Copy';
        copyBtn.classList.remove('button-active');
        copySection.style.display = 'none';
    } else {
        copyBtn.classList.add('button-active');
        copyBtn.textContent = 'Close';
        copySection.style.display = 'block';
    }

    logging._prepareCopiedData('btn-raw');
};

logging._prepareCopiedData = function (type) {
    let data, str;

    data = logging._data;

    if (type === 'btn-markdown') {
        str = '| Number | Initiator | Resource | Redirected to |\n';
        str += '| -------- | -------- | -------- | -------- |\n';
        for (let i = 0; i < data.length; i++) {
            str += String(`| \`${i + 1}\` |`);
            str += String(` \`${Object.values(data[i])[0]}\` |`);
            str += String(` \`${Object.values(data[i])[1]}\` |`);
            str += String(` \`${Object.values(data[i])[2]}\` |\n`);
        }
    } else {
        str = '"number";"initiator";"resource";"redirected to";\n';
        for (let i = 0; i < data.length; i++) {
            str += String(`"${i + 1}";`);
            str += String(`"${Object.values(data[i])[0]}";`);
            str += String(`"${Object.values(data[i])[1]}";`);
            str += String(`"${Object.values(data[i])[2]}";\n`);
        }
    }

    document.getElementById('copied-data').value = str;

    logging._copy();
    logging._switchExportType(type);
};

logging._copy = function () {
    let textArea = document.getElementById('copied-data');
    navigator.clipboard.writeText(textArea.value).then(
        function () {
            textArea.select();
        },
        function () {
            alert('Rule set cannot be copied!');
        }
    );
};

logging._switchExportType = function (type) {
    let btnRaw, btnMarkdown;

    btnRaw = document.getElementById('btn-raw');
    btnMarkdown = document.getElementById('btn-markdown');

    if (type === 'btn-raw') {
        btnMarkdown.classList.remove('button-active');
        btnRaw.classList.add('button-active');
    } else {
        btnMarkdown.classList.add('button-active');
        btnRaw.classList.remove('button-active');
    }
};

logging._data = [];

document.addEventListener('DOMContentLoaded', logging._onDocumentLoaded);
