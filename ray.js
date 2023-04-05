/*
A WARNING TO THOSE WHO ARE NOT THE DEVELOPERS OF THE PROJECT AND IS A COMPETITOR OF THE EVENT
IF YOU ARE CAUGHT LOOKING FOR INFORMATION IN THE CODE, YOU WILL NOT GET THE REWARD.
FURTHERMORE, WE CAN SEE WHO HAS DOWNLOADED THE GITHUB PROJECT ANYWAY.
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
function verify() {
  if (passReplace === "Tqe83") {
    document.querySelector(".verification").style.display = "none";
  }
  else {
    location.reload();
  }
}
//puzzle functions


function turnsTheDoor() {
  if (valReplace === "R T") {
    keyhole.textContent = "You have intelligence. You have solved it.";
    keyhole.style.color = "blue";
  }
  else {
    keyhole.textContent = "You lack specialty. You shall restart.";
    keyhole.style.color = "red";
    document.querySelector('.input').style.display="none";
    setTimeout(() => {
      location.reload();
    }, 2500);
  }
}
//anti-brute force functions (fail)


// const d = new Date();
// let minutes = d.getMinutes();

// function cooldown() {
//   if (minutes != 59) {
//     document.cookie = "nextTime=" + minutes + "; expires=" + new Date(new Date().getTime() + 180 * 1000).toUTCString() + "; path=/";
//     console.log("Cookie set with value: " + minutes);
//     console.log(String(document.cookie.replace(/(?:(?:^|.*;\s*)nextTime\s*\=\s*([^;]*).*$)|^.*$/, "$1")));
//   }
// }


// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(';');
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }
