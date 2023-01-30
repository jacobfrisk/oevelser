const knap = document.querySelector("img");

knap.addEventListener("click", showItem);

function showItem() {
  console.log("klik");
}

showItem();

const time = new Date().getHours();

function tidPaaDagen() {
  if (time < 5 && 10) {
    console.log("Godmorgen");
  } else if (time < 10 && 18) {
    console.log("Goddag");
  } else if (time > 18 && 24) {
    console.log("Godaften");
  } else {
    console.log("Godnat");
  }
}

tidPaaDagen();
