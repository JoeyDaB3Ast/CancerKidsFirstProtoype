const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

 ///Code that makes the backToTop button appear when the scrollbar is 300px down
 window.addEventListener('scroll', function () {
  var scroll = document.querySelector('.backToTop');
  scroll.classList.toggle("active", window.scrollY > 300)

})

///Makes the backToTop button scroll in a smooth manner instead of jumping straight to the page
function backToTop() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  })
}


const buttons = document.querySelectorAll('a');
buttons.forEach(btn => {
  btn.addEventListener('click', function(e) {

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove()
    },1000);
  })
})

$(document).ready(function() {
  $('.hover').on('touchstart touchend', function(e) {
      e.preventDefault();
      $(this).toggleClass('hover_effect');
  });
});

