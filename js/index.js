
//var declerations

var map = document.querySelector('#map');
var path = map.querySelectorAll('.map-img path');
//End Of Var Declerations



//date slider commence ici
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

//variable qui collecte l'année et filtre la dataBase par l'année prise du slider
//function to filter the events by year
let yearFilter =  result.filter(function(hero) {
	return hero.YEAR == slider.value;
});
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function(e) {
  e.preventDefault();
  let yearFilter =  result.filter(function(hero) {
    return hero.YEAR == slider.value;
  });
  output.innerText = this.value;
} 
//date slider finis ici



//polyfill for foreach 
//fonction pour safari et Internet Explorer, pour qu'il puissent utiliser le forEach sur les paths
if(NodeList.prototype.forEach === undefined){
    NodeList.prototype.forEach = function(callback){
        [].forEach.call(this, callback);
    }
}





path.forEach(function(path) {
	
	//colorer le background des pays par nombre de fatalité
    window.addEventListener("load", function(){
      //deatilInfo est égale la longeur de la nouvelle array qu'on a filtrer ex se basent sur l'id = pays, comme facteur de selection, voir let filterRes
      let filterRes = yearFilter.filter(o=>Object.values(o).includes(path.id));
      
      //creation d'une array qui regroupe les donnés par nom de clef d'objet
      const mergeFruits = data => {
        const result = {}; //(1)
      
        data.forEach(basket => { //(2)
          for (let [key, value] of Object.entries(basket)) { //(3)
            if (result[key]) { //(4)
              result[key] += value; //(5)
            } else { //(6)
              result[key] = value;
            }
          }
        });
        return result; //(7)
      };
      //l'appel de l'array qui regroupe les données par nom de clef d'objet
      const mergedObject = mergeFruits(filterRes);

      console.log(mergedObject);
      // loop sur les clefs

      // getFoo c'est la fonction qui selectionne les valeurs par clef d'array ici utilisé nombre de fatalité
      const my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
      my_obj.foo = mergedObject.FATALITIES;
      console.log(Object.values(my_obj)); // ['bar']
      var country = document.getElementById(path.id);

      // if(my_obj.foo < 100){
        // country.setAttribute("style", "fill: white!important; stroke: black")
      // }else if(my_obj.foo < 300){
        // country.setAttribute("style", "fill: black!important; stroke: black")
      // }else if(my_obj.foo < 500){
        // country.setAttribute("style", "fill: green!important; stroke: black")
      // }else if(my_obj.foo < 1000){
        // country.setAttribute("style", "fill: red!important; stroke: black")
      // }else if(my_obj.foo < 1500){
        // country.setAttribute("style", "fill: navy!important; stroke: black")
      // }else{
		  // country.setAttribute("style", "fill: white; stroke: black")
	  // }
	  
	
    })
    
    //collecte des donnes depuis les carte des pays
    path.addEventListener('mouseenter', function(e){
        //selection l'emplacement identifié avec un ID= countryname, rend egal a la variable countryName;
        var countryName= document.getElementById('countryname');
        //à l'interieur de countryName selection ce path au quelle on est, et écrit son Id comme text
        countryName.innerText = this.id;
        //selection l'emplacement identifié avec un ID= deatilInfo, rend egal a la variable deatilInfo;
        var deatilInfo = document.getElementById('deatilInfo');
        var fatalities = document.getElementById('fatalities');
        //deatilInfo est égale la longeur de la nouvelle array qu'on a filtrer ex se basent sur l'id = pays, comme facteur de selection, voir let filterRes
        let filterRes = yearFilter.filter(o=>Object.values(o).includes(this.id));
        //Nombre d'évenement archivé
        deatilInfo.innerText = filterRes.length + ': entries';
        
		var country = document.getElementById(path.id);
		// country.setAttribute("style", "fill: #db9575; stroke: black");
        //creation d'une array qui regroupe les donnés par nom de clef d'objet
        const mergeFruits = data => {
          const result = {}; //(1)
        
          data.forEach(basket => { //(2)
            for (let [key, value] of Object.entries(basket)) { //(3)
              if (result[key]) { //(4)
                result[key] += value; //(5)
              } else { //(6)
                result[key] = value;
              }
            }
          });
          return result; //(7)
        }
        //l'appel de l'array qui regroupe les données par nom de clef d'objet
        const mergedObject = mergeFruits(filterRes);

        console.log(mergedObject);
        // loop sur les clefs

        // getFoo c'est la fonction qui selectionne les valeurs par clef d'array ici utilisé nombre de fatalité
        const my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
        my_obj.foo = mergedObject.FATALITIES;
        console.log(Object.values(my_obj)); // ['bar']
        function fatalities() {  
          var msg;  
          if(my_obj.foo === undefined){  
          msg="No Records Repoted";  
          }  
          else{  
          msg="Fatalities: " +my_obj.foo;  
          }  
          return msg;  
           }  
        fatalities.innerText = fatalities();
        
        Interactions.foo = mergedObject.INTERACTION;
        function Interactions() {  
          var msg;  
          if(Interactions.foo === undefined){  
          msg="No Records Repoted";  
          }  
          else{  
          msg="Interactions: " +Interactions.foo;  
          }  
          return msg;  
           } 
        document.getElementById('Interactions').innerText = Interactions();
        
        return my_obj.foo;
    })
	
	
	
	
		
    
	
	
})

	


//search by country name
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
//End of Search by country name

