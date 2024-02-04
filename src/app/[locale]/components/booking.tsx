"use client";
import React, { use } from 'react'
import styles from './booking.module.css';
import { Booking } from './types'
import {useLocale} from 'next-intl';
import {useEffect, useState} from 'react';



export default function Booking(props: Booking) {
	let myId=props.id;
	const [myLanguage, setMyLanguage] = useState<string>('');

	const [htmlString, setHtmlString] = useState<string>(`
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
		vcst( {load: 'init', url: 'https://cst-client-hotel-brueckenwirt.viomassl.com/', set_language: 'de'} );
		vcst( {id: ${JSON.stringify(myId)}} );
	</script>
`);

const [htmlStringEN, setHtmlStringEN] = useState<string>(`
<div id="vri-container-20845"></div>
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
	vcst( {load: 'init', url: 'https://cst-client-hotel-brueckenwirt.viomassl.com/', set_language: 'en'} );
	vcst( {id: 20845} );
</script>
`);
 

	const locale = useLocale();
	

	useEffect(() => {
		setMyLanguage('de'); /*default*/
		console.log('booking useEffect ', locale);
	},[]);


useEffect(() => {
	setMyLanguage(locale);
    console.log('booking useEffect ', locale);
},[locale]);
 


return (
	<>
	HELLO WORLD
	<div dangerouslySetInnerHTML={{ __html: myLanguage === 'de' ? 'DE' : myLanguage === 'en' ? 'EN' : '' }}/> 	
	
	{/*<div dangerouslySetInnerHTML={{ __html: htmlString }}/> 	*/}
	<div dangerouslySetInnerHTML={{ __html: htmlStringEN }}/> 	
	</>
	)



	
};


  



 
