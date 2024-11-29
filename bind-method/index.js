const button = document.getElementById("btn");

const product = {
  name: "Vanilla Lip Gloss",
  sku: "w234fg",
  stock: 276,
  getProductInfo() {
    console.log(this);
    console.log(
      `Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`
    );
  },
};

button.addEventListener("click", product.getProductInfo.bind(product));
