 const nav = document.querySelector("nav");
 const movileNav = document.querySelector("mobile-nav");

 window.addEventListener("scroll", () => {
    if(window.pageYOffset > 60){
        nav.classList.add("scrolled");
        movileNav.classList.add("scrolled");
    }
    else{
        nav.classList.remove("scrolled");
        movileNav.classList.remove("scrolled");
    }
 })