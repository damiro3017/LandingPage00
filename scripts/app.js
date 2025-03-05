const navbar = document.querySelector(".navbar");
const openMenu = document.querySelector(".open__menu");
const closeMenu = document.querySelector(".close__menu");

openMenu.addEventListener("click", () => {
  navbar.classList.add("enabled");
});

closeMenu.addEventListener("click", () => {
  navbar.classList.remove("enabled");
});

document
  .querySelector(".hero__form")
  .addEventListener("submit", function (event) {
    const emailInput = document.getElementById("emailAddress");

    if (!emailInput.value.includes("@")) {
      event.preventDefault();
      alert("Please enter a valid email address.");
    }
  });
