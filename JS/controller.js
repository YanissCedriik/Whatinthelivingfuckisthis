//Functions
getRandomPokemon()
function generateNumber(){
  return Math.floor(Math.random() * pokemons.length);
}
console.log(generateNumber())

function getRandomPokemon(){
  randomPokemon = pokemons[generateNumber()]
    console.log(randomPokemon)
  updateView()
}

function catchPokemon(){
  
}


function listAllPokemon(){
  document.getElementById('caughtPokemons').innerHTML += /*HTML*/ `
    <li>${myPokemons.name} LVL: ${myPokemons.level}</li>
  `
};
