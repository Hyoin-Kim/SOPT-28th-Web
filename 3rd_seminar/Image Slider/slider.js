//Current DIV
let current = 1;

//Call by btn class
const btnPre = document.querySelector(".pre"),
btnNext = document.querySelector(".next");

//button Next
function handleNextEvent(){
    let target = document.querySelector(`.slider__0${current}`);
    target.classList.remove("showing");
    current = current + 1 < 6 ? current + 1 : 1;
    target = document.querySelector(`.slider__0${current}`);
    target.classList.add("showing");
}
btnNext.addEventListener("click", handleNextEvent);

//button Pre
function handlePreEvent(){
    let target = document.querySelector(`.slider__0${current}`);
    target.classList.remove("showing");
    current = current - 1 > 0 ? current - 1 : 5;
    target = document.querySelector(`.slider__0${current}`);
    target.classList.add("showing");
}
btnPre.addEventListener("click", handlePreEvent);