var lang = navigator.language.toLocaleLowerCase();
var langs = ['zh-cn', 'zh-hans-cn', 'zh-hans'];
if (langs.indexOf(lang) > -1) {
    location.href='error.html'
}