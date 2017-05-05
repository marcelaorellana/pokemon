function Pokemon(nombre, color, poderDeAtaque){
	this.nombre = nombre;
	this.color = color;
	this.nivelDeAmistad = 0;
	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;
	this.mostrarPokemon = function(){
		return("Hola soy " + this.nombre + " y tengo " + this.poderDeAtaque + " poder de ataque");
	};
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	};
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
		tercero.innerHTML = this.nombre + " Atacó a " + pokemon.nombre + " y " + pokemon.nombre + " tiene " + pokemon.vida + " de vida restante";
	}
}

var poke1, poke2, pokeBatalla1, pokeBatalla2;

function seleccionarPokemon(){
	poke1 = document.getElementById("seleccion").value;
	pokeBatalla1 = new Pokemon(poke1, "Amarillo", 90);
	primero.innerHTML = pokeBatalla1.mostrarPokemon();
	console.log(pokeBatalla1);
}
function seleccionarPokemon2(){
	poke2 = document.getElementById("seleccion2").value;
	pokeBatalla2 = new Pokemon(poke2, "Rojo", 40);
	segundo.innerHTML = pokeBatalla2.mostrarPokemon();
}

function pelear(){
	if(poke1 != poke2){
		pokeBatalla1.atacar(pokeBatalla2);
	}
	else{
		alert("Elije Pokemones distintos!")
	}
}

