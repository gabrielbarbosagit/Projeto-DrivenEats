function escolherproduto(elemento) {
  
  const pratos = document.querySelectorAll(".pratos > div");
  pratos.forEach((prato) => {
    prato.classList.remove("green");
  });
  
 
  elemento.classList.add("green");
  updateBotaoPedido();
}


function escolherbebida(elemento) {
    
    const bebidas = document.querySelectorAll(".bebidas > div");
    bebidas.forEach((bebida) => {
      bebida.classList.remove("green");
    });
    
    
    elemento.classList.add("green");
    updateBotaoPedido();
  }
  

  function escolhersobremesa(elemento) {
    
    const sobremesas = document.querySelectorAll(".sobremesas > div");
    sobremesas.forEach((sobremesa) => {
      sobremesa.classList.remove("green");
    });
    
    
    elemento.classList.add("green");
    updateBotaoPedido();
  }
  
function updateBotaoPedido() {
  const pratoSelecionado = document.querySelector(".pratos > .green");
  const bebidaSelecionada = document.querySelector(".bebidas > .green");
  const sobremesaSelecionada = document.querySelector(".sobremesas > .green");

  const botaoPedido = document.querySelector(".footer-botao");

  if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
    botaoPedido.style.backgroundColor = "green";
    botaoPedido.textContent = "Finalizar Pedido - Total: R$ " + getPrecoTotal().toFixed(2);
  } else {
    botaoPedido.style.backgroundColor = "#A1A1A1";
    botaoPedido.textContent = "Selecione os 3 itens para fechar o pedido";
  }

  
}
  
  
  function verificarpedido() {
  const pratoSelecionado = document.querySelector(".pratos > .green");
  const bebidaSelecionada = document.querySelector(".bebidas > .green");
  const sobremesaSelecionada = document.querySelector(".sobremesas > .green");

  const botaoPedido = document.querySelector(".footer-botao");

  
    function updateBotaoPedido() {
      if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
        botaoPedido.style.backgroundColor = "green";
        botaoPedido.textContent = "Finalizar Pedido - Total: R$ " + getPrecoTotal().toFixed(2);
      } else {
        botaoPedido.style.backgroundColor = "#A1A1A1";
        botaoPedido.textContent = "Selecione os 3 itens para fechar o pedido";
        if (!pratoSelecionado || !bebidaSelecionada || !sobremesaSelecionada) {
          botaoPedido.style.backgroundColor = "#A1A1A1";
          botaoPedido.textContent = "Selecionar Pedido";
        }
      }
    }
    
  

  function getPrecoTotal() {
    const pratoPreco = parseFloat(pratoSelecionado.querySelector("#preços").textContent.replace("R$ ", ""));
    const bebidaPreco = parseFloat(bebidaSelecionada.querySelector("#preços").textContent.replace("R$ ", ""));
    const sobremesaPreco = parseFloat(sobremesaSelecionada.querySelector("#preços").textContent.replace("R$ ", ""));
    return pratoPreco + bebidaPreco + sobremesaPreco;
  }

  function toggleSelection(element) {
    if (element.classList.contains("green")) {
      element.classList.remove("green");
    } else {
      element.classList.add("green");
    }
    updateBotaoPedido();
  }
  
  pratoSelecionado.onclick = function() {
    toggleSelection(pratoSelecionado);
  }
  
  bebidaSelecionada.onclick = function() {
    toggleSelection(bebidaSelecionada);
  }
  
  sobremesaSelecionada.onclick = function() {
    toggleSelection(sobremesaSelecionada);
  }
  
  function updateBotaoPedido() {
    
      if (pratoSelecionado.classList.contains("green") &&
          bebidaSelecionada.classList.contains("green") &&
          sobremesaSelecionada.classList.contains("green")) {
        botaoPedido.style.backgroundColor = "green";
        botaoPedido.textContent = "Finalizar Pedido - Total: R$ " + getPrecoTotal().toFixed(2);
      } else {
        botaoPedido.style.backgroundColor = "#A1A1A1";
        botaoPedido.textContent = "Selecione os 3 itens para fechar o pedido";
      }
    }
    
  
    if (!pratoSelecionado || !bebidaSelecionada || !sobremesaSelecionada) {
      botaoPedido.style.backgroundColor = "green";
      botaoPedido.textContent = "Finalizar Pedido - Total: R$ " + getPrecoTotal().toFixed(2);
    }
  }
  
  
  

  if (pratoSelecionado.classList.contains("green") &&
  bebidaSelecionada.classList.contains("green") &&
  sobremesaSelecionada.classList.contains("green")) {
const pratoTitulo = pratoSelecionado.querySelector("#titulos").textContent;
const bebidaTitulo = bebidaSelecionada.querySelector("#titulos").textContent;
const sobremesaTitulo = sobremesaSelecionada.querySelector("#titulos").textContent;
const precoTotal = getPrecoTotal();

const mensagemPedido = `Gostaria de fazer o pedido:\n- Prato: ${pratoTitulo}\n- Bebida: ${bebidaTitulo}\n- Sobremesa: ${sobremesaTitulo}\nTotal: R$ ${precoTotal.toFixed(2)}`;
}