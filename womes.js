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
        document.location.href = `https://www.farfetch.com/in/shopping/women/search/items.aspx?q=${x}`;
      }
    });





    let womensArr=JSON.parse(localStorage.getItem("womens_items"))||[];
    let womensArr2=JSON.parse(localStorage.getItem("womens_items2"))||[];



    let womens_data=[

      {image_url:"https://cdn-images.farfetch-contents.com/18/65/88/09/18658809_41201361_600.jpg",
      season:"New Season",
      name:"Balmain",
      des:"blage colour blag tote bag",
      price:"$2,003",
      },
      {image_url:"https://cdn-images.farfetch-contents.com/18/30/66/38/18306638_41723854_600.jpg",
      season:"New Season",
      name:"Versace",
      des:"Triple S sneakers ",
      price:"$1,290",
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
      }
  
  
  
  ]

  let womens_data2=[

    {image_url:"https://cdn-images.farfetch-contents.com/17/92/07/35/17920735_41351763_600.jpg",
    season:"New Season",
    name:"Paris Georgia",
    des:"off shoulder courset top",
    price:"$573",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/18/61/16/61/18611661_41137933_600.jpg",
    season:"New Season",
    name:"Larroude",
    des:"Douly platform high heels mules ",
    price:"$558",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/18/59/84/85/18598485_40743820_600.jpg",
    season:"Exclusive",
    name:"There was one",
    des:"bias cut midi skirt",
    price:"$430",
    },
    {image_url:"https://cdn-images.farfetch-contents.com/18/03/09/12/18030912_41670240_600.jpg",
    season:"New Season",
    name:"16Arilington",
    des:"Adara stud-embellished mini dress",
    price:"$3,131",
    }


  ]


  const display=(womens_data)=>{
    
   womens_data.forEach( function (ele){

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


    womensArr.push(ele)

    localStorage.setItem("womens_items",JSON.stringify(womensArr))


  }
  )
    



  data_divs.append(wishlist_logo,mens_img,season,mens_name,mens_des,mens_price)
  document.getElementById("womens_data").append(data_divs)

})

}

display(womens_data);




const display2=(womens_data2)=>{
    
  womens_data2.forEach( function (ele){

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


   womensArr2.push(ele)

   localStorage.setItem("womens_items2",JSON.stringify(womensArr2))


 }
 )
   



 data_divs.append(wishlist_logo,mens_img,season,mens_name,mens_des,mens_price)
 document.getElementById("womens_data2").append(data_divs)

})

}

display2(womens_data2);