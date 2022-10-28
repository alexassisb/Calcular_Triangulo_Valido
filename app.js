
function calculaPiramide() {
    const n1 = document.getElementById("input1").value;
    const n2 = document.getElementById("input2").value;
    const n3 = document.getElementById("input3").value;
    const valor = document.querySelector("#retorno");
  
    if ((n1 + n2 > n3) && (n1 + n3 > n2) && (n2 + n3 > n1)) {
      console.log(n1);
      valor.textContent = "Medidas informadas formam um triangulo.";
    } else {
      valor.textContent = "Medidas informadas não formam um triangulo.";
    }
  }
  
  function reset() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.querySelector("#retorno").textContent = "Calculando...";
  }