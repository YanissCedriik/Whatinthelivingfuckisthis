// Update HTML

const app = document.getElementById("app");

//--------------------------------------------------------
updateView();

function updateView() {
  app.innerHTML = /*HTML*/ ` 
  
  <div class="container">
        <div id="outputPokemon" class="pokemon">
            <img src= ${randomPokemon.image}>
            <div class="name">${randomPokemon.name}</div>
            <div class="stats">LEVEL: ${randomPokemon.level}</div>
            <div class="stats">HEALTH: ${randomPokemon.health}</div>
        </div>
        
        <div>
            <img src="Assets/Ash.png">
            <div class="name">${Ash.name}</div>
            <div class="stats">HEALTH: ${Ash.health}</div>
            <div class="stats">LEVEL: ${Ash.level}</div>
            
            
            <div>
                <button onclick="catchPokemon()">Catch Pokemon</button>
                <button onclick="listAllPokemon()">My Pokemons</button>
                <button onclick="generateNumber()">Find another</button>
            </div>

            <div id="caughtPokemons">My Pokemons: </div>
          
          
            </div>
    </div>



  `;
}
