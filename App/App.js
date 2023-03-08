const playVideo = document.getElementById("pvbcb");
const closeVideo = document.getElementById("close-video");
const bodyShadow = document.getElementById("header");
const sidebar = document.getElementById("sidebar");
const scrollTop = function () {
  // create HTML button element
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "&uarr;";
  scrollBtn.setAttribute("id", "scroll-btn");
  document.body.appendChild(scrollBtn);
  // hide/show button based on scroll distance
  const scrollBtnDisplay = function () {
    window.scrollY > window.innerHeight
      ? scrollBtn.classList.add("show")
      : scrollBtn.classList.remove("show");
  };
  window.addEventListener("scroll", scrollBtnDisplay);
  // scroll to top when button clicked
  const scrollWindow = function () {
    if (window.scrollY != 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 50);
        scrollWindow();
      }, 10);
    }
  };
  scrollBtn.addEventListener("click", scrollWindow);
};
scrollTop();

function alertedVideo() {
  playVideo.classList.add("pvbcb-active");
  bodyShadow.classList.add("body-shadow");
  sidebar.classList.add("sidebar-none");
  getElementsByTagName("body").style.overflow = "hidden";
}

closeVideo.onclick = function () {
  playVideo.classList.remove("pvbcb-active");
  bodyShadow.classList.remove("body-shadow");
  sidebar.classList.remove("sidebar-none");
};

sidebar.onclick = function () {
  active.classList.toggle("active");
};

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
