function saveFunction() {   
    var pokemons = []
    pokemons = localStorage.getItem('nameForData');
    input = document.getElementById("filter-cadastro").value;
    pokemon = data.filter(obj => {
        return obj.name === input
      });
    localStorage.setItem('nameForData', "["+JSON.stringify(pokemon[0])+"]");
}