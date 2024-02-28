let numero = prompt('Me Fale um Numero')
let numerot = document.getElementById('numero')
numerot.innerHTML = numero
let raiz = document.getElementById('raiz')
raiz.innerHTML = parseInt(numero ** 0.5)
let inteiro = document.getElementById('inteiro')
inteiro.innerHTML = Number.isInteger(numero)
