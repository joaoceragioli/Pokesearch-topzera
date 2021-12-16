$(function(){
    if (localStorage.hasOwnProperty("pokemons")) {
        var mydata=JSON.parse(localStorage.getItem("pokemons"));
        var itemRow="";
        var i=1;
        Number.prototype.pad = function(size) {
            var s = String(this);
            while (s.length < (size || 2)) {s = "0" + s;}
            return s;
        }
        $.each(mydata,function(index,item){
            console.log(mydata)
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
    }else {
        console.log("Sem Pokemons");
    }
 });