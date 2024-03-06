'use client';

import { useSearchParams } from 'next/navigation';
import Booking from '../components/booking';
import styles from './page.module.css';
import { get } from 'http';

export default function BookAppartement({params: {locale}}: {params: {locale: any}}) {

    const searchParams = useSearchParams();
    const  id:string  = searchParams.get('id');
    let viomaID:string = "";
    let divID: string = "vri-container";
	

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
        console.log('bookAppartement nicht gefunden ' + myId);
        return "";
    }
   
    getViomaIDfromApartment(id);
    
    return (
        <>
            <div id={divID} className={styles.test}>
               <Booking apartmentId={viomaID}/>
            </div>
        </>
    );
}