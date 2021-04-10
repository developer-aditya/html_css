// Sticky menu background opacity
window.addEventListener('scroll', function() {
   if (window.scrollY > 50.667) {
     document.querySelector('#navbar').style.opacity = 0.85;
   } else {
     document.querySelector('#navbar').style.opacity = 1;
   }
 });