"use strict";
const accordionItem = document.querySelectorAll(".accordion-question");
const accordionContent = document.querySelector(".accordion-container__content");
const minusIcon = document.querySelector(".accordion-question__minus-icon");

accordionItem.forEach((accItem) => {
  accItem.addEventListener("click", (e) => {
   const target = e.currentTarget;
   console.log(target);
   if(target.classList.contains( 'accordion-question')){
    target.nextElementSibling.classList.toggle('show-answer');
   }
  });
});

