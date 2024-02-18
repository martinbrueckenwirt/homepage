"use client";
import styles  from './page.module.css' 
// import { useLocale,useTranslations } from 'next-intl';
import { useState, useEffect} from 'react';
import BookingDE from '../components/bookingDE';
// import BookingEN from '../components/bookingEN';
// import Booking from '../components/booking';


export default function Cafe({params: {locale}}: {params: {locale: any}}) {

    const timestamp3 = Date.now();
    console.log('page anfang', locale, timestamp3);
    const [render, setRender] = useState(false);
    
     useEffect(() => {
        const timestamp = Date.now();
        console.log('page UseEffect Current timestamp:', timestamp);
        setRender(true);
    }, []);

    const timestamp2 = Date.now();
    console.log('page myLanguage:', locale, timestamp2);
  
    
    return (
        <>    
            <div className={styles.test} >
            TEST Hauptcontainer
            </div>
            {render && locale === 'de' && <BookingDE id={"20845"} language={locale}/>} 
            {/* {render && myLanguage === 'en' && <BookingEN id={"20845"} language={myLanguage}/>}
            {render&& myLanguage !== 'de' && myLanguage !== 'en' && <Booking id={"20845"} language={myLanguage}/>}  */}
        </>
    );
        
} 