
var textField = document.getElementById('textField');
var textField1 = document.getElementById('textField1');
var textField2 = document.getElementById('textField2');

convert.addEventListener('click', buttonClicked, false);

/*function buttonClicked(e)
{
	e.preventDefault();
	x = textField1.value;
	/*x = eval(x);
	x = myconvert(x);
	textField2.value=x;
	return true;
}*/

function addToField(n)
{
    x = textField1.value;

    if (textField1.value==0 || textField1.value==null)
	 {
		textField1.value = n;
	}
	else if ((x.substring(0)=='-') && (x.length ==1) && x == 0)
	{
	 textField1.value = 0-n;
	}
	else if ( x.substring(0,1) == ".")
	{
	  textField1.value = 0+"."+n;
	  }
	else 
	{
	 textField1.value += n;
	 }
}

/*
function OnChange2(dropdown)
{
    x = textField1.value;
	var myindex1  = dropdown.selectedIndex;
    var SelValue1 = dropdown.options[myindex1].value;
	var myindex2  = dropdown.selectedIndex;
    var SelValue2 = dropdown.options[myindex2].value;
	
	if(SelValue1 == 2 && SelValue2==3)
	{
		x = x*1000;	
		textField2.value = x;
	}
    return true;
}*/

function myconvert()
{
 //e.preventDefault();
 x = textField1.value;

var SelValue1 = document.getElementById('dropDwn1');
var Val1 = SelValue1.value;
var SelValue2 = document.getElementById('dropDwn2');
var Val2 = SelValue2.value; 
	 
if(Val1 == Val2)
  { 
	x = x;
	}
  else 
   {
	 if (Val1 == 1 && Val2 == 2){x =  x*1.60934;}
	 else if(Val1 == 1 && Val2 == 3){x =  x*1609.34;}
	 else if(Val1 == 1 && Val2 == 4){x =  x*1760;}
	 else if(Val1 == 1 && Val2 == 5){x =  x*5280;}
	 else if(Val1 == 1 && Val2 == 6){x =  x*63360;}
		else if (Val1 == 2 && Val2 == 1){x = x*0.621371;}
	 else if(Val1 == 2 && Val2 == 3){x =  x*1000;}
	 else if(Val1 == 2 && Val2 == 4){x =  x*1093.61;}
	 else if(Val1 == 2 && Val2 == 5){x =  x*3280.84;}
	 else if(Val1 == 2 && Val2 == 6){x =  x*39370.1;}
		else if (Val1 == 3 && Val2 == 1){x =  x*0.000621371;}
	 else if(Val1 == 3 && Val2 == 2){x =  x*0.001;}
	 else if(Val1 == 3 && Val2 == 4){x =  x*1.09361;}
	 else if(Val1 == 3 && Val2 == 5){x =  x*3.28084;}
	 else if(Val1 == 3 && Val2 == 6){x =  x*39.3701;}
		else if (Val1 == 4 && Val2 == 1){x =  x*0.000568182;}
	 else if(Val1 == 4 && Val2 == 2){x =  x*0.0009144;}
	 else if(Val1 == 4 && Val2 == 3){x =  x*0.9144;}
	 else if(Val1 == 4 && Val2 == 5){x =  x*3;}
	 else if(Val1 == 4 && Val2 == 6){x =  x*36;}
		else if (Val1 == 5 && Val2 == 1){x =  x*0.000189394;}
	 else if(Val1 == 5 && Val2 == 2){x =  x*0.0003048;}
	 else if(Val1 == 5 && Val2 == 3){x =  x*0.3048;}
	 else if(Val1 == 5 && Val2 == 4){x =  x*0.333333;}
	 else if(Val1 == 5 && Val2 == 6){x =  x*12;}
		else if (Val1 == 6 && Val2 == 1){x =  x*0.000015783;}
	 else if(Val1 == 6 && Val2 == 2){x =  x*0.0000254;}
	 else if(Val1 == 6 && Val2 == 3){x =  x*0.0254;}
	 else if(Val1 == 6 && Val2 == 4){x =  x*0.0277778;}
	 else if(Val1 == 6 && Val2 == 5){x =  x*0.0833333;}
	 
	 else if(Val1 == 7 && Val2 == 8){x =  x*0.000453592;}
	 else if(Val1 == 7 && Val2 == 9){x =  x*0.453592;}
	 else if(Val1 == 7 && Val2 == 10){x =  x*453.592;}
	 	 else if(Val1 == 8 && Val2 == 7){x =  x*2204.62;}
	 else if(Val1 == 8 && Val2 == 9){x =  x*1000;}
	 else if(Val1 == 8 && Val2 == 10){x =  x*1000000;}
	 	 else if(Val1 == 9 && Val2 == 7){x =  x*2.20462;}
	 else if(Val1 == 9 && Val2 == 8){x =  x*0.001;}
	 else if(Val1 == 9 && Val2 == 10){x =  x*1000;}
	 	 else if(Val1 == 10 && Val2 == 7){x =  x*0.00220462;}
	 else if(Val1 == 10 && Val2 == 8){x =  x*0.000001;}
	 else if(Val1 == 10 && Val2 == 9){x =  x*0.001;}
	 
	 else if(Val1 == 11 && Val2 == 12){x =  x*3.78541;}
	 else if(Val1 == 11 && Val2 == 13){x =  x*4;}
	 else if(Val1 == 11 && Val2 == 14){x =  x*8;}
	 else if(Val1 == 11 && Val2 == 15){x =  x*16;}
	 else if(Val1 == 11 && Val2 == 16){x =  x*128;}
	 else if(Val1 == 11 && Val2 == 17){x =  x*256;}
	 else if(Val1 == 11 && Val2 == 18){x =  x*768;}
	 	 else if(Val1 == 12 && Val2 == 11){x =  x*0.264172;}
	 else if(Val1 == 12 && Val2 == 13){x =  x*1.05669;}
	 else if(Val1 == 12 && Val2 == 14){x =  x*2.11338;}
	 else if(Val1 == 12 && Val2 == 15){x =  x*4.22675;}
	 else if(Val1 == 12 && Val2 == 16){x =  x*33.814;}
	 else if(Val1 == 12 && Val2 == 17){x =  x*67.628;}
	 else if(Val1 == 12 && Val2 == 18){x =  x*202.884;}
	 	 	 else if(Val1 == 13 && Val2 == 11){x =  x*0.25;}
	 else if(Val1 == 13 && Val2 == 12){x =  x*0.946353;}
	 else if(Val1 == 13 && Val2 == 14){x =  x*2;}
	 else if(Val1 == 13 && Val2 == 15){x =  x*4;}
	 else if(Val1 == 13 && Val2 == 16){x =  x*32;}
	 else if(Val1 == 13 && Val2 == 17){x =  x*64;}
	 else if(Val1 == 13 && Val2 == 18){x =  x*192;}
	 	 	 	 else if(Val1 == 14 && Val2 == 11){x =  x*0.125;}
	 else if(Val1 == 14 && Val2 == 12){x =  x*0.473176;}
	 else if(Val1 == 14 && Val2 == 13){x =  x*0.5;}
	 else if(Val1 == 14 && Val2 == 15){x =  x*2;}
	 else if(Val1 == 14 && Val2 == 16){x =  x*16;}
	 else if(Val1 == 14 && Val2 == 17){x =  x*32;}
	 else if(Val1 == 14 && Val2 == 18){x =  x*96;}
	 	 	 	 	 	 else if(Val1 == 15 && Val2 == 11){x =  x*0.0625;}
	 else if(Val1 == 15 && Val2 == 12){x =  x*0.236588;}
	 else if(Val1 == 15 && Val2 == 13){x =  x*0.25;}
	 else if(Val1 == 15 && Val2 == 14){x =  x*0.5;}
	 else if(Val1 == 15 && Val2 == 16){x =  x*8;}
	 else if(Val1 == 15 && Val2 == 17){x =  x*16;}
	 else if(Val1 == 15 && Val2 == 18){x =  x*48;}
	 	 	 	 	 else if(Val1 == 16 && Val2 == 11){x =  x*0.0078125;}
	 else if(Val1 == 16 && Val2 == 12){x =  x*0.0295735;}
	 else if(Val1 == 16 && Val2 == 13){x =  x*0.03125;}
	 else if(Val1 == 16 && Val2 == 14){x =  x*0.0625;}
	 else if(Val1 == 16 && Val2 == 15){x =  x*0.125;}
	 else if(Val1 == 16 && Val2 == 17){x =  x*2;}
	 else if(Val1 == 16 && Val2 == 18){x =  x*6;}
	  	 	 	 else if(Val1 == 17 && Val2 == 11){x =  x*0.00390625;}
	 else if(Val1 == 17 && Val2 == 12){x =  x*0.0147868;}
	 else if(Val1 == 17 && Val2 == 13){x =  x*0.015625;}
	 else if(Val1 == 17 && Val2 == 14){x =  x*0.03125;}
	 else if(Val1 == 17 && Val2 == 15){x =  x*0.0625;}
	 else if(Val1 == 17 && Val2 == 16){x =  x*0.5;}
	 else if(Val1 == 17 && Val2 == 18){x =  x*3;}
	 	  	 	 	 else if(Val1 == 18 && Val2 == 11){x =  x*0.00130208;}
	 else if(Val1 == 18 && Val2 == 12){x =  x*0.00492892;}
	 else if(Val1 == 18 && Val2 == 13){x =  x*0.00520833;}
	 else if(Val1 == 18 && Val2 == 14){x =  x*0.0104167;}
	 else if(Val1 == 18 && Val2 == 15){x =  x*0.0208333;}
	 else if(Val1 == 18 && Val2 == 16){x =  x*0.166667;}
	 else if(Val1 == 18 && Val2 == 17){x =  x*0.333333;}
	 
	 else if(Val1 == 19 && Val2 == 20){x =  x*33.8;}
	 else if(Val1 == 19 && Val2 == 21){x =  x*274.15;}
	 	 else if(Val1 == 20 && Val2 == 19){x =  x*-17.2222;}
	 else if(Val1 == 20 && Val2 == 21){x =  x*255.928;}
	 	 else if(Val1 == 21 && Val2 == 19){x =  x*-272.15;}
	 else if(Val1 == 21 && Val2 == 20){x =  x*-457.87;}

	 else {
		x = 'ERROR! Inconvertible';
		}
	}
	
	/*if(x > 0.0001){x = x.toFixed(6);}
	else {	x = x;}*/
	
	textField2.value = x; 
		
	if(Val1>=1 && Val1<=6)
	{
		UnitCat.value = "Distance Units";
		document.getElementById("UnitCat").style.color = "red";		
	}
	else if(Val1>=7 && Val1<=10)
	{
		UnitCat.value = "Weight Units";
		document.getElementById("UnitCat").style.color = "red";
	}
	else if(Val1>=11 && Val1<=18)
	{
		UnitCat.value = "Volume Units";
		document.getElementById("UnitCat").style.color = "red";
	}
	else if(Val1>=19 && Val1<=21)
	{
		UnitCat.value = "Temperature Units";
		document.getElementById("UnitCat").style.color = "red";
	}
	else
	{
	 UnitCat.value = " Not a defined Measurement unit";
	}
 return true;
}

function backUPOne()
{
	x = textField1.value;
	x = x.substring(0,x.length-1);
	if (x.length<1){
	textField1.value = 0;}
	else {
	textField1.value = x;}
}

function clrScr()
{
  textField1.value = "";
  textField2.value = "";
  UnitCat.value = "";
  document.getElementById("UnitCat").style.color = "grey";	
}
