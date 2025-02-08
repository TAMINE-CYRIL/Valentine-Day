let count=0;


function increaseButtonSize() {
    let button = document.getElementsByClassName("yes")[0];
    let button2 = document.getElementsByClassName("no")[0];
    let text = document.getElementsByClassName("love")[0];

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
        text.style.display = "none";
    }


}

function no() {

    let buttonNo = document.getElementsByClassName("no")[0];
    buttonNo.addEventListener("click", increaseButtonSize);
}

function yes(){


}