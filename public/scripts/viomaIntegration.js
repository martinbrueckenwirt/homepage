// buchungstrecke von vioma
// https://cst-client-hotel-brueckenwirt.viomassl.com/js/vri/vri.js

var sessionLanguage = getLanguageFromPath();

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
	
	// erstellen des vioma Containers, dieser hat eine eindeutige Struktur
	var containerId = 'vri-container-'+apartmentId;
	
	if (document.body){
		var element = document.createElement('div');
		element.id = containerId;
		document.body.appendChild(element);
		
	}
	//Timeout um das Ausführen von vcst zu verzögern, um sicher zu gehen, dass die Function vollständig geladen ist
	//das sind die eigentlich relevanten Zeilen für den Aufruf der Buchungstrecke
	setTimeout( function(){
		vcst( {load: 'init', url: viomaUrl, set_language: language} );
		vcst( {id:apartmentId} );
	}, 10 );
	
}

// Eventlistener für die Buchungstrecke, er wird von booking.tsx ausgelöst
document.addEventListener('viomaLoadEvent', function(event) {
	setTimeout( function(){
		viomaIntegration(event.detail.apartmentId, event.detail.language);
	}, 10 );
});		
	
function getLanguageFromPath(){
	var path = window.location.pathname;
	var language = path.split('/')[1];
	return language;
}
		
