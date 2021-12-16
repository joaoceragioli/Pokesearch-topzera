function filterFunction() {
    // Declare variables
    data = JSON.parse(localStorage.getItem("nameForData"));
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("filter-type").value;
    li = document.getElementsByClassName('pokemon');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < data.length; i++) {
      for (j=0; j< li[i].getElementsByClassName('pokemon-type').length; j++) {
        a = li[i].getElementsByClassName('pokemon-type')[j].innerText
        if (a.indexOf(input) > -1) {
            li[i].style.display = "";
            break;
        } else {
        li[i].style.display = "none";
        }
      }
      txtValue = a;
      if (txtValue.indexOf(input) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }