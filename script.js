import { changeText, pressShift, unpressShift } from './utils.mjs';
import codes from './keys-map.mjs';

const { body } = document;
class Keyboard {
  constructor(layout) {
    this.layout = layout;
    this.settings = [
      { start: 0, end: 14 },
      { start: 14, end: 28 },
      { start: 28, end: 41 },
      { start: 41, end: 54 },
      { start: 54, end: 65 },
    ];
    this.keys = [];
    this.lang = 'en';
  }

  renderField() {
    const field = document.createElement('div');
    const textArea = document.createElement('textarea');
    const keyboard = document.createElement('div');
    const keyboardKeys = document.createElement('div');

    field.className = 'container';
    textArea.className = 'text';
    textArea.id = 'text';
    textArea.name = 'text';
    textArea.rows = 15;
    textArea.cols = 100;
    this.textArea = textArea;
    keyboard.className = 'keyboard_wrapper';
    this.keyboard = keyboard;
    keyboardKeys.className = 'keyboard_keys';
    this.keyboardKeys = keyboardKeys;
    this.field = field;

    // textArea.addEventListener('input', (evt) => {
    //   console.log(evt);
    //   // evt.preventDefault();
    // });
  }

  renderKeyboard() {
    const rowsCount = 5;
    for (let i = 0; i < rowsCount; i += 1) {
      const { start, end } = this.settings[i];
      const row = document.createElement('div');
      row.className = 'row';
      const keys = codes.slice(start, end);
      keys.forEach((key) => {
        row.append(this.renderKey(key));
      });
      this.keyboardKeys.append(row);
    }
  }

  renderKey({
    name, which, key, code, Class,
    alt, ru = null, altRu,
  }) {
    const keyCode = document.createElement('div');
    keyCode.className = Class;
    keyCode.textContent = name;
    keyCode.dataset.name = name;
    keyCode.dataset.keyCode = which;
    keyCode.dataset.code = code;
    keyCode.dataset.key = key;
    keyCode.dataset.initClass = Class;
    keyCode.dataset.alt = alt;
    keyCode.dataset.altRu = altRu;
    keyCode.dataset.ru = ru;
    this.keys.push(keyCode);
    keyCode.addEventListener('mousedown', (evt) => {
      if (['ShiftRight', 'ShiftLeft'].includes(evt.target.dataset.code)) {
        console.log('DOWN');
        pressShift(this);
      }
    });
    keyCode.addEventListener('mouseup', (evt) => {
      if (['ShiftRight', 'ShiftLeft'].includes(evt.target.dataset.code)) {
        console.log('UP');
        unpressShift(this);
      }
    });
    keyCode.addEventListener('click', (evt) => {
      let caretStart = this.textArea.selectionStart;
      const caretEnd = this.textArea.selectionEnd;
      evt.preventDefault();
      this.textArea.focus();
      if (evt.target.dataset.initClass === 'keys') {
        this.textArea.value = changeText(
          this.textArea.value,
          caretStart,
          caretEnd,
          evt.target.classList.contains('uppercase') ? evt.target.textContent.toUpperCase() : evt.target.textContent,
        );
      }
      if (evt.target.dataset.code === 'Space') {
        this.textArea.value = changeText(
          this.textArea.value,
          caretStart,
          caretEnd,
          ' ',
        );
      }
      if (evt.target.dataset.code === 'Enter') {
        this.textArea.value = changeText(
          this.textArea.value,
          caretStart,
          caretEnd,
          '\n',
        );
      }
      if (evt.target.dataset.code === 'Tab') {
        this.textArea.value = changeText(
          this.textArea.value,
          caretStart,
          caretEnd,
          '\t',
        );
      }
      if (evt.target.dataset.code === 'Backspace') {
        this.textArea.value = this.textArea.value.slice(0, caretStart - 1)
          + this.textArea.value.slice(caretEnd, this.textArea.value.length);
        caretStart -= 2;
      }

      if (['CapsLock'].includes(evt.target.dataset.code)) {
        this.keys.filter((el) => el.dataset.initClass === 'keys')
          .forEach((el) => el.classList.toggle('uppercase'));
      }

      this.textArea.setSelectionRange(caretStart + 1, caretStart + 1);
    });
    return keyCode;
  }

  getKeys() {
    return this.keys;
  }

  render() {
    this.renderField();
    this.renderKeyboard();
    this.keyboard.append(this.keyboardKeys);
    this.field.append(this.textArea, this.keyboard);
    body.append(this.field);
  }

  switchLang() {
    this.lang = this.lang === 'en' ? 'ru' : 'en';
    this.keys.filter((el) => {
      console.log(el.dataset.ru);
      return el.dataset.ru !== 'null';
    }).forEach((el) => {
      const btn = el;
      btn.textContent = btn.dataset.ru;
    });
  }
}
function getCurrentKeys() {
  return document.querySelectorAll('.keys');
}
function getKey(code) {
  return Array.from(getCurrentKeys()).filter(
    (el) => el.dataset.code === code,
  )[0];
}

const keyboard = new Keyboard(codes);
keyboard.render();

document.addEventListener('keydown', (evt) => {
  evt.preventDefault();
  document.querySelector('textarea').focus();
  const key = getKey(evt.code);
  key.classList.add('pressed');
  key.click();
  if (['ShiftRight', 'ShiftLeft'].includes(evt.code)) {
    pressShift(keyboard);
  }
  if (evt.ctrlKey && evt.altKey) {
    keyboard.switchLang();
  }
});
document.addEventListener('keyup', (evt) => {
  evt.preventDefault();
  const key = getKey(evt.code);
  key.classList.remove('pressed');
  if (['ShiftRight', 'ShiftLeft'].includes(evt.code)) {
    unpressShift(keyboard);
  }
});
