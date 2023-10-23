let homePageEl = document.getElementById("homepage-content");
let homePageImg = document.getElementById("hompage-img");

let aboutEle = document.getElementById("about");
let aboutContent = document.getElementById("about-content");


let workEle = document.getElementById("work");
let workContent = document.getElementById("work-content");


let contactEl = document.getElementById("contact");
let contactContent = document.getElementById("contact-content");


aboutEle.addEventListener("click", function() {
    let backAbout = document.getElementById("about-back");
    aboutContent.style.display = "block";
    homePageEl.style.display = "none";
    homePageImg.style.display = "none";

    backAbout.addEventListener("click", function() {
        aboutContent.style.display = "none";
        homePageEl.style.display = "block";
        homePageImg.style.display = "block";
    });
});


workEle.addEventListener("click", function() {
    let backWork = document.getElementById("work-back");
    workContent.style.display = "block";
    homePageEl.style.display = "none";
    homePageImg.style.display = "none";

    backWork.addEventListener("click", function() {
        workContent.style.display = "none";
        homePageEl.style.display = "block";
        homePageImg.style.display = "block";
    });
});


contactEl.addEventListener("click", function() {
    let backContact = document.getElementById("contact-back");
    contactContent.style.display = "block";
    homePageEl.style.display = "none";
    homePageImg.style.display = "none";

    backContact.addEventListener("click", function() {
        contactContent.style.display = "none";
        homePageEl.style.display = "block";
        homePageImg.style.display = "block";
    });
});