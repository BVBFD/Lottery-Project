const btn = document.querySelector(".playBtn");
const divBoxes = document.querySelectorAll(".numboxRow span div");
console.log(divBoxes);

btn.addEventListener("click", () => {
  divBoxes.forEach((box) => {
    box.classList.toggle("active");
  });
});
