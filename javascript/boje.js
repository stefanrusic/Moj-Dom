function boja(x)
{
var obj = document.getElementById("tabela1");
switch(x)
{
case 1:
{
obj.style.background = "green";
obj.style.color = "white";
}
break;
case 2:
{
obj.style.background = "pink";
obj.style.color = "blue";
}
break;
case 3:
{
obj.style.background = "blue";
obj.style.color = "red";
}
break;
}
return;
}