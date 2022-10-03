import {navbar} from "./components/navbar.js";
let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML=navbar();



window.Women=()=> {
  document.location.href = "womens2.html";
}
window.Men=()=> {
  document.location.href = "mens2.html";
}
window.Kid=()=>{
  document.location.href="kids2.html"
}
window.newin=()=>{
  document.location.href="newin.html"
}

window.women=()=>{
  document.location.href="womens2.html"
}

window.men=()=>{
    document.location.href="mens2.html"
}
window.heart=()=>{
  document.location.href="wishlist.html"
}

window.kids=()=>{
    document.location.href="kids2.html"
}

window.newin=()=>{
  document.location.href="newin.html"
}
window.onscroll=function (){
  myfunction();
}

function myfunction(){
  if(document.body.scrollTop > 2390 || document.documentElement.scrollTop > 2390){
          document.getElementById("NIT_left").style.position="absolute"
  }else{
    document.getElementById("NIT_left").style.position="fixed"
  }
}



let wishlistArr=JSON.parse(localStorage.getItem("wishlist"))||[];

let newintodayArr=[

   
   {image_url:"https://cdn-images.farfetch-contents.com/18/30/66/44/18306644_41723075_480.jpg",
    season:"New Season",
    name:"Versace",
    des:"patterned intarsia-Knit Cardigan",
    price:"$1,481",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/18/65/88/09/18658809_41201361_480.jpg",
    season:"New Season",
    name:"Balmain",
    des:"Blage colour-blog tote bag",
    price:"$2,003",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/18/30/66/38/18306638_41723854_480.jpg",
    season:"New Season",
    name:"Versace",
    des:"High-waisted wide-leg trouser",
    price:"$1,980",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/19/04/71/24/19047124_41674487_480.jpg",
    season:"New Season",
    name:"Valentino Garavani",
    des:"One Stud 40mm leather pumps",
    price:"$2,113",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/18/37/87/38/18378738_40613827_480.jpg",
    season:"New Season",
    name:"Balenciaga",
    des:"Logo-print midi dress",
    price:"$2,750",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/18/72/39/32/18723932_40580515_480.jpg",
    season:"New Season",
    name:"Acne Studios",
    des:"Musubi Knotted tote bag",
    price:"$1,001",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/18/91/79/51/18917951_41153566_480.jpg",
    season:"New Season",
    name:"Prada",
    des:"Down-town high heals leather sneaker",
    price:"$1,400",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/18/25/14/96/18251496_39046827_480.jpg",
    season:"New Season",
    name:"Stella Mccartney",
    des:"Trimmed fox leather jacket",
    price:"$2,422",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/19/04/31/88/19043188_41660896_480.jpg",
    season:"New Season",
    name:"Alessendra Rich",
    des:"embroideret knit Skirt",
    price:"$1,301",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/18/92/93/11/18929311_41547680_480.jpg",
    season:"New Season",
    name:"Victor Glemaud",
    des:"tortoiseshell-effect cat-eye sunglasses",
    price:"$433",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/18/32/35/34/18323534_41722457_480.jpg",
    season:"New Season",
    name:"Alexandre Vauthier",
    des:"high-waist fitted skirt",
    price:"$1,063",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/18/68/65/48/18686548_40888657_480.jpg",
    season:"New Season",
    name:"Alexander Wang",
    des:"crystall embellished Marquess mini bag",
    price:"$950",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/18/96/59/58/18965958_41694858_480.jpg",
    season:"New Season",
    name:"Alexandre Vauthier",
    des:"feather-print ribbed-knit dress",
    price:"$4,025",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/19/09/08/79/19090879_41719960_480.jpg",
    season:"New Season",
    name:"Versace",
    des:"Medusa Chain leather Sandalls",
    price:"$2,117",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/19/01/91/13/19019113_41631387_480.jpg",
    season:"New Season",
    name:"Alessandra Rich",
    des:"animal-pattern knit cardigan ",
    price:"$1,481",
    },
    

   
    






]



// display(newintodayArr)


 window.display=(newintodayArr)=>{
    
    newintodayArr.forEach( function (ele){

   let data_divs=document.createElement("div")
  
   let nit_img=document.createElement("img")
   nit_img.setAttribute("src",ele.image_url)

  let season=document.createElement("h5")
  season.innerText=ele.season;

  let nit_name=document.createElement("h2")
  nit_name.innerText=ele.name;

  let nit_des=document.createElement("p")
  nit_des.innerText=ele.des;

  let nit_price=document.createElement("p")
  nit_price.innerText=ele.price;
  nit_price.setAttribute("id","nit_price")

  let wishlist_logo=document.createElement("img")
  wishlist_logo.src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png";
  wishlist_logo.setAttribute("id","wishlist_logo")
  wishlist_logo.addEventListener("click",function (){


    wishlistArr.push(ele)

    localStorage.setItem("wishlist",JSON.stringify(wishlistArr))


  }
  )
    



  data_divs.append(wishlist_logo,nit_img,season,nit_name,nit_des,nit_price)
  document.getElementById("NIT_right").append(data_divs)

})

}

display(newintodayArr);






