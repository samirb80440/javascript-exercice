/*var N,
N=prompt("saisir texte")
let nbVoyelles=0;
let Voyelles=["a","e","i","o","u","y"];
for (let i=0;i<N.length;i++)
  {
N.substring(i,i+1)
console.log(N.substring(i,i+1))
if(Voyelles.indexOf(nbVoyelles))
{
  nbVoyelles++}
  }
  console.log(nbVoyelles)
  */
 let mot=prompt("saisir le texte")
 mot=mot.toLowerCase()
 let compteurvoyelles=0
 var Voyelles="aeiouy"
 for (let i=0;i<mot.length;i++){
  if(Voyelles.indexOf(mot.substring(i,i+1))!==-1){
    compteurvoyelles++
  }
 }
 console.log(compteurvoyelles)
 alert("le mot possède"+ compteurvoyelles+"voyelles.")