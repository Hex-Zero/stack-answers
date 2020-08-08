const fireballArray = [];

function generateFireBallWithAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  return el;
}

for (let i = 0; i < 10; i++) {
  fireballArray.push(
    generateFireBallWithAttributes(document.createElement("img"), {
      src: "Capture.PNG",
      width: "32",
      height: "32",
    })
  );
}

fireballArray.forEach((fireballElement) => {
  document.getElementById("game-body").appendChild(fireballElement);
  const fireball = { x: fFireball(fireballElement.offsetWidth), y: 0 };
  const fireLoop = function () {
    fireball.y += 2;
    fireballElement.style.top = fireball.y + "px";
    if (fireball.y > window.innerHeight) {
      fireball.x = fFireball(fireballElement.offsetWidth);
      fireballElement.style.left = fireball.x + "px";
      fireball.y = 0;
    }
  };
  fireballElement.style.left = fireball.x + "px";
  let fireInterval = setInterval(fireLoop, 1000 / 100);
});

function fFireball(offset) {
  return Math.floor(Math.random() * (window.innerWidth - offset));
}
