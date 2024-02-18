"use client";
import React, { use } from 'react'
import styles from './booking.module.css';
import { Booking } from './types'
// import {useLocale} from 'next-intl';
import {useEffect, useState} from 'react';


export default function BookingDE(props: Booking) {

	let myId=props.id;
	let myLanguage=props.language;
	const timestamp = Date.now();
    console.log('bookingDE ', timestamp);

	// const locale = useLocale();
	// console.log("locale",locale);
	// myLanguage = locale;

    myLanguage = 'de';
	const htmlString =  `<div id="vri-container-${myId}"></div>
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
	</script>`;

	
const htmlString2 ="geladen und deutsch";




	// const [isLoaded, setIsLoaded] = useState(true);

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		setIsLoaded(true);
	// 	}, 2000); // Adjust the delay time as needed

	// 	return () => clearTimeout(timer);
	// }, []);

	useEffect(() => {    
		console.log('bookingDE im useEffect - load event detected!'); 
		function handleLoad() {       
			console.log('bookingDE im handleLoad - load event detected!');
		}
		// handleLoad();
		
		window.addEventListener('load', handleLoad);
		window.addEventListener('load', function() 
		{  
			console.log('bookingDE im addEventListener');
		});

	},[]);
	// 		unmountsreturn () => 
	// 	{window.removeEventListener('load', handleLoad);     };   }, []);   
		
	// 	return (    <div>      {/* Your page content */}    
	// 	</div>  ); 
	// } 


	const isLoaded = true;
	const timestamp2 = Date.now();
	console.log("bookingDE- vor Render ", timestamp2);
	return (
		<>
		<div className={styles.bookingTest} >		
        Booking DE
    		{/* {myLanguage === 'de' && isLoaded && <div dangerouslySetInnerHTML={{ __html: htmlString2 }}/>} */}
			{/* {myLanguage === 'en' && isLoaded && <div dangerouslySetInnerHTML={{ __html: htmlString3 }}/>} */}
			{/* <div className={styles.bookingTest}  */}
			{/* // dangerouslySetInnerHTML={{ __html: myLanguage === 'de' ? 'DE' : myLanguage === 'en' ? 'EN' : '' }}/>
			// {isLoaded && <div dangerouslySetInnerHTML={{ __html: htmlString }}/>} */}
		</div>	
		</>
	);
}