function debounce(func, delay) {
  let debounceTimer;
  return (...args) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function handleInput(e) {
  console.log("Input detected from element with id " + e.target.id);
}

document
  .getElementById("name-input")
  .addEventListener("input", debounce(handleInput, 500));
