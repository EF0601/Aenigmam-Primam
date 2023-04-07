/*
<!-- A WARNING TO SEEKERS, SHOULD YOU BE CAUGHT LOOKING FOR INFORMATION WITHIN THE CODE, YOUR ENTRY IS TERMINATED.
WE CAN SEE WHO HAS DOWNLOADED THE GITHUB PROJECT -->
*/
//inputs
let valReplace = "";

//locations
const keyhole = document.querySelector('.keyhole');
//verify functions
function inputVal() {
  const val = document.querySelector('.input').value;
  console.log(val);
  valReplace = val;
}
//puzzle functions


function turnsTheDoor() {
  if (valReplace === "(2,2)") {
    keyhole.textContent = "You have intelligence. You have solved it.";
    keyhole.style.color = "blue";
  }
  else {
    keyhole.textContent = "You lack specialty. You shall restart.";
    keyhole.style.color = "red";
    document.querySelector('.input').style.display = "none";
    setTimeout(() => {
      location.reload();
    }, 2500);
  }
}
