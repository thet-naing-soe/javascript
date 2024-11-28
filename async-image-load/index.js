const getImagePromise = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const img = new Image();
      img.src = url;
      img.alt = "scenic image";
      img.addEventListener("load", () => resolve(img));
      img.addEventListener("error", () =>
        reject(new Error(`Failed to load image: ${url}`))
      );
    }, 500);
  });
};

const images = [
  "https://scrimba.com/links/advancedjs-resources-images-scenic1",
  "https://scrimba.com/links/advancedjs-resources-images-scenic2",
  "https://scrimba.com/links/advancedjs-resources-images-scenic3",
];

const preloadImages = async (imageUrlsArr) => {
  const imgContainer = document.getElementById("img-container");
  const uploadContainer = document.getElementById("upload-container");
  const promises = imageUrlsArr.map((url) => getImagePromise(url));
  try {
    const result = await Promise.all(promises);
    console.log("All images loaded successfully!");
    uploadContainer.style.display = "none";
    result.forEach((img) => imgContainer.appendChild(img));
  } catch (err) {
    console.log(err);
  }
};

document
  .getElementById("submit-imgs")
  .addEventListener("click", () => preloadImages(images));
