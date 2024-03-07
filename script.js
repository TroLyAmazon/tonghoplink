const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let currentColorIndex = 0;

function changeBorderColor() {
  currentColorIndex = (currentColorIndex + 1) % rainbowColors.length;
  document.getElementById("BienGioi1").style.backgroundImage = `linear-gradient(to right, ${rainbowColors[currentColorIndex]}, ${rainbowColors[(currentColorIndex + 1) % rainbowColors.length]})`;
}

setInterval(changeBorderColor, 2000); // Thay đổi màu sau mỗi 2 giây (điều chỉnh theo nhu cầu)
