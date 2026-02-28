const toggle = document.getElementById("toggle-theme");
const body = document.body;
const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
});

function carregar() {
  const msg = document.getElementById("msg");
  const hora = new Date().getHours();
  let saudacao = "";

  if (hora <= 12) {
    saudacao = "Bom Dia!";
  } else if (hora <= 18) {
    saudacao = "Boa Tarde!";
  } else {
    saudacao = "Boa Noite!";
  }

  msg.innerHTML = `<h1>${saudacao}</h1>`;
}
