let resultadoPrestamo = document.getElementById("calculateButton");
resultadoPrestamo.addEventListener("click", calculadoraDePrestamo);

const convertirButton = document.getElementById("convertir");
convertirButton.addEventListener("click", convertirMoneda);

function convertirMoneda() {
  const amountElement = document.getElementById("amount");
  const fromCurrencyElement = document.getElementById("from_currency");
  const toCurrencyElement = document.getElementById("to_currency");
  const resultElement = document.getElementById("result");

  const amount = parseFloat(amountElement.value);
  const fromCurrency = fromCurrencyElement.value;
  const toCurrency = toCurrencyElement.value;

  const tasasConversion = {
    peso: 1, // 1 Peso Argentino
    usd: 0.011, // 1 USD = 0.011 Pesos Argentinos
    eur: 0.0095, // 1 EUR = 0.0095 Pesos Argentinos
  };

  if (isNaN(amount)) {
    alert("Por favor, ingrese un número válido");
    return;
  } else if (fromCurrency === toCurrency) {
    alert("Por favor, seleccione dos monedas diferentes");
    return;
  } else {
    const resultado =
      (amount * tasasConversion[fromCurrency]) / tasasConversion[toCurrency];
    resultElement.textContent = `El resultado de la conversión es: ${resultado.toFixed(
      2
    )} ${toCurrency}`;
  }
}

function calculadoraDePrestamo() {
  if (
    document.getElementById("loanAmount").value == "" ||
    document.getElementById("loanTerm").value == "" ||
    document.getElementById("interestRate").value == ""
  ) {
    alert("Por favor, complete todos los campos");
    return;
  } else {
    let monto = document.getElementById("loanAmount").value;
    let cuotas = document.getElementById("loanTerm").value;
    let interes = document.getElementById("interestRate").value;
    let resultado = document.getElementById("monthlyPayment");
    let interesMensual = interes / 100 / 12;
    let cuota =
      (monto * interesMensual) /
      (1 - Math.pow(1 / (1 + interesMensual), cuotas));
    resultado.innerHTML = cuota.toFixed(2);
    let total = document.getElementById("totalPayment");
    total.innerHTML = (cuota * cuotas - monto).toFixed(2);
  }
}
