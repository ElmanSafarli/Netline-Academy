const playVideo = document.getElementById("pvbcb");
const closeVideo = document.getElementById("close-video");
const bodyShadow = document.getElementById("header");
const sidebar = document.getElementById("sidebar");
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
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
  document.body.classList.add("overflowhidden");
}

closeVideo.onclick = function () {
  playVideo.classList.remove("pvbcb-active");
  bodyShadow.classList.remove("body-shadow");
  sidebar.classList.remove("sidebar-none");
  document.body.classList.remove("overflowhidden");
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

// Info Abou Course on phone
function coursInfoCsharp(){
  var csharp = document.getElementById("csharp")
  var rotatedImg = document.getElementById("more-info-course-img")
  var coursesharpInfo = document.getElementById("course-csharp")
  rotatedImg.classList.toggle("more-info-course-img-rotated")
  csharp.classList.toggle("course-info-height-auto")
  coursesharpInfo.classList.toggle("course-csharp-open")
}
function coursInfoCcna(){
  var ccna = document.getElementById("ccna")
  var rotatedImg2 = document.getElementById("more-info-course-img2")
  var courseCcna = document.getElementById("course-ccna")
  rotatedImg2.classList.toggle("more-info-course-img-rotated2")
  ccna.classList.toggle("course-info-height-auto")
  courseCcna.classList.toggle("course-ccna-open")
}
function coursInfoHelpDesk(){
  var helpdesk = document.getElementById("helpdesk")
  var rotatedImg3 = document.getElementById("more-info-course-img3")
  var courseHelpdesk = document.getElementById("course-helpdesk")
  rotatedImg3.classList.toggle("more-info-course-img-rotated2")
  helpdesk.classList.toggle("course-info-height-auto")
  courseHelpdesk.classList.toggle("course-helpdesk-open")
}
function coursInfoLinuxRhcsa(){
  var linuxrhcsa = document.getElementById("linuxrhcsa")
  var rotatedImg4 = document.getElementById("more-info-course-img4")
  var courselinuxrhcsa = document.getElementById("course-linuxrhcsa")
  rotatedImg4.classList.toggle("more-info-course-img-rotated4")
  linuxrhcsa.classList.toggle("course-info-height-auto")
  courselinuxrhcsa.classList.toggle("course-linuxrhcsa-open")
}
function coursInfoItAdmin(){
  var itadmin = document.getElementById("itadmin")
  var rotatedImg5 = document.getElementById("more-info-course-img5")
  var courseItadmin = document.getElementById("course-itadmin")
  rotatedImg5.classList.toggle("more-info-course-img-rotated5")
  itadmin.classList.toggle("course-info-height-auto")
  courseItadmin.classList.toggle("course-itadmin-open")
}

// Course Info On Desktop Version
function coursInfoCsharpD1(){
  var csharpD1 = document.getElementById("csharp-d1")
  var rotatedImgD1 = document.getElementById("more-info-course-img-d1")
  var courseCsharpD1 = document.getElementById("course-csharp-d1")
  rotatedImgD1.classList.toggle("more-info-course-img-d1-rotated")
  csharpD1.classList.toggle("course-info-height-auto")
  courseCsharpD1.classList.toggle("course-itadmin-open")
}
function coursInfoCcnaD1(){
  var ccnaD2 = document.getElementById("ccna-d2")
  var rotatedImgD2 = document.getElementById("more-info-course-img-d2")
  var courseCcnaD2 = document.getElementById("course-ccna-d2")
  rotatedImgD2.classList.toggle("more-info-course-img-d2-rotated")
  ccnaD2.classList.toggle("course-info-height-auto")
  courseCcnaD2.classList.toggle("course-ccna-open-d2")
}
function coursInfoHelpD1(){
  var hdeskd3 = document.getElementById("hdesk-d3")
  var rotatedImgD3 = document.getElementById("more-info-course-img-d3")
  var courseHelpD3 = document.getElementById("course-hdesk-d3")
  rotatedImgD3.classList.toggle("more-info-course-img-d3-rotated")
  hdeskd3.classList.toggle("course-info-height-auto")
  courseHelpD3.classList.toggle("course-hdesk-open-d3")
}
function coursInfoLinuxD1(){
  var linux4 = document.getElementById("linux-d4")
  var rotatedImgD4 = document.getElementById("more-info-course-img-d4")
  var courseLinuxD4 = document.getElementById("course-linux-d4")
  rotatedImgD4.classList.toggle("more-info-course-img-d4-rotated")
  linux4.classList.toggle("course-info-height-auto")
  courseLinuxD4.classList.toggle("course-linux-open-d4")
}
function coursInfoItAdminD1(){
  var itadmin5 = document.getElementById("itadmin-d5")
  var rotatedImgD5 = document.getElementById("more-info-course-img-d5")
  var courseItadminD5 = document.getElementById("course-itadmin-d5")
  rotatedImgD5.classList.toggle("more-info-course-img-d5-rotated")
  itadmin5.classList.toggle("course-info-height-auto")
  courseItadminD5.classList.toggle("course-itadmin-open-d5")
}
function coursInfoFullStackD1(){
  var fullstack6 = document.getElementById("fullstack-d6")
  var rotatedImgD6 = document.getElementById("more-info-course-img-d6")
  var courseFullstackD6 = document.getElementById("course-fullstack-d6")
  rotatedImgD6.classList.toggle("more-info-course-img-d6-rotated")
  fullstack6.classList.toggle("course-info-height-auto")
  courseFullstackD6.classList.toggle("course-fullstack-open-d6")
}

// Signup and Login Section
function registerLink(){
  document.getElementById("wrapper").classList.add('active-input-box');
}
function loginLink(){
  document.getElementById("wrapper").classList.remove('active-input-box');
}
function logInBtn(){
  document.getElementById("wrapper").classList.add('active-popup');
}
function closeInputBox(){
  document.getElementById("wrapper").classList.remove('active-popup');
}

// Gallery Slider Images
let gallerySlideIndex = 0;
galleryShowSlides();

function galleryShowSlides() {
  let i;
  let gallerySlides = document.getElementsByClassName("gallerySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < gallerySlides.length; i++) {
    gallerySlides[i].style.display = "none";  
  }
  gallerySlideIndex++;
  if (gallerySlideIndex > gallerySlides.length) {gallerySlideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  gallerySlides[gallerySlideIndex-1].style.display = "block";  
  dots[gallerySlideIndex-1].className += " active";
  setTimeout(galleryShowSlides, 2000); // Change image every 2 seconds
}