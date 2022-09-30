const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
  
  function Women() {
    document.location.href = "womens2.html";
  }
  function Men() {
    document.location.href = "mens2.html";
  }
  function Kid(){
    document.location.href="kids2.html"
  }

  function newin(){
    document.location.href="newin.html"
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
        document.location.href = `https://www.farfetch.com/in/shopping/men/search/items.aspx?q=${x}`;
      }
    });



    

let mensArr=JSON.parse(localStorage.getItem("mens_items"))||[];
let mensArr2=JSON.parse(localStorage.getItem("mens_items2"))||[];

let mens_data=[

    {image_url:"https://cdn-images.farfetch-contents.com/18/65/82/32/18658232_41515620_1000.jpg",
    season:"New Season",
    name:"Prada",
    des:"gingham check cotton shirt",
    price:"$2,210",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/19/06/42/13/19064213_41635017_1000.jpg",
    season:"New Season",
    name:"Balenciaga",
    des:"Triple S sneakers ",
    price:"$1,290",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/18/65/95/82/18659582_40730782_600.jpg",
    season:"New Season",
    name:"Balmain",
    des:"colour black rollneck jumper ",
    price:"$1,298",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/19/05/40/45/19054045_41684572_600.jpg",
    season:"New Season",
    name:"Stone island",
    des:"campus patch crew-neck jumper ",
    price:"$489",
    },



]

let mens_data2=[

   {image_url:"https://cdn-images.farfetch-contents.com/19/05/33/77/19053377_41670187_600.jpg",
    season:"New Season",
    name:"Stone island",
    des:"Compass hooded padded jacket",
    price:"$1,649",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/18/53/61/99/18536199_41050535_600.jpg",
    season:"New Season",
    name:"Off-white",
    des:"Arrow ribbed beanie",
    price:"$329",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/18/02/57/49/18025749_39820818_600.jpg",
    season:"New Season",
    name:"YEZZY GAP ENGINEERED",
    des:"Dove Shrunkun hoodie ",
    price:"$350",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/18/37/32/21/18373221_40975813_600.jpg",
    season:"Pre-Order",
    name:"Balenciaga",
    des:"HD cutout sneakers ",
    price:"$805",
    },

]


const display=(mens_data)=>{
    
    mens_data.forEach( function (ele){

   let data_divs=document.createElement("div")
  
   let mens_img=document.createElement("img")
   mens_img.setAttribute("src",ele.image_url)

  let season=document.createElement("h5")
  season.innerText=ele.season;

  let mens_name=document.createElement("h2")
  mens_name.innerText=ele.name;

  let mens_des=document.createElement("p")
  mens_des.innerText=ele.des;

  let mens_price=document.createElement("p")
  mens_price.innerText=ele.price;
  mens_price.setAttribute("id","mens_price")

  let wishlist_logo=document.createElement("img")
  wishlist_logo.src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png";
  wishlist_logo.setAttribute("id","wishlist_logo")
  wishlist_logo.addEventListener("click",function (){


    mensArr.push(ele)

    localStorage.setItem("mens_items",JSON.stringify(mensArr))


  }
  )
    



  data_divs.append(wishlist_logo,mens_img,season,mens_name,mens_des,mens_price)
  document.getElementById("mens_data").append(data_divs)

})

}

display(mens_data);


const display2=(mens_data2)=>{

  mens_data2.forEach( function (ele){

    let data_divs=document.createElement("div")
   
    let mens_img=document.createElement("img")
    mens_img.setAttribute("src",ele.image_url)
 
   let season=document.createElement("h5")
   season.innerText=ele.season;
 
   let mens_name=document.createElement("h2")
   mens_name.innerText=ele.name;
 
   let mens_des=document.createElement("p")
   mens_des.innerText=ele.des;
 
   let mens_price=document.createElement("p")
   mens_price.innerText=ele.price;
   mens_price.setAttribute("id","mens_price")
 
   let wishlist_logo=document.createElement("img")
   wishlist_logo.src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png";
   wishlist_logo.setAttribute("id","wishlist_logo")
   wishlist_logo.addEventListener("click",function (){
 
 
     mensArr2.push(ele)
 
     localStorage.setItem("mens_items2",JSON.stringify(mensArr2))
 
 
   }
   )
     
 
 
 
   data_divs.append(wishlist_logo,mens_img,season,mens_name,mens_des,mens_price)
   document.getElementById("mens_data2").append(data_divs)
 
 })
}

display2(mens_data2)