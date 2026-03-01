// DarkMode
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

// Função: Bom Dia, Boa Tarde, Boa Noite!
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

// Animação Nome
const text = "Guilherme Fernando";
const typedEl = document.getElementById("typed");

let i = 0;
function digitar() {
  if (i < text.length) {
    typedEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(digitar, 120);
  }
}

window.addEventListener("DOMContentLoaded", digitar);
