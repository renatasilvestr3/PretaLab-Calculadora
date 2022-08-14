const horaDia = 8

//index
function calcularSalario(){
  let dias = document.getElementById('dias').value
  let salarioHora = document.getElementById('salarioHora').value
  let salarioFinal = (dias * horaDia) * salarioHora
  document.getElementById('resultado').innerHTML = 'R$' + salarioFinal.toFixed(2)
}

//hora
function calcularHora(){
  let dias = document.getElementById('dias').value
  let salarioTotal = document.getElementById('salarioTotal').value
  let valorHora = (salarioTotal / dias) / horaDia
  document.getElementById('resposta').innerHTML = 'R$' + valorHora.toFixed(2)
}

