let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = 10

if (numeroUm == stringUm) {
    if(numeroUm === stringUm) {
        console.log('As variáveis numeroUm e stringUm tem o mesmo e mesmo tipo')
    } else {
        console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
    }
} else {
    console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}
  
if (numeroTrinta === stringTrinta) {
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}
  
if (numeroDez == stringDez) {
    if(numeroDez !== stringDez) {
        console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
    } else {
        console.log('As variáveis numeroDez e stringDez tem o mesmo valor e mesmo tipo')
    }
} else {
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}

const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

document.querySelector("#nome").textContent = nome;
document.querySelector("#idade").textContent = idade;
document.querySelector("#linguagem").textContent = linguagem;

let gosta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

while(gosta != 1 && gosta != 2) {
    gosta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);
}

if(gosta == 1) {
    alert(`Muito bom! Continue estudando ${linguagem} e você terá muito sucesso.`);
}

if(gosta == 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}