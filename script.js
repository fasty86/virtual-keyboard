import { Key } from './key.mjs';
import codes from './keys-map.mjs';

const { body } = document;
class Keyboard {
  constructor(layout) {
    this.layout = layout;
    this.settings = [{ start: 0, end: 14 }, { start: 14, end: 28 }, { start: 28, end: 41 },
      { start: 41, end: 54 }, { start: 54, end: 65 }];
    this.keys = [];
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
  }) {
    const keyCode = document.createElement('div');
    keyCode.className = Class;
    keyCode.textContent = name;
    keyCode.dataset.keyCode = which;
    keyCode.dataset.code = code;
    keyCode.dataset.key = key;
    this.keys.push(keyCode);
    return keyCode;
  }

  render() {
    this.renderField();
    this.renderKeyboard();
    this.keyboard.append(this.keyboardKeys);
    this.field.append(this.textArea, this.keyboard);
    body.append(this.field);
  }
}
function getCurrentKeys() {
  return document.querySelectorAll('.keys');
}
function getKey(code) {
  return Array.from(getCurrentKeys()).filter((el) => el.dataset.code === code)[0];
}
const keyboard = new Keyboard(codes);
keyboard.render();
document.addEventListener('keydown', (evt) => {
  document.querySelector('textarea').focus();
  const key = getKey(evt.code);
  key.classList.add('pressed');
});
document.addEventListener('keyup', (evt) => {
  const key = getKey(evt.code);
  key.classList.remove('pressed');
});
