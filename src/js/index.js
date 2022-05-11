import '../styles/style.css';
import keyboardLayoutRender from './keyboard';
import keysLayout from '../assets/utils/keysLayout';
import changeLanguageHandler from './helpers/translator';
import {
  addActiveClassHandler,
  removeActiveClassHandler,
} from './helpers/activeClasses';

let langEn = true;

keyboardLayoutRender();

if (localStorage.getItem('lang') === 'ru') {
  langEn = false;
  changeLanguageHandler(keysLayout, langEn);
}

const textareaElement = document.querySelector('.keyboard__output');

document.addEventListener('keydown', (e) => {
  const key = document.querySelector(`#${e.code}`);
  if (!key) return;

  textareaElement.focus();
  addActiveClassHandler(key);

  if (key.id === 'Tab') e.preventDefault();
  if (
    ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') &&
      e.altKey) ||
    ((e.code === 'AltLeft' || e.code === 'AltRight') && e.shiftKey)
  ) {
    langEn = !langEn;
    langEn
      ? localStorage.setItem('lang', 'en')
      : localStorage.setItem('lang', 'ru');
    changeLanguageHandler(keysLayout, langEn);
  }
});

document.addEventListener('keyup', (e) => {
  const key = document.querySelector(`#${e.code}`);
  removeActiveClassHandler(key);
});

document
  .querySelector('.keyboard__keys')
  .addEventListener('mousedown', (e) => {
    const key = e.target;
    if (key.closest('.key')) {
      addActiveClassHandler(key);
      if (!key.classList.contains('key__service'))
        textareaElement.value += key.innerHTML;
      else {
        switch (key.id) {
          case 'Enter':
            textareaElement.value += `\n`;
            break;
          case 'Backspace':
            textareaElement.value = textareaElement.value.slice(
              0,
              textareaElement.value.length - 1
            );
            break;
          case 'Delete':
            if (textareaElement.value.length > textareaElement.selectionStart) {
              textareaElement.value =
                textareaElement.value.slice(
                  0,
                  textareaElement.selectionStart - 1
                ) +
                textareaElement.value.slice(
                  textareaElement.selectionStart,
                  textareaElement.length
                );
            }
            textareaElement.focus();
            break;
        }
      }
    }
  });

document
  .querySelector('.keyboard__keys')
  .addEventListener('mouseup', (e) => {
    document.querySelectorAll('.key').forEach((key) => {
      removeActiveClassHandler(key);
    });
  });
