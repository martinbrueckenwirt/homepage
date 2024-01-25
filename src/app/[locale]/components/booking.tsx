import styles from './booking.module.css';
import { Booking } from './types'
import Script from 'next/script';


export default function Booking(id: Booking) {

	/* übergabe der ID an die Variablen im Div und im Script - offen*/
	
    return (
		<>
		<div id="vri-container-780"></div>
		<Script
		
			
		/* funktioniert nicht */	
			
		( function ( v, i, o, m, a ){
			if ( !( o in v ) ) {
				v.vioma_vri=o;
				v[o] || ( v[o] = function ( ){ ( v[o].q = v[o].q || [] ).push ( arguments ); } );
				m = i.createElement( 'script' ), a = i.scripts[0];
				m.src = 'https://cst-client-hotel-brueckenwirt.viomassl.com/js/vri/vri.js';
				a.parentNode.insertBefore ( m, a );
			}
		} )( window, document, 'vcst' );
		vcst( {load: 'init', url: 'https://cst-client-hotel-brueckenwirt.viomassl.com/', set_language: 'de'} );
		vcst( {id: 780} );
		
		
		
		/>
			
    </>
)

}