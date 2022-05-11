export default function capitalizeHandler(capsLock = false) {
  const letterKeys = document.querySelectorAll('.key__letter');
  letterKeys.forEach((elem) => {
    capsLock
      ? (elem.innerHTML = elem.innerHTML.toUpperCase())
      : (elem.innerHTML = elem.innerHTML.toLowerCase());
  });
}
