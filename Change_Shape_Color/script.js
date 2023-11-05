const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f1c40f", "#9b59b6", "#e67e22", "#1abc9c", "#d35400", "#34495e", "#95a5a6"];
const shapes = ["circle", "square", "triangle", "rectangle", "diamond"];
function getRandomColor() {
   return colors[Math.floor(Math.random() * colors.length)];
}
function getRandomShape() {
   return shapes[Math.floor(Math.random() * shapes.length)];
}
document.getElementById("changeColorButton").addEventListener("click", function () {
   const shape = document.getElementById("shape");
   shape.style.backgroundColor = getRandomColor();
});
document.getElementById("changeShapeButton").addEventListener("click", function () {
   const shape = document.getElementById("shape");
   const randomShape = getRandomShape();
   // Reset border-radius
   shape.style.borderRadius = "0";
   // Apply different border-radius values for different shapes
   if (randomShape === "circle") {
       shape.style.borderRadius = "50%";
   } else if (randomShape === "triangle") {
       shape.style.borderLeft = "75px solid transparent";
       shape.style.borderRight = "75px solid transparent";
       shape.style.borderBottom = "130px solid #2ecc71"; // Change color as needed
   } else if (randomShape === "rectangle") {
       shape.style.width = "200px";
       shape.style.height = "100px";
   } else if (randomShape === "diamond") {
       shape.style.width = "100px";
       shape.style.height = "100px";
       shape.style.transform = "rotate(45deg)";
   }
});
// Initial shape and color
document.getElementById("changeColorButton").click();
document.getElementById("changeShapeButton").click();