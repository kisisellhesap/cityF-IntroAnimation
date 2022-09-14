let introScreen = document.querySelector(".intro-screen");
let mapScreen = document.querySelector(".map-screen");
let gameController = document.querySelector(".game-controller");
let play = document.querySelector(".play");
let btnText = document.querySelector(".countryName");
let realMap = document.querySelector(".real-map");
let worldMapSquare = document.querySelector(".world-map-square");
let handImg = document.querySelector(".hand");
let handDiv = document.querySelector(".hand-div");

let main = document.querySelector("main");




console.log(play);

play.addEventListener("click", function () {
    console.log("play");
    gameController.classList.add("game-controller-effect");
    play.classList.add("play-effect");
    btnText.classList.add("btnText-effect");
    realMap.classList.add("realMap-effect");
    worldMapSquare.classList.add("world-map-square-effect");
    handImg.classList.add("hand-effect");
    handDiv.classList.add("hand-div-effect");
    introScreen.classList.add("intro-screen-effect");
    mapScreen.classList.add("map-screen-effect");


});
