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
