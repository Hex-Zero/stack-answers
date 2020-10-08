const displayPressedButton = document.getElementById("display-presssed-button");
const seciton = document.getElementById("section");

function createButton(e) {
  const buttonBody = document.createElement("div");
  buttonBody.classList.add("button-body");
  const buttonText = document.createElement("div");
  buttonText.classList.add("display-presssed-button");
  buttonText.innerHTML =
    e.code === "Space" ? e.code.toUpperCase() : e.key.toUpperCase();
  buttonBody.appendChild(buttonText);
  seciton.appendChild(buttonBody);
  setTimeout(() => buttonBody.remove(), 100);
}

const targetHtml = document.documentElement;
targetHtml.addEventListener("keydown", (e) => {
  createButton(e);
  e.preventDefault();
});

targetHtml.addEventListener("keyup", (e) => {
  e.preventDefault();
});
targetHtml.addEventListener("keypress", (e) => {
  e.preventDefault();
});
