import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js";
import { propertyForSaleArr } from "./properties/propertyForSaleArr.js";

function getPropertyHtml(propertyArr = [placeholderPropertyObj]) {
  return propertyArr
    .map((property) => {
      const { propertyLocation, priceGBP, roomsM2, comment, image } = property;
      const totalRoomM2 = roomsM2.reduce((accu, curr) => accu + curr);
      // console.log(totalRoomM2)
      return `
    <section class="card">
      <img src="/images/${image}">
      <div class="card-right">
        <h2>${propertyLocation}</h2>
        <h3>£${priceGBP}</h3>
        <p>${comment}</p>
        <h3>${totalRoomM2} m&sup2;</h3>
      </div>
    </section> 
    `;
    })
    .join("");
}

document.getElementById("container").innerHTML =
  getPropertyHtml(propertyForSaleArr);
