const getDogRamdomPicture = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  const imageElement = document.createElement("img");
  imageElement.src = data.message;
  imageElement.alt = "ramdom dog picture";
  document.getElementById("img-container").appendChild(imageElement);
};
getDogRamdomPicture();
