

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
  var modal = document.getElementById("id01");

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };




  // Get the modal
  var modal = document.getElementById('id02');
  
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

  //let url=`https://www.farfetch.com/in/shopping/kids/chloe-kids/items.aspx?msc=chloekids_k_sep22&mktref=display_k&q=${x}`
