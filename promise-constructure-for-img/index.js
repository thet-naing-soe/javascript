const preLoadImg = (url) => {
  const img = new Image();
  return new Promise((resolve, reject) => {
    img.src = url;
    img.alt = "picture";
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", () => reject("img has NOT loaded"));
  });
};

(async () => {
  try {
    const result = await preLoadImg(
      "https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg"
    );
    console.log(result);
    document.getElementById("img-container").appendChild(result);
  } catch (err) {
    console.log(err);
  }
})();
