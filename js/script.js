let count = 0;
let audio = new Audio("media/chill.mp3");
let yippie = new Audio("media/yippie.mp3");

function createHeart() {
    let heart = document.createElement("section");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

function startHearts() {
    setInterval(createHeart, 300);
}

function increaseButtonSize() {
    let buttonYes = document.querySelector(".yes"); // Sélectionne uniquement le bouton "Yes"

    let currentWidth = parseInt(buttonYes.style.width) || 100;
    let currentHeight = parseInt(buttonYes.style.height) || 80;
    let currentSize = parseInt(window.getComputedStyle(buttonYes).fontSize)

    let newWidth = currentWidth * 1.32;
    let newHeight = currentHeight * 1.32;
    let newSize = currentSize * 1.1;

    buttonYes.style.width = newWidth + "px";
    buttonYes.style.height = newHeight + "px";
    buttonYes.style.fontSize = newSize + "px";

    count++;
    console.log(count);
    if (count === 8) {
        buttonYes.style.fontSize = "5rem";
        buttonYes.style.position = "fixed";
        buttonYes.style.top = "0";
        buttonYes.style.left = "0";
        buttonYes.style.width = "calc(100vw - 20px)";
        buttonYes.style.height = "calc(100vh - 20px)";
        buttonYes.style.margin = "10px";

        let buttonNo = document.querySelector(".no");
        buttonNo.style.display = "none";
    }
}

function createGif(){
    let gifContainer = document.createElement("section");
    gifContainer.classList.add("gif-container");

    let gif = document.createElement("img");
    gif.classList.add("gif");
    gif.src = "media/couple.gif";
    gif.alt = "couple gif";

    gifContainer.appendChild(gif);
    document.body.appendChild(gifContainer);
    yippie.play();

}

function no() {
    console.log("C'est cliqué !");
    let buttonNo = document.querySelector(".no");
    buttonNo.addEventListener("click", increaseButtonSize);
}

function yes() {
    let buttonNo = document.querySelector(".no");
    let buttonYes = document.querySelector(".yes");
    let text = document.querySelector(".love");

    buttonNo.style.display = "none";
    buttonYes.style.display = "none";
    text.textContent = "Let me give you a hug ️! ❤️";
    text.style.display = "block";
    createGif();
    alert("I knew it ! ❤️");
    audio.play();
    startHearts();
}

function gay() {
    let buttonNo = document.querySelector(".no");
    let buttonYes = document.querySelector(".yes");
    let text = document.querySelector(".love");

    text.textContent = "But are you gay ?";
    buttonNo.textContent = "Yes, but in red.";
    buttonYes.textContent = "Yes I am.";
    alert("You have good eyes ! 👀");
}

document.addEventListener("DOMContentLoaded", function () {
    let buttonNo = document.querySelector(".no");
    buttonNo.addEventListener("click", increaseButtonSize);
});
