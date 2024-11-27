fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => {
    const imageElement = document.createElement("img");
    imageElement.src = data.message;
    imageElement.alt = "ramdom dog picture";
    document.getElementById("img-container").appendChild(imageElement);
  });
