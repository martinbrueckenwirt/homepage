"use client";
import React, { use } from 'react'
import styles from './booking.module.css';
import { Booking } from './types'
import {useLocale} from 'next-intl';
import {useEffect, useState} from 'react';
import Script from 'next/script';



export default function Booking(props: Booking) {

	
	const locale = useLocale();
	console.log("booking locale",locale);
	


	const [isLoaded, setIsLoaded] = useState(true);

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
 

	return (
		<>
		<div	className={styles.bookingTest} >		
			BOOKING DEFAULT --  HELLO WORLD
		</div>
		</>
	);
}
	


  



 
