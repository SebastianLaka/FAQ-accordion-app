"use strict";
const accordionItem = document.querySelectorAll(".accordion-question");
const accordionContent = document.querySelector(".accordion-container__content");

accordionItem.forEach((accItem) => {
  accItem.addEventListener("click", (e) => {
   const target = e.currentTarget
   console.log(target);
    // const minusIcon = document.querySelector(".accordion-question__minus-icon");
    // const plusIcon = document.querySelector(".accordion-question__plus-icon");
    accordionContent.classList.toggle('show-answer')
   
  }, true);
});
