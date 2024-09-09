// Update HTML

const app = document.getElementById("app");

//--------------------------------------------------------
updateView();

function updateView() {
  app.innerHTML = /*HTML*/ ` 
  
  <div class="container">
        <div id="outputPokemon" class="pokemon">
            <img src=${randomPokemon.image}>
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
                <button>Catch Pokemon</button>
                <button>My Pokemon</button>
                <button>Find another</button>
            </div>
          </div>
    </div>



  `;
}
