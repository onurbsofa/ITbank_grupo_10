let convertirButton = document.getElementById("convertir");
convertirButton.addEventListener("click", convertirMoneda);

function convertirMoneda() {
  let amountElement = document.getElementById("amount");
  let fromCurrencyElement = document.getElementById("from_currency");
  let toCurrencyElement = document.getElementById("to_currency");
  let resultElement = document.getElementById("result");

  let amount = parseFloat(amountElement.value);
  let fromCurrency = fromCurrencyElement.value;
  let toCurrency = toCurrencyElement.value;

  const tasasConversion = {
    peso: 1, // 1 Peso Argentino
    usd: 0.0029, // 1 USD = 0.011 Pesos Argentinos
    eur: 0.0026, // 1 EUR = 0.0095 Pesos Argentinos
  };

  if (fromCurrency === toCurrency) {
    alert("Por favor, seleccione dos monedas diferentes");
    return;
  } else {
    const resultado =
      amount * (tasasConversion[toCurrency] / tasasConversion[fromCurrency]);
    resultElement.textContent = `El resultado de la conversión es: ${resultado.toFixed(2)} ${toCurrency}`;
  }
}