// Smooth Scrolling
$('.btn-light, .btn-dark').on('click', function(event) {
if (this.hash !== '') {
   event.preventDefault();
   const hash = this.hash;
   $('html, body').animate(
      {
      scrollTop: $(hash).offset().top
      },
      800
   );
}
});



// animate class addition to kick in animation
const items = document.querySelectorAll('.page h1, .page p');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('animate');
    }
  });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
