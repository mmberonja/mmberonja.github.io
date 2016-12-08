
var KorisnikAdmin = "0" 
var KorisnikAdmin1 = "0";
var KorisnikAdmin2 = "0";
var UpozoenjePR,UpozoenjeKR = "";
var BrisanjeKorisnik = "0";
var BrisanjeProjekat = "0";
var BrisanjeSVE = "0";
var flegBr1 = 0;
var flegBr2 = 0;
var flegDD1 = 0;
var flegDD2 = 0;
var Sviprojekti = "0";
var deatkivacijaKorisnik = "";
var atkivacijaKorisnik = "";
//var web = 'http://localhost:3090';

var funkicjeAdmin = {
	gotoFunction: function(Function) {
		// check for token, access rights etc.
		switch (Function) {
		case "Strana1":
			this.LoginStrana();
			break;
		case "ListaPR1":
			this.ListProjekata();
			break;
		case "NedeljeMeseci1":
			this.Meseci_Nedelje();
			break;
		}
	},
	
	PromeniSifru: function (){
		
		window.location.href="#/Sifra";
		$("#id6").hide();
		$("#id5").hide();
		$("#id4").hide();
		$("#id3").hide();
		$("#id7").show();
	},
	
	NazadSifra: function (){
		
		window.location.href="#/login";
		$("#id3").hide();
		$("#id4").show();
		$("#id5").hide();
		$("#id6").hide();
		$("#id7").hide();
	},
	
	StranicaAdmin: function(){
		
		window.location.href="#/Admin";
		$("#id6").show();
		$("#id5").hide();
		$("#id4").hide();
		$("#id3").hide();
		$("#id7").hide();
		
		
		$.ajax({

			url: ''+web+'/Korisnici-Nadimci',
            
			type: "get",
			headers:{
							"Authorization": "Bearer " + token,
							
			},
            success: function(response) {
                
					var respObjNadimak = response;	

                    var nizListNadimak = new Array();
					var nizListImePrezime = new Array();
					
					
						for(var i1 = 0; i1 < respObjNadimak.length ; i1++){
					
							nizListNadimak[i1] = respObjNadimak[i1].Nadimak_Klijent;
							nizListImePrezime[i1] = respObjNadimak[i1].Ime_Prezime;
							
						}
				
						var optionsNadimak = '';
						var optionsImePrezime = '';
					
						for(var i2 = 0; i2 < nizListNadimak.length; i2++)
						{
							optionsNadimak += '<option value="'+nizListNadimak[i2]+'" />';
							optionsImePrezime += '<option value="'+nizListImePrezime[i2]+'" />';
							
						}
						
						    document.getElementById('admin1').innerHTML = optionsImePrezime;
				            document.getElementById('admin4').innerHTML = optionsImePrezime; 
							document.getElementById('brisanje1').innerHTML = optionsImePrezime;
							document.getElementById('brisanje12').innerHTML = optionsImePrezime;
								
				            funkicjeAdmin.Svi_projekti();
							funkicjeAdmin.SamoAktivni();
							funkicjeAdmin.SamoNeAktivni();
			},
			
            error: function(response) {
               
					alert("Greska u serveru");
			}
		});
		
	},
	
	KorisniciLista: function(){
		
		
		
		$.ajax({

			url: ''+web+'/Korisnici-Nadimci',
            
			type: "get",
			headers:{
							"Authorization": "Bearer " + token,
							
			},
            success: function(response) {
                
					var respObjNadimak = response;	

                    var nizListNadimak = new Array();
					var nizListImePrezime = new Array();
						for(var i1 = 0; i1 < respObjNadimak.length ; i1++){
					
							nizListNadimak[i1] = respObjNadimak[i1].Nadimak_Klijent;
							nizListImePrezime[i1] = respObjNadimak[i1].Ime_Prezime;
						}
				
						var optionsNadimak = '';
						var optionsImePrezime = '';
					
						for(var i2 = 0; i2 < nizListNadimak.length; i2++)
						{
							optionsNadimak += '<option value="'+nizListNadimak[i2]+'" />';
							optionsImePrezime += '<option value="'+nizListImePrezime[i2]+'" />';
						}
				
				            document.getElementById('admin1').innerHTML = optionsImePrezime;
				            document.getElementById('admin4').innerHTML = optionsImePrezime; 
							document.getElementById('brisanje1').innerHTML = optionsImePrezime;
							document.getElementById('brisanje12').innerHTML = optionsImePrezime;				
				
			},
			
            error: function(response) {
               
					alert("Cile");
			}
		});
		
	},
	
	TabelaKorisniciAdmin: function(){
		
		    $("tr#trTabela").remove();
				
			$.ajax({

				url: ''+web+'/Spojeno-u-nadimak?ime='+KorisnikAdmin+'&godina='+godinaInf11+'',
				type: "get",
				headers:{
					
							"Authorization": "Bearer " + token,
							
				},
				success: function(response) {		
					
					
					
					var tableAdmin = document.getElementById('adminTable');
					
					var respObjTebela = response;
					
					var micko = respObjTebela;
					
					for (var i = 0; i < respObjTebela.length; ++i){
					
						var presidentTabela = respObjTebela[i];
						
							 var row = document.createElement('tr');
							 row.id = "trTabela";
							
						     var propertiesTabela = ['Ime_Projekta','Januar','Februar','Mart','April','Maj','Jun','Jul','Avgust','Septembar','Oktobar','Novembar','Decembar','Sum'];
							
							for (var j = 0; j < propertiesTabela.length; ++j)
							{  
								var cell = document.createElement('td');
								cell.id = "tdTabela";
								
								cell.innerHTML = presidentTabela[propertiesTabela[j]];

								row.appendChild(cell);
							}
							
							tableAdmin.appendChild(row);		
						
					}
				},
			
				error: function(xhr) {
               
					alert("Cile");
				}
				
			});
	},
	
	NeRadiNatimProjektimaAdmin : function(){ 
	
		$.ajax({
 
			url: ''+web+'/Korisnici-Projekti-Na-kojima-nerade?ime='+KorisnikAdmin1+'',
            type: "get",
			headers:{
					
							"Authorization": "Bearer " + token,
							
			},
  
            success: function(response) {
                
					
					var respObjADmin = response;	

                    var nizListADmin = new Array();
						for(var i1 = 0; i1 < respObjADmin.length ; i1++){
					
							nizListADmin[i1] = respObjADmin[i1].Projekti;
						}
				
						var optionsADmin = '';
					
						for(var i2 = 0; i2 < nizListADmin.length; i2++)
						{
							optionsADmin += '<option value="'+nizListADmin[i2]+'" />';
						}
				
							document.getElementById('admin3').innerHTML = optionsADmin;
								
			},
			
            error: function(xhr) {
               
					alert("Cile");
			}
		});
	
	
	
	
	},
	
	DodajProjekat_dialog : function(){
		
		funkicjeAdmin.DodajProjekat();
		
	},
	
	DodajProjekat : function(){
		
		
		if(KorisnikAdmin1 == "0"){	
			
			$( "#dialog-11" ).dialog({
				autoOpen: false, 
				buttons: {
				OK: function() {$(this).dialog("close");}
				},
					title: "TO-NET",
					hide: "puff",
					show : "slide",
					height: 200 
				});
				$( "#dialog-11" ).dialog( "open" );
		}
		
		else if(KorisnikAdmin2 == "0"){	
			
			$( "#dialog-11" ).dialog({
				autoOpen: false, 
				buttons: {
				OK: function() {$(this).dialog("close");}
				},
					title: "TO-NET",
					hide: "puff",
					show : "slide",
					height: 200 
				});
				$( "#dialog-11" ).dialog( "open" );
		}
		else{
		   
			$("#NeRadi").val("");
			$.ajax({
						type: 'POST',
						
						url: ''+web+'/Upis-Projekta-koji-nepostoji',
						headers:{
						
								"Authorization": "Bearer " + token,
								
						},
						data: { 
						
								'Nadimak': KorisnikAdmin1, 
								'Projekat': KorisnikAdmin2,
								'godina': godinaInf,
								
						},
						
						success: function(response){	
								
								var nesto = response;
								funkicjeAdmin.NeRadiNatimProjektimaAdmin();
								funkicjeAdmin.TabelaKorisniciAdmin();
								funkicjeAdmin.SElect_BrisanjeProjektiNaKojimKorisnikRadi();
								funkicjeAdmin.TabelaProjekat_korisnici();
								
								KorisnikAdmin2 = "0";
								
								document.getElementById("DodajProjekatID").disabled = true;
								$( "#dialog-7" ).dialog({
									autoOpen: false, 
									buttons: {
									OK: function() {$(this).dialog("close");}
									},
										title: "TO-NET",
										hide: "puff",
										show : "slide",
										height: 200 
									});
									$( "#dialog-7" ).dialog( "open" );
								
								
						},
						
						error: function(response) {
							
								
								alert("Nije dobrooo");
								
						}
			});
		}
	},
	
	DodajProjekatNovi_dialog: function (){
	
        funkicjeAdmin.DodajProjekatNovi();	
	    
	},
	
	DodajProjekatNovi: function (){
		
		var ImeProjekta = $("#ProjekatNovi").val();
		
		var provera = $("#ProjekatNovi").val()
		
		if(provera == "")
		{
			$( "#dialog-11" ).dialog({
				autoOpen: false, 
				buttons: {
				OK: function() {$(this).dialog("close");}
				},
					title: "TO-NET",
					hide: "puff",
					show : "slide",
					height: 200 
				});
			$( "#dialog-11" ).dialog( "open" );
		}
		else{
		
			$.ajax({
					type: 'POST',
					url: ''+web+'/Dodavanje-Novog-Projekta',
					headers:{
					
							"Authorization": "Bearer " + token,
							
					},
					data: { 
					
							'Projekat': ImeProjekta, 
							
					},
				
					success: function(response){	
							
							var nesto = response;
							$("#KorsnikNEP").val("");
							funkicjeAdmin.NeRadiNatimProjektimaAdmin();
							funkicjeAdmin.TabelaKorisniciAdmin();
							
					},
					
					error: function(response) {
						
							
							alert("Nije dobrooo");
							
					}
			});
		
		}
	},
	
	UklanjanjeKorisnikaSaDatogProjekta_dialog: function (){
		
		funkicjeAdmin.ButtonDIsabledDialog(); 
		$( "#dialog-pitanje" ).dialog({
				autoOpen: false, 
				buttons: {
					"Da": function() {
					funkicjeAdmin.UklanjanjeKorisnikaSaDatogProjekta();
					funkicjeAdmin.ButtonDialogEnable();
					$(this).dialog("close");
					},
					"Ne": function() {
					$("#BrisanjeKorisnik").val("");
					$("#Radi").val("");
					funkicjeAdmin.ButtonDialogEnable();
					$(this).dialog("close");
			}
				},
				title: "TO-NET",
					hide: "puff",
					show : "slide",
					height: 200 
				});
		$( "#dialog-pitanje" ).dialog( "open" );
		
	},
	
	UklanjanjeKorisnikaSaDatogProjekta: function (){
		
		var BrisanjeKorisnik2 = BrisanjeKorisnik;
		
		var BrisanjeProjekat2 = BrisanjeProjekat;
		
		$("#Radi").val("");
		
		$.ajax({
					type: 'DELETE',
					url: ''+web+'/Uklanjanje-korisnika-sa-odredjenog-projekta?NadimakBrisanje='+BrisanjeKorisnik2+'&ProjekatBRisanje='+BrisanjeProjekat2+'',
					headers:{
					
							"Authorization": "Bearer " + token,
							
					},
					success: function(response){	
			
							var nesto = response;
							
							funkicjeAdmin.NeRadiNatimProjektimaAdmin();
							funkicjeAdmin.TabelaKorisniciAdmin();
							funkicjeAdmin.SElect_BrisanjeProjektiNaKojimKorisnikRadi();
							funkicjeAdmin.TabelaProjekat_korisnici();
							$("#NeRadi").val("");
							
							$( "#dialog-7" ).dialog({
									autoOpen: false, 
									buttons: {
									OK: function() {$(this).dialog("close");}
									},
										title: "TO-NET",
										hide: "puff",
										show : "slide",
										height: 200 
									});
									$( "#dialog-7" ).dialog( "open" );
							
							
							
							document.getElementById("BRISII").disabled = true;
							
					},
					
					error: function(response) {
						
							
							alert("Nije dobrooo");
							
					}
			});
		
		
	},
	
	SElect_BrisanjeProjektiNaKojimKorisnikRadi: function (){
		
		var BrisanjeKorisnik1 = BrisanjeKorisnik;
		
		$.ajax({
 
			url: ''+web+'/Lista-projekata-na-kojim-korisnik-radi?ime='+BrisanjeKorisnik1+'',
            type: "get",
			headers:{
					
							"Authorization": "Bearer " + token,
							
			},
  
            success: function(response) {
                
					
					var respObjADmin = response;	

                    var nizListADmin = new Array();
						for(var i1 = 0; i1 < respObjADmin.length ; i1++){
					
							nizListADmin[i1] = respObjADmin[i1].Projekti;
						}
				
						var optionsADmin = '';
					
						for(var i2 = 0; i2 < nizListADmin.length; i2++)
						{
							optionsADmin += '<option value="'+nizListADmin[i2]+'" />';
						}
				
							document.getElementById('brisanje2').innerHTML = optionsADmin;
							
			},
			
            error: function(xhr) {
               
					alert("Cile");
			}
		});	
		
	},
	
	BrisanjeKorisnika_dialog: function (){
		
		funkicjeAdmin.ButtonDIsabledDialog();
		$( "#dialog-pitanje" ).dialog({
				autoOpen: false, 
				buttons: {
					"Da": function() {
					funkicjeAdmin.BrisanjeKorisnika();
					funkicjeAdmin.ButtonDialogEnable();
					$(this).dialog("close");
					},
					"Ne": function() {
					$("#BrisanjeKorisnik1").val("");
					funkicjeAdmin.ButtonDialogEnable();
					$(this).dialog("close");
			}
				},
				title: "TO-NET",
					hide: "puff",
					show : "slide",
					height: 200 
				});
		$( "#dialog-pitanje" ).dialog( "open" );
		
	},
	
	BrisanjeKorisnika: function (){

		var BrisanjeSVE1 = BrisanjeSVE;
		
		if(BrisanjeSVE1 == "0")
		{
			
			$( "#dialog-11" ).dialog({
				autoOpen: false, 
				buttons: {
					OK: function() {
					$(this).dialog("close");
					}
				},
				title: "TO-NET",
					hide: "puff",
					show : "slide",
					height: 200 
				});
				$( "#dialog-11" ).dialog( "open" );
				
			document.getElementById("BRISIKORisnika").disabled = true;
		}
		else if(BrisanjeSVE1 == "22")
		{
			
		}
		else{
			
			
			$.ajax({
	 
				type: 'DELETE',
				url: ''+web+'/Uklanjanje-korisnika/sve-projekte?NadimakBrisanje='+BrisanjeSVE1+'',
				headers:{
						
								"Authorization": "Bearer " + token,
								
				},
	  
				success: function(response) {
					
						
						var respObjADmin = response;	
						funkicjeAdmin.KorisniciLista();
						funkicjeAdmin.TabelaProjekat_korisnici();
						$("#BrisanjeKorisnik1").val("");
						$("#KorsnikNEP").val("");
						$("#BrisanjeKorisnik").val("");
						
						if(BrisanjeSVE == KorisnikAdmin)//AKo je korisnik izabran a posle toga izbrisan da se sve izbrise iz ove tabele
						{
							$("#ListaKorisnika").val("");
							$("#KorisnikId").val("");
							KorisnikAdmin = "0";
							funkicjeAdmin.TabelaKorisniciAdmin();
						}
							$( "#dialog-7" ).dialog({
							autoOpen: false, 
							buttons: {
							OK: function() {$(this).dialog("close");}
							},
								title: "TO-NET",
								hide: "puff",
								show : "slide",
								height: 200 
							});
							$( "#dialog-7" ).dialog( "open" );
						
						
						
						document.getElementById("BRISIKORisnika").disabled = true;
						
			
						
				},
				
				error: function(xhr) {
				   
						alert("Cile");
				}
			});	
			
		}
		
		
	},
	
	ButtonDIsabled: function (){
		
		document.getElementById("BRISIKORisnika").disabled = true;
		document.getElementById("BRISII").disabled = true;
		document.getElementById("DodajProjekatID").disabled = true;
		document.getElementById("DeaktivacijaKlik").disabled = true;
		document.getElementById("AktivacijaKlik").disabled = true;
		
	},
	
	ButtonDIsabledDialog: function (){
		
		document.getElementById("dasds").disabled = true;
		
	},
	
	ButtonDialogEnable: function (){
		
		document.getElementById("dasds").disabled = false;
		
	},
	
	VratiSE: function(){
		
		window.location.href="#/login";
		$("#id4").show();
		$("#id5").hide();
		$("#id6").hide();
		$("#id3").hide();
		
		funkicjeAdmin.PopunjavanjeProjekata();
		funkicjeCile.RefresMeseci();
		funkicjeMicko.Trenutna_nedelja();
		
	},
	
	PopunjavanjeProjekata: function (){
		
		var Popunjavanje = spojeno_ime_prezime;
		
		$.ajax({
			
			url: ''+web+'/Lista-projekata-na-kojim-korisnik-radi?ime='+Popunjavanje+'',
            type: "get",
			headers:{
					
							"Authorization": "Bearer " + token,
							
			},
  
            success: function(response) {
                
					
					var respObjADmin = response;	
                    var nizListADmin = new Array();

						for(var i1 = 0; i1 < respObjADmin.length ; i1++){
					
							nizListADmin[i1] = respObjADmin[i1].Projekti;
						}
				
						var optionsADmin = '';
					
						for(var i2 = 0; i2 < nizListADmin.length; i2++)
						{
							optionsADmin += '<option value="'+nizListADmin[i2]+'" />';
						}
			
							document.getElementById('anrede').innerHTML =  optionsADmin;	
							
			},
			
            error: function(xhr) {
               
					alert("Cile");
			}
		});	
			
		
		
		
	},
	
	TabelaProjekat_korisnici: function(){
		
		    $("tr#trTabelaProjekti").remove();

			$.ajax({

				url: ''+web+'/Za-dati-projekat-korisnici-koji-rade-na-njemu?projekat='+Sviprojekti+'&godina='+godinaInf12+'',
				type: "get",
				headers:{
					
							"Authorization": "Bearer " + token,
							
				},
				success: function(response) {		
					
					
					
					var tableAdminProjekti = document.getElementById('adminTableKor');
					
					var respObjTebela = response;
					
					var micko = respObjTebela;
					
					for (var i = 0; i < respObjTebela.length; ++i){
					
						var presidentTabela = respObjTebela[i];
						
							 var row = document.createElement('tr');
							 row.id = "trTabelaProjekti";
							
						     var propertiesTabela = ['Ime_Prezime','Januar','Februar','Mart','April','Maj','Jun','Jul','Avgust','Septembar','Oktobar','Novembar','Decembar','Sum'];
							
							for (var j = 0; j < propertiesTabela.length; ++j)
							{  
								var cell = document.createElement('td');
								cell.id = "tdTabelaProjekti";
								
								cell.innerHTML = presidentTabela[propertiesTabela[j]];
								
								row.appendChild(cell);
							}
						
							tableAdminProjekti.appendChild(row);
						
						
					}
				},
			
				error: function(xhr) {
               
					alert("Cile");
				}
				
			});
	},
	
	Svi_projekti: function(){
		
				
			$.ajax({

				url: ''+web+'/Svi-projekti',
				type: "get",
				headers:{
					
							"Authorization": "Bearer " + token,
							
				},
				success: function(response) {		
					
					var respObjTebela = response;
					var proba1123 = respObjTebela[0];
					var nizListProjekti = new Array();
					
						for(var i1 = 0; i1 < respObjTebela.length ; i1++){
					
							nizListProjekti[i1] = respObjTebela[i1].Projekti;

						}
				
						var optionsProjekat = '';
						
					
						for(var i2 = 0; i2 < nizListProjekti.length; i2++)
						{
							optionsProjekat += '<option value="'+nizListProjekti[i2]+'" />';
						}
						
						    document.getElementById('adminKor').innerHTML = optionsProjekat;
				},
			
				error: function(xhr) {
               
					alert("Cile");
				}
				
			});
	},
	
	TONET: function(){
		
		window.location = "http://www.to-net.rs/";
		
	},
	
	SamoAktivni: function(){
		
		$.ajax({

			url: ''+web+'/Korisnici-Nadimci-aktivni',
            
			type: "get",
			headers:{
							"Authorization": "Bearer " + token,
							
			},
            success: function(response) {
                
					var respObjNadimak = response;	

                    var nizListNadimak = new Array();
					var nizListImePrezime = new Array();
					
					
						for(var i1 = 0; i1 < respObjNadimak.length ; i1++){
					
							nizListNadimak[i1] = respObjNadimak[i1].Nadimak_Klijent;
							nizListImePrezime[i1] = respObjNadimak[i1].Ime_Prezime;
							
						}
				
						var optionsNadimak = '';
						var optionsImePrezime = '';
					
						for(var i2 = 0; i2 < nizListNadimak.length; i2++)
						{
							optionsNadimak += '<option value="'+nizListNadimak[i2]+'" />';
							optionsImePrezime += '<option value="'+nizListImePrezime[i2]+'" />';
							
						}
						
							document.getElementById('deaktivacija').innerHTML = optionsImePrezime;
						
			},
			
            error: function(response) {
               
					alert("Greska u serveru");
			}
		});
		
	},
	
	SamoNeAktivni: function(){

		$.ajax({

			url: ''+web+'/Korisnici-Nadimci-neaktivni',
            
			type: "get",
			headers:{
							"Authorization": "Bearer " + token,
							
			},
            success: function(response) {
                
					var respObjNadimak = response;	

                    var nizListNadimak = new Array();
					var nizListImePrezime = new Array();
					
					
						for(var i1 = 0; i1 < respObjNadimak.length ; i1++){
					
							nizListNadimak[i1] = respObjNadimak[i1].Nadimak_Klijent;
							nizListImePrezime[i1] = respObjNadimak[i1].Ime_Prezime;
							
						}
				
						var optionsNadimak = '';
						var optionsImePrezime = '';
					
						for(var i2 = 0; i2 < nizListNadimak.length; i2++)
						{
							optionsNadimak += '<option value="'+nizListNadimak[i2]+'" />';
							optionsImePrezime += '<option value="'+nizListImePrezime[i2]+'" />';
							
						}
						
							document.getElementById('atkivacija').innerHTML = optionsImePrezime;
							
			},
			
            error: function(response) {
               
					alert("Greska u serveru");
			}
		});
		
	},
	
	DeAktivacija_dialog: function(){
		
		$( "#dialog-pitanje" ).dialog({
				autoOpen: false, 
				buttons: {
					"Da": function() {
					funkicjeAdmin.DeAktivacija();
					$(this).dialog("close");
					},
					"Ne": function() {
				   
					funkicjeAdmin.ButtonDialogEnable();
					$(this).dialog("close");
			}
				},
				title: "TO-NET",
					hide: "puff",
					show : "slide",
					height: 200 
				});
		$( "#dialog-pitanje" ).dialog( "open" );
		
	},
	
	DeAktivacija: function(){
		
		var deaktKor = deatkivacijaKorisnik;
		
		$.ajax({

			url: ''+web+'/deaktivacija-korisnik?Ime_Prezime='+deaktKor+'',
            
			type: "put",
			headers:{
							"Authorization": "Bearer " + token,
							
			},
            success: function(response) {
                
					$("#deatkivacijaKorisnik1").val("");
					var respObjNadimak = response;	
					funkicjeAdmin.SamoAktivni();
					funkicjeAdmin.SamoNeAktivni();
                   
			},
			
            error: function(response) {
               
					alert("Greska u serveru");
			}
		});
		
		
	},
	
	Aktivacija_dialog: function(){
		
		$( "#dialog-pitanje" ).dialog({
				autoOpen: false, 
				buttons: {
					"Da": function() {
					funkicjeAdmin.Aktivacija();
					$(this).dialog("close");
					},
					"Ne": function() {
					
					funkicjeAdmin.ButtonDialogEnable();
					$(this).dialog("close");
			}
				},
				title: "TO-NET",
					hide: "puff",
					show : "slide",
					height: 200 
				});
		$( "#dialog-pitanje" ).dialog( "open" );
		
	},
	
	Aktivacija: function(){
		
		var aktKor = atkivacijaKorisnik;
	    alert(aktKor);
		
		$.ajax({

			url: ''+web+'/aktivacija-korisnik?Ime_Prezime='+aktKor+'',
            
			type: "put",
			headers:{
							"Authorization": "Bearer " + token,
							
			},
            success: function(response) {
                
					$("#AktivacijaKorisnik1").val("");
					var respObjNadimak = response;	
					funkicjeAdmin.SamoAktivni();
					funkicjeAdmin.SamoNeAktivni();
                   
			},
			
            error: function(response) {
               
					alert("Greska u serveru");
			}
		});
		
		
	}
}

funkicjeAdmin.ButtonDIsabled();

$("#ListaKorisnika").on('input',function(e){
	
			var optionFound = false,
			datalist = this.list;
							
				for (var j = 0; j < datalist.options.length; j++) {
								//alert("3");
					if (this.value == datalist.options[j].value) {
							optionFound = true;
							break;
					}
				}
					if (optionFound) {
						
						this.setCustomValidity('');
						var values = $(this).val();
						KorisnikAdmin = $(this).val();
						
						$("tr#trTabela").remove();
						funkicjeAdmin.TabelaKorisniciAdmin();
						
					}else {
						
							$("tr#trTabela").remove();
								
					}
			
			
			
			
});	

$("#KorsnikNEP").on('input',function(e){
	
			var optionFound = false,
			datalist = this.list;
							
				for (var j = 0; j < datalist.options.length; j++) {
					
					if (this.value == datalist.options[j].value) {
							optionFound = true;
							break;
					}
				}
					if (optionFound) {
						
						this.setCustomValidity('');
						var values = $(this).val();
						KorisnikAdmin1 = $(this).val();
						flegDD1 = 1;
						
						funkicjeAdmin.NeRadiNatimProjektimaAdmin();
						if(flegDD1 == 1 && flegDD2 == 1)
						{
							document.getElementById("DodajProjekatID").disabled = false;
						}
										
					}else {
						
						flegDD1 = 0;
						$("#KorisnikD").val("Ne Korisnik");
						KorisnikAdmin1 = "0";	
						document.getElementById("DodajProjekatID").disabled = true;						
					}			
});	
	
$("#NeRadi").on('input',function(e){
	
			var optionFound = false,
			datalist = this.list;
							
				for (var j = 0; j < datalist.options.length; j++) {
								//alert("3");
					if (this.value == datalist.options[j].value) {
							optionFound = true;
							break;
					}
				}
					if (optionFound) {
						
						var values = $(this).val();
						KorisnikAdmin2 = $(this).val()
						//alert(KorisnikAdmin2);
						flegDD2 = 1;
							
						if(flegDD2 == 1 && flegDD1 == 1)
						{
							document.getElementById("DodajProjekatID").disabled = false;
						}
						
						//$(this).val("");
												
					}else {
						
						//$("#ProjekatD").val("Ne projekat");
                        //UpozoenjePR	= "Ne projekat";
						//flegBr1 = 0;
						flegDD2 = 0;
                        KorisnikAdmin2 = "0";
						document.getElementById("DodajProjekatID").disabled = true;							
						//document.getElementById("BRISII").disabled = true;						
					}			
});	

$("#BrisanjeKorisnik").on('input',function(e){
	
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
						BrisanjeKorisnik = $(this).val()
						flegBr2 = 1;
						//alert(BrisanjeKorisnik);
						//funkicjeAdmin.TabelaKorisniciAdmin();
						funkicjeAdmin.SElect_BrisanjeProjektiNaKojimKorisnikRadi();
						if(flegBr2 == 1 && flegBr1 == 1)
						{
							document.getElementById("BRISII").disabled = false;
						}
						//$(this).val("");	
						
					}else {
						
						flegBr2 = 0;
							/*$("#KorisnikId").val("Nepostojeci Korisnik");
							$("tr#trTabela").remove();*/
						document.getElementById("BRISII").disabled = true;
								
					}
});	

$("#Radi").on('input',function(e){
	
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
						BrisanjeProjekat = $(this).val()
						//alert(BrisanjeKorisnik);
						//funkicjeAdmin.TabelaKorisniciAdmin();
						//funkicjeAdmin.SElect_BrisanjeProjektiNaKojimKorisnikRadi();
						//$(this).val("");
						flegBr1 = 1;
						//UpozoenjePR	= "";
						if(flegBr1 == 1 && flegBr2 == 1)
						{
							document.getElementById("BRISII").disabled = false;
						}		
						
					}else {
						
							/*$("#KorisnikId").val("Nepostojeci Korisnik");
							$("tr#trTabela").remove();*/
							flegBr1 = 0;
							KorisnikAdmin2 = "0";	
							document.getElementById("BRISII").disabled = true;
								
					}
});	
	
$("#BrisanjeKorisnik1").on('input',function(e){
	
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
						BrisanjeSVE = $(this).val()
						//alert(BrisanjeSVE);
						document.getElementById("BRISIKORisnika").disabled = false;
						//funkicjeAdmin.TabelaKorisniciAdmin();
						//funkicjeAdmin.SElect_BrisanjeProjektiNaKojimKorisnikRadi();
						//$("#BrisanjeKorisnik1").val("");	
						
					}else {
						
							/*$("#KorisnikId").val("Nepostojeci Korisnik");
							$("tr#trTabela").remove();*/
						document.getElementById("BRISIKORisnika").disabled = true;
								
					}	
});

$("#ListaProjekataAd").on('input',function(e){
	
	
	       
			var optionFound = false,
			datalist = this.list;
							
				for (var j = 0; j < datalist.options.length; j++) {
								//alert("3");
					if (this.value == datalist.options[j].value) {
							optionFound = true;
							break;
					}
				}
					if (optionFound) {
						
						this.setCustomValidity('');
						var values = $(this).val();
						
						Sviprojekti = values;
						funkicjeAdmin.TabelaProjekat_korisnici();
						//$("tr#trTabelaProjekti").remove();
							
						
					}else {
						
						
						$("tr#trTabelaProjekti").remove();
								
					}
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
		
            $( "#dialog-pitanje" ).dialog({
               autoOpen: false,  
            });
           
});	

$("#OdabranaGodina1").on('input',function(e){
	
			var values = $(this).val();
			godinaInf11 = values;
			funkicjeAdmin.TabelaKorisniciAdmin();
			//Godina = values;
			//year = Godina;
			//funkicjeMicko.Meseci_Nedelje('NedeljeMeseci');
			//alert(brojsatiBaza);
			//$("#brojsati").val(values);
			
});
	
$("#OdabranaGodina2").on('input',function(e){
	
			var values = $(this).val();
			godinaInf12 = values;
			funkicjeAdmin.TabelaProjekat_korisnici();
			//Godina = values;
			//year = Godina;
			//funkicjeMicko.Meseci_Nedelje('NedeljeMeseci');
			//alert(brojsatiBaza);
			//$("#brojsati").val(values);
			
});

$("#deatkivacijaKorisnik1").on('input',function(e){
		
		var optionFound = false,
			datalist = this.list;
							
				for (var j = 0; j < datalist.options.length; j++) {
								//alert("3");
					if (this.value == datalist.options[j].value) {
							optionFound = true;
							break;
					}
				}
					if (optionFound) {
						
						this.setCustomValidity('');
						var values = $(this).val();
						
						deatkivacijaKorisnik = values;
						document.getElementById("DeaktivacijaKlik").disabled = false;
						
						
					}else {
						
						//$(this).val("Ne postojeci korisnik");
						document.getElementById("DeaktivacijaKlik").disabled = true;
								
					}
		
})

$("#AktivacijaKorisnik1").on('input',function(e){
		
		var optionFound = false,
			datalist = this.list;
							
				for (var j = 0; j < datalist.options.length; j++) {
								//alert("3");
					if (this.value == datalist.options[j].value) {
							optionFound = true;
							break;
					}
				}
					if (optionFound) {
						
						this.setCustomValidity('');
						var values = $(this).val();
						
						atkivacijaKorisnik = values;
						document.getElementById("AktivacijaKlik").disabled = false;
						
						
					}else {
						
						//$(this).val("Ne postojeci korisnik");
						document.getElementById("AktivacijaKlik").disabled = true;
								
					}
})
	
	
	



	


