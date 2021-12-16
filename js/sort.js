function sortFunction() {
    // Declare variables

    input = document.getElementById("sort-type").value;
    data = JSON.parse(localStorage.getItem("nameForData"));
    var itemRow="";
    var i=1;
    Number.prototype.pad = function(size) {
        var s = String(this);
        while (s.length < (size || 2)) {s = "0" + s;}
        return s;
      }

    if (input=="Lowest Number (First)") {
       var sortData = data.sort(function(a, b) {return a.id - b.id});
    }else if (input=="Highest Number (First)") {
        var sortData = data.sort(function(b, a) {return a.id - b.id});
    }else if (input=="A-Z"){
       var sortData = data.sort((a, b) => a.name.localeCompare(b.name))
    }else if (input=="Z-A") {
       var sortData = data.sort((b, a) => a.name.localeCompare(b.name)) 
    }
     $.each(sortData,function(index,item){
        itemRow+="<div class=\"pokemon\" data-name="+item.name+" data-type="+item.type+" tabindex=\""+i+"\">";
        var itemImg=item.name.toLowerCase();
        if (itemImg=="mr. mime") itemRow+="<figure class=\"pokemon-figure\">"+"<img src=\"img/mr-mime.png\" alt=\""+itemImg+"\"></figure>";
        else if (itemImg=="farfetch'd")  itemRow+="<figure class=\"pokemon-figure\">"+"<img src=\"img/farfetchd.png\" alt=\""+itemImg+"\"></figure>";
        else  itemRow+="<figure class=\"pokemon-figure\">"+"<img src=\"img/"+itemImg+".png\" alt=\""+itemImg+"\"></figure>";
        itemRow+="<section class=\"pokemon-description\">"
        itemRow+="<span class=\"pokemon-id\">#"+(item.id).pad(3)+"</span>";
        itemRow+="<h1 class=\"pokemon-name\">"+item.name+"</h1>";
        itemRow+="<div class=\"pokemon-types\">";
        $.each(item.type,function(index,type){
        itemRow+="<span class=\"pokemon-type background-"+type+"\">"+type+"</span>";
        }),
        //hp
        itemRow+="</div></section><section class=\"pokemon-stats\"><div class=\"stat-row\"><div>hp</div><div class=\"stat-bar\">"
        itemRow+="<div class=\"stat-bar-bg\" style=\"width: 18%\">"+item.stats.hp+"</div></div></div>";
        //attack
        itemRow+="<div class=\"stat-row\"><div>attack</div><div class=\"stat-bar\">"
        itemRow+="<div class=\"stat-bar-bg\" style=\"width: 19.6%\">"+item.stats.attack+"</div></div></div>";
        //defense
        itemRow+="<div class=\"stat-row\"><div>defense</div><div class=\"stat-bar\">"
        itemRow+="<div class=\"stat-bar-bg\" style=\"width: 19.6%\">"+item.stats.defense+"</div></div></div>";
        //sp-atk
        itemRow+="<div class=\"stat-row\"><div>sp-atk</div><div class=\"stat-bar\">"
        itemRow+="<div class=\"stat-bar-bg\" style=\"width: 26%\">"+item.stats["sp-atk"]+"</div></div></div>";
        //sp-def
        itemRow+="<div class=\"stat-row\"><div>sp-def</div><div class=\"stat-bar\">"
        itemRow+="<div class=\"stat-bar-bg\" style=\"width: 26%\">"+item.stats["sp-def"]+"</div></div></div>";
        //speed
        itemRow+="<div class=\"stat-row\"><div>speed</div><div class=\"stat-bar\">"
        itemRow+="<div class=\"stat-bar-bg\" style=\"width: 18%\">"+item.stats.speed+"</div></div></div></section></div>";


        i++;

     });  
     
     $("#divItems").html(itemRow);

}