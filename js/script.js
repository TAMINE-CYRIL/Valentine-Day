const audio = new Audio("media/chill.mp3");
const yippie = new Audio("media/yippie.mp3");
audio.loop = true;

/**
 * Fonction créant les coeurs et les implémente dans le corps du site
 */
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

/**
 * Impose un délai avant l'apparition des coeurs
 */
function startHearts() {
    setInterval(createHeart, 300);
}


/**
 * Crée et place le gif dans le corps du document
 */
function createGif(){
    let gifContainer = document.createElement("section");
    gifContainer.classList.add("gif-container");

    let gif = document.createElement("img");
    gif.classList.add("gif");
    gif.src = "media/couple.gif";
    gif.alt = "couple gif";

    gifContainer.appendChild(gif);
    document.body.appendChild(gifContainer);

}


/**
 * Gère les intéractions lorsque le bouton Yes est appuyé
 */
function yes() {
    let buttonNo = document.querySelector(".no");
    let buttonYes = document.querySelector(".yes");
    let text = document.querySelector(".love");
    buttonNo.style.display = "none";
    buttonYes.style.display = "none";
    text.textContent = "Let me give you a hug ️! ❤️";
    text.style.position = "absolute";
    text.style.top = "10px";
    text.style.textAlign = "center";
    yippie.play();
    createGif();
    audio.play();
    alert("I knew it ! ❤️");
    startHearts();
}

/**
 * On change la position du bouton No pour une position aléatoire
 */
function moveButtonNo() {
    let buttonNo = document.querySelector(".no");

    let newX = Math.random() * (window.innerWidth - buttonNo.clientWidth);
    let newY = Math.random() * (window.innerHeight - buttonNo.clientHeight);

    buttonNo.style.position = "absolute";
    buttonNo.style.left = newX + "px";
    buttonNo.style.top = newY + "px";
}

document.addEventListener("DOMContentLoaded", function () {
    let buttonNo = document.querySelector(".no");
    buttonNo.addEventListener("mouseover", moveButtonNo);
    buttonNo.addEventListener("touchstart", moveButtonNo);
});

