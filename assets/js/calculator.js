const sumar = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 + num2;
    document.getElementById("result").value = resultado;
  }
  
  const restar = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 - num2;
    document.getElementById("result").value = resultado;
  }
  
  const multiplicar = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 * num2;
    document.getElementById("result").value = resultado;
  }
  
  const dividir = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 / num2;
    document.getElementById("result").value = resultado;
  }
  