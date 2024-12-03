function handleResize(e) {
  console.log("resize happened on event: " + e);
}

function throttle(func, delay) {
  let throttleTimeout = null;
  return (...args) => {
    func(...args);
    if (!throttleTimeout) {
      throttleTimeout = setTimeout(() => {
        throttleTimeout = null;
      }, delay);
    }
  };
}
const throttledHandleResize = throttle(handleResize, 1000);
window.addEventListener("resize", throttledHandleResize);
