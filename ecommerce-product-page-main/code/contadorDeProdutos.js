export default function ContadorDeProduytos() {
  let somarProduto = document.querySelector(".contador-soma");
  let indexProduto = document.querySelector(".quantidade-produtos");
  let diminuirProduto = document.querySelector(".contador-diminui");

  function contador() {
    function somar() {
      indexProduto.innerHTML++;
      if (indexProduto.innerHTML >= 6) {
        indexProduto.innerHTML = 6;
      }
    }
    somarProduto.addEventListener("click", somar);

    function diminuir() {
      indexProduto.innerHTML--;
      if (indexProduto.innerHTML <= 0) {
        indexProduto.innerHTML = 0;
      }
    }
    diminuirProduto.addEventListener("click", diminuir);
  }

  contador();
}
