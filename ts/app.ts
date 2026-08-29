const counter = document.querySelector<HTMLSpanElement>(
  '[data-target="value"]',
);

const decrease = document.querySelector<HTMLButtonElement>(
  '[data-action="decrease"]',
);

const reset = document.querySelector<HTMLButtonElement>(
  '[data-action="reset"]',
);

const increase = document.querySelector<HTMLButtonElement>(
  '[data-action="increase"]',
);

let count: number = 0;

function ChangeCounter(action: string): void {
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

function ChangeCounterColor(): void {
  if (count > 0) {
    if (counter !== null) counter.style.color = "green";
  } else if (count < 0) {
    if (counter !== null) counter.style.color = "red";
  } else {
    if (counter !== null) counter.style.color = "black";
  }
}

decrease?.addEventListener("click", () => {
  ChangeCounter("decrease");
  ChangeCounterColor();
});

reset?.addEventListener("click", () => {
  ChangeCounter("reset");
  ChangeCounterColor();
});

increase?.addEventListener("click", () => {
  ChangeCounter("increase");
  ChangeCounterColor();
});
