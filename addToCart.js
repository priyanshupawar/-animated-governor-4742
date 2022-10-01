// let cartdataLS = JSON.parse(localStorage.getItem("Add_to_cart"));
// console.log(cartdataLS);
let cartdataLS = [
  {
    image:
      "https://cdn-images.farfetch-contents.com/18/65/82/33/18658233_41822991_170.jpg",
    type: "Valentino",
    name: "One Stud-embellished short-sleeve T-shirt",
    price: 1032,
    size: "S",
    quantity: 2,
  },
];
let totalPriceProduct;

const display = (cartdataLS) => {
  if (cartdataLS === null) {
    let container = document.getElementById("nothind-pp");
    container.innerHTML = null;
    let new_container = document.getElementById("main-container-pp");
    new_container.innerHTML = null;
    let p = document.createElement("p");
    p.innerText = "There's nothing in your bag, yet...";
    let btn = document.createElement("button");
    btn.innerText = "Shop Women";

    container.append(p, btn);
  } else {
    let container1 = document.getElementById("container-car-1");

    cartdataLS.forEach(function (ele, index) {
      let container_image = document.getElementById("conatiner-cart-img");
      let container_price = document.getElementById("conatiner-cart-price");
      let container_name = document.getElementById("conatiner-cart-name");
      let container_size = document.getElementById("conatiner-cart-size");
      let container_btn = document.getElementById("conatiner-cart-btn");

      let img = document.createElement("img");
      img.src = ele.image;
      let type = document.createElement("h3");
      type.innerText = ele.type;
      let name = document.createElement("p");
      name.innerText = ele.name;
      let price = document.createElement("p");
      price.innerText = "$" + ele.price;
      let price_syntax = document.createElement("p");
      price_syntax.innerText = "(Import duties included)";
      let size = document.createElement("p");
      size.innerText = "Size      :    " + ele.size;
      let quantity = document.createElement("p");
      quantity.innerText = "Quantity     :  " + ele.quantity;
      let btn1 = document.createElement("button");
      btn1.innerText = "Remove product";
      totalPriceProduct = +ele.price;
      btn1.addEventListener("click", () => {
        removeProduct(index);
      });
      container_image.append(img);
      container_name.append(type, name);
      container_price.append(price, price_syntax);
      container_size.append(size, quantity);
      container_btn.append(btn1);
    });
  }
};

display(cartdataLS);
const removeProduct = (index) => {
  cartdataLS.slice(index, 1);
};

const TotalPriceCheckout = (index) => {
  cartdataLS.slice(index, 1);
};

const finalCheckout = (totalPriceProduct) => {};
