// 🌙 Noćni režim
let dark_theme = document.querySelector(".night_mode a");
let img = dark_theme.querySelector("img");
let background = document.querySelector(".background");
let popup_menu = document.querySelector(".hamburgers");
let formobile = document.querySelector(".for_mobile");

popup_menu.addEventListener("click", function (active) {
  active.preventDefault();
  if (popup_menu.classList.contains("rotate")) {
    popup_menu.classList.remove("rotate");
  } else {
    popup_menu.classList.add("rotate");
  }
  if (formobile.classList.contains("drag")) {
    formobile.classList.remove("drag");
  } else {
    formobile.classList.add("drag");
  }
});

dark_theme.addEventListener("click", function (event) {
  event.preventDefault();
  background.classList.toggle("dark");
  img.style.transform = background.classList.contains("dark")
    ? "rotate(50deg)"
    : "rotate(0deg)";
});

// 📜 Navigacija skrol efekat
let nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("scrolled", window.scrollY > 5);
});
///click to find section function///
let home = document.querySelectorAll(".home");
home.forEach(function (one) {
  one.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 100, behavior: "smooth" });
  });
});
let project = document.querySelectorAll(".Project");
let sec2 = document.querySelector(".sec2");

project.forEach(function (one) {
  one.addEventListener("click", function (event) {
    event.preventDefault();
    let sec2Position = sec2.getBoundingClientRect().top + window.scrollY;
    let offset = 50;
    window.scrollTo({ top: sec2Position - offset, behavior: "smooth" });
  });
});

let contact = document.querySelectorAll(".contact");
let sec3 = document.querySelector(".sec3");
contact.forEach(function (one) {
  one.addEventListener("click", function (event) {
    event.preventDefault();
    let sec3Position = sec3.getBoundingClientRect().top + window.scrollY;
    let offset = 50;
    window.scrollTo({ top: sec3Position - offset, behavior: "smooth" });
  });
});
// 🌐 Izbor jezika
let eng_option = document.querySelectorAll(".eng");
let srb_option = document.querySelectorAll(".srb");

eng_option.forEach((el) =>
  el.addEventListener("click", () => setLanguage("en"))
);
srb_option.forEach((el) =>
  el.addEventListener("click", () => setLanguage("sr"))
);

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  location.reload(); // Osveži stranicu posle izbora jezika
}

function applyLanguage() {
  let lang = localStorage.getItem("lang") || "en";
  let english = document.querySelectorAll(".english");
  let serbian = document.querySelectorAll(".serbian");

  // Nađi sve elemente koji imaju data-typing="true"
  let allTypingElements = document.querySelectorAll("[data-typing='true']");

  // Ukloni .typing sa svih
  allTypingElements.forEach((e) => e.classList.remove("typing"));

  if (lang === "en") {
    // Dodaj typing samo na engleske koji imaju data-typing
    english.forEach((e) => {
      if (e.dataset.typing === "true") {
        e.classList.add("typing");
      }
    });

    english.forEach((e) => e.classList.remove("translate"));
    serbian.forEach((e) => e.classList.add("translate"));

    eng_option.forEach((e) => e.classList.add("black"));
    srb_option.forEach((e) => e.classList.remove("black"));
  } else {
    // Dodaj typing samo na srpske koji imaju data-typing
    serbian.forEach((e) => {
      if (e.dataset.typing === "true") {
        e.classList.add("typing");
      }
    });

    serbian.forEach((e) => e.classList.remove("translate"));
    english.forEach((e) => e.classList.add("translate"));

    eng_option.forEach((e) => e.classList.remove("black"));
    srb_option.forEach((e) => e.classList.add("black"));
  }
}

applyLanguage();
