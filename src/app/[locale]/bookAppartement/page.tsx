'use client';

import { useSearchParams } from 'next/navigation';
import Booking from '../components/booking';
import styles from './page.module.css';

export default function BookAppartement({params: {locale}}: {params: {locale: any}}) {

    const searchParams = useSearchParams();
    const  myId:string  = searchParams.get('id');
    let viomaID:string = "";
    let divID:string = "";
    console.log('bookAppartement Eingang '  + myId);	

    function getViomaIDfromApartmentId(myId) {
        if (myId == "A") {
            return "21197";
            console.log('bookAppartement gefunden ' + myId);
        }
        console.log('bookAppartement nicht gefunden ' + myId);
        return "";
    }
    
    viomaID = getViomaIDfromApartmentId(myId);
    console.log('viomaID' ,viomaID)
    divID = "vri-container-" + {viomaID};
    console.log('divID' ,divID)

    // "vri-container-21197"

    return (
        <>
        <div id= {divID} className ={styles.test}>
              <Booking apartmentId={viomaID}/>
        </div>
        </>
    );
}