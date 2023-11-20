let slideIndex1 = 0;
let slideIndex2 = 0;
let slideIndex3 = 0;

const feature1Images = [
    "img/monsters1.png",
    "img/monsters2.png"
];
const feature2Images = [
    "img/feature2-1.png",
    "img/feature2-2.png"
]
const feature3Images = [
    "img/feature3-1.png",
    "img/feature3-2.png"
]
const feature1Image = document.querySelector(".feature1Img");
const feature2Image = document.querySelector(".feature2Img");
const feature3Image = document.querySelector(".feature3Img");


const feature1NextButton = document.querySelector(".feature1Next");
const feature1PreviousButton = document.querySelector(".feature1Previous");

const feature2NextButton = document.querySelector(".feature2Next");
const feature2PreviousButton = document.querySelector(".feature2Previous");

const feature3NextButton = document.querySelector(".feature3Next");
const feature3PreviousButton = document.querySelector(".feature3Previous");

feature1NextButton.addEventListener("click", function(){
    slideIndex1 = modifyIndex(slideIndex1, 1);
    feature1Image.src = feature1Images[slideIndex1];
    feature1Image.classList.add("imageTransition");
    setTimeout(function () {
        feature1Image.classList.remove("imageTransition");
    }, 500);
});
feature1PreviousButton.addEventListener("click", function(){
    slideIndex1 = modifyIndex(slideIndex1, -1);
    feature1Image.src = feature1Images[slideIndex1];
    feature1Image.classList.add("imageTransition");
    setTimeout(function () {
        feature1Image.classList.remove("imageTransition");
    }, 500);
    console.log(slideIndex1);
});

feature2NextButton.addEventListener("click", function(){
    slideIndex2 = modifyIndex(slideIndex2, 1);
    feature2Image.src = feature2Images[slideIndex2];
    feature2Image.classList.add("imageTransition");
    setTimeout(function () {
        feature2Image.classList.remove("imageTransition");
    }, 500);
});
feature2PreviousButton.addEventListener("click", function(){
    slideIndex2 = modifyIndex(slideIndex2, -1);
    feature2Image.src = feature2Images[slideIndex2];
    feature2Image.classList.add("imageTransition");
    setTimeout(function () {
        feature2Image.classList.remove("imageTransition");
    }, 500);
    console.log(slideIndex2);
});

feature3NextButton.addEventListener("click", function(){
    slideIndex3 = modifyIndex(slideIndex3, 1);
    feature3Image.src = feature3Images[slideIndex3];
    feature3Image.classList.add("imageTransition");
    setTimeout(function () {
        feature3Image.classList.remove("imageTransition");
    }, 500);
});
feature3PreviousButton.addEventListener("click", function(){
    slideIndex3 = modifyIndex(slideIndex3, -1);
    feature3Image.src = feature3Images[slideIndex3];
    feature3Image.classList.add("imageTransition");
    setTimeout(function () {
        feature3Image.classList.remove("imageTransition");
    }, 500);
    console.log(slideIndex3);
});

function hahaa(){
    console.log("HAHAHAHAHA");
}

function modifyIndex(slideIndex, n){
    slideIndex += n;
    console.log(`Slide Index = ${slideIndex} + ${n}`);
    if(slideIndex >= feature1Images.length){
        slideIndex = 0;
    }
    if(slideIndex < 0){
        slideIndex = feature1Images.length-1;
    }
    return slideIndex;
}
// console.log("HAHAHAH");
window.addEventListener('scroll', function () {
    // var stickyNav = document.getElementById('sticky-nav')
    let stickyNav = document.querySelector('.sticky-nav')
    if (window.scrollY >= 100) {
        console.log("DASDA");
        stickyNav.classList.add('fixed-sticky');
    } else {
        stickyNav.classList.remove('fixed-sticky');
    }
});