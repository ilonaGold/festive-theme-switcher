const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")

function changeTheme() {
    const element = document.body;
    if (element.classList.toggle("snow")) {
        greeting.innerText = "☃️ Happy New Year!";
    } else {
        greeting.innerText = "🎅 Merry Christmas!";
    }
  }

snowBtn.addEventListener("click", changeTheme);
christmasBtn.addEventListener("click", changeTheme);