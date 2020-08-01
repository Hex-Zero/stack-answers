$(document).ready(function (e) {});

const section = $("section");
let isOddStarter;

function drawBoxes(amount, height, col) {
  let rowCount = Math.ceil(amount / col);
  let heightSet = rowCount * height + 2;
  let evenCol = rowCount;

  for (let i = 1; i <= amount; i++) {
    section.append(`<div class='content ${isSmaller(i, evenCol)}'></div>`);
  }
  section.css("height", heightSet + "rem");
}

drawBoxes(11, 19, 5);

function isSmaller(i, evenCol) {
  if (i % evenCol === 0 && (i / evenCol) % 2 === 0) {
    return "smaller";
  }
  //   else if ((i + 1) % evenCol === 0 && ((i + 1) / evenCol) % 2 === 0) {
  //     return "smaller";
  //   }
}
