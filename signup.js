
var x=document.getElementById("signup_form_sm")
var y=document.getElementById("signin_form_sm")

var a=document.querySelector(".container_top_main_signup_sm")
var b=document.querySelector(".container_top_main_login_sm")

var main_container=document.getElementById("container_sm");

 SI=()=>{
    x.style.display="none"
    y.style.display="block"
    b.style.textDecoration="none"
      a.style.textDecoration="underline"
}



SU=()=>{
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

function changebg(){

  changebag.style.display='block';
  // body.style.background="rgba(0, 0, 0, 0.10)";
  body.style.opacity="0.6"
  body.style.backgroundColor="#a7a7a7"

  nav_head1.style.backgroundColor=" #a7a7a7";
  nav_head2.style.backgroundColor="#a7a7a7"  
  search_input.style.backgroundColor="#a7a7a7"

  
}


 hideform=()=>{

    main_container.style.display="none";
    body.style.background="none"
    body.style.opacity="10"
    nav_head1.style.backgroundColor="#e6e6e6";
    nav_head2.style.backgroundColor="white" 
    search_input.style.backgroundColor="white"

}

signin=()=>{

  let email=document.getElementById("log_email").value;
  let pass=document.getElementById("log_pass").value;

  
 
}

// let form=document.getElementById("scrollbar_sm")
// form.style.position="none"

// form=()=>{
  

//   form.style.display="block";
// }


var modal = document.getElementById('container_sm');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}