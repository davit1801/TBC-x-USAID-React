// header background-color change

window.addEventListener("scroll", function () {
  if (pageYOffset > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
});

//
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






// acordion

const acordionItems = Array.from(document.querySelectorAll('.acordion_item'));

const arrowDown = document.querySelectorAll('.arrow-down');


acordionItems.forEach((item) => {
  item.addEventListener('click',() => {
    let answer = item.lastElementChild;
    if(answer.classList.contains('hidden-answer')){
      document.querySelectorAll('.acordion_answer').forEach((el) => {
        el.classList.add('hidden-answer');
      })
      answer.classList.remove('hidden-answer');
    } else {
      answer.classList.add('hidden-answer');
    }
  })

})

