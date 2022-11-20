
 const header = document.querySelector(".header");

 window.addEventListener("scroll", function () {
   if (window.scrollY > 90) {
     header.classList.add("activey");
   } else {
     header.classList.remove("activey");
   }
 });
 