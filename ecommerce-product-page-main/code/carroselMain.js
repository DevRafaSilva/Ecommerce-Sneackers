export default function carroselMain() {
  const imagensImgContainerMain = document.getElementById("img-main");
  const imagensImgMain = document.querySelectorAll("#img-main img");
  const seta1Main = document.querySelector("#seta-next");
  const seta2Main = document.querySelector("#seta-previus");

  let index2 = 0;
  function carroselAoClick() {
    function proximaImagem() {
      index2++;
      if (index2 > imagensImgMain.length - 1) {
        index2 = 0;
      }

      imagensImgContainerMain.style.transform = `translateX(${-index2 * 100}%)`;
    }

    seta1Main.addEventListener("click", proximaImagem);

    function imagemAnterior() {
      index2++;
      if (index2 > imagensImgMain.length - 1) {
        index2 = 0;
      }

      imagensImgContainerMain.style.transform = `translateX(${-index2 * 100}%)`;
    }
    seta2Main.addEventListener("click", imagemAnterior);
  }

  carroselAoClick();
}
