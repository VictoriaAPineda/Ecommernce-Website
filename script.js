
/* Selects the hamburger icon*/
const bar = document.getElementById("bar");
/* Selects the navigation bar */
const nav = document.getElementById("navbar");

const close = document.getElementById("close");

/* acts when user clicks on the bar icon */
if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add("active"); /* in css */
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove("active"); /* in css */
    })
}