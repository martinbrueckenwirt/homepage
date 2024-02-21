"use client";
import styles  from './page.module.css' 
// import { useLocale,useTranslations } from 'next-intl';
import { useState, useEffect} from 'react';
// import BookingDE from '../components/bookingDE';

// import BookingEN from '../components/bookingEN';
import Booking from '../components/booking';
import CafeSlider from '../components/cafeSlider';


export default function Cafe({params: {locale}}: {params: {locale: any}}) {

   
    const [render, setRender] = useState(false);
    const[language, setLanguage] = useState('de');
    
     useEffect(() => {
        setLanguage(locale);
        console.log('page useEffect', locale);
    }, [locale]);

    // viomaIntegration();

    return (
        <>    
         
            <div className={styles.test} >
                <CafeSlider />
            TEST Hauptcontainer 
            </div>
            <Booking apartmentId={"20845"}/>
        </>
    );
        
} 