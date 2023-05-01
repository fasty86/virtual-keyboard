const codes = [
  {
    name: '`',
    which: 192,
    key: '`',
    code: 'Backquote',
    Class: 'keys',
    ru: 'ё',
    alt: '~',
    altRu: 'ё',
  },
  {
    name: 1,
    which: 49,
    key: 1,
    code: 'Digit1',
    Class: 'keys',
    alt: '!',
    altRu: '!',
  },
  {
    name: 2,
    which: 50,
    key: 2,
    code: 'Digit2',
    Class: 'keys',
    alt: '@',
    altRu: '"',
  },
  {
    name: 3,
    which: 51,
    key: 3,
    code: 'Digit3',
    Class: 'keys',
    alt: '#',
    altRu: '№',
  },
  {
    name: 4,
    which: 52,
    key: 4,
    code: 'Digit4',
    Class: 'keys',
    alt: '$',
    altRu: ';',
  },
  {
    name: 5,
    which: 53,
    key: 5,
    code: 'Digit5',
    Class: 'keys',
    alt: '%',
    altRu: '%',
  },
  {
    name: 6,
    which: 54,
    key: 6,
    code: 'Digit6',
    Class: 'keys',
    alt: '^',
    altRu: ':',
  },
  {
    name: 7,
    which: 55,
    key: 7,
    code: 'Digit7',
    Class: 'keys',
    alt: '&',
    altRu: '?',
  },
  {
    name: 8,
    which: 56,
    key: 8,
    code: 'Digit8',
    Class: 'keys',
    alt: '*',
    altRu: '*',
  },
  {
    name: 9,
    which: 57,
    key: 9,
    code: 'Digit9',
    Class: 'keys',
    alt: '(',
    altRu: '(',
  },
  {
    name: 0,
    which: 48,
    key: 0,
    code: 'Digit0',
    Class: 'keys',
    alt: ')',
    altRu: ')',
  },
  {
    name: '-',
    which: 189,
    key: '-',
    code: 'Minus',
    Class: 'keys',
    alt: '_',
    altRu: '_',
  },
  {
    name: '=',
    which: 187,
    key: '=',
    code: 'Equal',
    Class: 'keys',
    alt: '+',
    altRu: '+',
  },
  {
    name: 'backspace',
    which: 8,
    key: 'Backspace',
    code: 'Backspace',
    Class: 'keys backspace_key',
  },
  {
    name: 'tab',
    which: 9,
    key: 'Tab',
    code: 'Tab',
    Class: 'keys tab_key',
  },
  {
    name: 'q',
    which: 81,
    key: 'q',
    code: 'KeyQ',
    Class: 'keys',
    ru: 'й',
  },
  {
    name: 'w',
    which: 87,
    key: 'w',
    code: 'KeyW',
    Class: 'keys',
    ru: 'ц',
  },
  {
    name: 'e',
    which: 69,
    key: 'e',
    code: 'KeyE',
    Class: 'keys',
    ru: 'у',
  },
  {
    name: 'r',
    which: 82,
    key: 'r',
    code: 'KeyR',
    Class: 'keys',
    ru: 'к',
  },
  {
    name: 't',
    which: 84,
    key: 't',
    code: 'KeyT',
    Class: 'keys',
    ru: 'е',
  },
  {
    name: 'y',
    which: 89,
    key: 'y',
    code: 'KeyY',
    Class: 'keys',
    ru: 'н',
  },
  {
    name: 'u',
    which: 85,
    key: 'u',
    code: 'KeyU',
    Class: 'keys',
    ru: 'г',
  },
  {
    name: 'i',
    which: 73,
    key: 'i',
    code: 'KeyI',
    Class: 'keys',
    ru: 'ш',
  },
  {
    name: 'o',
    which: 79,
    key: 'o',
    code: 'KeyO',
    Class: 'keys',
    ru: 'щ',
  },
  {
    name: 'p',
    which: 80,
    key: 'p',
    code: 'KeyP',
    Class: 'keys',
    ru: 'з',
  },
  {
    name: '[',
    which: 219,
    key: '[',
    code: 'BracketLeft',
    Class: 'keys',
    ru: 'х',
    alt: '{',
    altRu: 'Х',
  },
  {
    name: ']',
    which: 221,
    key: ']',
    code: 'BracketRight',
    Class: 'keys',
    ru: 'ъ',
    alt: '}',
    altRu: 'Ъ',
  },
  {
    name: '\\',
    which: 220,
    key: '\\',
    code: 'Backslash',
    Class: 'keys slash_key',
    alt: '|',
    ru: '\\',
    altRu: '/',
  },
  {
    name: 'caps lock',
    which: 20,
    key: 'CapsLock',
    code: 'CapsLock',
    Class: 'keys caps_lock_key',
  },
  {
    name: 'a',
    which: 65,
    key: 'a',
    code: 'KeyA',
    Class: 'keys',
    ru: 'ф',
  },
  {
    name: 's',
    which: 83,
    key: 's',
    code: 'KeyS',
    Class: 'keys',
    ru: 'ы',
  },
  {
    name: 'd',
    which: 68,
    key: 'd',
    code: 'KeyD',
    Class: 'keys',
    ru: 'в',
  },
  {
    name: 'f',
    which: 70,
    key: 'f',
    code: 'KeyF',
    Class: 'keys',
    ru: 'а',
  },
  {
    name: 'g',
    which: 71,
    key: 'g',
    code: 'KeyG',
    Class: 'keys',
    ru: 'п',
  },
  {
    name: 'h',
    which: 72,
    key: 'h',
    code: 'KeyH',
    Class: 'keys',
    ru: 'р',
  },

  {
    name: 'j',
    which: 74,
    key: 'j',
    code: 'KeyJ',
    Class: 'keys',
    ru: 'о',
  },
  {
    name: 'k',
    which: 75,
    key: 'k',
    code: 'KeyK',
    Class: 'keys',
    ru: 'л',
  },
  {
    name: 'l',
    which: 76,
    key: 'l',
    code: 'KeyL',
    Class: 'keys',
    ru: 'д',
  },
  {
    name: ';',
    which: 186,
    key: ';',
    code: 'Semicolon',
    Class: 'keys',
    ru: 'ж',
    alt: ':',
    altRu: 'Ж',
  },
  {
    name: "'",
    which: 222,
    key: "'",
    code: 'Quote',
    Class: 'keys',
    ru: 'э',
    alt: '"',
    altRu: 'Э',
  },
  {
    name: 'enter',
    which: 13,
    key: 'Enter',
    code: 'Enter',
    Class: 'keys  enter_key',
  },
  {
    name: 'shift',
    which: 16,
    key: 'Shift',
    code: 'ShiftLeft',
    Class: 'keys shift_key shift_left',
  },
  {
    name: 'z',
    which: 90,
    key: 'z',
    code: 'KeyZ',
    Class: 'keys',
    ru: 'я',
  },
  {
    name: 'x',
    which: 88,
    key: 'x',
    code: 'KeyX',
    Class: 'keys',
    ru: 'ч',
  },
  {
    name: 'c',
    which: 67,
    key: 'c',
    code: 'KeyC',
    Class: 'keys',
    ru: 'с',
  },
  {
    name: 'v',
    which: 86,
    key: 'v',
    code: 'KeyV',
    Class: 'keys',
    ru: 'м',
  },
  {
    name: 'b',
    which: 66,
    key: 'b',
    code: 'KeyB',
    Class: 'keys',
    ru: 'и',
  },
  {
    name: 'n',
    which: 78,
    key: 'n',
    code: 'KeyN',
    Class: 'keys',
    ru: 'т',
  },
  {
    name: 'm',
    which: 77,
    key: 'm',
    code: 'KeyM',
    Class: 'keys',
    ru: 'ь',
  },
  {
    name: ',',
    which: 188,
    key: ',',
    code: 'Comma',
    Class: 'keys',
    ru: 'б',
    alt: '<',
    altRu: 'Б',
  },
  {
    name: '.',
    which: 190,
    key: '.',
    code: 'Period',
    Class: 'keys',
    ru: 'ю',
    alt: '>',
    altRu: 'Ю',
  },
  {
    name: '/',
    which: 191,
    key: '/',
    code: 'Slash',
    Class: 'keys',
    alt: '?',
    ru: '.',
    altRu: ',',
  },
  {
    name: '↑',
    which: 38,
    key: 'ArrowUp',
    code: 'ArrowUp',
    Class: 'keys',
  },
  {
    name: 'shift',
    which: 16,
    key: 'Shift',
    code: 'ShiftRight',
    Class: 'keys shift_key shift_right',
  },
  {
    name: 'ctrl',
    which: 17,
    key: 'Control',
    code: 'ControlLeft',
    Class: 'keys ctrl_key ctrl_left',
  },
  {
    name: 'win',
    which: 91,
    key: 'Meta',
    code: 'MetaLeft',
    Class: 'keys meta',
  },
  {
    name: 'alt',
    which: 18,
    key: 'Alt',
    code: 'AltLeft',
    Class: 'keys alt_key alt_left',
  },
  {
    name: 'space',
    which: 32,
    key: '',
    code: 'Space',
    Class: 'keys space_key',
  },
  {
    name: 'alt',
    which: 18,
    key: 'Alt',
    code: 'AltRight',
    Class: 'keys alt_key alt_right',
  },
  {
    name: '←',
    which: 37,
    key: 'ArrowLeft',
    code: 'ArrowLeft',
    Class: 'keys',
  },
  {
    name: '↓',
    which: 40,
    key: 'ArrowDown',
    code: 'ArrowDown',
    Class: 'keys',
  },
  {
    name: '→',
    which: 39,
    key: 'ArrowRight',
    code: 'ArrowRight',
    Class: 'keys',
  },
  {
    name: 'ctrl',
    which: 17,
    key: 'Control',
    code: 'ControlRight',
    Class: 'keys ctrl_key ctrl_right',
  },
];
export default codes;
