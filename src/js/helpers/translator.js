export default function changeLanguageHandler(layout, en = true) {
  let ruKey;
  const keys = document.querySelectorAll('.key');
  keys.forEach((elem) => {
    ruKey = layout.find((item) => item.code === elem.id);
    if (ruKey.ru) {
      en ? (elem.innerHTML = ruKey.eng) : (elem.innerHTML = ruKey.ru);
    }
  });
}