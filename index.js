const slides = document.querySelectorAll(".slides"),
  prev = document.querySelector(".previous-slide-arrow"),
  next = document.querySelector(".next-slide-arrow");

let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((item) => (item.style.display = "none"));

  slides[slideIndex - 1].style.display = "flex";
}


function plusSlides(n) {
  showSlides((slideIndex += n));
}

prev.addEventListener("click", () => {
  plusSlides(-1);
});

next.addEventListener("click", () => {
  plusSlides(1);
});


// function avtoSlider (btn) {
//     let click = new CustomEvent ("click");
//     next.dispatchEvent(click)
// }

// setInterval(avtoSlider,2000)







// header background-color change
// const header = document.getElementsByClassName('header');

// header.addEventListener('scroll',() => {
//  header.style.backgroundColor = 'blue'
// })




window.addEventListener('scroll', function() {
  if (pageYOffset > 0) {
    document.querySelector('.header').classList.add('active')
  } else {
    document.querySelector('.header').classList.remove('active')
  }
})




