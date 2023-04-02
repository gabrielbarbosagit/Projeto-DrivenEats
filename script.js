
  
  
  
  // select the elements and store them in variables
  const pratos = document.querySelectorAll(".pratos > div");
  const bebidas = document.querySelectorAll(".bebidas > div");
  const sobremesas = document.querySelectorAll(".sobremesas > div");
  const BotaoGreen = document.querySelector(".footer-botao");

  // define the function to update the button state
  function updateBotaoGreen() {
  // check if all three items are selected
  const pratoSelecionado = document.querySelector(".pratos > .green");
  const bebidaSelecionada = document.querySelector(".bebidas > .green");
  const sobremesaSelecionada = document.querySelector(".sobremesas > .green");

  if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
    BotaoGreen.style.backgroundColor = "green";
    BotaoGreen.textContent = "Finalizar Pedido - Total: R$ " + parseFloat(getPrecoTotal()).toFixed(2);

   
  } else {
    BotaoGreen.style.backgroundColor = "#A1A1A1";
    BotaoGreen.textContent = "Selecione os 3 itens para fechar o pedido";
  }
  }

  // define the function to get the total price
  function getPrecoTotal() {
  // get the prices of the selected items
  
  const pratoSelecionado = document.querySelector(".pratos > .green");
  const bebidaSelecionada = document.querySelector(".bebidas > .green");
  const sobremesaSelecionada = document.querySelector(".sobremesas > .green");
  let pratoPreco = 0;
  let bebidaPreco = 0;
  let sobremesaPreco = 0;

  if (pratoSelecionado) {
  pratoPreco = parseFloat(pratoSelecionado.querySelector(".preços").textContent.replace("R$ ", "").replace(",", "."));
  }
  if (bebidaSelecionada) {
  bebidaPreco = parseFloat(bebidaSelecionada.querySelector(".preços").textContent.replace("R$ ", "").replace(",", "."));
  }
  if (sobremesaSelecionada) {
  sobremesaPreco = parseFloat(sobremesaSelecionada.querySelector(".preços").textContent.replace("R$ ", "").replace(",", "."));
  
  }

  return pratoPreco + bebidaPreco + sobremesaPreco;
  }

  // define the function to toggle the selection of an item
  function toggleSelection(element, elements) {
  elements.forEach((item) => {
  if (item !== element && item.classList.contains("green")) {
  item.classList.remove("green");
  }
  });
  if (element.classList.contains("green")) {
  element.classList.remove("green");
  } else {
  element.classList.add("green");
  }
  updateBotaoGreen();
  }

  // add event listeners to the items to toggle the selection
  pratos.forEach((prato) => {
  prato.addEventListener("click", () => {
  toggleSelection(prato, pratos);
  });
  });

  bebidas.forEach((bebida) => {
  bebida.addEventListener("click", () => {
  toggleSelection(bebida, bebidas);
  });
  });

  sobremesas.forEach((sobremesa) => {
  sobremesa.addEventListener("click", () => {
  toggleSelection(sobremesa, sobremesas);
  });
  });

  BotaoGreen.addEventListener("click", () => {
    const pratoSelecionado = document.querySelector(".pratos > .green");
    const bebidaSelecionada = document.querySelector(".bebidas > .green");
    const sobremesaSelecionada = document.querySelector(".sobremesas > .green");
    const total = getPrecoTotal();
  
    if (!pratoSelecionado || !bebidaSelecionada || !sobremesaSelecionada) {
      alert("Por favor, selecione um item de cada categoria para finalizar o pedido.");
      return;
    }
  
    finalizarpedido(pratoSelecionado, bebidaSelecionada, sobremesaSelecionada, total);
  });
  
  function finalizarpedido(pratoSelecionado, bebidaSelecionada, sobremesaSelecionada, total) {

    let pratoNome = "";
    let bebidaNome = "";
    let sobremesaNome = "";
    let pratoPreco = "";
    let bebidaPreco = "";
    let sobremesaPreco = "";
  
    if (pratoSelecionado && pratoSelecionado.querySelector(".titulos") && pratoSelecionado.querySelector(".preços")) {
      pratoNome = pratoSelecionado.querySelector(".titulos").textContent;
      pratoPreco = pratoSelecionado.querySelector(".preços").textContent;
    }
    if (bebidaSelecionada && bebidaSelecionada.querySelector(".titulos") && bebidaSelecionada.querySelector(".preços")) {
      bebidaNome = bebidaSelecionada.querySelector(".titulos").textContent;
      bebidaPreco = bebidaSelecionada.querySelector(".preços").textContent;
    }
    if (sobremesaSelecionada && sobremesaSelecionada.querySelector(".titulos") && sobremesaSelecionada.querySelector(".preços")) {
      sobremesaNome = sobremesaSelecionada.querySelector(".titulos").textContent;
      sobremesaPreco = sobremesaSelecionada.querySelector(".preços").textContent;
    }
  
    const mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${pratoNome} (${pratoPreco})\n- Bebida: ${bebidaNome} (${bebidaPreco})\n- Sobremesa: ${sobremesaNome} (${sobremesaPreco})\nTotal: R$ ${total.toFixed(2)}`;
    const encoded_message = encodeURIComponent(mensagem);
  
    window.open(`https://wa.me/+5513996280808?text=${encoded_message}`);
  }
  