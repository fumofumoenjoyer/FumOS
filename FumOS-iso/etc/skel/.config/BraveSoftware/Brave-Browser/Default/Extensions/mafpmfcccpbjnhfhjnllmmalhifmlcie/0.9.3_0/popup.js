/* global chrome */
/* exported Popup */

// Add or remove a class from elem.classList, depending on cond.
function setClass(elem, className, cond) {
  if (cond) {
    elem.classList.add(className);
  } else {
    elem.classList.remove(className);
  }
}

class Popup {
  /**
   * @param {() => void} [onRunInBackgroundChange]
   */
  constructor(getMsgFunc, changeFunc, retryFunc, onRunInBackgroundChange) {
    this.getMsgFunc = getMsgFunc;
    this.enabled = document.getElementById('enabled');
    this.enabled.addEventListener('change', changeFunc);
    this.retry = document.getElementById('retry');
    this.retry.addEventListener('click', () => {
      this.setStatusDesc(getMsgFunc('popupRetrying'));
      this.setRetry(false);
      this.setConsent(false);
      setTimeout(retryFunc, 1000);  // Just some UI feedback
    });
    this.consent = document.getElementById('consent');
    this.consent.addEventListener('click', () => {
      const url = chrome.runtime.getURL("consent.html");
      chrome.tabs.create({ url });
    });
    this.div = document.getElementById('active');
    this.statustext = document.getElementById('statustext');
    this.statusdesc = document.getElementById('statusdesc');
    this.img = document.getElementById('statusimg');
    this.enabledWrapper = document.getElementById('enabled-wrapper');
    if (
      typeof true !== 'undefined'
      // eslint-disable-next-line no-undef
      && true
    ) {
      /** @type {HTMLInputElement} */
      const runInBackgroundInput = document.getElementById('run-in-background');
      document.getElementById('run-in-background-wrapper').classList.remove('display-none');
      { // Two-way bind the input to the permission.
        runInBackgroundInput.addEventListener('change', ({ target }) => {
          onRunInBackgroundChange(target.checked);
          // The permission request may be rejected, so only update the checkbox value inside
          // the event listeners below. TODO Don't know if it's ok in terms of accessibility.
          // Also maybe it's better looking in general to toggle the checkbox and toggle it back
          // if the request is rejected.
          target.checked = !target.checked;
        });

        // The storage is the source of truth for `runInBackground`, not
        // `chrome.permissions.contains({ permissions: ['background'] }`, because when the "Enabled"
        // checkbox is off, we (may) revoke that permission.
        new Promise(r => chrome.storage.local.get({ runInBackground: false }, r))
        .then(({ runInBackground }) => {
          runInBackgroundInput.checked = runInBackground;
        });
        chrome.storage.local.onChanged.addListener(changes => {
          const runInBackgroundChange = changes.runInBackground;
          if (runInBackgroundChange) {
            runInBackgroundInput.checked = runInBackgroundChange.newValue;
          }
        });
      }
    }
  }
  setEnabled(enabled) {
    setClass(this.img, 'on', enabled);
  }
  setActive(active) {
    setClass(this.img, 'running', active);
  }
  setStatusText(txt) {
    this.statustext.innerText = txt;
  }
  setStatusDesc(desc, error) {
    this.statusdesc.innerText = desc;
    setClass(this.statusdesc, 'error', error);
  }
  setEnabledWrapper(hide) {
    this.enabledWrapper.style.display = hide ? 'none' : 'block';
  }
  setRetry(display) {
    this.retry.style.display = display ? 'inline-block' : 'none';
  }
  setConsent(display) {
    this.consent.style.display = display ? 'none' : 'inline-block';
  }
  setChecked(checked) {
    this.enabled.checked = checked;
  }
  static fill(n, func) {
    switch(n.nodeType) {
      case 3: {  // Node.TEXT_NODE
        const m = /^__MSG_([^_]*)__$/.exec(n.nodeValue);
        if (m) { n.nodeValue = func(m[1]); }
        break;
      }
      case 1:  // Node.ELEMENT_NODE
        n.childNodes.forEach(c => Popup.fill(c, func));
        break;
    }
  }
  turnOn(clients, total) {
    this.setChecked(true);
    if (clients > 0) {
      this.setStatusText(this.getMsgFunc('popupStatusOn', String(clients)));
      this.active = true;
    } else {
      this.setStatusText(this.getMsgFunc('popupStatusReady'));
      this.active = false;
    }
    this.setStatusDesc((total > 0) ? this.getMsgFunc('popupDescOn', String(total)) : '');
    this.setEnabled(true);
    this.setActive(this.active);
    this.setEnabledWrapper(false);
    this.setRetry(false);
  }
  turnOff(desc, error, retry) {
    this.setChecked(false);
    this.setStatusText(this.getMsgFunc('popupStatusOff'));
    this.setStatusDesc(desc ? this.getMsgFunc(desc) : '', error);
    this.setEnabled(false);
    this.setActive(false);
    this.setEnabledWrapper(error);
    this.setRetry(retry);
  }
  missingFeature(desc) {
    this.turnOff(desc, true, desc === 'popupBridgeUnreachable');
  }
}
