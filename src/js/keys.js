import keysLayout from "../assets/utils/keysLayout";

export default function keyboardRender() {
  const keyboardKeys = document.querySelector('.keyboard__keys');

  let keyboardRow = document.createElement('div');
  keysLayout.forEach((key) => {
    if (key.newRow) {
      keyboardRow = document.createElement('div');
      keyboardRow.classList.add('keyboard__row');
      keyboardKeys.append(keyboardRow);
    }

    const keyElement = document.createElement('div');

    keyElement.className = 'keyboard__keys_key key';
    if (key.wide) keyElement.classList.add('key__wide');
    if (key.extra__wide) keyElement.classList.add('key__extra-wide');
    if (key.code.indexOf('Key') !== -1) keyElement.classList.add('key__letter');
    //
    if (key.service) keyElement.classList.add('key__service');
    keyElement.setAttribute('id', key.code);
    keyElement.innerHTML = key.eng;
    keyboardRow.append(keyElement);
  });
}