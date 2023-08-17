/**
* Template Name: OnePage
* Updated: Jul 27 2023 with Bootstrap v5.3.1
* Template URL: https://bootstrapmade.com/onepage-multipurpose-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
// Function to delete the element
// Function to delete the element
// Function to delete the element
function deleteDarkModeStyle() {
  var elements = document.querySelectorAll('style.dark-mode-native-dark-cloned');
  elements.forEach(function(element) {
    element.remove();
  });
}

// Mutation Observer to watch for changes in the DOM
var observer = new MutationObserver(function(mutationsList) {
  for (var mutation of mutationsList) {
    if (mutation.type === 'childList') {
      deleteDarkModeStyle();
    }
  }
});

// Start observing the DOM
observer.observe(document.body, { childList: true, subtree: true });


function toggleFullscreen() {
  const doc = window.document;
  const docEl = doc.documentElement;

  const requestFullscreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  const exitFullscreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullscreen.call(docEl);
  } else {
    exitFullscreen.call(doc);
  }
}

// Toggle fullscreen on page load
window.onload = toggleFullscreen;
// Trigger fullscreen on button click or any other event
const fullscreenButton = document.getElementById('fullscreenButton');
fullscreenButton.addEventListener('click', toggleFullscreen);

function fullscreen() {
  var elem = document.getElementsByClassName("fullscreen-icon")[0];
  if (elem.classList[1] === "ri-fullscreen-line" ){
  elem.classList.remove("ri-fullscreen-line");
  elem.classList.add("ri-fullscreen-exit-line");
  } else if (elem.classList[1] === "ri-fullscreen-exit-line"){
    elem.classList.remove("ri-fullscreen-exit-line");
    elem.classList.add("ri-fullscreen-line");
  }
}

function read1() {
  var readText = document.getElementById("read1");
  var btnText = document.getElementById("myBtn1");

  if (readText.style.display === "none") {
    btnText.innerHTML = "Read read"; 
    readText.style.display = "none";
  } else {
    btnText.remove();
    readText.style.display = "inline";
  }
}

function read2() {
  var readText = document.getElementById("read2");
  var btnText = document.getElementById("myBtn2");

  if (readText.style.display === "none") {
    btnText.innerHTML = "Read read"; 
    readText.style.display = "none";
  } else {
    btnText.remove();
    readText.style.display = "inline";
  }
}

function read3() {
  var readText = document.getElementById("read3");
  var btnText = document.getElementById("myBtn3");

  if (readText.style.display === "none") {
    btnText.innerHTML = "Read read"; 
    readText.style.display = "none";
  } else {
    btnText.remove();
    readText.style.display = "inline";
  }
}

function read4() {
  var readText = document.getElementById("read4");
  var btnText = document.getElementById("myBtn4");

  if (readText.style.display === "none") {
    btnText.innerHTML = "Read read"; 
    readText.style.display = "none";
  } else {
    btnText.remove();
    readText.style.display = "inline";
  }
}


function myFunction1() {
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("Btn1");

  if (moreText.style.display === "none") {
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    btnText.remove();
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("Btn2");

  if (moreText.style.display === "none") {
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    btnText.remove();
    moreText.style.display = "inline";
  }
}

function myFunction3() {
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("Btn3");

  if (moreText.style.display === "none") {
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    btnText.remove();
    moreText.style.display = "inline";
  }
}

function myFunction4() {
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("Btn4");

  if (moreText.style.display === "none") {
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    btnText.remove();
    moreText.style.display = "inline";
  }
}


function myFunction5() {
  var moreText = document.getElementById("more5");
  var btnText = document.getElementById("myBtn5");

  if (moreText.style.display === "none") {
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    btnText.remove();
    moreText.style.display = "inline";
  }
}

function myFunction6() {
  var moreText = document.getElementById("more6");
  var btnText = document.getElementById("myBtn6");

  if (moreText.style.display === "none") {
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    btnText.remove();
    moreText.style.display = "inline";
  }
}

function myFunction7() {
  var moreText = document.getElementById("more7");
  var btnText = document.getElementById("myBtn7");

  if (moreText.style.display === "none") {
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    btnText.remove();
    moreText.style.display = "inline";
  }
}

function tosupport(){
  let element0 = document.getElementsByClassName("Flib-Card")[0];
  let flib_button =  document.getElementsByClassName("checkbox")[0];
    if (element0.classList[1] !== "rotate") {
      flib_button.checked = true;
      rotateElement();
    }
  }
function tocontact(){
  let element0 = document.getElementsByClassName("Flib-Card")[0];
  let flib_button =  document.getElementsByClassName("checkbox")[0];
  if (element0.classList[1] === "rotate") {
    flib_button.checked = false;
    rotateElement();
  }
};

function rotateElement() {
  var flipcard = document.getElementsByClassName("Flib-Card")[0];
  flipcard.classList.toggle("rotate");
  }


(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()