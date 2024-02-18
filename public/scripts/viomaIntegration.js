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
	

function viomaIntegration(apartmentId, language){
	if (language != sessionLanguage)
	{
		window.location.reload();
	}
	
	var containerId = 'vri-container-'+apartmentId;
	
	if (document.body){
		var element = document.createElement('div');
		element.id = containerId;
		document.body.appendChild(element);
		
	}

	setTimeout( function(){
		vcst( {load: 'init', url: viomaUrl, set_language: language} );
		vcst( {id:apartmentId} );
	}, 10 );
	
}

document.addEventListener('viomaLoadEvent', function(event) {
	setTimeout( function(){
		viomaIntegration(event.detail.apartmentId, event.detail.language);
		console.log('viomaLoadEvent:', event.detail);
	}, 10 );
});		
	
function getLanguageFromPath(){
	var path = window.location.pathname;
	var language = path.split('/')[1];
	return language;
}
		
