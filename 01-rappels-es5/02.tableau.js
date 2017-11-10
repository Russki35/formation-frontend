var villes = ['nantes', 'paris', 'saint-malo','angers', 'le mans'];

villes.forEach(function(element) {
    console.log(element);
});

//----------------------------------------------------------

function lettreADansToutesLesVilles(element, index, array){
  return element = "a";
}

console.log(villes.every(lettreADansToutesLesVilles));


//----------------------------------------------------------

function auMoinsUneVilleAvecUnTiret(element, index, array){
  return element = "-";
}

console.log(villes.some(auMoinsUneVilleAvecUnTiret));

//----------------------------------------------------------

villeSansTiretSansEspaces = villes.filter(function(ville){return !ville.includes(" ") && !ville.includes("-")});
console.log(villeSansTiretSansEspaces);
