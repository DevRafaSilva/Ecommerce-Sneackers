export default function mudarFotoEvent() {
  const ImagemPai = document.querySelector(".produto-pai");
  const imagensFilhos = document.querySelectorAll(".produtos-filhos img");

  imagensFilhos.forEach((itemClick, index) => {
    itemClick.addEventListener("click", () => {
      ImagemPai.innerHTML = ` <img src="${itemClick.src}"/>`;
      imagensFilhos.forEach((classAdd) => {
        classAdd.classList.remove("on");
      });
      imagensFilhos[index].classList.add("on");
    });
  });
}
