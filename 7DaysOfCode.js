let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = 10

document.querySelector("#adivinhacao").addEventListener("click", function () {
    iniciarAdivinhacao();
});
 
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

const area = prompt("Você quer seguir para a área de Back-End ou Front-End?").toLowerCase();
let aprender = "";
let respostaValida = true;

if(area == "front-end") {
	aprender = prompt("Você quer aprender React ou Vue?").toLowerCase();
	while(aprender != "react" && aprender != "vue") {
		aprender = prompt("Você quer aprender React ou Vue?").toLowerCase();
	}
} else if(area == "back-end") {
	aprender = prompt("Você quer aprender C# ou Java?").toLowerCase();
	while(aprender != "java" && aprender != "c#") {
		aprender = prompt("Você quer aprender C# ou Java?").toLowerCase();
	}
} else {
	respostaValida = false;
	alert("OK nenhum dos dois, Tchau!");
}

if(respostaValida) {
	let especialidade = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
	
	while(especialidade != 1 && especialidade != 2) {
		especialidade = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
	}
	
	let tech = [];
	let maisTech = prompt("Tem mais alguma tecnologia que você gostaria de se especializar ou conhecer? Caso tenha digital o nome, caso contrário digita 'sair'.");

	while(maisTech != 'sair') {
		tech.push(maisTech);
		maisTech = prompt("Tem mais alguma tecnologia que você gostaria de se especializar ou conhecer? Caso tenha digital o nome, caso contrário digita 'sair'.");
	}
	
	let minhasTech = ""
	if(tech.length != 0) {
		minhasTech = " e também ";
		minhasTech += tech.join(", ");
	}
	
	let minhaEspecialidade = "";
	if(especialidade == 1) {
		minhaEspecialidade = `seguir se especilizando em ${aprender}`;
	}
	if(especialidade == 2) {
		minhaEspecialidade = "se desenvolver para Fullstack";
	}
	
	const resposta = `Você gostaria de seguir para a área ${area} e aprender ${aprender} ${minhasTech}, além disso gostaria de ${minhaEspecialidade}`;
	document.querySelector("#respostaJogo").textContent = resposta;
}

function iniciarAdivinhacao() {
	const maximo = 10;
	const minimo = 0;
	const numeroRandom = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	
	let numeroChances = 3;
	let chances = `${numeroChances} chances`;
	let numeroAdivinhacao = prompt(`Digite um numero de 0 a 10 para adivinhar o numero mágico. Você tem ${chances}`);
	
	while(numeroChances > 0) {
		if(numeroAdivinhacao == numeroRandom) {
			alert(`Parabéns você acertou o número mágico ${numeroRandom}`);
			return;
		} else {
			numeroChances--;
			
			if(numeroChances == 0) {
				alert(`Acabou as chances, o número mágico era ${numeroRandom}`);
				return;
			}
			
			if(numeroChances == 1) {
				chances = `${numeroChances} chance`;
			} else {
				chances = `${numeroChances} chances`;
			}
			
			numeroAdivinhacao = prompt(`Digite um numero de 0 a 10 para adivinhar o numero mágico. Você tem ${chances}`);
		}
	}
}