const buttonClick = document.getElementById("myButton");

buttonClick.addEventListener("click", function (e) {
  e.toElement.parentElement.classList.toggle("extend-box-up");
});
