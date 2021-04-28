console.log("app.js starting");

// Changeable velocity of bubbles. Too high value breaks the animation.
const config = {
    BUBBLE_MAX_SPEED: 6,
};

this.config = config;
this.maxSpd = config.BUBBLE_MAX_SPEED;

// Click the bubble to get its number.
function getNumber() {
    var id = this.dataset.value;
    console.log(id);
}
const buttons = document.querySelectorAll('.bubble-item');
buttons.forEach(button => button.addEventListener('click', getNumber, false));

// Get random velocity for bubbles.
function getRandomSpd() {
    return Math.floor(Math.random() * maxSpd);
}

// Bubble-container variable and its measurements.
let bg = {
    element: document.getElementById("bubble-container"),
    width: document.getElementById("bubble-container").offsetWidth,
    height: document.getElementById("bubble-container").offsetHeight
};

// The body of the web page
var widthBody = document.getElementById("body").offsetWidth;
var wSpace = widthBody - bg.width;

// Animation
let bubble = {   

    // Function to add bubbles.
    add: function(dx, dy) {
        let newBubble = Object.create(this);
        newBubble.dx = dx;
        newBubble.dy = dy;
        newBubble.radius = 20;
        newBubble.element = document.getElementById("bubble");
        bg.element.appendChild(newBubble.element);
        return newBubble;
    },

    // Function to place the bubbles.
    initialize: function (x, y) {
        this.element.style.left = x + "px";
        this.element.style.top = y + "px";
    },

    // Function when bubbles hit the walls.
    collision: function (x, y) {
        if (x + this.dx > widthBody - wSpace / 2 - this.radius * 2 || x + this.dx - wSpace / 2 + this.radius < this.radius) {
            // Randomize x speed.
            this.dx = -this.dx * ((Math.random() * maxSpd) / 3);
        }
        if (y + this.dy > (bg.height + 85) - this.radius || y + this.dy + (bg.height - 385) < this.radius) {
            // Randomize y speed.
            this.dy = -this.dy * ((Math.random() * maxSpd) / 3);
        }
    },

    // Function to draw the bubbles and set the animation.
    draw: function (x, y) {
        this.initialize(x, y);
        let bubbleObj = this;
        setTimeout (function () {
            bubbleObj.collision(x, y);
            bubbleObj.draw(x + bubbleObj.dx, y + bubbleObj.dy);
        }, 1000 / 60);  // 60 frames per second.
    }
};

// Adding the bubbles and speed.
let bubble1 = bubble.add(getRandomSpd(maxSpd), getRandomSpd(maxSpd));
let bubble2 = bubble.add(getRandomSpd(maxSpd), getRandomSpd(maxSpd));
let bubble3 = bubble.add(getRandomSpd(maxSpd), getRandomSpd(maxSpd));
let bubble4 = bubble.add(getRandomSpd(maxSpd), getRandomSpd(maxSpd));
let bubble5 = bubble.add(getRandomSpd(maxSpd), getRandomSpd(maxSpd));
let bubble6 = bubble.add(getRandomSpd(maxSpd), getRandomSpd(maxSpd));
let bubble7 = bubble.add(getRandomSpd(maxSpd), getRandomSpd(maxSpd));
let bubble8 = bubble.add(getRandomSpd(maxSpd), getRandomSpd(maxSpd));
let bubble9 = bubble.add(getRandomSpd(maxSpd), getRandomSpd(maxSpd));
let bubble10 = bubble.add(getRandomSpd(maxSpd), getRandomSpd(maxSpd));

// Roughly drawing the bubbles in the middle of the screen.
bubble1.draw((widthBody / 2), 150);
bubble2.draw((widthBody / 2), 140);
bubble3.draw((widthBody / 2), 160);
bubble4.draw((widthBody / 2), 170);
bubble5.draw((widthBody / 2), 180);
bubble6.draw((widthBody / 2), 200);
bubble7.draw((widthBody / 2), 110);
bubble8.draw((widthBody / 2), 250);
bubble9.draw((widthBody / 2), 190);
bubble10.draw((widthBody / 2), 220);