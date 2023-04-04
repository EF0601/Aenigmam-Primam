/*
A WARNING TO THOSE WHO ARE NOT THE DEVELOPERS OF THE PROJECT AND IS A COMPETITOR OF THE EVENT
IF YOU ARE CAUGHT LOOKING FOR INFORMATION IN THE CODE, YOU WILL NOT GET THE REWARD.
FURTHERMORE, WE CAN SEE WHO HAS DOWNLOADED THE GITHUB PROJECT ANYWAY.
*/
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
    location.reload();
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
    keyhole.textContent = "You have intelligence. You have solved it.";
    keyhole.style.color = "blue";
  }
  else {
    keyhole.textContent= "You lack specialty. You shall restart.";
    keyhole.style.color = "red";
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
}
    //anti-brute force functions
