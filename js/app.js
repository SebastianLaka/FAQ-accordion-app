"use strict";
const accordionItem = document.querySelectorAll(".accordion-question");
accordionItem.forEach((accItem) => {
  accItem.addEventListener("click", (e) => {
   const target = e.currentTarget;
   console.log(target);
   if(target.classList.contains('accordion-question')){
    target.nextElementSibling.classList.toggle('show-answer');
    target.lastElementChild.classList.toggle('show-icon')
    target.children[1].classList.toggle('remove-icon')
   }
  });
});