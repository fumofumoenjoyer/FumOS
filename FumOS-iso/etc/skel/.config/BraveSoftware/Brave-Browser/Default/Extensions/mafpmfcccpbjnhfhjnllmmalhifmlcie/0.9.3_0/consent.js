/* global chrome availableLangs fill Messages set_lang_direction getLang*/

window.onload = function(){
  const port = chrome.runtime.connect({
    name: "consent"
  });

  async function sendMessage(kind, data) {
    await chrome.runtime.sendMessage({
      kind: kind,
      data: data
    });
  }

  function diffuseRemoteValue(kind, name, value) {
    sendMessage('diffuse-value', {kind: kind, name: name, value: value}).then();
  }

  var consentMessages = null;

  let gotLang = getLang();
  fetch(`./_locales/${gotLang}/messages.json`)
  .then((res) => {
    if (!res.ok) { return; }
    return res.json();
  })
  .then((json) => {
    var language = document.getElementById('language-switcher');
    var lang = `${gotLang}`;
    set_lang_direction(lang);
    language.innerText = `${availableLangs.get(lang)} (${lang})`;
    consentMessages = new Messages(json);
    fill(document.body, (m) => {
      return consentMessages.getMessage(m);
    });
  });
  var button = document.getElementById("consent");
  button.addEventListener("click", function() {
    // eslint-disable-next-line no-undef
    if( true === false ){
      port.postMessage({ consent: true });
    } else {
      diffuseRemoteValue("snowflake-preference", "snowflake-consented", true);
      diffuseRemoteValue("snowflake-preference", "snowflake-enabled", true);
    }

    button.setAttribute("data-msgid", "__MSG_consented__");
    fill(button, (m) => {
      return consentMessages.getMessage(m);
    });
  });
  var removeBtn = document.getElementById("remove");
  removeBtn.addEventListener("click", function() {
    chrome.management.uninstallSelf({
      showConfirmDialog: true,
    });
  });
};
