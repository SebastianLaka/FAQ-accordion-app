"use strict";
const accordionItems = document.querySelectorAll(".accordion-question");
accordionItems.forEach((accItem) => {
  accItem.addEventListener("click", (e) => {
    const targetButton = e.currentTarget.classList.contains('accordion-question') 
   if(targetButton){
    e.currentTarget.nextElementSibling.classList.toggle('show-answer');
    e.currentTarget.lastElementChild.classList.toggle('show-icon')
    e.currentTarget.children[1].classList.toggle('remove-icon')
   }
  });
});