function myFunction()
{
    var str1 = document.getElementById("demo").innerHTML; 
    var txt1 = str1.replace(/Micko/g,"Cile");
    document.getElementById("demo").innerHTML = txt1;
}

function Dodaj()
{
    var text1 = "Miroslav";
	var text2 = "Beronja";
    //document.getElementById("dodaj").innerHTML = text1.concat(" ",text2);
	document.getElementById("dodaj").innerHTML = text1.concat("",text2);
}

function NeZnam()
{
	//if(txt1.text == 'M')
	//{
		return document.getElementById("txt2").value =  "Bravo Majmune";
	//}
	
}
function Porediti()
{
	var c = 5;
	var e = 5;
	if(c == e)
	{
		return document.getElementById("txt1").value =  "Majmune";
	}
}
function DodajString()
{
	var string1 = document.getElementById("txt1").value;
	var string2 = document.getElementById("txt2").value;
	
	return document.getElementById("txt3").value =  string1 + "" + string2;
}
function PoreditiText()
{
	var prva  = document.getElementById("txt2").value;
	var druga  = document.getElementById("txt1").value;
	
	if(prva != druga)
	{
		return document.getElementById("txt3").value =  "Majmune";
	}
	else if(prva == druga)
	{
		return document.getElementById("txt3").value =  "Bravo";
	}
}

function Poredjenje(myNumber)
{
	var txt = "";
	var broj = "";
	while (myNumber != Infinity) {         
    myNumber = myNumber * myNumber;
	//txt = txt + myNumber + "<br>";
	broj = broj + myNumber + "<br>";
	}
	document.getElementById("demo1").innerHTML = broj ;
}

function ZaokruzivanjeNaDecimale(broj)
{ 
    var broj1 = broj
	document.getElementById("Zaokruzivanje").innerHTML = broj1.toFixed(2) + "<br>" +  broj1.toFixed(4);
}

function parseIntString()//Unesen je broj 10
{
	
	document.getElementById("demo2").innerHTML = parseInt("10") + "<br>" + parseInt("10.33") + "<br>" + parseInt("10 6") + "<br>" +    
    parseInt("10 years") + "<br>" + parseInt("years 10");
	
}

function Datum()
{
	 var d = new Date();
     document.getElementById("txt4").value = d.toUTCString();
}

function DatumDanasnjiDan()//Pokazuje koji je danas dan :)
{
	
	var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("txt4").value = days[d.getDay()];
	
}

function MinimalnaVrednost()
{
	 var points = [2, 5, 3, 100, 25, 10];
	 
	// document.getElementById("txt4").value = Math.min(40, 100, 1, 5, 25, 10);
	
		 //var points[6];
		 var prethodni = [0 , 0 , 0, 0 , 0 ,0];
        // var arrayB = new Array();
		 var flg1 = 1;
		 var i = 0;
		 var z = 0;

	 for(i = 0; i < 6 ; i++)//points lenght
	 {
				 
			 if(flg1 == 1)
			 {
			 prethodni[z] = points[i];
			 i++;
			 flg1 = 0;
			 }
			 
		 if(prethodni[z]> points[i])
		 {
		     prethodni[z] = points[i];
		 }
	 }
		 
     document.getElementById("txt5").value = prethodni[z];
}
function PrikazSlike()
{
	
	document.getElementById("Slika").src = slike;
	
}

function PrikazSlikeNiz()
{
	var i = 0;
    var imgArray = new Array();

    imgArray[0] = new Image();
    imgArray[0].src = "index.jpg";
	
    imgArray[1] = new Image();
    imgArray[1].src = "Bosanske kopacke.jpg";
	
	imgArray[2] = new Image();
    imgArray[2].src = "600150esc.jpg";
	
	
	for(i = 0;i<3;i++)
	{
	     
	    document.getElementById("Slika").src =  imgArray[i].src
	
	}
}









