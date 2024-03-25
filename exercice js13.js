/*var element = document.getElementById("button1")

element.addEventListener("click", function fenetre() {

 tex= document.getElementById("textbox").value
 alert("Vous avez saisi "+tex);
})
*/

function math(){
    var n= Math.random(1,20)
    tex= document.getElementById("textbox").value
    alert("nombre"+tex)
}
function verif(){
    if(tex>20)
    alert("trop grand")
    else(tex<1)
    alert("trop petit")
   
}
