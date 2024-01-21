export default function carroselEvent() {
  const imagensImgContainer = document.getElementById("img");
  const imagensImg = document.querySelectorAll("#img img");
  const seta1 = document.querySelector(".seta1");
  const seta2 = document.querySelector(".seta2");
  let index = 0;
  function carroselAoClick() {
    function proximaImagem() {
      index++;
      if (index > imagensImg.length - 1) {
        index = 0;
      }

      imagensImgContainer.style.transform = `translateX(${-index * 100}%)`;
    }
    seta2.addEventListener("click", proximaImagem);

    function imagemAnterior() {
      index++;
      if (index > imagensImg.length - 1) {
        index = 0;
      }

      imagensImgContainer.style.transform = `translateX(${-index * 100}%)`;
    }
    seta1.addEventListener("click", imagemAnterior);
  }

  carroselAoClick();
}
