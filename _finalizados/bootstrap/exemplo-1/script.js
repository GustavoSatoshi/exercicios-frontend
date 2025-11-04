// botão de voltar ao topo
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: "smooth" });
});

//simulação de envio de formulario
document.getElementById('form-contato').addEventListener('submit' , (e) => {
    e.preventDefault();
    alert('Formulário enviado com sucesso!');
});