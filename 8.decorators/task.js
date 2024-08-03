"use strick";

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;

  const wrapper = (...args) => {
    wrapper.allCount++;
    if (timeoutId === null) {
      wrapper.count++;
      func(...args);
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, delay);
  };
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
