let purpleLine = document.querySelector(".roadmap-purple-line");
let roadmapContainer = document.querySelector(".roadmap-main-container")
let roadmapLineHeight = document.querySelector(".roadmap-mid-line").getBoundingClientRect().height;
let boxOne = document.querySelector(".roadmap-mid-box-one");
let boxTwo = document.querySelector(".roadmap-mid-box-two");
let boxThree = document.querySelector(".roadmap-mid-box-three");
let boxFour = document.querySelector(".roadmap-mid-box-four");

purpleLine.style.height = "0px";

window.addEventListener("scroll", () => {
    let roadmapContainerHeight = roadmapContainer.getBoundingClientRect().top;

    if(roadmapContainerHeight < 0) {
        purpleLine.style.height = Math.abs(roadmapContainerHeight) + 'px';
    }

    if(purpleLine.getBoundingClientRect().height >= roadmapLineHeight*0.05) {
        boxOne.classList.add("hover-one");
    }
    else {
        boxOne.classList.remove("hover-one");
    }

    if(purpleLine.getBoundingClientRect().height >= roadmapLineHeight*0.28) {
        boxTwo.classList.add("hover-two");
    }
    else {
        boxTwo.classList.remove("hover-two");
    }

    if(purpleLine.getBoundingClientRect().height >= roadmapLineHeight*0.62) {
        boxThree.classList.add("hover-three");
    }
    else {
        boxThree.classList.remove("hover-three");
    }

    if(purpleLine.getBoundingClientRect().height >= roadmapLineHeight*0.89) {
        boxFour.classList.add("hover-four");
    }
    else {
        boxFour.classList.remove("hover-four");
    }
})