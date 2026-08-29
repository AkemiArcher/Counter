"use strict";
const counter = document.querySelector('[data-target="value"]');
const decrease = document.querySelector('[data-action="decrease"]');
const reset = document.querySelector('[data-action="reset"]');
const increase = document.querySelector('[data-action="increase"]');
let count = 0;
let command;
function ChangeCounter(action) {
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
    if (counter !== null) {
        counter.textContent = count.toString();
    }
}
decrease?.addEventListener("click", () => {
    ChangeCounter("decrease");
});
reset?.addEventListener("click", () => {
    ChangeCounter("reset");
});
increase?.addEventListener("click", () => {
    ChangeCounter("increase");
});
