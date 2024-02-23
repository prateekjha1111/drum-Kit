var buttons = document.querySelectorAll(".drum");

buttons.forEach(function(btn, index) {
    btn.addEventListener("click", function() {
        var audio = new Audio(`sounds/${index + 1}.mp3`);
        audio.play();
    });
});

var buttons = document.querySelectorAll(".drum");

// Function to play audio based on key press
function playAudio(key) {
    switch (key) {
        case "w":
            new Audio('sounds/1.mp3').play();
            break;
        case "a":
            new Audio('sounds/2.mp3').play();
            break;
        case "s":
            new Audio('sounds/3.mp3').play();
            break;
        case "d":
            new Audio('sounds/4.mp3').play();
            break;
        case "j":
            new Audio('sounds/5.mp3').play();
            break;
        case "k":
            new Audio('sounds/6.mp3').play();
            break;
        case "l":
            new Audio('sounds/7.mp3').play();
            break;
        default:
            console.log("Invalid key pressed!");
    }
}

// Adding click event listeners to buttons
buttons.forEach(function(btn, index) {
    btn.addEventListener("click", function() {
        playAudio(btn.dataset.key);
    });
});

// Adding key press event listener
document.addEventListener("keypress", function(event) {
    var keyPressed = event.key.toLowerCase();
    if (["w", "a", "s", "d", "j", "k", "l"].includes(keyPressed)) {
        playAudio(keyPressed);
    }
});
