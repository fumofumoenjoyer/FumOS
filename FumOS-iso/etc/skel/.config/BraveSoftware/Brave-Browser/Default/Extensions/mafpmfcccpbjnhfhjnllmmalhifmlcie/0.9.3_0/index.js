const availableLangs = new Map([
['en_US', 'English'],
['sq', 'shqip'],
['ca', 'català'],
['zh_CN', '中文'],
['cs', 'čeština'],
['nl', 'Nederlands'],
['fi', 'suomi'],
['fr', 'français'],
['ka', 'ქართული'],
['de', 'Deutsch'],
['el', 'Ελληνικά'],
['is', 'íslenska'],
['it', 'italiano'],
['ja', '日本語'],
['ko', '한국어'],
['fa', 'فارسی'],
['pl', 'polski'],
['pt_BR', 'português'],
['ro', 'română'],
['ru', 'русский'],
['es', 'español'],
['sw', 'Kiswahili'],
['sv_SE', 'svenska'],
['tr', 'Türkçe'],
['uk', 'українська'],
['vi', 'Tiếng Việt'],
]);

/* global availableLangs */
const RTL_LANGS = new Set(["ar", "fa", "he", "ur"]);

class Messages {
  constructor(json) {
    this.json = json;
  }
  getMessage(m, ...rest) {
    if (Object.prototype.hasOwnProperty.call(this.json, m)) {
      let message = this.json[m].message;
      return message.replace(/\$(\d+)/g, (...args) => {
        return rest[Number(args[1]) - 1];
      });
    }
  }
}


var defaultLang = "en_US";
var messages = null;

var getLang = function() {
  let lang = navigator.language || defaultLang;
  lang = lang.replace(/-/g, '_');

  //prioritize override language
  var url_string = window.location.href;
  var url = new URL(url_string);
  var override_lang = url.searchParams.get("lang");
  if (override_lang != null) {
    lang = override_lang;
  }

  if (availableLangs.has(lang)) {
    return lang;
  }
  lang = lang.split('_')[0];
  if (availableLangs.has(lang)) {
    return lang;
  }
  return defaultLang;
};

var set_lang_direction = function(l) {
  if (RTL_LANGS.has(l)) {
    document.documentElement.dir = "rtl";
  } else {
    document.documentElement.dir = "ltr";
  }
};

var fill = function(n, func) {
  switch(n.nodeType) {
    case 1:  // Node.ELEMENT_NODE
    {
      const m = /^__MSG_([^_]*)__$/.exec(n.dataset.msgid);
      if (m) {
        var val = func(m[1]);
        if (val != undefined) {
          n.innerHTML = val;
        }
      }
      n.childNodes.forEach(c => fill(c, func));
      break;
    }
  }
};

let gotLang = getLang();
fetch(`./_locales/${gotLang}/website.json`)
.then((res) => {
  if (!res.ok) { return; }
  return res.json();
})
.then((json) => {
  var language = document.getElementById('language-switcher');
  var lang = `${gotLang}`;
  set_lang_direction(lang);
  language.innerText = `${availableLangs.get(lang)} (${lang})`;
  messages = new Messages(json);
  fill(document.body, (m) => {
    return messages.getMessage(m);
  });
});

// Populate language switcher list
availableLangs.forEach((name, lang) => {
  var languageList = document.getElementById('supported-languages');
  var link = document.createElement('a');
  link.setAttribute('href', '?lang='+lang);
  link.setAttribute('class', "dropdown-item");
  link.innerText = `${name} (${lang})`;
  languageList.lastChild.after(link);
});
