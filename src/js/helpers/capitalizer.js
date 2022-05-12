export default function capitalizeHandler(capsLock = false) {
  const letterKeys = document.querySelectorAll('.key__letter');
  letterKeys.forEach((elem) => {
    /* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
    capsLock
      // eslint-disable-next-line operator-linebreak
      ? // eslint-disable-next-line no-param-reassign
      (elem.innerHTML = elem.innerHTML.toUpperCase())
      // eslint-disable-next-line no-param-reassign
      : (elem.innerHTML = elem.innerHTML.toLowerCase());
  });
}
