let passReplace = "";

function verify() {
  if (passReplace === "Tqe83") {
    document.querySelector(".verification").style.display = "none";
  }
  else {
    location.reload();
  }
}
function passInput() {
  const val = document.querySelector('.pass').value;
  console.log(val);
  passReplace = val;
}
