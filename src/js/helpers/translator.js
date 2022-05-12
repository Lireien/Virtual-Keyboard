export default function changeLanguageHandler(layout, en = true) {
  let ruKey;
  const keys = document.querySelectorAll('.key');
  keys.forEach((elem) => {
    ruKey = layout.find((item) => item.code === elem.id);
    if (ruKey.ru) {
      /* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
      // eslint-disable-next-line no-param-reassign
      en ? (elem.innerHTML = ruKey.eng) : (elem.innerHTML = ruKey.ru);
    }
  });
}
