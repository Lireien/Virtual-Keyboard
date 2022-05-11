import capitalizeHandler from "./capitalizer";

const addActiveClassHandler = (key) => {
  if (key.id === 'CapsLock') {
    key.classList.toggle('active');
    capitalizeHandler(key.classList.contains('active'));
  } else key.classList.add('active');
};

const removeActiveClassHandler = (key) => {
  if (key && key.id !== 'CapsLock') key.classList.remove('active');
};
export { addActiveClassHandler, removeActiveClassHandler };
