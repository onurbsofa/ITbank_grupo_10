let resultadoPrestamo = document.getElementById("calculateButton");
resultadoPrestamo.addEventListener("click", calculadoraDePrestamo);

document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convertir");
    convertButton.addEventListener("click", convertCurrency);
});

function convertCurrency(event) {
    event.preventDefault();

    const amountInput = document.getElementById("amount");
    const fromCurrencySelect = document.getElementById("from_currency");
    const toCurrencySelect = document.getElementById("to_currency");
    const resultElement = document.getElementById("result");

    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    const exchangeRate = getExchangeRate(fromCurrency, toCurrency);

    if (!isNaN(amount) && exchangeRate !== null) {
        const convertedAmount = amount * exchangeRate;
        resultElement.textContent = `${amount.toFixed(2)} ${fromCurrency} es igual a ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
        resultElement.textContent = "Error en la conversión.";
    }
}
function getExchangeRate(fromCurrency, toCurrency) {
    const exchangeRates = {
        "peso": {
            "usd": 0.0029,
            "eur": 0.0026,
        },
        "usd": {
            "peso": 344.83,
            "eur": 0.85,
        },
        "eur": {
            "peso": 384.62,
            "usd": 1.18,
        },
    };

    if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
        return exchangeRates[fromCurrency][toCurrency];
    } else {
        return null;
    }
}

    

function calculadoraDePrestamo(){
    if(document.getElementById("loanAmount").value == "" || document.getElementById("loanTerm").value == "" || document.getElementById("interestRate").value == ""){
        alert("Por favor, complete todos los campos");
        return;
    }else{
        let monto = document.getElementById("loanAmount").value;
        let cuotas = document.getElementById("loanTerm").value;
        let interes = document.getElementById("interestRate").value;
        let resultado = document.getElementById("monthlyPayment");
        let interesMensual = (interes/100)/12;
        let cuota = (monto*interesMensual)/(1-(Math.pow(1/(1+interesMensual),cuotas)));
        resultado.innerHTML = cuota.toFixed(2);
        let total = document.getElementById("totalPayment");
        total.innerHTML = (cuota*cuotas-monto).toFixed(2);
    }

}

