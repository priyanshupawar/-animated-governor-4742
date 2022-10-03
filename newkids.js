var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("arrivals").style.top = "0";
    } else {
      document.getElementById("arrivals").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  };



  window.onscroll = function () {
    myFunction();
  };

  var navbar = document.getElementById("navbar_RJ1");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }



  window.onscroll = function () {
    myFunction();
  };

  var navbar = document.getElementById("navbar_RJ2");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }



  // Get the modal
  var modal = document.getElementById("id02");

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "block";
    }
  };




  // Get the modal
  var modal = document.getElementById('container_sm');
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }








function search() {
    let x = document.getElementById("search").value;
    document.location.href = `https://www.flipkart.com/search?q=${x}`;
  }
  document
  .getElementById("search")
  .addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      event.preventDefault();
      let x = document.getElementById("search").value;
      document.location.href = `https://www.farfetch.com/in/shopping/kids/chloe-kids/items.aspx?msc=chloekids_k_sep22&mktref=display_k&q=${x}`;
    }
  });


let wishlist_data=[
    {
        image:"https://cdn-images.farfetch-contents.com/18/72/86/47/18728647_41547004_600.jpg",
        type:"Moncler Enfant",
        name:"Careil belted puffer jacket",
        price:"$980 "
    },
    {
        image:"https://cdn-images.farfetch-contents.com/17/91/15/33/17911533_41672630_600.jpg",
        type:"Chloe Kids",
        name:"faux-fur trimmed waistcoat",
        price:"$337  "
    },
    {
        image:"https://cdn-images.farfetch-contents.com/18/78/27/73/18782773_40826178_600.jpg",
        type:"Gucci Kids",
        name:"emboridered-logo polo dress",
        price:"$693"
    },
    {
        image:"https://cdn-images.farfetch-contents.com/18/87/25/33/18872533_40924217_600.jpg",
        type:"Jordan Kids",
        name:"x Travis Scott Jordan 1 Low Sneakers",
        price:"$596 "
    },
]
let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];

const appendData =(wishlist_data)=>{
  wishlist_data.forEach(function (ele){
    let container = document.getElementById("body6");
    // container.innerHTML=null;
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = ele.image;
    let name = document.createElement("p");
    name.innerText = ele.name;
    let type = document.createElement("p");
    type.innerText = ele.type;
    let price = document.createElement("h3");
    price.innerText = ele.price;
    div.append(img,type,name,price);
    container.append(div);
   
    div.addEventListener("click",function (){
      wishlist.push(ele)
      localStorage.setItem("wishlist",JSON.stringify(wishlist))
    })
    
  })

}
appendData(wishlist_data)


let nextpage=(ele)=>{
    wishlist.push(ele)
    localStorage.setItem("wishlist",JSON.stringify(wishlist))
}






























let SHOP_RJ_btn=document.querySelector("#SHOP_RJ")
SHOP_RJ_btn.addEventListener("click",function(){
  window.location.href="how_to_shop.html"
})

let SHOP_RJ_btn1=document.querySelector("#SHOP_RJ1")
SHOP_RJ_btn1.addEventListener("click",function(){
  window.location.href="how_to_shop.html"
})

let SHOP_RJ_btn2=document.querySelector("#SHOP_RJ2")
SHOP_RJ_btn2.addEventListener("click",function(){
  window.location.href="how_to_shop.html"
})





// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let heartdiv=document.querySelector("#heart_count")
function heart(){
   let i=0;
   while(i<10){
    console.log(i)
    i++
   }
   
}


window.women=()=>{
    document.location.href="womens2.html"
  }
  
  window.men=()=>{
      document.location.href="mens2.html"
  }
  
  window.kids=()=>{
      document.location.href="kids2.html"
  }
  window.tosignup=()=>{
    document.location.href="signup.html"
  }
  function wishlist(){
    document.location.href="wishlist.html"
  }





  
