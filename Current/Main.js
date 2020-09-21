const displayPressedButton = document.getElementById("display-presssed-button");

const targetHtml = document.documentElement;

targetHtml.addEventListener("keydown", (e) => {
  displayPressedButton.innerHTML = null;
  displayPressedButton.innerHTML = e.key.toUpperCase();
  console.log(e);
});
