
import styles from './page.module.css';
import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { heroFont, h1Font, h2Font, h3Font, textFont, footerFont } from '@/src/functions/fonts';
import landkarte from '../../../../public/Landkarte.webp';
import landkarteKlein from '../../../../public/Landkarte_ausschnitt.webp';

/*import TextModule from './components/textModule';*/


import {getTranslations} from 'next-intl/server';
 
export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'contact'});
 
  return {
      title: t('title'),
      description: t('description'),
      alternates: {
          canonical: `/de`,
          languages: {
                'it': `/it`,
                'en': `/en`
          }
      }
  }
}





export default function Contact() {
    const t = useTranslations('contact');

    let h1:string = t('h1');
    let headline:string = t('headline');
    let headlineCafe:string = t('headlineCafe');

    let openDays: string = t('openDays');
    let openHours: string= "8:30-19:00";
    let address:string = t('address');
    let adressLine:string = 'Panzendorf 12, 9919 Heinfels, Austria';
    let phone:string = t('phone');
    let phoneNr:string = '+4348426336';
    let email:string = t('email');
    let emailAdress:string ='office@derbrueckenwirt.at';
    let facebook:string = 'Facebook';
    let Instagram:string = 'Instagram';
    let geocoordinates:string =t('geocoordinates');
    let geocoordinatesValue:string = '46.742481, 12.425066';
    let mapCode:string =t('mapcode');
    let mapCodeValue:string = 'AUT 9BZZ.77';
    let map:string = t('map');

    /* Muster für zb "<important> abc </important" */
    /*text1 = t.markup('text1',{
        important:(chunks) => `<b>${chunks}</b>`
   
    })    */ 
   
    

return (
    <>

    <div className = "content">
    
    <div className={styles.outerWrapper}>
         
    <section>
        <h1 className={styles.h1}>
            <div className={`${h1Font.className} ${styles.h1}`}>
            
             <p> {h1} </p>
                
            </div>
            </h1>
        <div className={styles.wrapper}>
            <div  className={`${h1Font.className} ${styles.box1}`}>
                <p> {headlineCafe} </p>
                
            </div>
            <div className ={styles.box2}>
            <p> {openDays} </p>
            <p> {openHours} </p>

            </div>
            <div className ={styles.box3}>
                <p> {address} </p>
                
            </div>
            <div className ={styles.box4}>
                <p> {adressLine} </p>

            </div>
            <div className ={styles.box5}>
                <p> {phone} </p>
                
            </div>
            <div className ={styles.box6}>
                <p> <a href={`tel:${phoneNr}`}>+43 4842 6336</a> </p>
            </div>
            <div className ={styles.box7}>
                <p> {email} </p>
                
            </div>

          
            <div className ={styles.box8}>
                <p> <a href={`mailto:${emailAdress}`}>office@derbrueckenwirt.at</a> </p>
                
            </div>
            <div className ={styles.box9}>
                <p> {facebook} </p>
                            
            </div>
            <div className ={styles.box10}>
                <Link
                href ='https://www.facebook.com/derbrueckenwirt1'>
                Link Facebook "Brückenwirt Appartements"
                </Link>
            </div>
            <div className ={styles.box11}>
                <p> {Instagram} </p>
            </div>
            <div className ={styles.box12}>
            <Link
                href ="https://www.instagram.com/brueckenwirt">
                Link Instagram "brueckenwirt"
                </Link>
            </div>

            <div className ={styles.box13}>
                <p> {geocoordinates} </p>
            </div>

            <div className ={styles.box14}>
                <p> {geocoordinatesValue} </p>
            </div>

            <div className ={styles.box15}>
                <p> {mapCode} </p>
            </div>

            <div className ={styles.box16}>
                <p> {mapCodeValue} </p>
            </div>

            
       </div>
       <div className ={styles.map}>
            <Image 
                src = {landkarte}
                alt = {map}
                width ={1143}
                height ={660}
            />
            </div>

            <div className ={styles.mapSmall}>
            <Image 
                src = {landkarteKlein}
                alt = {map}
                width ={477}
                height ={513}
            />
            </div>
       

    
    </section>
</div>
</div>
   
</>
    )
}