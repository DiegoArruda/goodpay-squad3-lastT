/* Incorporar este script ao script do squad responsável pela página */
const buttonEnviar = document.getElementById("buttonEnviar");

buttonEnviar.addEventListener("click", () => {
  const modalEmail = document.getElementById("recuperarEmail").value;
  const paragrafoModal = document.getElementById("paragrafoModal");
  paragrafoModal.innerText = `Verificar a caixa de entrada do ${modalEmail}`;
});
