import React from 'react'
import styles from './booking.module.css';
import { Booking } from './types'



export default function Booking(props: Booking) {


 	let myId=props.id;
	let myLanguage=props.language;

	const htmlString =  `
		<div id="vri-container-${myId}"></div>
		<script type="text/javascript">
			( function ( v, i, o, m, a ){
				if ( !( o in v ) ) {
					v.vioma_vri=o;
					v[o] || ( v[o] = function ( ){ ( v[o].q = v[o].q || [] ).push ( arguments ); } );
					m = i.createElement( 'script' ), a = i.scripts[0];
					m.src = 'https://cst-client-hotel-brueckenwirt.viomassl.com/js/vri/vri.js';
					a.parentNode.insertBefore ( m, a );
				}
			} )( window, document, 'vcst' );
			vcst( {load: 'init', url: 'https://cst-client-hotel-brueckenwirt.viomassl.com/', set_language: ${JSON.stringify(myLanguage)}} );
			vcst( {id: ${JSON.stringify(myId)}} );
		</script>
	`;

    return (
		<div dangerouslySetInnerHTML={{ __html: htmlString }}/>
)

}