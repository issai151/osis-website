function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if (u === "admin" && p === "osis123") {
    window.location = "admin.html";
  } else {
    alert("Login gagal!");
  }
}
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  fades.forEach(el => {
    let pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 80) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
