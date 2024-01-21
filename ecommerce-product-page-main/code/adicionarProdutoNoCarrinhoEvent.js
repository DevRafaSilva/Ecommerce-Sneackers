export default function adiconarItemAoCarrinho() {
  // ADICIONAR ITEM AO CARRINHO

  const imagemDeProdutoAoCarrinho = document.querySelector(
    "[data-imagem-no-carrinho]"
  );
  const precoDoProdutoAoCarrinho = document.querySelector(
    "[ data-preco-produtos]"
  );
  const quantidadeDeProdutosAoCarrinho = document.querySelector(
    "[data-quantidadeDeProdutoAdicionado]"
  );
  const botaoAdicionarProdutoAoCarrinho = document.querySelector(
    "[data-botaoAdicionarProdutoAoCarrinho]"
  );
  const ConteudoCarrinhoDeCompras =
    document.querySelector(".conteudo-carrinho");
  const NomeProdutoCarrinho = document.querySelector("[data-nomeProdutos]");
  const selecionarMensagemCarrinho = document.querySelector(
    ".conteudo-carrinho span"
  );

  const erroSpan = document.querySelector(".spanerro");

  function adicionarProdutosNoCarrinho() {
    let deleteImg = `<img class="excluir-produto" src="/ecommerce-product-page-main/images/icon-delete.svg"`;
    let div = document.createElement("div");
    function produtosAdicionadoEvent() {
      const imagemProduto = imagemDeProdutoAoCarrinho.src;
      const precoProduto = precoDoProdutoAoCarrinho.innerHTML;
      const quantidadeProduto = quantidadeDeProdutosAoCarrinho.innerHTML;
      const nomeProduto = NomeProdutoCarrinho.innerHTML;
      const valorProdutoTotal =
        Number(quantidadeProduto) * Number(precoProduto);

      ConteudoCarrinhoDeCompras.appendChild(div);
      function verificarSeOprodutoEstaEmZero() {
        if (quantidadeProduto === "0") {
          erroSpan.innerHTML =
            "Você tem que Adicionar a quantidade de itens que deseja ";
        } else {
          erroSpan.innerHTML = "";
          selecionarMensagemCarrinho.innerHTML = "";
          div.innerHTML = `
          <div class="Conteudo-produtos-itens-grid">
            <div class="Conteudo-produtos-itens">
              <img class="img-width" src="${imagemProduto}"/>
              <div class="grid-2-produtos">
                <span>${nomeProduto}</span>
                <div class="infos-produto"> 
                  <span id="preco-no-carrinho">${precoProduto}</span>
                  <span>${quantidadeProduto}</span>
                  <span id="preco-no-carrinho" class="preco-total">${valorProdutoTotal}</span>
                  <div>
                  </div>
                  <img id="delete" ${deleteImg}/>
                </div>
              </div>
            </div>
            <div class="btn-carrinho">
              <button >CHECKOUT</button>
            </div>
          </div>
          `;
          let excluirProdutos = document.querySelector(".excluir-produto");
          excluirProdutos.addEventListener("click", excluir);
        }
      }
      verificarSeOprodutoEstaEmZero();
    }

    function excluir() {
      selecionarMensagemCarrinho.innerHTML = " carrinho está vazio";
      div.remove();
    }

    botaoAdicionarProdutoAoCarrinho.addEventListener(
      "click",
      produtosAdicionadoEvent
    );
  }

  adicionarProdutosNoCarrinho();
}
