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
	}
}

const pikashu = new Pokemon("Pikashu", "Amarillo", 100);
const charmander = new Pokemon("Charmander", "Rojo", 20);
const snorlax = new Pokemon("Snorlax", "Azul", 80);
const geodude = new Pokemon("Geodude", "Gris", 40);

pikashu.atacar(charmander);
console.log(charmander.vida);

function seleccionarPokemon(){
	var poke1 = document.getElementById("seleccion").value;

	if(poke1 == "pikashu"){
		primero.innerHTML = pikashu.mostrarPokemon();
	}
	if(poke1 == "charmander"){
		primero.innerHTML = charmander.mostrarPokemon();
	}
	if(poke1 == "snorlax"){
		primero.innerHTML = snorlax.mostrarPokemon();
	}
	if(poke1 == "geodude"){
		primero.innerHTML = geodude.mostrarPokemon();
	}
}


