"use client";
import React, { use } from 'react'
import styles from './booking.module.css';
import { Booking } from './types'
import {useLocale} from 'next-intl';
import {useEffect, useState} from 'react';
import Script from 'next/script';



export default function Booking(props: Booking) {
	// laden der viomaIntegration.js, der Vioma-Buchungsstrecke
	// das eigentliche Laden erfolgt im JavaScript-Code, der in /public/scripts/viomaIntegration.js liegt
	// Übergabe der Apartment-ID und der Sprache
	
	const locale = useLocale();
	const [isLoaded, setIsLoaded] = useState(true);

	// useEffect feuert ein Event, das von /public/scripts/viomaIntegration.js abgefangen wird	
	useEffect(() => {
		const eventDetail = {
			detail:{
				apartmentId: props.apartmentId,
				language: locale
			}
		};
        const event = new CustomEvent('viomaLoadEvent', eventDetail );
        document.dispatchEvent(event);
    }, [locale,props.apartmentId]);
 

	return(<></>);
}
	


  



 
