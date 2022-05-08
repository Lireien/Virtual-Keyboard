import '../styles/style.css';

// window.addEventListener('DOMContentLoaded', alert('Здравствуйте!\nПрошу, уделите минуту внимания этому сообщению. Уважаемый проверяющий, если Вас не затруднит, пожалуйста, вернитесь к проверке моей работы в среду. Так сложилось, что в пятницу ушёл навсегда член моей семьи и я была несколько дезориентирована для того, чтобы заниматься заданием. Я не могу обещать, что смогу довести работу до конца, но всё же прошу о такой отсрочке. Если же такой возможности у Вас нет, я всё понимаю. Заранее благодарна и успехов Вам в собственной учёбе!')
//   );

const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
  },

  eventsHandlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: '',
    capsLock: false,
  },

  init() {
    const container = document.querySelector('.container');
    console.log(container);
    //Создаём контейнеры для клавиатуры
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    //Задаём им классы
    this.elements.main.classList.add('keyboard');
    this.elements.keysContainer.classList.add('keyboard__keys');

    //Добавляем созданные элементы в DOM
    this.elements.main.append(this.elements.keysContainer);
    container.append(this.elements.main);
    this.elements.keysContainer.append(this._createKeys());
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      '`',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '-',
      '=',
      'Backspace',
      'Tab',
      'q',
      'w',
      'e',
      'r',
      't',
      'y',
      'u',
      'i',
      'o',
      'p',
      '[',
      ']',
      '\\',
      'Del',
      'CapsLk ⥮',
      'a',
      's',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      ';',
      "'",
      'Enter',
      'L-Shift',
      'z',
      'x',
      'c',
      'v',
      'b',
      'n',
      'm',
      ',',
      '.',
      '/',
      '?',
      'ᐃ',
      'R-Shift',
      'Ctrl',
      'Win',
      'Alt',
      'Space',
      'Alt',
      'ᐊ',
      'ᐃ',
      'ᐅ',
      'Ctrl',
    ];

    //
    keyLayout.forEach((key) => {
      const keyElement = document.createElement('button');
      const insertLineBreak =
        ['Backspace', 'Del', 'Enter', 'R-Shift'].indexOf(key) !== -1;

      // Добавляем аттрибуты/классы кнопкам
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__key');

      switch (key) {
        case 'Backspace':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1
            );
            this._triggerEvent('oninput');
          });

          break;

        case 'Tab':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.addEventListener('click', () => {
            this.properties.value += '  ';
            this._triggerEvent('oninput');
          });

          break;

        case 'CapsLk':
          keyElement.classList.add('keyboard__key--widely');
          keyElement.addEventListener('click', () => {
            this._toggleCapsLock();
            keyElement.classList.toggle(
              'keyboard__key--active',
              this.properties.capsLock
            );
          });

          break;

        case 'Enter':
          keyElement.classList.add('keyboard__key--widely');
          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this._triggerEvent('oninput');
          });

          break;

        case 'Space':
          keyElement.classList.add('keyboard__key--extra-wide');
          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this._triggerEvent('oninput');
          });

          break;

        default:
          keyElement.textContent = key.toLowerCase();

          keyElement.addEventListener('click', () => {
            this.properties.value += this.properties.capsLock
              ? key.toUpperCase()
              : key.toLowerCase();
            this._triggerEvent('oninput');
          });
          break;
      }
      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.append(document.createElement('br'));
      }
    });
    return fragment;
  },

  _triggerEvent(handlerName) {
    console.log('Event Triggered!Event Name:' + handlerName);
  },
  _toggleCapsLock() {
    console.log('Caps Lock Toggled!');
  },
  open(initialValue, oninput, onclose) {},

  close() {},
};

window.addEventListener('DOMContentLoaded', function () {
  Keyboard.init();
});
