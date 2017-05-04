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

const pikashu = new Pokemon("Pikashu", "Amarillo", 90);
const charmander = new Pokemon("Charmander", "Rojo", 20);
const snorlax = new Pokemon("Snorlax", "Azul", 80);
const geodude = new Pokemon("Geodude", "Gris", 40);

var poke1, poke2;

//pikashu.atacar(charmander);
console.log(charmander.vida);

function seleccionarPokemon(){
	poke1 = document.getElementById("seleccion").value;

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
function seleccionarPokemon2(){
	poke2 = document.getElementById("seleccion2").value;

	if(poke2 == "pikashu"){
		segundo.innerHTML = pikashu.mostrarPokemon();
	}
	if(poke2 == "charmander"){
		segundo.innerHTML = charmander.mostrarPokemon();
	}
	if(poke2 == "snorlax"){
		segundo.innerHTML = snorlax.mostrarPokemon();
	}
	if(poke2 == "geodude"){
		segundo.innerHTML = geodude.mostrarPokemon();
	}
}

function pelear(){
	//var poke1 = document.getElementById("seleccion").value;
	//var poke2 = document.getElementById("seleccion2").value;
	if(poke1 == "pikashu"){
		if(poke2 == "charmander"){
			pikashu.atacar(charmander);
			//tercero.innerHTML = "Vidas de Charmander: " + pokemon.vida;
		}
		else if(poke2 == "snorlax"){
			pikashu.atacar(snorlax);
			//tercero.innerHTML = "Vidas de Snorlax: " + pokemon.vida;
		}
		else if(poke2 == "geodude"){
			pikashu.atacar(geodude);
			//tercero.innerHTML = "Vidas de Geodude: " + pokemon.vida;
		}
	}
	if(poke1 == "charmander"){
		if(poke2 == "pikashu"){
			charmander.atacar(pikashu);
			//tercero.innerHTML = "Vidas de Pikashu: " + pokemon.vida;
		}
		else if(poke2 == "snorlax"){
			charmander.atacar(snorlax);
			//tercero.innerHTML = "Vidas de Snorlax: " + pokemon.vida;
		}
		else if(poke2 == "geodude"){
			charmander.atacar(geodude);
			//tercero.innerHTML = "Vidas de Geodude: " + pokemon.vida;
		}
	}
	if(poke1 == "snorlax"){
		if(poke2 == "charmander"){
			snorlax.atacar(charmander);
			//tercero.innerHTML = "Vidas de Charmander: " + pokemon.vida;
		}
		else if(poke2 == "pikashu"){
			snorlax.atacar(pikashu);
			//tercero.innerHTML = "Vidas de Pikashu: " + pokemon.vida;
		}
		else if(poke2 == "geodude"){
			snorlax.atacar(geodude);
			//tercero.innerHTML = "Vidas de Geodude: " + pokemon.vida;
		}
	}
	if(poke1 == "geodude"){
		if(poke2 == "charmander"){
			geodude.atacar(charmander);
			//tercero.innerHTML = "Vidas de Charmander: " + pokemon.vida;
		}
		else if(poke2 == "snorlax"){
			geodude.atacar(snorlax);
			//tercero.innerHTML = "Vidas de Snorlax: " + pokemon.vida;
		}
		else if(poke2 == "pikashu"){
			geodude.atacar(pikashu);
			//tercero.innerHTML = "Vidas de Pikashu: " + pokemon.vida;
		}
	}

}

