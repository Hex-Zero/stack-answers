const graphElem = document.getElementsByClassName("rows");

for (let i = 0; i < graphElem.length; i++) {
  const cssTemplateString = `td > .rows::before{
        left: -100px;
        top: calc(${graphElem[0].clientHeight}/2);
    }`;
  const styleTag = document.createElement("style");
  styleTag.innerHTML = cssTemplateString;
  document.head.insertAdjacentElement("beforeend", styleTag);

  graphElem[i].addEventListener("click", function (event) {
    event.target.setAttribute("data-before", "anything");
  });
}
