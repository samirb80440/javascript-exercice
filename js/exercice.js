var prenom,n
var myTableau=[];
for (var i=0; i<100;i++)
{


 myTableau[i]=prompt("prenom")
if(myTableau[i]=="")
{
   break
}
}
for(var i=0;i<myTableau.length-1 ;i++)
  {console.log("prenom :"+myTableau[i])}
  
  var N,X,Y
  N=prompt("saisie")
  X=prompt("deuxiéme nombre")
  for(var i =0;i <=N;i++)
   {Y= +i * +X
    console.log(i+"*"+X+"="+Y);
   }




