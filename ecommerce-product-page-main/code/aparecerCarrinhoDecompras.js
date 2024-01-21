export default function carrinhoDeComprasAparece() {
  let carrinhoContainerAparece = document.querySelector(".container-carrinho");
  let carrinhoImgClick = document.querySelector(".carrinho");

  function apareceConteudoCarrinho() {
    carrinhoContainerAparece.classList.toggle("ativo");
  }

  carrinhoImgClick.addEventListener("click", apareceConteudoCarrinho);
}
