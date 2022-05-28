function namestaj(slika,naziv,cena,dimenzije){

this.slika=slika;
this.naziv=naziv;
this.cena=cena;
this.dimenzije=dimenzije;

this.tabela=function(){

return "<table border='1' align='center' bgcolor='white'><tr><td colspan='2'><img id='slika' src='img/"+this.slika+".jpg'</td></tr>"
+"<tr><th>Naziv:</td><td>"+this.naziv+"</td></tr>"
+"<tr><th>Cena:</td><td>"+this.cena+" dinara</td></tr>"
+"<tr><th>Dimenzije:</td><td>"+this.dimenzije+"cm</td></tr>"
+"</table>"
}
}
function proizvod(){

var dusek = new namestaj("111","Beo-Base dusek bez zicanog jezgra",5599,"80x200 90x200");
var stilo = new namestaj("222","Krevet STILO i  dusek EMPEROR",66867,"140x190");
var cubo = new namestaj("333","Krevet CUBO-Iguana",42005,"90x190 90x200" );
var zebrano = new namestaj("444","Krevet Zebrano",9799," 90x200" );
var kompakt = new namestaj("555","Krevet kompakt",10500,"80x200" );
var fioke = new namestaj("666","Krevet sa dve fioke i ogradicom",10000,"100x220" );
var bracni = new namestaj("777","Bracni krevet",26500,"150x240" );
var deca = new namestaj("888","Krevet za decu",9200,"80x190" );
var spirit = new namestaj("999","Krevet Spirit",12000,"120x240" );


var izbor=document.getElementById("izbor");
var rb=izbor.selectedIndex;
if(rb==0){
alert(izbor[0].value);
document.getElementById("polje").innerHTML="Niste izabrali ni jedan namestaj.";
}
else
{
var obj=eval(izbor[rb].value);

document.getElementById("polje").innerHTML=obj.tabela();
}
return;
}