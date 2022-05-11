import keyboardRender from "./keys";


export default function keyboardLayoutRender() {
  document.body.innerHTML = `
  <div class="wrapper">
      <div class="keyboard keyboard__container">
          <h1 class="title">Virtual Keyboard</h1>
          <textarea name="textarea" id="textarea" class="keyboard__output" autofocus cols="30" rows="10"></textarea>
          <div class="keyboard__keys">
          </div>
          <div class="keyboard__description">
            <p>Press *Alt+Shift* for change language</p>
            <p>Keyboard is created in Windows OS</p>              
          </div>
      </div>
  </div>`;
  keyboardRender();
}