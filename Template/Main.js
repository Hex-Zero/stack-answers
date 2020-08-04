const yourContent = document.createElement("div");
yourContent.setAttribute("class", "content");
const yourText = document.createTextNode("Lorem ipsum");
yourContent.appendChild(yourText);

const graphElem = document.getElementsByClassName("rows");
const cssTemplateString = `td > .rows > .content{
    position: absolute;
    left: ${graphElem[0].clientWidth}px;
    height: calc(${graphElem[0].clientHeight}px +2px);
    width: calc(${graphElem[0].clientWidth}px + 2px);
    background: white;
    padding: 3rem;
    border: 1px solid gray;
    top: 0;
}`;
const styleTag = document.createElement("style");
styleTag.innerHTML = cssTemplateString;
document.head.insertAdjacentElement("beforeend", styleTag);

for (let i = 0; i < graphElem.length; i++) {
  graphElem[i].addEventListener("click", function (event) {
    event.target.appendChild(yourContent);
  });
}
