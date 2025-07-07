/**
 * Job Scheduler
 * Belongs to Decentraleyes.
 *
 * @author      Thomas Rientjes
 * @since       2024-11-19
 * @license     MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * Private Constants
 */

const _history = {};
const _locks = {};
const _queues = {};

/**
 * Private Functions
 */

const _execute = async (identifier, instruction) => {

    try {

        if (JSON.stringify(instruction.job.payload) !== _history[identifier]) {
            await instruction.job.callable(instruction.job.payload);
        }

        instruction.resolve();

    } catch (error) {
        instruction.reject(error);
    }
};

/**
 * Public Functions
 */

const schedule = (identifier, job = null) => {

    _locks[identifier] = _locks[identifier] ?? false;
    _queues[identifier] = _queues[identifier] ?? [];

    return new Promise((resolve, reject) => {

        if (job !== null) {
            _queues[identifier].push({job, resolve, reject});
        }

        if (_locks[identifier] || _queues[identifier].length === 0) {
            return;
        }

        _locks[identifier] = true;

        const instruction = _queues[identifier].shift();

        _execute(identifier, instruction).finally(() => {

            _history[identifier] = JSON.stringify(instruction.job.payload);
            _locks[identifier] = false;

            schedule(identifier);
        });
    });
};

/**
 * Exports
 */

export default {
    schedule
};
