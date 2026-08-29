"use strict";
const counterElement = document.querySelector('[data-target="value"]');
const decrease = document.querySelector('[data-action="decrease"]');
const reset = document.querySelector('[data-action="reset"]');
const increase = document.querySelector('[data-action="increase"]');
let count = 0;
function updateCounter(action) {
    switch (action) {
        case "decrease":
            count--;
            break;
        case "reset":
            count = 0;
            break;
        case "increase":
            count++;
            break;
    }
    if (counterElement !== null) {
        counterElement.textContent = count.toString();
    }
}
function render() {
    if (counterElement !== null) {
        if (count > 0) {
            counterElement.dataset.state = "positive";
        }
        else if (count < 0) {
            counterElement.dataset.state = "negative";
        }
        else {
            counterElement.dataset.state = "neutral";
        }
    }
}
decrease?.addEventListener("click", () => {
    updateCounter("decrease");
    render();
});
reset?.addEventListener("click", () => {
    updateCounter("reset");
    render();
});
increase?.addEventListener("click", () => {
    updateCounter("increase");
    render();
});
