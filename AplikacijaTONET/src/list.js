var ime = "0";
var spojeno_ime_prezime = "0";
var sifra = "0";
var token = "0";
var imeP = "0",nadimakP = "0",prezimeP = "0",emailP = "0",sifraP = "0",sifraProvera="0";
var projekatBR = "0";


var nadimakBaza = "";
//var nadimakBaza2 = "";		
var projektiBaza = "";		
var mesecBaza = "";		
var nedeljaBaza = "";
var brojsatiBaza = "";
	

var monthNames = ["Januar", "Februar", "Mart", "April", "Maj", "Jun",
  "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
];

var Nedelje = [];

var options1 = '';
var options = '';
var year = 2016;
var options = '';
var month = 15;
var razlika = 0;

var poslednja_nedelja = 0;
var prva_nedelja = 0;

var week_no_arr = 0;

var flag = 0;

var nadimakBaza1 = "0";

var inputs = document.querySelectorAll('input[list]');
var flgNedelje = 0;

//Provera Tokena
var base64Url = "";
var base64 = "";
var ispis = "";

//Zastita Klika:"Upis u bazu"
var flgProjekat1 = 1;
var flgMeseci1 = 1;
var flgNed1 = 1;

var flgZ1 = 1;
var flgZ2 = 1;
var flgZ3 = 1;
var flgBrisanj1 = 1;

var sifra_nova = "";
var flgSifra = 0;

var Godina = 2016;
var brojacMicko = 0,brojacCile = 0;
var idUvecaj = 0,idUvecajInput = 0;


var BrojacProjekata = 0;
var z = 0,k = 0;
var Pakovanje = new Array();
var PakovanjeProjekti = new Array();
var trenutnaNedelja_Upit = 0,trenutnaMesec_Upit = 0;
var tarzan1 = 0,tarzan2 = 0;
var brojacNUle = 0;
var godinaInf11=0,godinaInf12=0;
var brojanje = 0;
var SatnicaTN = 0;
var see = 0;
var idUvecajInput1 = 0;
var odgovor = 0; 
var nizListnizproba12 = 0;
var NizProjekti = new Array();
var NizProjekti1 = new Array();
var hu = -1;
var t = 0;
var flgTrenutneNedelje = 0,flgTrenutneNedelje1 = 0;
var o2 = 0;
var o12 = 0;
var nedeljaMicko = 0;
var mesecMicko = "";
var web = 'http://localhost:3090';
var flgMeseciTr = 1;
var flgNedTr = 1;
var Nedeljaaaaa = "";
var mickoMajnun = 0;
var valuesGodina = "";
var monthGodina = 0; 
var UlziNe = 0;
var flgTrenutna_nedelja = 0,brojacTrenutna_nedelja = 0;

var funkicjeMicko = {
	gotoFunction: function(Function) {
		switch (Function) {
		case "Strana":
			this.LoginStrana();
			break;
		case "ListaPR":
			this.ListProjekata();
			break;
		case "NedeljeMeseci":
			this.Meseci_Nedelje();
			break;
		}
	},
	
	
	LoginStrana : function() {
		
		window.location.href="#/Pocetna";
		$("#id3").show();
		$("#id4").hide();
		$("#id5").hide();
		$("#id6").hide();
		$("#id7").hide();
		$("#id8").hide();
		
	},
	
	Registracija : function() {
		
		window.location.href="#/Reg";
		$("#id5").show();
		$("#id4").hide();
		$("#id3").hide();
		$("#id6").hide();
		$("#id7").hide();
		$("#id8").hide();
	},
	
	Pocetna : function() {
		
		window.location.href="#/Pocetna";
		$("#id3").show();
		$("#id4").hide();
		$("#id6").hide();
		
	},
	
	ParsirajJWT : function(token) {

		base64Url = token.split('.')[1];
        base64 = base64Url.replace('-', '+').replace('_', '/');
		ispis = JSON.parse(window.atob(base64));
		
		return ispis.admin;
	},
	
	PrijavaNaServer : function() {

		
		
		imeP = $("#nameP").val();
		nadimakP = $("#nadimakP").val();
		prezimeP = $("#prezimeP").val();
		emailP = $("#emailP").val();
		sifraP = $("#sifraP").val();
        sifraProvera = $("#sifraProvera").val();

		if(sifraP == sifraProvera)
		{

		
		
				$.ajax({
					type: 'POST',
					url: ''+web+'/PrijavaKorisnika',
					data: { 
							'ime': imeP, 
							'nadimak': nadimakP,
							'prezime': prezimeP,
							'email': emailP,
							'sifra': sifraP
							
					},
					success: function(response){	
					
							$("#StranicaAD").hide();
							$("#buttonDrop").hide();
							$("#adminDA").hide();
							$("#nemaAD").hide();
							$("#adminButton").hide();
							
							
							var nesto = response;
							$( "#dialog-7" ).dialog({
							autoOpen: false, 
							buttons: {
								OK: function() {
									$(this).dialog("close");
									}
							},
							title: "Uspesna Registracija",
								hide: "puff",
								show : "slide",
								height: 200 
							});
							$( "#dialog-7" ).dialog( "open" );
							
									var respObj1 = response;
									var i;
									var out1 = "<table>";//{"coord":{"lon":-0.13,"lat":51.51}
									for(i = 0; i < respObj1.length ; i++){
										out1 += "<tr><td>" + respObj1.Token + "</td><td>"
										"</td><td>";
									}
										
										$("#test1").val(respObj1.Token);
										token = respObj1.Token;				
										$("#id4").show();
										$("#id3").hide();
										$("#id5").hide();
					},
					
					error: function(response1) {
						
							var greska = response1.responseText;
							$( "#dialog-11" ).dialog({
							autoOpen: false, 
							buttons: {
								OK: function() {
									$(this).dialog("close");
									}
							},
							title: greska,
								
								hide: "puff",
								show : "slide",
								height: 200,
								width: 500
							});
								
							$( "#dialog-11" ).dialog( "open" );
							
								$("#nadimakP").val("");
								$("#emailP").val("");
								$("#sifraP").val("");
							
							
					}
			});
		}
		else{

			alert("Nije ista sifra");
			sifraP = "";
			$("#sifraP").val("");
        	sifraProvera = ""; 
			$("#sifraProvera").val("");
		}
		
	},
	
	Prijava : function() {
		
		ime = $("#name").val();
		sifra = $("#email").val();
		
		if(flgSifra == 1)
		{
			sifra = $("#sifra1").val();
		}
		
		
		$.ajax({
 
			url: ''+web+'/korisnici-transakciju/inf?ime='+ime+'&sifra='+sifra+'',
            type: "get",
  
            success: function(response) {
                
				
			
				//document.getElementById("Upis-u-bazu-vide-upisa").disabled = true;
				if(response == "Nije dobro Ime"){
					
					$("#name").val("");
		            $("#email").val("");
			
					$( "#dialog-3" ).dialog({
						autoOpen: false, 
						buttons: {
						OK: function() {$(this).dialog("close");}
								},
						title: "Nije dobro Ime",
						
						hide: "puff",
						show : "slide",
						height: 200 
					});
					$( "#dialog-3" ).dialog( "open" );
					
				}
				else if(response == "Neaktivni ste!!!"){
					
					//alert("Niste aktivni");
					$("#name").val("");
		            $("#email").val("");
					
					$("#dialog-aktivan").dialog({
						autoOpen: false, 
						buttons: {
						OK: function() {$(this).dialog("close");}
								},
						title: "TO-NET",
						hide: "puff",
						show : "slide",
						height: 200 
					});
					$("#dialog-aktivan").dialog( "open" );
					
				}
				else if(response == "Nije dobra Sifra"){
					
					$("#name").val("");
		            $("#email").val("");
					
					$( "#dialog-3" ).dialog({
						autoOpen: false, 
						buttons: {
						OK: function() {$(this).dialog("close");}
								},
						title: "Nije dobra sifra",
						
						hide: "puff",
						show : "slide",
						height: 200 
					});
					$( "#dialog-3" ).dialog( "open" );
				}
				else{
					
					var respObj = response;
					
					//alert(respObj.AktivanK[0].aktivan);
					
					var i;
					var out = "<table>";//{"coord":{"lon":-0.13,"lat":51.51}
					var PodaciKor = "<table>";
					var nizList = new Array();
					var options = '';
						for(i = 0; i < respObj.imena_Projekata.length ; i++)
						{
							
							nizList[i] = respObj.imena_Projekata[i].Projekti
						}
						for(var i2 = 0; i2 < nizList.length; i2++)
						{
							options += '<option value="'+nizList[i2]+'" />';
						}
						
						var table = document.getElementById('presidents');
						
						for (var i3 = 0; i3 < respObj.Tabela.length; ++i3){
					
							var president = respObj.Tabela[i3];
						
							var row = document.createElement('tr');
							row.id = "trPrijava"; 
							 
						    var properties = ['Ime_Projekta','Januar','Februar','Mart','April','Maj','Jun','Jul','Avgust','Septembar','Oktobar','Novembar','Decembar'];
							
							for (var j = 0; j < properties.length; ++j)
							{   
								var cell = document.createElement('td');
								cell.id = "tdPrijava";
								 
								cell.innerHTML = president[properties[j]];
								
								row.appendChild(cell);
							}
							
							table.appendChild(row);
						
						}
						
						token = respObj.Token;
						var pamtiAdmin = funkicjeMicko.ParsirajJWT(token);
						
						if(pamtiAdmin == "nije"){
							
							$("#buttonDrop").hide();
							$("#adminDA").hide();
							$("#nemaAD").hide();
		
						}
						else{
							
							$("#buttonDrop").show();
							$("#adminDA").show();
							$("#nemaAD").show();
			
						}
						
						//$("#NadimakInf").val(respObj.Podaci[0].Nadimak_Klijent);
                        //$("#ImeInf").val(respObj.Podaci[0].Ime_Klijenta);
						//$("#PrezimeInf").val(respObj.Podaci[0].Prezime_Klijenta);
						
						//document.getElementById("p11").innerHTML = respObj.Podaci[0].Nadimak_Klijent;
						//document.getElementById("p12").innerHTML = respObj.Podaci[0].Ime_Klijenta;
						//document.getElementById("p13").innerHTML = respObj.Podaci[0].Prezime_Klijenta;
						
						//document.getElementById("p21").innerHTML = respObj.Podaci[0].Nadimak_Klijent;
						document.getElementById("p22").innerHTML = respObj.Podaci[0].Ime_Klijenta;
						document.getElementById("p23").innerHTML = respObj.Podaci[0].Prezime_Klijenta;
                        //document.getElementById("p21").innerHTML = respObj.Podaci[0].Ime_Prezime;
						spojeno_ime_prezime = respObj.Podaci[0].Ime_Prezime;
						 mickoMajnun = respObj.seciNedelja;
						//alert(mickoMajnun);
						//document.getElementById('anrede').innerHTML = options;
						//document.getElementById('anrede1').innerHTML = options;
					
						window.location.href="#/login";
						$("#id3").hide();
						$("#id4").show();
						$("#id5").hide();
						$("#id6").hide();
						$("#id7").hide();
						$("#id8").hide();
						//$("#StranicaAD").hide();						//document.getElementById("IdIme").innerHTML = ime;
						$("#test1").val(respObj.Token);
						$("#OdabranaGodina").val(2016);
						$("#OdabranaGodina1").val(2016);
						$("#OdabranaGodina2").val(2016);
						$("#OdabranaGodinaTabela").val(2016);
						godinaInf = $("#OdabranaGodina").val();
						godinaInf11 = $("#OdabranaGodina1").val();
						godinaInf12 = $("#OdabranaGodina2").val();
						godinaTAbela = $("#OdabranaGodinaTabela").val();
						//alert(godinaInf);
						
						//var trenutnaNedelja = funkicjeMicko.TrenutnaNedelja_nn();
						var trenutnaNedelja = mickoMajnun;
						//alert(Nedeljaaaaa);
						//alert(trenutnaNedelja);
						var trenutniMesec = funkicjeMicko.TrenutniMesec();
						//alert(trenutniMesec);
						$("#ListaMeseca").val(trenutniMesec);
						$("#ListaNedelja").val(trenutnaNedelja);
						
						//nedeljaMicko = funkicjeMicko.TrenutnaNedelja_nn();
						nedeljaMicko = mickoMajnun;
						mesecMicko = funkicjeMicko.TrenutniMesec();
						
						
						//funkicjeMicko.Meseci_Nedelje('NedeljeMeseci');
						funkicjeCile.RefresMeseci();
						funkicjeMicko.Trenutna_nedelja();
						funkicjeMicko.PrijavaNedelje();
						
						
				}	
			},
			
            error: function(xhr) {
               
					alert("Cile");
			}
		});
	    
    
	},
	
	ProveraToken : function(){
		
		$.ajax({
				
				url: ""+web+"/Sifra-Micko",
				type: "GET",
				headers:{
							"Authorization": "Bearer " + token,
				},
				success: function(response) {
					
					var respObj1 = response;
					var i;
					var out = "<table>";//{"coord":{"lon":-0.13,"lat":51.51}
						for(i = 0; i < respObj1.length ; i++)
						{
						out += "<tr><td>" + respObj1 + "</td><td>"
						"</td><td>";
						}
				
						$("#id1").val(respObj1);
	
					
				},
				error: function(xhr) {
					
							alert("Cile1");
							console.log(xhr);
				},
		});	
		

	},
	
	InsertValues :  function(){
		
		$.ajax({
			url: ""+web+"/ListaProjekata",
            type: "GET",
			headers: {
				"Authorization": "Bearer " + token
			},
            success: function(response) {
				
				var respObj1 = response;
				var nizList = new Array();
				for(var i1 = 0; i1 < respObj1.length ; i1++){
					
					nizList[i1] = respObj1[i1].Projekti;
	            }
				
				var options = '';
					
					for(var i2 = 0; i2 < nizList.length; i2++)
					{
							options += '<option value="'+nizList[i2]+'" />';
					}
				
				    document.getElementById('anrede1').innerHTML = options;
					document.getElementById('anrede').innerHTML = options;
					
				    //document.getElementById('list-display').innerHTML = options;
		    },
		    error: function(xhr) {
                //var respObj1 = response;
				//alert("greska");
				console.log(xhr);
            }	
		});
		
	},
	
	Meseci_Nedelje :  function(){
		  
		/*flgTrenutna_nedelja = 0;
		alert(flgTrenutna_nedelja);
		alert("Micko");*/

		for(var i1 = 0; i1 < monthNames.length ; i1++){

			options1 += '<option value="'+monthNames[i1]+'" />';
	     
			document.getElementById('mesec').innerHTML = options1;
		
	        
		}
		 
			for(var i5 = 0; i5 < inputs.length; i5++){
				
				$("#ListaMeseca").on('input',function(e){
		          
					//alert("Mickos");
					options = '';
					    var optionFound = false,
							datalist = this.list;
							for (var j = 0; j < datalist.options.length; j++) {
								//alert("Mickos");
								if (this.value == datalist.options[j].value) {
									optionFound = true;
									break;
								}
							}
							if (optionFound) {
								
								//	alert("Micko");
									flgZ2 = 0;
									var values = $(this).val();
									mesecMicko = values;
									mesecBaza = values;
									mesecInf = values;
									flgMeseciTr = 1;
									var flgMeseci1 = 1;
									$("#Mesec").val(flgMeseci1);
									$('#Upis-u-bazu-vide-upisa').attr("disabled", false);
									brojacTrenutna_nedelja++;
									
									if(brojacTrenutna_nedelja <= 1)
									{
										flgTrenutna_nedelja = 0;
										
									}
									
									funkicjeCile.Izvestaj1();
									if(flgTrenutna_nedelja == 0)
									{
										flgTrenutna_nedelja = 1;
										
										funkicjeMicko.Trenutna_nedelja();
									}
									if(brojacTrenutna_nedelja == 11)
									{	
										brojacTrenutna_nedelja = 0;
									}


									//alert("Funkcija--Meseci_Nedelje");
									
								    flgMeseciTr = 1;
									if(flgNedTr == 1 && flgMeseciTr == 1)
									{
                                           $('#Upis-u-bazu-vide-upisa').attr("disabled", false);
									}
                                    
									
							}
							else {
						            
									flgMeseciTr = 0;
									$('#Upis-u-bazu-vide-upisa').attr("disabled", true);	
									var flgMeseci1 = 0;
									$("#Mesec").val(flgMeseci1);
									
									
							}
							
						//funkicjeMicko.Trenutna_nedelja();	
						
                         
						if(values == 'Januar'){month = 0;}
						else if(values == 'Februar'){ month = 1;}
						else if(values == 'Mart'){month = 2;}
						else if(values == 'April'){month = 3;}
						else if(values == 'Maj'){month = 4;}
						else if(values == 'Jun'){month = 5;}
						else if(values == 'Jul'){month = 6}
						else if(values == 'Avgust'){month = 7;}
						else if(values == 'Septembar'){month = 8;}
						else if(values == 'Oktobar'){month = 9;}
						else if(values == 'Novembar'){month = 10;}
						else if(values == 'Decembar'){month = 11;}
						else{
							//flgNedelje
							month = 20;
						}
						//alert("sdasda"+year);
					 UlziNe = 0;
						//alert("Godinaaaaaaaaa"+year);
						week_no_arr = funkicjeMicko.FunkcijaNedelje(month, year);
						
						if(month == 20)
						{
						    document.getElementById('nedelja').innerHTML = "Izaberi Mesec";
	
						}
						else{
							
							for(var index = week_no_arr[0]; index<=week_no_arr[1]; index++){
	
								var respObj1 = index;
				
								options += '<option value="'+index+'" />';
				
								document.getElementById('nedelja').innerHTML = options;
							}
							
						}	
				});	
	    }
		
		
		
	},
	
	FunkcijaNedelje :  function(month,year){
			//function weekNumbersRangeInMonth(month, year){
 
			//alert(year); 
		year = year || new Date().getFullYear();
		var yearStart = new Date(year,0,1); // 1st Jan of the Year
 
		var first_day_of_month = new Date(year, month, 1);
		var first_week_number = Math.ceil(( ( (first_day_of_month - yearStart) / 86400000) +yearStart.getDay()+ 1)/7);//Prva nedelja u mesecu
 
		var last_day_of_month = new Date(year, month+1, 0); // Last date of the Month
		var last_week_number = Math.ceil(( ( (last_day_of_month - yearStart) / 86400000) +yearStart.getDay()+ 1)/7);//Poslednja nedelja u mesecu
	
		razlika = (last_week_number - first_week_number) + 1;//10-6 u Februaru
	    poslednja_nedelja = razlika;
		prva_nedelja = 1;
 
		return  [prva_nedelja, poslednja_nedelja];
		
		
	},
	
	Upis_Stanja :  function(){
		
		var nadimakBaza = $("#nadimakP").val();
		var nadimakBaza2 = $("#name").val();
		
		if(flgZ1 == 1){
			
			$("#Mesec").val("");
			$( "#dialog-10" ).dialog({
						autoOpen: false, 
						buttons: {
						OK: function() {$(this).dialog("close");}
								},
						title: "Greskaaa",
						
						hide: "puff",
						show : "slide",
						height: 200 
					});
					$( "#dialog-10" ).dialog( "open" );
		}
		else if(flgZ2 == 1){
			
			//alert("Greskaaa2");
			$("#odabrananedelja").val("");
			$( "#dialog-10" ).dialog({
						autoOpen: false, 
						buttons: {
						OK: function() {$(this).dialog("close");}
								},
						title: "Greskaaa",
						hide: "puff",
						show : "slide",
						height: 200 
					});
					$( "#dialog-10" ).dialog( "open" );
		}
        else if(flgZ3 == 1)
        {
			//alert("Greskaaa3");
			$("#projekti1").val("");
			$( "#dialog-10" ).dialog({
						autoOpen: false, 
						buttons: {
						OK: function() {$(this).dialog("close");}
								},
						title: "Greskaaa",
						
						hide: "puff",
						show : "slide",
						height: 200 
					});
					$( "#dialog-10" ).dialog( "open" );
		}			
		else{
			
			//alert("Micko");
			$.ajax({
				url: ""+web+"/micko/Stanje-Procedure",
				type: "Post",
				headers: {
					"Authorization": "Bearer " + token
				},
				data:{ 
						'Nadimak_Klijent': nadimakBaza2,
						'Projekti': projektiBaza,
						'nedelja': nedeljaBaza,
						'mesec': mesecBaza,
						'broj_sati': brojsatiBaza,
						'godina': godinaInf
				},
				success: function(response) {
					
					var respObj12 = response;
					var nizList = new Array();
					
					if(respObj12 == "Vec je upisano")
					{
						
						
					}
					else if(respObj12 == "Uspesan Insert")
					{
						
							$("#Mesec").val("");
							$("#odabrananedelja").val("");
							$("#projekti1").val("");
							$("#anrede").val("");
							
							
							$( "#dialog-12" ).dialog({
							autoOpen: false, 
							buttons: {
							OK: function() {$(this).dialog("close");}
								},
							title: "Uspesan Insert",
							hide: "puff",
							show : "slide",
							height: 200 
						});
						$( "#dialog-12" ).dialog( "open" );
						
						
						
						
					}
					else{
						
							$("#Mesec").val("");
							$("#odabrananedelja").val("");
							$("#projekti1").val("");
							$( "#dialog-10" ).dialog({
								autoOpen: false, 
							buttons: {
								OK: function() {$(this).dialog("close");}
							},
								title: "Vec je upisano",
								hide: "puff",
								show : "slide",
								height: 200 
							});
							$( "#dialog-10" ).dialog( "open" );
						
					}   
					    
					    funkicjeCile.RefresMeseci();
						funkicjeCile.Izvestaj1();
						alert("UpisStanja")
						funkicjeMicko.Trenutna_nedelja();
						//$("#ListaPr").val("");
						
		
				},
				error: function(response) {
					
							$("#Mesec").val("");
							$("#odabrananedelja").val("");
							$("#projekti1").val("");
							$( "#dialog-10" ).dialog({
								autoOpen: false, 
							buttons: {
								OK: function() {$(this).dialog("close");}
							},
								title: "Vec je upisano",
								hide: "puff",
								show : "slide",
								height: 200 
							});
							$( "#dialog-10" ).dialog( "open" );
					
				
				}	
			});
		}
	},
	
	Promena_sifre: function(){
		
		var ime_lozinka = $("#name").val();
		var sifra_promeni = $("#sifra").val();
		sifra_nova = $("#sifra1").val();
		var poredi= $("#sifra2").val(); 
		
		
		if (sifra_nova == poredi)
		{
			
			$.ajax({
				
				type: 'POST',
				url: ''+web+'/Dva-upita-promena-sifre?imeSifra='+ime_lozinka+'&sifra='+sifra_promeni+'',
				headers:{
							
						"Authorization": "Bearer " + token,
									
				},
				data: { 
							
						'sifra': sifra_nova
									
				},
				success: function(response){	
									
						var promenljiva = response;
						
						if(promenljiva == 'Nijeeeeeeee dobra sifraaa')
						{
							$( "#dialog-10" ).dialog({
							autoOpen: false, 
							buttons: {
								OK: function() {$(this).dialog("close");}
							},
							title: "Nije dobra stara sifra",
							hide: "puff",
							show : "slide",
							height: 200 
							});
							$( "#dialog-10" ).dialog( "open" );
							$("#sifra").val("");
							$("#sifra1").val("");
							$("#sifra2").val("");
						}
						else{
							
							$( "#dialog-12" ).dialog({
							autoOpen: false, 
							buttons: {
								OK: function() {$(this).dialog("close");}
							},
							title: "Uspesno promenjena sifra",
							hide: "puff",
							show : "slide",
							height: 200 
							});
							$( "#dialog-12" ).dialog( "open" );
							
							flgSifra = 1;
							//funkicjeMicko.Prijava();
							$("#sifra").val("");
							$("#sifra1").val("");
							$("#sifra2").val("");
							
						}
						
						flgSifra = 1;
						//funkicjeMicko.Prijava();//Ovo treba zakomentraisati
                        $("#sifra").val("");
						$("#sifra1").val("");
						$("#sifra2").val("");	
									
				},
				error: function(response) {
					
						alert("Nije dobrooo");
									
				}
			});
             
		}
		else{
			
			$( "#dialog-10" ).dialog({
				autoOpen: false, 
				buttons: {
					OK: function() {$(this).dialog("close");}
				},
				title: "Nisu iste sifre",
				hide: "puff",
				show : "slide",
				height: 200 
				});
			$( "#dialog-10" ).dialog( "open" );
							
				$("#sifra1").val("");
				$("#sifra2").val("");
			
		}
	},
	
	Trenutna_nedelja: function(){
		
			//alert("Cile");
			//brojacTrenutna_nedelja = 0;
		    idUvecaj = 0;
			idUvecajInput = 0;
			brojanje = 0;
			idUvecajInput1 = 0;
			t = 0;
		    $("tr#trTabela12").remove();
			
			$.ajax({
				
				

				url: ''+web+'/Djuture-upis?nadimak='+ime+'',
				type: "get",
				headers:{
					
							"Authorization": "Bearer " + token,
							
				},
			success: function(response) {		
					
					BrojacProjekata = 0;
					
					var table123 = document.getElementById('trenutnaNedelja');
					
					var respObjTebela = response;
					
					
					var micko = respObjTebela;

				
					for (var i = 0; i < respObjTebela.length; ++i){
					
					    BrojacProjekata++;
						
					
						var presidentTabela = respObjTebela[i];
						
							 var row = document.createElement('tr');
							 row.id = "trTabela12";
							
						     var propertiesTabela = ['Projekti','id_pr'];

								
								for (var j = 0; j < propertiesTabela.length; ++j)
								{   // create new data cell for names
							
									brojacMicko++;
					
									if(brojacMicko==1)
									{
										idUvecaj++;	
										var cell = document.createElement('td');
										cell.id = "tdTrenutnaNedelja"+idUvecaj+"1";
										brojacNUle = 0;
										
									}
									if(brojacMicko==2)
									{
										
										idUvecajInput++;
										var cell = document.createElement('input');
										cell.id = "inputTrenutnaNedelja"+idUvecajInput+"2";
										cell.setAttribute("type", "number");
										cell.min = 0;
										cell.max = 50000;
										cell.value = 0;
										brojacMicko = 0;
										brojacNUle++;
										
										for(var p = 0; p <  propertiesTabela.length; p++)
										{
									
											NizProjekti[brojanje] = respObjTebela[brojanje].Projekti;
											
										}
										
									}
                                
									cell.innerHTML = presidentTabela[propertiesTabela[j]];
									
									row.appendChild(cell);
								
								
								}
								brojanje++;
								
								table123.appendChild(row);
							}
					
						funkicjeMicko.Satinica();
						
					},
			
					error: function(xhr) {
				
						alert("Mickokokoko");
					}
				
				
		});
			
			
			
	},
	
	TrenutniMesec : function(){
		
		var month = new Array();
		month[0] = "Januar";
		month[1] = "Februar";
		month[2] = "Mart";
		month[3] = "April";
		month[4] = "Maj";
		month[5] = "Jun";
		month[6] = "Jul";
		month[7] = "Avgust";
		month[8] = "Septembar";
		month[9] = "Oktobar";
		month[10] = "Novembar";
		month[11] = "Decembar";

		var d = new Date();
		var n = month[d.getMonth()];
		//document.getElementById("demo").innerHTML = n;
		//alert(n);
		return n;
	
	},
	
	TrenutnaNedelja_nn:function(){
		
 
			var date = 0;
			date = new Date,
			days = ['Nedelja','Ponedeljak','Utorak','Sreda',
					'Cetvrtak','Petak','Subota'],
			prefixes = ['1', '2', '3', '4', '5',];
	
			return prefixes[0 | date.getDate() / 7];

	},
	
	KlikNedeljeTrenutne: function(){

	    /*var o = funkicjeMicko.TrenutnaNedelja_nn();
		var o1 = funkicjeMicko.TrenutniMesec();*/
		var o = $("#ListaNedelja").val();
		var o1 = $("#ListaMeseca").val();

		trenutnaNedelja_Upit = o;
		trenutnaMesec_Upit = o1;
	     
		for(var i = 0; i < brojanje ; i++)
		{			
			z++;
            k++;
            PakovanjeProjekti[i] = $("#tdTrenutnaNedelja"+k+"1").text();	
			Pakovanje[i] = $("#inputTrenutnaNedelja"+z+"2").val();
			tarzan1 = PakovanjeProjekti[i];
			tarzan2 = Pakovanje[i];
			funkicjeMicko.Upis_Stanja1();
			funkicjeCile.Izvestaj1();
			
		}
		z = 0;
		k = 0;
		
		
	},
	
	Upis_Stanja1 :  function(){
		
		var nadimakBaza = $("#nadimakP").val();
		var nadimakBaza2 = $("#name").val();
			
			$.ajax({
				url: ""+web+"/micko/Stanje-Procedure",
				type: "Post",
				headers: {
					"Authorization": "Bearer " + token
				},
				data:{ 
						'Nadimak_Klijent': nadimakBaza2,
						'Projekti': tarzan1,
						'nedelja': trenutnaNedelja_Upit,
						'mesec': trenutnaMesec_Upit,
						'broj_sati': tarzan2,
						'godina': godinaInf
				},
				
				success: function(response) {
					
					var stanjeNedelja = $('#ListaNedelja').val();
					
					if(stanjeNedelja == ""){

							$( "#dialog-10" ).dialog({
							autoOpen: false, 
							buttons: {
									OK: function() {$(this).dialog("close");}
							},
									title: "TO-NET",
									hide: "puff",
									show : "slide",
									height: 200 
							});
						$( "#dialog-10" ).dialog( "open" );
					}
					else{

						var respObj12 = response;
						var nizList = new Array();
						//funkicjeCile.RefresMeseci();
						
						$( "#dialog-12" ).dialog({
							autoOpen: false, 
							buttons: {
									OK: function() {$(this).dialog("close");}
							},
									title: "TO-NET",
									hide: "puff",
									show : "slide",
									height: 200 
							});
						$( "#dialog-12" ).dialog( "open" );
					}
				},
				error: function(response) {
					
							$("#Mesec").val("");
							$("#odabrananedelja").val("");
							$("#projekti1").val("");
							$( "#dialog-10" ).dialog({
								autoOpen: false, 
							buttons: {
								OK: function() {$(this).dialog("close");}
							},
								title: "Vec je upisano",
								hide: "puff",
								show : "slide",
								height: 200 
							});
							$( "#dialog-10" ).dialog( "open" );
					
				
				}	
			});
		
	},
	
	TabelaVelika: function(){
		
		window.location.href="#/Tabela";
		$("#id5").hide();
		$("#id4").hide();
		$("#id3").hide();
		$("#id6").hide();
		$("#id7").hide();
		$("#id8").show();

			funkicjeCile.RefresMeseci();

	},
	
	NazadTabela: function(){
		
		window.location.href="#/login";
		$("#id5").hide();
		$("#id4").show();
		$("#id3").hide();
		$("#id6").hide();
		$("#id7").hide();
		$("#id8").hide();

	},
	
	/*SatinicaNedelje : function() {
		
		var KorisnickoIme = $("#name").val();
		//var projekatUnesi = projekatNT;
	    var o2 = funkicjeMicko.TrenutnaNedelja_nn();
		var o12 = funkicjeMicko.TrenutniMesec();
		var mesecTN = o12;
		var nedeljaTN = o2;
		
			$.ajax({
 
				url: 'http://localhost:3090/FunkcijeProba/micko?nadimak='+KorisnickoIme+'&projekat='+NizProjekti[t]+'&mesec='+mesecTN+'&nedelja='+nedeljaTN+'&godina='+godinaInf+'',
				type: "get",
				headers:{
							"Authorization": "Bearer " + token,
							
				},
				success: function(response) {
                
					t++;
			
					var respObj = response;
					var satnica = 0;
					var duzina = respObj.length;
					var nizListnizproba = new Array();
					
					if(duzina == 0){
						idUvecajInput1++;
						SatnicaTN = 0;
						$("#inputTrenutnaNedelja"+idUvecajInput1+"2").val(SatnicaTN);
						
						if(t < NizProjekti.length)
						{
							funkicjeMicko.SatinicaNedelje();
						}
					}
					else{
						idUvecajInput1++;
						SatnicaTN = respObj[0].broj_sati;
						$("#inputTrenutnaNedelja"+idUvecajInput1+"2").val(SatnicaTN);
						if(t < NizProjekti.length)
						{
							funkicjeMicko.SatinicaNedelje();
						}
					}
				
				},
			
				error: function(xhr) {
               
					alert("Jacaaaaa");
				}
			});
		
	},*/
	
	Satinica : function() {
		
		var o2 = nedeljaMicko;
		var o12 = mesecMicko;
		
		var KorisnickoIme = $("#name").val();
	    
		var mesecTN = o12;
		var nedeljaTN = o2;
		
		
			$.ajax({
 
				url: ''+web+'/FunkcijeProba/micko?nadimak='+KorisnickoIme+'&projekat='+NizProjekti[t]+'&mesec='+mesecTN+'&nedelja='+nedeljaTN+'&godina='+godinaInf+'',
				type: "get",
				headers:{
							"Authorization": "Bearer " + token,
							
				},
				success: function(response) {
                
					t++;
			
					var respObj = response;
					var satnica = 0;
					var duzina = respObj.length;
					var nizListnizproba = new Array();
					
					if(duzina == 0){
						idUvecajInput1++;
						SatnicaTN = 0;
						$("#inputTrenutnaNedelja"+idUvecajInput1+"2").val(SatnicaTN);
						
						if(t < NizProjekti.length)
						{
							funkicjeMicko.Satinica();
						}
					}
					else{
						idUvecajInput1++;
						SatnicaTN = respObj[0].broj_sati;
						$("#inputTrenutnaNedelja"+idUvecajInput1+"2").val(SatnicaTN);
						if(t < NizProjekti.length)
						{
							funkicjeMicko.Satinica();
						}
					}
				
				},
			
				error: function(xhr) {
               
					alert("Jacaaaaa");
				}
			});
		
	},
	
	PrijavaNedelje: function(){
		
		//var N1 = funkicjeMicko.TrenutnaNedelja_nn();
		N1 = mickoMajnun;
		var M1 = funkicjeMicko.TrenutniMesec();
		var mesec = 0;
		
		if(M1 == 'Januar'){mesec = 0;}
		else if(M1 == 'Februar'){ mesec = 1;}
		else if(M1 == 'Mart'){mesec = 2;}
		else if(M1 == 'April'){mesec = 3;}
		else if(M1 == 'Maj'){mesec = 4;}
		else if(M1 == 'Jun'){mesec = 5;}
		else if(M1 == 'Jul'){mesec = 6}
		else if(M1 == 'Avgust'){mesec = 7;}
		else if(M1 == 'Septembar'){mesec = 8;}
		else if(M1 == 'Oktobar'){mesec = 9;}
		else if(M1 == 'Novembar'){mesec = 10;}
		else if(M1 == 'Decembar'){mesec = 11;}
		else{		
			mesec = 20;
		}
		
		//alert(mesec);
		
		year = 2016;
		
	    week_no_arr = funkicjeMicko.FunkcijaNedelje(mesec, year);
						
			if(mesec == 20)
			{
				document.getElementById('nedelja').innerHTML = "Izaberi Mesec";
	
			}
			else{
							
				for(var index = week_no_arr[0]; index<=week_no_arr[1]; index++){
	
				var respObj1 = index;
				
				options += '<option value="'+index+'" />';
				
				document.getElementById('nedelja').innerHTML = options;
				
				}			
			}	
	},

	Odjava: function(){
         
		window.location.href="#/Pocetna";
		$("#id3").show();
		$("#id4").hide();
		$("#id5").hide();
		$("#id6").hide();
		$("#id7").hide();
		$("#id8").hide();

		ime = "0";
		$("#name").val("");
		sifra = "0";
		$("#email").val("");


	},

	BrisanjOpt: function(selectbox){

			var i;
			for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
			{
				selectbox.remove(i);
			}
		


	},

    Funkcija_Meseci_nedelje_godine: function(){

       		
		options = '';
		valuesGodina = $("#ListaMeseca").val();
		//alert("Mesec"+valuesGodina);

		if(valuesGodina == 'Januar'){monthGodina = 0;}
		else if(valuesGodina == 'Februar'){ monthGodina = 1;}
		else if(valuesGodina == 'Mart'){monthGodina = 2;}
		else if(valuesGodina == 'April'){monthGodina = 3;}
		else if(valuesGodina == 'Maj'){monthGodina = 4;}
		else if(valuesGodina == 'Jun'){monthGodina = 5;}
		else if(valuesGodina == 'Jul'){monthGodina = 6}
		else if(valuesGodina == 'Avgust'){monthGodina = 7;}
		else if(valuesGodina == 'Septembar'){monthGodina = 8;}
		else if(valuesGodina == 'Oktobar'){monthGodina = 9;}
		else if(valuesGodina == 'Novembar'){monthGodina = 10;}
		else if(valuesGodina == 'Decembar'){monthGodina = 11;}	


		else{
					//flgNedelje
					month = 20;
		}
          /* alert("monthGodina"+monthGodina);
		   alert("Godina"+year);*/

			week_no_arr = funkicjeMicko.FunkcijaNedelje(monthGodina, year);
						
				if(month == 20)
				{
						    document.getElementById('nedelja').innerHTML = "Izaberi Mesec";
	
				}
				else{
						
					
							/*var select = document.getElementById("nedelja");
							var length = select.options.length;

								for (i = 0; i < length-1; i++) {
									length.remove(i);
							}*/
							
						for(var index = week_no_arr[0]; index<=week_no_arr[1]; index++){
		
							var respObj1 = index;
						
							options += '<option value="'+index+'" />';
						
							document.getElementById('nedelja').innerHTML = options;
							//alert("sas");
						}
							
				}	

		}

}

funkicjeMicko.gotoFunction('Strana');
funkicjeMicko.Meseci_Nedelje('NedeljeMeseci');

	$(function() {
		
            $( "#dialog-3" ).dialog({
               autoOpen: false,  
            });
            $( "#IdPrijava" ).click(function() {
               $( "#dialog-3" ).dialog( "open" );
            });
	});

	$(function() {
            $( "#dialog-10" ).dialog({
               autoOpen: false,  
            });
            $( "#IdPrijava" ).click(function() {
               $( "#dialog-10" ).dialog( "open" );
            });
	});
	
	$(function() {
            $( "#dialog-12" ).dialog({
               autoOpen: false,  
            });
          
	});
	
	$(function() {
		
            $( "#dialog-7" ).dialog({
               autoOpen: false,  
            });
           
	});
	
	$(function() {
		
            $( "#dialog-11" ).dialog({
               autoOpen: false,  
            });
           
	});

	$(function() {
            $( "#dialog-4" ).dialog({
               autoOpen: false,  
            });
			$( "#IdPrijava" ).click(function() {
               $( "#dialog-4" ).dialog( "open" );
            });
         
	});

	$(function() {
            $( "#dialog-5" ).dialog({
               autoOpen: false,  
            });
			$( "#IdPrijava" ).click(function() {
               $( "#dialog-5" ).dialog( "open" );
            });
         
	});
	
	$(function() {
            $( "#dialog-aktivan" ).dialog({
               autoOpen: false,  
            });
			$( "#IdPrijava" ).click(function() {
               $( "#dialog-aktivan" ).dialog( "open" );
            });
         
	});
		
	$("#ListaPr").on('input',function(e){
		
		    //alert(e);
			var optionFound = false,
				datalist = this.list;
					for (var j = 0; j < datalist.options.length; j++) {
						if (this.value == datalist.options[j].value) {
							optionFound = true;
							break;
						}
					}
					if (optionFound) {
								
						var values = $(this).val();
						//var ValuesNedelja = funkicjeMicko.TrenutnaNedelja_nn();
						var ValuesNedelja = mickoMajnun;
						//alert(ValuesNedelja);		
						var ValuesMeseci = funkicjeMicko.TrenutniMesec();
						//alert(ValuesMeseci);
						projektiBaza = values;
						
						projekatInf = values;
						if(nedeljaInf == "0")
						{
							nedeljaInf = ValuesNedelja;
							nedeljaBaza = ValuesNedelja;
							//alert(nedeljaInf);
							mesecInf = ValuesMeseci;
							mesecBaza = ValuesMeseci;
							flgZ2 = 0;
							flgZ3 = 0;
							
							//alert(mesecInf);
							
						}
						
						flgZ1 = 0;
						flgProjekat1 = 1;
						var flgneki1 = 0;
                        funkicjeCile.Izvestaj1();
						if(flgMeseci1 == 1 && flgNed1 == 1 && flgProjekat1 == 1 && flgneki1 == 1){
				
							document.getElementById("UpisUBazu").disabled = false;
						}
						else if(flgMeseci1 == 1 && flgNed1 == 1 && flgProjekat1 == 1 ){
							
							document.getElementById("UpisUBazu").disabled = false;
						}else{
							
							
						}
									
					} else {
						
						flgProjekat1 = 0;
						document.getElementById("UpisUBazu").disabled = true;	
						  
					}
		
			
			
	});

	$("#ListaNedelja").on('input',function(e){
	
			//alert("hkhkh");
			var optionFound = false,
				datalist = this.list;
				for (var j = 0; j < datalist.options.length; j++) {
								
					if (this.value == datalist.options[j].value) {
						optionFound = true;
						break;
					}
				}
					if (optionFound) {
	
						var values = $(this).val();
						nedeljaMicko = values;
						/*if(mesecMicko == "" && flgTrenutneNedelje == 0)
						{
							mesecMicko = funkicjeMicko.TrenutniMesec();
							flgTrenutneNedelje = 1;
							
						}*/
						nedeljaBaza = values;
						nedeljaInf = values;
						flgZ3 = 0;
						flgNed1 = 1;
						var flgneki = 0;
						flgNedTr = 1;
						//	$('#Upis-u-bazu-vide-upisa').attr("disabled", false);
						funkicjeMicko.Trenutna_nedelja();
						funkicjeCile.Izvestaj1();
						
						if(flgNedTr == 1 && flgMeseciTr == 1)
						{
                             $('#Upis-u-bazu-vide-upisa').attr("disabled", false);
						}
						
									
					} else {
						
						flgNedTr = 0;
						$('#Upis-u-bazu-vide-upisa').attr("disabled", true);
						flgNed1 = 0;
						//document.getElementById("UpisUBazu").disabled = true;
						  
					}
	});

	$("#OdabraniSati").on('input',function(e){
	
			//alert($(this).val());
			var values = $(this).val();
			brojsatiBaza = values;
			
			//$("#brojsati").val(values);
			
	});
    
	$("#OdabranaGodina").on('input',function(e){
	
			var values = $(this).val();
			Godina = values;
			year = Godina;		
			godinaInf = year;
            //UlziNe = 0;
			//funkicjeMicko.Funkcija_Meseci_nedelje_godine();
   			funkicjeMicko.Funkcija_Meseci_nedelje_godine();
			funkicjeMicko.Trenutna_nedelja();
			
			
	});
   
   	function keyCode(event) {
    	var x = event.keyCode;
    		if (x == 13) {
       	 //alert ("You pressed the Escape key!");
				funkicjeMicko.Prijava();
    		}
 	}
	 
	function keyCode1(event) {
   		var x = event.keyCode;
    		if (x == 13) {
       // alert ("You pressed the Escape key!");
				funkicjeMicko.PrijavaNaServer();
    		}
 	}



