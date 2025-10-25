let from_right_to_left_whole_text = document.querySelectorAll(
  ".from_right_to_left_whole_text"
);
let from_left_to_right_whole_text = document.querySelectorAll(
  ".from_left_to_right_whole_text"
);
let typing = document.querySelectorAll(".typing");

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const offset = 100;
  return (
    rect.top < window.innerHeight + offset &&
    rect.bottom > -offset &&
    rect.left < window.innerWidth + offset &&
    rect.right > -offset
  );
}

function handleScroll() {
  from_right_to_left_whole_text.forEach((element) => {
    if (isInViewport(element) && !element.classList.contains("animate")) {
      element.classList.add("animate");
    } else if (
      !isInViewport(element) &&
      element.classList.contains("animate")
    ) {
      element.classList.remove("animate");
    }
  });

  from_left_to_right_whole_text.forEach((element) => {
    if (isInViewport(element) && !element.classList.contains("animate")) {
      element.classList.add("animate");
    } else if (
      !isInViewport(element) &&
      element.classList.contains("animate")
    ) {
      element.classList.remove("animate");
    }
  });

  typing.forEach((element) => {
    if (isInViewport(element) && !element.classList.contains("animate")) {
      element.classList.add("animate");
    } else if (
      !isInViewport(element) &&
      element.classList.contains("animate")
    ) {
      element.classList.remove("animate");
    }
  });

  // Sad pozovi typing animaciju
  handleTypingAnimation();
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

handleScroll();

function handleTypingAnimation() {
  typing.forEach((element) => {
    let spans = element.querySelectorAll("span");
    if (!spans.length) return;

    if (element.classList.contains("animate")) {
      let i = 0;
      let interval = setInterval(() => {
        if (!element.classList.contains("animate")) {
          clearInterval(interval);
          return;
        }
        if (i < spans.length) {
          spans[i].classList.add("type");
          i++;
        } else {
          clearInterval(interval);
        }
      }, 10);
    } else {
      let i = spans.length - 1;
      let interval = setInterval(() => {
        if (element.classList.contains("animate")) {
          clearInterval(interval);
          return;
        }
        if (i >= 0) {
          spans[i].classList.remove("type");
          i--;
        } else {
          clearInterval(interval);
        }
      }, 3);
    }
  });
}

// Inicijalno raspodeli slova u spanove na stranici, ovo je bitno da animacije rade
let selectDomObjects = [
  ".from_left_to_right_reverse_Individually",
  ".from_right_to_left_reverse_Individually",
  ".from_top_to_bottom_Individually",
  ".from_bottom_to_top_Individually",
  ".typing",
  ".wave_left_to_right",
  ".wave_right_to_left",
];
selectDomObjects.forEach(function (oneoftheclasses, number) {
  let selectOneoftheclasses = document.querySelectorAll(oneoftheclasses);
  selectOneoftheclasses.forEach(function (element, index) {
    let splitTexts = element.innerText.split("");
    element.innerText = "";
    splitTexts.forEach(function (text) {
      if (text === " ") text = "\u00A0";
      let CreateSpan = document.createElement("span");
      CreateSpan.textContent = text;
      element.appendChild(CreateSpan);
    });
  });
});
