/*var fruits,myTableau=[]
//fruits=prompt("saisie du nombre de fruit souhaité")
for (var i= 0; i< fruits; i++)
{
myTableau[i]=prompt("fruits")
}
console.log(myTableau)


function plus(compteur){
    compteur++
    return compteur
}

let compteur=1;
compteur= plus(compteur);
console.log(compteur)
*/
function produit(X,Y){
     X*Y
     X*X*X
    return (X*Y)
}
let X,Y
X=prompt("Entrez un nombre")
Y=prompt("Entrez un multiplicateur")
X,Y=produit(X,Y)
console.log(X*X*X)
console.log(Y)

const image= new Image()
 image.src="/home/bedrouni/DEV bedrouni/exercice/javascript/papillon.jpg"
 image.onload= function(){
document.body.appendChild(image)
 }

