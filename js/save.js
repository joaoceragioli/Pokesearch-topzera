$('input.cadastrar').click(function(e){ 
  e.preventDefault()
  const loader = document.querySelector("#loading");
  // showing loading
  function displayLoading() {
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 5000);
  }

  // hiding loading 
  function hideLoading() {
    loader.classList.remove("display");
  }
    var pokemons = []
  //https://pt.stackoverflow.com/questions/329223/armazenar-um-array-de-objetos-em-um-local-storage-com-js
  if (localStorage.hasOwnProperty("pokemons")) {
    pokemons = JSON.parse(localStorage.getItem("pokemons"));
  }
  input = "{\"img\": \""+document.getElementById("filter-cadastro").value+"\"}";
  async function fetchPokemon(input) {
    try {
        displayLoading();
        const url = "https://mba-pokesearch.herokuapp.com/search";
        const response = await fetch(url, {
            method: 'post', // Default is 'get'
            body: input,
            mode: 'cors',
            headers: new Headers({
              'Content-Type': 'application/json'
            })
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        hideLoading();
    }
  }
  async function renderPokemon(input) {
    const result = await fetchPokemon(input);
    if (result.name != null){
      var pokemonName = result.name;
      //var pokemonName = "voltorb";
      pokemonName = pokemonName[0].toUpperCase() + pokemonName.slice(1)
      //console.log(pokemonName);
      //console.log(data);
      var pokemon = data.filter(obj => {
        return obj.name === pokemonName
      })[0];
      if (pokemon != null && !(pokemons.some(el => el.name === pokemonName))){
        pokemons.push(pokemon);
        localStorage.setItem('pokemons', JSON.stringify(pokemons));
        hideLoading();
        location.reload();
      }else{
        console.log("Pokemon nao encontrado ou já adicionado...");
        hideLoading();
      }
      console.log(pokemons);
    }else {
      console.log(result);
      hideLoading();
    }
  }
  renderPokemon(input);
});