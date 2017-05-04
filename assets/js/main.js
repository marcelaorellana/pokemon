function Pokemon(nombre, color, poderDeAtaque){
	this.nombre = nombre;
	this.color = color;
	this.nivelDeAmistad = 0;
	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;
	this.mostrarPokemon = function(){
		return("Hola soy: " + this.nombre + " y soy de color: " + this.color)
	};
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	};
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
		tercero.innerHTML = "vidas de pokemon " + pokemon.nombre + " " + pokemon.vida;
	}
}


pikashu = new Pokemon("Pikashu", "Amarillo", 90);

var poke1, poke2, pokeBatalla1, pokeBatalla2;

//pikashu.atacar(charmander);
//console.log(charmander.vida);

function seleccionarPokemon(s){
	poke1 = document.getElementById("seleccion").value;
	pokeBatalla1 = new Pokemon(poke1, "Amarillo", 90);
	primero.innerHTML = pokeBatalla1.mostrarPokemon();
	console.log(pokeBatalla1);
}
function seleccionarPokemon2(){
	poke2 = document.getElementById("seleccion2").value;
	pokeBatalla2 = new Pokemon(poke2, "Rojo", 40);
	segundo.innerHTML = pokeBatalla2.mostrarPokemon();
	//console.log(pokeBatalla1);
}

function pelear(){
	if(poke1 != poke2){
		pokeBatalla1.atacar(pokeBatalla2);
	}
}

