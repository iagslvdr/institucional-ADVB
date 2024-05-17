function myFunction() {
    console.log('show');
    document.getElementById("myDropdown").classList.toggle("show");
    //document.getElementById("myDropdown").classList.add("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown') && !event.target.matches('img')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

let im1 = document.querySelector("img#img-5-1");
let im2 = document.querySelector("img#img-5-2");
let im3 = document.querySelector("img#img-5-3");
im1.addEventListener("mouseenter", up1);
im2.addEventListener("mouseenter", up2);
im3.addEventListener("mouseenter", up3);

function up1() {
    im1.style.width = "30%";
    im1.style.filter = 'brightness(100%)';
    im2.style.width = "20%";
    im2.style.filter = 'brightness(50%)';
    im3.style.width = "20%";
    im3.style.filter = 'brightness(50%)';
}
function up2() {
    im1.style.width = "20%";
    im1.style.filter = 'brightness(50%)';
    im2.style.width = "30";
    im2.style.filter = 'brightness(100%)';
    im3.style.width = "20%";
    im3.style.filter = 'brightness(50%)';
}
function up3() {
    im1.style.width = "20%";
    im1.style.filter = 'brightness(50%)';
    im2.style.width = "20%";
    im2.style.filter = 'brightness(50%)';
    im3.style.width = "30%";
    im3.style.filter = 'brightness(100%)';
}