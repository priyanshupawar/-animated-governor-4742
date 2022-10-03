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

  // signup and signin

  var x=document.getElementById("signup_form_sm")
  var y=document.getElementById("signin_form_sm")
  
  var a=document.querySelector(".container_top_main_signup_sm")
  var b=document.querySelector(".container_top_main_login_sm")
  
  let remove_scroll=document.getElementById("bg");
  /* ----------------- all button for funcitonaliteis   ----------------------------------      */
  
  const form=document.getElementById("signup_form_sm")
  let error_name=document.querySelector(".error_name")
  let error_email=document.querySelector(".error_email")
  let error_pass=document.querySelector(".error_pass")
  let login_error=document.querySelector(".error")
  let success=document.getElementById("login_details")
  
  
  // let checkbox=document.querySelector(".checkbox_input_sm")
  
  /*------------------------------------------------------------*/
  
  var main_container=document.getElementById("container_sm");
  
   window.SI=()=>{
      x.style.display="none"
      y.style.display="block"
      b.style.textDecoration="none"
        a.style.textDecoration="underline"
  }
  
  
  
  window.SU=()=>{
      x.style.display="block"
      y.style.display="none"
      a.style.textDecoration="none"
      b.style.textDecoration="underline"
  
      
  }
  
  document.getElementById("transfertosignup_sm").addEventListener("click",function (event){
      event.preventDefault();
      b.style.textDecoration="underline"
        a.style.textDecoration="none"
        x.style.display="block"
        y.style.display="none"
      
  })
  
  
  var changebag=document.getElementById('container_sm')
  var nav_head1=document.getElementById('heading')
  var nav_head2=document.getElementById('heading2')
  var search_input=document.getElementById('search')
  var body=document.getElementById('content')
  
  window.changebg=()=>{
  
    changebag.style.display='block';
    // body.style.background="rgba(0, 0, 0, 0.10)";
    body.style.opacity="0.6"
    body.style.backgroundColor="#a7a7a7"
  
    nav_head1.style.backgroundColor=" #a7a7a7";
    nav_head2.style.backgroundColor="#a7a7a7"  
    search_input.style.backgroundColor="#a7a7a7"
    remove_scroll.style.overflowY="hidden"
  
    
  }
  
  
   window.hideform=()=>{
  
      main_container.style.display="none";
      body.style.background="none"
      body.style.opacity="10"
      nav_head1.style.backgroundColor="#e6e6e6";
      nav_head2.style.backgroundColor="white" 
      search_input.style.backgroundColor="white"
      remove_scroll.style.overflowY="scroll"
  
  }
  
  
  
  var modal = document.getElementById('container_sm');
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  } 
  
  const submit=document.getElementById("signup_btn_sm");
  
  // function signup(){
    
  //   let message=[]
  //   let message2=[];
  
  //   if(name.value===""||name.value==null){
  //     message.push("Name is required")
  
  //   }
  //   if(password.value.length<=6){
  //     message2.push("Password must be longer than 6 characters")
  //     submit.disabled=true;
  //   }
  
  //   if(email.value)
  
  //   if(message.length > 0){
  //     event.preventDefault();
  //     error_name.innerHTML=message.join(',');
  //     error_name.style.color="red";
     
  //   }
  //   if(message2.length<=6){
  //      error_pass.innerHTML=message2.join(',');
  //      error_pass.style.color="red";
         
  //   }
  // submit.disabled=false;
  
  
  
  
  let dataArr=JSON.parse(localStorage.getItem("signup"))||[];
  
   window.signup=()=>{
     event.preventDefault();
     let name=document.getElementById('username').value;
     let email=document.getElementById("email").value;
     let pass=document.getElementById("password").value;
   
  
  
      let message=[];
      let message2=[];
      let message3=[];
      
    // if(checkbox==""){
  
    // }
  
      if(name==""||name==null){
        message.push("Name is required")
      }
  
      if(email==""||email==null){
        message2.push("Email is required")
      }
  
      if(pass==""||pass==null){
        message3.push("Password field is empty")
      }
      
  
  
      if(name!=""||name!=null){
        error_name.innerHTML=null;
      }
      if(email!=""||email!=null){
        error_email.innerHTML=null;
      }
      if(pass!=""||pass!=null){
        error_pass.innerHTML=null;
      }
      if(pass.length<6){
        error_pass.innerHTML="Password must be greater than 6 characters"
        error_pass.style.color="red"
      }
      
      if(message.length > 0){
             event.preventDefault();
            error_name.innerHTML=message.join(',');
             error_name.style.color="red";
           
        }
        if(message2.length > 0){
          event.preventDefault();
         error_email.innerHTML=message2.join(',');
          error_email.style.color="red";
        
     }
     if(message3.length > 0&&pass.length<6){
      event.preventDefault();
     error_pass.innerHTML=message3.join(',');
      error_pass.style.color="red";
      
  }
  
  
  
  
  let dataObj={
    name,
    email,
    pass,
  }
  
  if(name!=""&&email!=""&&pass!=""&&pass.length>=6){
     dataArr.push(dataObj)
     localStorage.setItem("signup",JSON.stringify(dataArr));
     error_pass.innerHTML="Succesfull Signup"
     error_pass.style.color="green"
     x.style.display="none"
      y.style.display="block"
      b.style.textDecoration="none"
      a.style.textDecoration="underline"
  
  }
   }
  
  //logiin   -----------------------------------------------
  
  
  // document.getElementById("signin_btn_sm").addEventListener("click",loginit)
  
  //    console.log(logindata)
  let flag=false;
  
  window.loginit=()=>{
       event.preventDefault();
   
     let selected=  document.querySelector("#log_email").value;
      let selected1= document.querySelector("#log_pass").value;
         
     let datalist=dataArr.map(function (ele){
       
           if(ele.email==selected && ele.pass==selected1){
            success.innerHTML=ele.name;
            
       flag=true;
       }
       
       
     });
  
     if(flag==true){
      login_error.innerHTML="Successfull Login"
        login_error.style.color="green"
     }
     setTimeout(() => {
      
      if(flag==true){
       
        hideform();
        
      }else{
        login_error.innerHTML="Wrong Input";
        login_error.style.color="red"
      }
     }, 1500);
  
     
   }
   function wishlist(){
    document.location.href="wishlist.html"
  }
  
  
  //  function success(){
  //   event.preventDefault();
  //  }

  // end of signup
  
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

    localStorage.setItem("wishlist",JSON.stringify(womensArr))


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

   localStorage.setItem("wishlist",JSON.stringify(womensArr2))


 }
 )
   



 data_divs.append(wishlist_logo,mens_img,season,mens_name,mens_des,mens_price)
 document.getElementById("womens_data2").append(data_divs)

})

}

display2(womens_data2);

