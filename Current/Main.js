const displayPressedButton = document.getElementById("display-presssed-button");

const seciton = document.getElementById("section");
const buttonBody = document.createElement("div");
buttonBody.classList.add("button-body");
const buttonText = document.createElement("div");
buttonText.classList.add("display-presssed-button");
buttonBody.appendChild(buttonText);

seciton.appendChild(buttonBody);

const changeText = buttonBody.getElementsByClassName(
  "display-presssed-button"
)[0];

const targetHtml = document.documentElement;
targetHtml.addEventListener("keydown", (e) => {
  changeText.innerHTML = e.key.toUpperCase();
  seciton.appendChild(buttonBody);
  // displayPressedButton.innerHTML = null;
  // displayPressedButton.innerHTML = e.key.toUpperCase();
  // console.log(e);
});
