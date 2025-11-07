// Hide header on scroll down, show on scroll up
let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.style.top = "-80px"; // Hide
    } else {
        header.style.top = "0"; // Show
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);
