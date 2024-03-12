"use client";

import { useSearchParams } from 'next/navigation';
import Booking from '../components/booking';
import { heroFont, h1Font,handwriting, h2Font, h3Font, textFont, footerFont } from '@/src/functions/fonts';
import styles from './page.module.css';
import { useTranslations } from 'next-intl';
import Link from 'next/link';


/**a*  Metadaten*/

export default function BookApartment({params: {locale}}: {params: {locale: any}}) {

    const searchParams = useSearchParams();
    const  id:string  = searchParams.get('id');
    let viomaID:string = "";
    let divID: string = "vri-container";
    const t = useTranslations('bookApartment');
    const h1 = t('h1');
    const headline = t('headline');
    const text1 = t('text1');


    

    function getViomaIDfromApartment(myId) {
        if (myId == "A") {
            divID = 'vri-container-21197';
            viomaID = "21197";
            return
        } else if (myId == "B") { 
            divID = 'vri-container-1205';
            viomaID = "1205";
            return
        }
        else if (myId == "C") { 
            divID = 'vri-container-1206';
            viomaID = "1206";
            return
        }
        console.log('bookAppartement myID nicht gefunden ' + myId);
        return "";
    }
   
    getViomaIDfromApartment(id);
    
    return (
        <>
            <div className={styles.headContainer}>
                <h1 >
                    <div className={`${h1Font.className} ${styles.h1}`}>{h1}</div>
                </h1>
                <div className={styles.innerContainer}>
                    <div className={`${h1Font.className} ${styles.headline}`}>{headline}</div>
                    <div className={`${h1Font.className} ${styles.text}`}>
                        <Link className={styles.text}   href="/bookingConditions">
                            {text1}
                        </Link>
                    </div>
                </div>
            </div>
            <div id={divID} className={styles.container}>
               <Booking apartmentId={viomaID}/>
            </div>
        </>
    );
}