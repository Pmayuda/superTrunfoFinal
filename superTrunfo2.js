var carta1 = {	
	nome: "Bulbasauro",
	imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
	atributos: {
		ataque: 7,
		defesa: 8,
		magia: 6
	}	
};

var carta2 = {
	nome: "Charmander",
	imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
	atributos: {
		ataque: 9,
		defesa: 8,
		magia: 2
	}	
};

var carta3 = {
	nome: "Squirtle",
	imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
	atributos: {
		ataque: 5,
		defesa: 9,
		magia: 10
	}	
};

var carta4 = {
	nome: "Jigglypuff",
	imagem: "https://w7.pngwing.com/pngs/602/681/png-transparent-pokemon-red-and-blue-jigglypuff-pokemon-go-pokedex-pokemon-go-mammal-vertebrate-head.png",
	atributos: {
		ataque: 3,
		defesa: 8,
		magia: 10
	}	
};

var carta5 = {
	nome: "Pikachu",
	imagem: "https://sm.ign.com/ign_br/screenshot/default/025pikachu-os-anime-4_3pym.png",
	atributos: {
		ataque: 10,
		defesa: 5,
		magia: 8
	}	
};

var carta6 = {
	nome: "Butterfree",
	imagem: "https://archives.bulbagarden.net/media/upload/thumb/d/d1/012Butterfree.png/1200px-012Butterfree.png",
	atributos: {
		ataque: 7,
		defesa: 5,
		magia: 8
	}	
};

var carta7 = {
	nome: "Eevee",
	imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
	atributos: {
		ataque: 7,
		defesa: 9,
		magia: 8
	}	
};

var carta8 = {
	nome: "Vaporeon",
	imagem: "https://andarilhopokemon.files.wordpress.com/2017/07/vaporeon.png",
	atributos: {
		ataque: 8,
		defesa: 7,
		magia: 6
	}	
};

var baralho = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {

var numeroCartaMaquina = parseInt(Math.random() * 8);
cartaMaquina = baralho[numeroCartaMaquina];

var numeroCartaJogador = parseInt(Math.random() * 8);
while (numeroCartaMaquina == numeroCartaJogador) {

numeroCartaJogador = parseInt(Math.random() * 8);
}

cartaJogador = baralho[numeroCartaJogador];
console.log(cartaJogador);

document.getElementById("btnSortear").disabled = true;

document.getElementById("btnJogar").disabled = false;

exibirCartaJogador();
}


function obtemAtributoSelecionado() {

	var radioAtributos = document.getElementsByName("atributo");

	for (var i = 0; i < radioAtributos.length; i++) {

		if (radioAtributos[i].checked == true) {

			return radioAtributos[i].value;
		}
	}

}

function jogar() {

	var atributoSelecionado = obtemAtributoSelecionado();
	var elementoResultado = document.getElementById("resultado");
	var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
	var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
	
	if(valorCartaJogador > valorCartaMaquina) {

		elementoResultado.innerHTML = "Você venceu essa batalha 😎 ";

	} else if (valorCartaMaquina > valorCartaJogador) {

		elementoResultado.innerHTML = "Você perdeu essa batalha 😰 ";

	} else {

		elementoResultado.innerHTML = "Houve empate 🤷‍♀️";
	}

	exibirCartaMaquina();
}

function exibirCartaJogador() {

	var divCartaJogador = document.getElementById("carta-jogador");
	divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = "";
	for (var atributo in cartaJogador.atributos){
		opcoesTexto += 
		"<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " : " + cartaJogador.atributos[atributo] + "<br>";
	}

	var nome = `<p class= "carta-subtitle">${cartaJogador.nome}</p>`

	divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"


}


function exibirCartaMaquina() {

	var divCartaMaquina = document.getElementById("carta-maquina");
	divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = "";
	for (var atributo in cartaMaquina.atributos){
		opcoesTexto += 
		"<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " : " + cartaMaquina.atributos[atributo] + "</p>";
	}

	var nome = `<p class= "carta-subtitle">${cartaMaquina.nome}</p>`

	divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"


}
