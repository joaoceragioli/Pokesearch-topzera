function myFunction() {
  // Declare variables
  data = JSON.parse(localStorage.getItem("pokemons"));
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('filter-name');
  filter = input.value.toUpperCase();
  li = document.getElementsByClassName('pokemon');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < data.length; i++) {
    a = li[i].getAttribute('data-name');
    txtValue = a;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}