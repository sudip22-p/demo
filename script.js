
/*changing hmburger menu*/
const ham=document.querySelector(".hamburger");
const ul=document.querySelector(".ul");
ham.addEventListener("click",()=>{
    ham.classList.toggle("change");
    ul.classList.toggle("listOnClick");
  });