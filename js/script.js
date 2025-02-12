let audio = new Audio("media/chill.mp3");
let yippie = new Audio("media/yippie.mp3");


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
 * Résultat final en cas de 8 refus de cliquer sur le bouton Yes
 * @param buttonYes
 */
function finalChoice(buttonYes){
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
    text.style.display = "block";
    yippie.play();
    createGif();
    audio.play();
    alert("I knew it ! ❤️");
    startHearts();
}


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
});

/*
document.addEventListener("DOMContentLoaded", function () {
    let buttonNo = document.querySelector(".no");
    buttonNo.addEventListener("click", increaseButtonSize);
});
*/