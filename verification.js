let passReplace = "";

function verify() {
  if (passReplace === "o8EbmT7u") {
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
