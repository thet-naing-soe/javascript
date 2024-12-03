function* colorGenerator() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const ranNum = Math.floor(Math.random() * 16);
    color += "0123456789ABCDEF"[ranNum];
  }
  yield color;
}
document.getElementById("nextColorButton").addEventListener("click", () => {
  const generatedColor = colorGenerator();
  const result = generatedColor.next();
  const color = result.value;

  document.getElementById("colorText").textContent = color;
  document.getElementById("colorDisplay").style.backgroundColor = color;
});
