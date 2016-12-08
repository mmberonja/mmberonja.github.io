var monthNames_inf = ["Januar", "Februar", "Mart", "April", "Maj", "Jun",
  "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
];

var Nedelje = [];

var options1_inf = '';
var options = '';
var year_inf = 2016;
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

var NadimakRef = "0";

var flgBrisanje = 0;

var flgProjekat12 = 1;
var flgMeseci12 = 1;
var flgNed12 = 1;
var flgZ12 = 1;
var flgZ22 = 1;
var flgZ32 = 1;
var flgBrisanj12 = 1;
var mesecInf = "0";
var projekatInf = "0";
var nedeljaInf = "0";
var godinaInf = "0";
var godinaTAbela = 0;
//var web = 'http://localhost:3090';

var funkicjeCile = {
	gotoFunction: function(Function) {
		// check for token, access rights etc.
		switch (Function) {
		
		case "InformacijeNedeljeMeseci":
			this.Informacije_Meseci_Nedelje();
			break;
		}
	},
	Informacije_Meseci_Nedelje : function() {
		





		
		for(var i1 = 0; i1 < monthNames_inf.length ; i1++){

			options1_inf += '<option value="'+monthNames_inf[i1]+'" />';
			//document.getElementById('informacije_mesec').innerHTML = options1_inf;
	
		}
            
		for(var i5 = 0; i5 < inputs.length; i5++){
			$("#Informacije_ListaMeseca").on('input',function(e){
		
					options = '';
					    var optionFound = false,
							datalist = this.list;
							for (var j = 0; j < datalist.options.length; j++) {
					
								if (this.value == datalist.options[j].value) {
									optionFound = true;
									break;
								}
							}
							if (optionFound) {
								
									flgZ22 = 0;
									var values = $(this).val();
									mesecInf = values;
									var flgMeseci12 = 1;
									$("#Mesec").val(flgMeseci12);
                                    if(flgMeseci12 == 1 && flgNed12 == 1 && flgProjekat12 == 1){
										
										document.getElementById("Izvestaj").disabled = false;
									}
									
							} else {
						
									var flgMeseci12 = 0;
									document.getElementById("Izvestaj").disabled = true;
						  
							}
                         
						
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
							
							month = 20;
						}
						
						week_no_arr = funkicjeCile.Informacije_FunkcijaNedelje(month, year);
						
						if(month == 20)
						{
						    document.getElementById('informacije_nedelja').innerHTML = "Izaberi Mesec";
							
						}
						else{
							
							for(var index = week_no_arr[0]; index<=week_no_arr[1]; index++){
							
								var respObj1 = index;
				
								options += '<option value="'+index+'" />';
				
								document.getElementById('informacije_nedelja').innerHTML = options;
							}
							
						}	
				});	
	    }
		
	},
	
	Informacije_FunkcijaNedelje :  function(month,year){
			
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
	
	Izvestaj : function() {
		
		
		var nadimakInf = $("#name").val();

		
		$.ajax({
 
			url: ''+web+'/FunkcijeProba/micko?nadimak='+nadimakInf+'&projekat='+projekatInf+'&mesec='+mesecInf+'&nedelja='+nedeljaInf+'',

			type: "get",
			headers:{
							"Authorization": "Bearer " + token,
							
			},
            success: function(response) {
                
					var respObj = response;
					var satnica = 0;
					var duzina = respObj.length;
					if(duzina == 0 ){

						$("#rezultati").val("Nije upisana satnica");
						
					}
					else{

						satnica = respObj[0].broj_sati;
						$("#rezultati").val(satnica);
						
					}
                  
				
			},
			
            error: function(xhr) {
               
					alert("Cile");
			}
		});
	    
    
	},
	
	Izvestaj1 : function() {
		
		var nadimakInf = $("#name").val();
		
		$.ajax({
 
			url: ''+web+'/FunkcijeProba/micko?nadimak='+nadimakInf+'&projekat='+projekatInf+'&mesec='+mesecInf+'&nedelja='+nedeljaInf+'&godina='+godinaInf+'',
			type: "get",
			headers:{
							"Authorization": "Bearer " + token,
							
			},
            success: function(response) {
                
					var respObj = response;
					var satnica = 0;
					var duzina = respObj.length;
					if(duzina == 0 ){
						
						$("#OdabraniSati").val(0);
					}
					else{

						satnica = respObj[0].broj_sati;
						$("#OdabraniSati").val(satnica);
					}
                  
				
			},
			
            error: function(xhr) {
               
					alert("Cile");
			}
		});
	    
    
	},
	
	IzvestajMesecni: function() {
		
		var nadimakInf1 = $("#name").val();
		var projekatInf1 = $("#projekat_iz").val();
		var mesecInf1 = $("#mesec_iz").val();
		
		$.ajax({
 
			url: ''+web+'/FunkcijeProba/Izvestaj?nadimak='+nadimakInf1+'&projekat='+projekatInf1+'&mesec='+mesecInf1+'',
			type: "get",
			headers:{
							"Authorization": "Bearer " + token,
							
			},
            success: function(response) {
                
					var respObj1 = response;
					var satnica1 = 0;
					var duzina1 = respObj1.length;
					
					if(respObj1 == "null"){
						$("#rezultati1").val("Nemaaaaa");
					}
					else{
						
						satnica1 = respObj1;
						$("#rezultati1").val(satnica1);
					}
                  
				
			},
			
            error: function(xhr) {
               
					alert("Cile");
			}
		});
		
	},
	
	RefresMeseci: function() {

	    NadimakRef = $("#name").val();
	    
		$("tr#Mickok").remove();
		$("tr#trPrijava").remove();
		
  
		$.ajax({
 
            url: ''+web+'/ListaProjekata-meseci?ime='+NadimakRef+'&godina='+godinaTAbela+'',
			type: "get",
			headers:{
							"Authorization": "Bearer " + token,
							
			},
            success: function(response) {
                
				    $("tr#Mickok").remove();
				
					var table1 = document.getElementById('presidents');
				
					var respObjProba = response;
					
					var micko = respObjProba;
					
					for (var i = 0; i < respObjProba.length; ++i){
					
						var president = respObjProba[i];
						
							 var row = document.createElement('tr');
							 row.id = "Mickok";
							
						     var properties = ['Ime_Projekta','Januar','Februar','Mart','April','Maj','Jun','Jul','Avgust','Septembar','Oktobar','Novembar','Decembar'];
							
							for (var j = 0; j < properties.length; ++j)
							{   // create new data cell for names
								var cell = document.createElement('td');
								 cell.id = "Cile";
								// set name of property using bracket notation (properties[i] is a string,
								// which can be used to access properties of president)
								cell.innerHTML = president[properties[j]];
								// add to end of the row
								row.appendChild(cell);
							}
							// add new row to table
							table1.appendChild(row);
						
					}
                  
			},
			
            error: function(xhr) {
               
					alert("Cile");
			}
		});
		
	},
	
	//Nigde se ne poziva
	ProbaBaza: function() {
		
		$.ajax({
 
			url: ''+web+'/ListaProjekata1',
			type: "get",
			/*headers:{
							"Authorization": "Bearer " + token,
							
			},*/
            success: function(response) {
                
				    var table = document.getElementById('presidents');
				
					var respObjProba = response;
					
					var micko = respObjProba;
					
					for (var i = 0; i < respObjProba.length; ++i){
					
						var president = respObjProba[i];
						
							 var row = document.createElement('tr');
							 
							 //var properties = ['April','Mart', 'Februar','Januar', 'id_projekat_M','id_nadimak_M', 'id'];
							// var properties = ['id','id_nadimak_M','id_projekat_M','Januar','Februar','Mart','April'];
						     var properties = ['Ime_Projekta','Januar','Februar','Mart','April','Maj','Jun','Jul','Avgust','Septembar','Oktobar','Novembar','Decembar'];
							
							for (var j = 0; j < properties.length; ++j)
							{   // create new data cell for names
								var cell = document.createElement('td');
								// set name of property using bracket notation (properties[i] is a string,
								// which can be used to access properties of president)
								cell.innerHTML = president[properties[j]];
								// add to end of the row
								row.appendChild(cell);
							}
							// add new row to table
							table.appendChild(row);
						
						
					}
				
			},
			
            error: function(xhr) {
               
					alert("Cile");
			}
		});
		
	},
	
}
			
funkicjeCile.Informacije_Meseci_Nedelje('InformacijeNedeljeMeseci');


$("#Informacije_ListaNedelja").on('input',function(e){
	
			
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
								
								nedeljaInf = values;
								
								flgZ22 = 0;
								flgProjekat12 = 1;
								var flgneki12 = 0;
								
								if(flgMeseci12 == 1 && flgNed12 == 1 && flgProjekat12 == 1 && flgneki12 == 1){
									
									document.getElementById("Izvestaj").disabled = false;
								}
								else if(flgMeseci12 == 1 && flgNed12 == 1 && flgProjekat12 == 1 ){
									
									document.getElementById("Izvestaj").disabled = false;
								}
								else{
								}
									
							} else {
						
									flgProjekat12 = 0;
									document.getElementById("Izvestaj").disabled = true;
						  
							}
			
			
});

$("#ListaPr1").on('input',function(e){
	
			
			var values = $(this).val();
			$("#projekat_iz").val(values);
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
									
								projekatInf = values;
								flgZ32 = 0;
								flgNed12 = 1;
								var flgneki2 = 0;
									
									if(flgNed12 == 1 && flgMeseci12 == 1 &&  flgProjekat12 == 1 && flgneki2 == 1){
										
										document.getElementById("Izvestaj").disabled = false;
									}
									else if(flgNed12 == 1 && flgMeseci12 == 1 &&  flgProjekat12 == 1 ){
										
										document.getElementById("Izvestaj").disabled = false;
									}
									else{
										
										
									}
									
						} else {
						
									flgNed12 = 0;
									document.getElementById("Izvestaj").disabled = true;
						  
						}
			
			
});

$("#OdabranaGodinaTabela").on('input',function(e){
	
	
	var values = $(this).val();
	godinaTAbela = values;
	funkicjeCile.RefresMeseci();
	
});









