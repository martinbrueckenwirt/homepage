// buchungstrecke von vioma
// https://cst-client-hotel-brueckenwirt.viomassl.com/js/vri/vri.js
// Einbindung im Layout.tsx

var sessionLanguage = getLanguageFromPath();
var forceWindowReload = 1;
var entryCounter = 0;
var entryDocumentBody = 0;



var viomaUrl = 'https://cst-client-hotel-brueckenwirt.viomassl.com/';
var viomaJs  = viomaUrl+'js/vri/vri.js';
( function ( v, i, o, m, a ){
	if ( !( o in v ) ) {
			v.vioma_vri=o;
			v[o] || ( v[o] = function ( ){ ( v[o].q = v[o].q || [] ).push ( arguments ); } );
			m = i.createElement( 'script' ), a = i.scripts[0];
			m.src = viomaJs;
			a.parentNode.insertBefore ( m, a );
		}
	} )( window, document, 'vcst' );
	

// Vioma hat keinen Mechnismus um einen Sprachwechsel zu erkennen
// Daher wird die Seite neu geladen, wenn die Sprache sich ändert
// Dies erfolgt "hart" über window.location.reload() und hebelt die Caching-Mechanismen von Nextjs aus

function viomaIntegration(apartmentId, language){
	if (language != sessionLanguage) 
	{
		window.location.reload();
	
	}

	function isEven(n) {
		return n % 2 == 0;
	}	

	

	// erstellen des vioma Containers, dieser hat eine eindeutige Struktur
	var containerId = 'vri-container-'+apartmentId;
	
	
	if (document.body) {
		
		  		
		entryDocumentBody++;

		var isEvenValue = isEven(entryCounter);
		// console.log('!!!! forceWindowReload, entryCounter, isEven, entryDocumentBody: ', forceWindowReload , entryCounter, isEvenValue, entryDocumentBody);
		if ((forceWindowReload === 1) && isEven(entryCounter)&& (entryDocumentBody > 2)){
			
			var isEvenEntryDocumentBody = isEven(entryDocumentBody);
			// console.log('isEvenEntryDocumentBody, entryDocumentBody ', isEvenEntryDocumentBody, entryDocumentBody);
			if (isEven(entryDocumentBody)){
				// console.log('******forceWindowReload ist true, Seite wird neu geladen');
				window.location.reload();
				// forceWindowReload = 1;
				}
			}

		var element = document.createElement('div');
		element.id = containerId;
		document.body.appendChild(element);
		
	}
	//Timeout um das Ausführen von vcst zu verzögern, um sicher zu gehen, dass die Function vollständig geladen ist
	//das sind die eigentlich relevanten Zeilen für den Aufruf der Buchungstrecke
	setTimeout(function () {
		vcst( {load: 'init', url: viomaUrl, set_language: language} );
		vcst( {id:apartmentId} );
		entryCounter++;
	}, 10 );
	


		// Clean up the event listener when it was fired -copilot
document.removeEventListener('viomaLoadEvent', function() {
	console.log('viomaIntegrationjs viomaLoadEvent entfernt');
});
	
}

// Eventlistener für die Buchungstrecke, er wird von booking.tsx ausgelöst
document.addEventListener('viomaLoadEvent', function (event) {
	setTimeout( function(){
		viomaIntegration(event.detail.apartmentId, event.detail.language);
	}, 10);

});		

     

	
function getLanguageFromPath(){
	var path = window.location.pathname;
	var language = path.split('/')[1];
	return language;
}
		
