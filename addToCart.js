let cartdataLS = JSON.parse(localStorage.getItem("Add_to_cart"));
// console.log(cartdataLS);
// let cartdataLS = [
//   {
//     image:
//       "https://cdn-images.farfetch-contents.com/18/65/82/33/18658233_41822991_170.jpg",
//     type: "Valentino",
//     name: "One Stud-embellished short-sleeve T-shirt",
//     price: 1032,
//     size: "S",
//     quantity: 2,
//   },
//   {
//     image:
//       "https://cdn-images.farfetch-contents.com/18/65/82/33/18658233_41822991_170.jpg",
//     type: "Valentino",
//     name: "One Stud-embellished short-sleeve T-shirt",
//     price: 1032,
//     size: "S",
//     quantity: 2,
//   },
//   {
//     image:
//       "https://cdn-images.farfetch-contents.com/18/65/82/33/18658233_41822991_170.jpg",
//     type: "Valentino",
//     name: "One Stud-embellished short-sleeve T-shirt",
//     price: 1032,
//     size: "S",
//     quantity: 2,
//   },
// ];
let totalPriceProduct;

const display = (cartdataLS) => {
  if (cartdataLS === null) {
    let container_total = document.getElementById("cart-page-box");
    container_total.innerHTML = null;
    let line_hr = document.getElementById("line-cart");
    line_hr.style.display = "none";
  } else {
    let container = document.getElementById("nothind-pp");
    container.innerHTML = null;
    cartdataLS.forEach(function (ele, index) {
      let cartProductContainer = document.getElementById("container-cart");
      let main_container = document.createElement("div");
      let container_image = document.createElement("div");
      container_image.setAttribute("id", "conatiner-cart-img");
      let container_price = document.createElement("div");
      container_price.setAttribute("id", "conatiner-cart-price");
      let container_name = document.createElement("div");
      container_name.setAttribute("id", "conatiner-cart-name");
      let container_size = document.createElement("div");
      container_size.setAttribute("id", "conatiner-cart-size");
      let container_btn = document.createElement("div");
      container_btn.setAttribute("id", "conatiner-cart-btn");

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
      main_container.append(
        container_image,
        container_name,
        container_price,
        container_size,
        container_btn
      );
      cartProductContainer.append(main_container);
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

const finalCheckout = (totalPriceProduct) => {
  let subtotal = document.getElementById("TotalAmount-cart");
  subtotal.innerText = totalPriceProduct;
  let deliveryRate = document.getElementById("TotalAmount-cart");
  deliveryRate.innerText = "$" + 25;
  let finalamount = document.getElementById("final-amount");
  finalamount.innerText = +totalPriceProduct + +deliveryRate;
};
finalCheckout(totalPriceProduct);
