// Variáveis
const solution = document.querySelector("#js-solution");
const converter = document.querySelector("#js-btn-converter");
const copy = document.querySelector("#js-btn-copy");
const reset = document.querySelector("#js-btn-reset");

// Funções
converter.addEventListener('click', () => {
  let insiraDados = prompt("Insira os dados:");
  let separatorSymbol = ",";
  
  let emailList = solution.innerHTML=`${insiraDados.replace(/(\s+)/g, separatorSymbol)}`;

  navigator.clipboard.writeText(emailList);

  return alert("Lista copiada para sua área de transferência! Cole com CTRL+V onde desejar.");
});


// função copy:
// código aprendido com o Jhey Tompkins em
// https://www.youtube.com/watch?v=7c1K1SCmCb4
// muito bom \o/
