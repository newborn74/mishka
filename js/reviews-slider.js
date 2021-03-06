var slider = document.querySelector(".reviews");
var leftSlide = slider.querySelector(".reviews__card--left");
var centerSlide = slider.querySelector(".reviews__card--center");
var rightSlide = slider.querySelector(".reviews__card--right");
var leftArrow = slider.querySelector(".reviews__nav-button--left");
var rightArrow = slider.querySelector(".reviews__nav-button--right");


rightArrow.addEventListener("click", function (evt) {
  if (leftSlide.classList.contains("reviews__card--show-to-right") || leftSlide.classList.contains("reviews__card--show") || leftSlide.classList.contains("reviews__card--show-to-left")) {
    leftSlide.classList.remove("reviews__card--show-to-right") || leftSlide.classList.remove("reviews__card--show") || leftSlide.classList.remove("reviews__card--show-to-left");
    leftSlide.classList.add("reviews__card--hide");
    centerSlide.classList.remove("reviews__card--hide");
    centerSlide.classList.add("reviews__card--show-to-right");
  } else if (centerSlide.classList.contains("reviews__card--show-to-right") || centerSlide.classList.contains("reviews__card--show-to-left")) {
    centerSlide.classList.remove("reviews__card--show-to-right") || centerSlide.classList.remove("reviews__card--show-to-left");
    centerSlide.classList.add("reviews__card--hide");
    rightSlide.classList.remove("reviews__card--hide");
    rightSlide.classList.add("reviews__card--show-to-right");
  } else if (rightSlide.classList.contains("reviews__card--show-to-right") || rightSlide.classList.contains("reviews__card--show-to-left")) {
    rightSlide.classList.remove("reviews__card--show-to-right") || rightSlide.classList.remove("reviews__card--show-to-left");
    rightSlide.classList.add("reviews__card--hide");
    leftSlide.classList.remove("reviews__card--hide");
    leftSlide.classList.add("reviews__card--show-to-right");
  }
})

leftArrow.addEventListener("click", function (evt) {
  if (leftSlide.classList.contains("reviews__card--show-to-left") || leftSlide.classList.contains("reviews__card--show") || leftSlide.classList.contains("reviews__card--show-to-right")) {
    leftSlide.classList.remove("reviews__card--show-to-left") || leftSlide.classList.remove("reviews__card--show") || leftSlide.classList.remove("reviews__card--show-to-right");
    leftSlide.classList.add("reviews__card--hide");
    rightSlide.classList.remove("reviews__card--hide");
    rightSlide.classList.add("reviews__card--show-to-left");
  } else if (centerSlide.classList.contains("reviews__card--show-to-left") || centerSlide.classList.contains("reviews__card--show-to-right")) {
    centerSlide.classList.remove("reviews__card--show-to-left") || centerSlide.classList.remove("reviews__card--show-to-right");
    centerSlide.classList.add("reviews__card--hide");
    leftSlide.classList.remove("reviews__card--hide");
    leftSlide.classList.add("reviews__card--show-to-left");
  } else if (rightSlide.classList.contains("reviews__card--show-to-left") || rightSlide.classList.contains("reviews__card--show-to-right")) {
    rightSlide.classList.remove("reviews__card--show-to-left") || rightSlide.classList.remove("reviews__card--show-to-right");
    rightSlide.classList.add("reviews__card--hide");
    centerSlide.classList.remove("reviews__card--hide");
    centerSlide.classList.add("reviews__card--show-to-left");
  }
});
