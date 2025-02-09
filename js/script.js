let count=0;
let audio = new Audio("media/chill.mp3");


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
    let button = document.getElementsByClassName("yes")[0];
    let button2 = document.getElementsByClassName("no")[0];

    let currentWidth = parseInt(button.style.width) || 100;
    let currentHeight = parseInt(button.style.height) || 50;
    let currentSize = parseInt(window.getComputedStyle(button).fontSize);

    let newWidth = currentWidth * 1.3;
    let newHeight = currentHeight * 1.3;
    let newSize = currentSize * 1.3;

    button.style.width = newWidth + "px";
    button.style.height = newHeight + "px";
    button.fontSize = newSize + "px";
    count++;
    if (count === 8) {
        button.style.width = "97.5vw";
        button.style.height = "95vh";
        button.style.fontSize = "5rem";
        button.style.position = "fixed";
        button.style.top = "0";
        button.style.bottom = "0";
        button.style.left = "0";
        button.style.right = "0";
        button2.style.display = "none";

    }


}

function no() {

    let buttonNo = document.getElementsByClassName("no")[0];
    buttonNo.addEventListener("click", increaseButtonSize);
}

function yes(){
    let buttonNo = document.getElementsByClassName("no")[0];
    let buttonYes = document.getElementsByClassName("yes")[0];
    let text = document.getElementsByClassName("love")[0];
    buttonNo.style.display = "none";
    buttonYes.style.display = "none";
    text.textContent = "Let me give you a hug ️ ! ❤️ ";
    text.style.display = "block";
    let gifContainer = document.createElement("section");
    gifContainer.classList.add("gif-container");

    let gif = document.createElement("img");
    gif.classList.add("gif");
    gif.src ="media/couple.gif";
    gif.alt = "couple gif";
    gifContainer.appendChild(gif);
    document.body.appendChild(gifContainer);

    audio.play();
    alert("I knew it ! ❤️");
    startHearts();


}

/*
function gay(){
    let buttonNo = document.getElementsByClassName("no")[0];
    let buttonYes = document.getElementsByClassName("yes")[0];
    let text = document.getElementsByClassName("love")[0];

    text.textContent = "But are you gay ?"
    buttonNo.textContent = "Yes, but in red."
    buttonYes.textContent = "Yes I am."
    alert("You have good eyes ! 👀")
}

 */