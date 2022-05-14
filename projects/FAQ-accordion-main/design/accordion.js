function hideAll(exceptThis) {
   for (var i = 0; i < acc.length; i++) {
     if (acc[i] !== exceptThis) {
      acc[i].classList.remove("active");
      acc[i].nextElementSibling.classList.remove("show");
     }
   }
 }
 

 var acc = document.querySelectorAll("button.accordion");

for (var i = 0; i < acc.length; i++) {
   acc[i].onclick = function() {
   this.classList.toggle("active");
   this.nextElementSibling.classList.toggle("show");
   hideAll(this);
  };
}