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
    document.querySelector('#reply').style.display = "block";
    document.querySelector('.input').disabled = true;
  }
  else {
    document.querySelector('#wrong').style.display = "block";
    document.querySelector('.input').disabled = true;
    setTimeout(() => {
      location.reload();
    }, 2500);
  }
}
