const box = document.querySelector(".box");
const display = (val) => {
  console.log(val);
  if (val === "del") {
    console.log(box.textContent);
    box.textContent = box.textContent.substring(0, box.textContent.length - 1);
  } else if (val === "AC") {
    box.textContent = "";
  } else if (val === "=") {
    box.textContent = eval(box.textContent);
  } else {
    box.textContent += val;
  }
};
