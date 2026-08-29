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
            count++;
            break;
        case "reset":
            count--;
            break;
        case "increase":
            count == 0;
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
    if (counter !== null) {
        count = 0;
        counter.textContent = count.toString();
    }
});
increase?.addEventListener("click", () => {
    ChangeCounter("increase");
});
