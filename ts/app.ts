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

let command: string;

function ChangeCounter(action: string) {
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
