function saveFunction() {   
    var pokemons = []
    //https://pt.stackoverflow.com/questions/329223/armazenar-um-array-de-objetos-em-um-local-storage-com-js
    if (localStorage.hasOwnProperty("pokemons")) {
      pokemons = JSON.parse(localStorage.getItem("pokemons"))
    }
    input = document.getElementById("filter-cadastro").value;
    pokemon = data.filter(obj => {
        return obj.name === input
      })[0];
    pokemons.push(pokemon);
    localStorage.setItem('pokemons', JSON.stringify(pokemons));
}