// exemple !!!
var année,age;
année=prompt("Ecrire un année")
age=2024-année
if (age<18)
(
alert("Mineur")
)
else if(age>18)
(
alert("Majeur")
)

var a,b,c
a=prompt("Entrez le premier nombre")
b=prompt("Entrez le second nombre")
c=prompt("Opérateur")
switch(c)
{
 case"+":
    c=alert(+a + +b) ;
     break;
   

 case"-":
   c=alert(a-b) ;
    break;


    case"*":
    c=alert(a*b) ;
     break;

  case"/":
   c=alert(a/b) ;
   break
   

  default:
    c=alert("erreur") ;
}


    

