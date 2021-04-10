// initialize and add the map
function initMap() {
   // your location
   const loc= {lat: 23.259933, lng: 77.412613};
   // centered map on location
   const map = new google.maps.Map(document.querySelector('.map'), {
     center: loc,
     zoom: 12
   });
   // setting up the marker
   const marker= new google.maps.Marker({position: loc, map: map});
 }


// Smooth Scrolling
$('#navbar a, .btn-light').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 58
      },
      600
    );
  }
});


// Sticky menu background opacity
window.addEventListener('scroll', function() {
  if (window.scrollY > 59) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});
