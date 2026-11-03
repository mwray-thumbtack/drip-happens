const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");
const header = document.querySelector(".site-header");
const year = document.querySelector("#year");

const closeMenu = () => {
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener(
  "scroll",
  () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  },
  { passive: true },
);

const estimates = {
  leak: {
    price: "$129–$349",
    copy: "Most leaks are fixed in one visit. The water can stop freelancing.",
  },
  clog: {
    price: "$189–$425",
    copy: "Simple clogs cost less. Tiny plastic dinosaurs add character and labor.",
  },
  heater: {
    price: "$249–$1,800",
    copy: "Repairs sit at the low end. Full replacement needs a proper on-site quote.",
  },
  fixture: {
    price: "$159–$475",
    copy: "This range covers most faucets, toilets, and shower fixtures.",
  },
};

const price = document.querySelector("#estimate-price");
const estimateCopy = document.querySelector("#estimate-copy");

document.querySelectorAll('input[name="issue"]').forEach((input) => {
  input.addEventListener("change", () => {
    const estimate = estimates[input.value];
    price.textContent = estimate.price;
    estimateCopy.textContent = estimate.copy;
  });
});

document.querySelectorAll(".faq-list details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) {
      return;
    }

    document.querySelectorAll(".faq-list details").forEach((otherDetail) => {
      if (otherDetail !== detail) {
        otherDetail.open = false;
      }
    });
  });
});

const chaos = document.querySelector("#plumbing-chaos");
const chaosHeadline = document.querySelector("#chaos-headline");
const chaosClose = document.querySelector("#chaos-close");
const chaosBubbles = document.querySelector(".chaos-bubbles");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let chaosTimer;
let chaosCleanupTimer;

const makeChaosBubbles = () => {
  chaosBubbles.replaceChildren();

  Array.from({ length: 30 }).forEach(() => {
    const bubble = document.createElement("span");
    const size = 12 + Math.round(Math.random() * 38);
    const drift = Math.round(Math.random() * 180 - 90);

    bubble.style.setProperty("--bubble-x", `${Math.round(Math.random() * 100)}%`);
    bubble.style.setProperty("--bubble-size", `${size}px`);
    bubble.style.setProperty("--bubble-speed", `${1.7 + Math.random() * 1.8}s`);
    bubble.style.setProperty("--bubble-delay", `${0.7 + Math.random() * 1.5}s`);
    bubble.style.setProperty("--bubble-drift", `${drift}px`);
    chaosBubbles.append(bubble);
  });
};

const finishChaos = () => {
  chaos.classList.remove("is-active", "is-draining");
  chaos.setAttribute("aria-hidden", "true");
  document.body.classList.remove("chaos-active");
  chaosBubbles.replaceChildren();
};

const drainChaos = () => {
  if (!chaos.classList.contains("is-active")) {
    return;
  }

  window.clearTimeout(chaosTimer);
  chaos.classList.add("is-draining");
  chaosCleanupTimer = window.setTimeout(finishChaos, reduceMotion.matches ? 100 : 950);
};

const startChaos = (trigger) => {
  window.clearTimeout(chaosTimer);
  window.clearTimeout(chaosCleanupTimer);
  chaos.classList.remove("is-active", "is-draining");
  makeChaosBubbles();
  chaosHeadline.textContent = trigger.dataset.chaosMessage || "The pipes chose chaos.";
  chaos.setAttribute("aria-hidden", "false");
  document.body.classList.add("chaos-active");

  // Restart the CSS animations when a user activates the chaos more than once.
  void chaos.offsetWidth;
  chaos.classList.add("is-active");
  chaosTimer = window.setTimeout(drainChaos, reduceMotion.matches ? 1800 : 4500);
};

document.querySelectorAll(".chaos-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => startChaos(trigger));
});

chaosClose.addEventListener("click", drainChaos);

chaos.addEventListener("click", (event) => {
  if (event.target === chaos) {
    drainChaos();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    drainChaos();
  }
});

year.textContent = new Date().getFullYear();
