//inputs
let valReplace = "";
let passReplace = "";
//locations
const keyhole = document.querySelector('.keyhole');
//verify functions
function inputVal() {
  const val = document.querySelector('.input').value;
  console.log(val);
  valReplace = val;
}
function verify() {
  if (passReplace === "Tqe83") {
    document.querySelector(".verification").style.display = "none";
  }
  else {
    location.reload()
  }
}
//puzzle functions
function passInput() {
  const val = document.querySelector('.pass').value;
  console.log(val);
  passReplace = val;
}

function turnsTheDoor() {
  if (valReplace === "R T") {
    alert("You have intelligence.");
  }
  else {
    alert("You lack specialty. You shall restart.");
    location.reload()
  }
}
    //anti-brute force functions
