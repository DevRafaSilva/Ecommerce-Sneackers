export default function AbrirModalEvent() {
  const ImagemPai = document.querySelector(".produto-pai");
  const close = document.querySelector(".close");
  const carrosel = document.querySelector(".carrosel-de-imagens");

  function aparecerCarrosel() {
    carrosel.classList.add("on");
  }

  ImagemPai.addEventListener("click", aparecerCarrosel);

  function fecharCarrosel() {
    carrosel.classList.remove("on");
    document.body.style.background = "white";
  }

  close.addEventListener("click", fecharCarrosel);
}

AbrirModalEvent();
