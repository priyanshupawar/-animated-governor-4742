import {navbar} from "./components/navbar.js"

let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML=navbar();




window.women=()=>{
  document.location.href="womens2.html"
}

window.men=()=>{
    document.location.href="mens2.html"
}

window.kids=()=>{
    document.location.href="kids2.html"
}

window.newin=()=>{
  document.location.href="newin.html"
}