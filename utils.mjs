function changeText(str, start, end, content) {
  const newString = str.slice(0, end) + content + str.slice(end);
  return newString;
}
function pressShift(keyboard) {
  keyboard.getKeys().filter((el) => el.dataset.initClass === 'keys')
    .forEach((el) => el.classList.add('uppercase'));
  keyboard.getKeys().filter((el) => el.dataset.alt !== 'undefined')
    .forEach((el) => {
      const btn = el;
      if (keyboard.lang === 'en') {
        btn.textContent = el.dataset.alt;
      } else {
        btn.textContent = el.dataset.altRu;
      }
    });
}

function unpressShift(keyboard) {
  keyboard.getKeys().filter((el) => el.dataset.initClass === 'keys')
    .forEach((el) => el.classList.remove('uppercase'));
  keyboard.getKeys().filter((el) => el.dataset.alt !== 'undefined')
    .forEach((el) => {
      const btn = el;
      if (keyboard.lang === 'en') btn.textContent = el.dataset.name;
      else btn.textContent = el.dataset.ru !== 'null' ? el.dataset.ru : el.dataset.name;
    });
}
function savelang(lang = 'en') {
  localStorage.setItem('lang', lang);
}
function getLang() {
  const lang = localStorage.getItem('lang');
  return lang !== 'undefined' ? lang : 'en';
}
export {
  changeText, pressShift, unpressShift, savelang, getLang,
};
