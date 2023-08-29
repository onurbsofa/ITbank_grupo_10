let resultadoPrestamo = document.getElementById("calculateButton");
resultadoPrestamo.addEventListener("click", calculadoraDePrestamo);


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
