let dataLS = JSON.parse(localStorage.getItem("wishlist"));
// let dataLS = [
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

const display = (dataLS) => {
  if (dataLS === null) {
    let container = document.getElementById("conatiner-product");
    container.innerHTML = null;
    // let p = document.createElement("p");
    // p.innerText = "Save your favorite items to start building your wishlist";
    // let btn = document.createElement("button");
    // btn.innerText = "Get Inspired";

    // container.append(p, btn);
  } else {
    let container_count = document.getElementById("count-data");
    let container_empty = document.getElementById("conatiner_wishlist_none");
    container_empty.innerHTML = null;
    let count = document.createElement("p");
    // count.setAttribute()
    count.innerText = dataLS.length + "PIECES";
    container_count.append(count);
    let container = document.getElementById("conatiner-product");
    container.innerHTML = null;
    dataLS.forEach(function (ele) {
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src = ele.image;
      let type = document.createElement("h3");
      type.innerText = ele.type;
      let name = document.createElement("p");
      name.innerText = ele.name;
      let price = document.createElement("p");
      price.innerText = ele.price;
      let btn1 = document.createElement("button");
      btn1.innerText = "Add to bag";
      btn1.addEventListener("click", () => {
        addToCart(ele);
      });
      div.append(img, type, name, price, btn1);
      container.append(div);
    });
  }
};

display(dataLS);
const addToCart = (ele) => {
  localStorage.setItem("Add_to_cart", JSON.stringify(ele));
};