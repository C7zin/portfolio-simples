const menuHamburguer = document.querySelector(".menu-hamburguer");
menuHamburguer.addEventListener("click", () => {
  toggleMenu();
});

function toggleMenu() {
  const nav = document.querySelector(".nav-responsive");
  menuHamburguer.classList.toggle("change");
}
// ======================
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que o formulário seja enviado normalmente

    // Pegando os valores dos campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Verificando se todos os campos foram preenchidos
    if (name && email && phone && subject && message) {
      // Exibindo a mensagem enviada
      document.getElementById("output-name").textContent = name;
      document.getElementById("output-email").textContent = email;
      document.getElementById("output-phone").textContent = phone;
      document.getElementById("output-subject").textContent = subject;
      document.getElementById("output-message").textContent = message;

      // Exibindo a área com a mensagem
      document.getElementById("message-output").style.display = "block";

      // Limpando os campos do formulário
      document.getElementById("contact-form").reset();
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
