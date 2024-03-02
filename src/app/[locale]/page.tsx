
import styles from './page.module.css';
import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Metadata } from 'next';
import { heroFont, h1Font, h2Font, h3Font, textFont, footerFont,handwriting } from '@/src/functions/fonts';
import Hero from './components/heroModule';
import Link from 'next/link';
import HeroImage from '../../../public/P1540356-2550x1274-180-60.webp';
import Image from 'next/image';
// import Appartments from '../../../public/P1360618-800x630-180-60.webp';
import Appartments from '../../../public/P1360618-800x630-180-60-sw.webp';
import Cafe from '../../../public/P1180423_sw.webp';
import Aktivitaeten from '../../../public/P2566866-1.webp';
import Greeting from '../../../public/P2658668-RW2-1.webp';
import Background from '../../../public/Landkarte_50proz.png';

import Booking from './components/booking';


import {getTranslations} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server'; 

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
   
  const t = await getTranslations({locale, namespace: 'home'});
 
  return {
      title: t('metaTitle'),
      description: t('metaDescription'),
      alternates: {
          canonical: `/de`,
          languages: {
                'it': `/it`,
                'en': `/en`
          }
      }
  };
}

export default function Home({params: {locale}}: {params: {locale: any}}) {
    
    /*const locale = useLocale();*/
    unstable_setRequestLocale(locale);
    const t = useTranslations('home');

    let imageAlt: string="";
    imageAlt = t('heroimagealt');
    let altAppartment: string = t('altAppartment');
    let appartmentTeaser: string = t('appartmentTeaser');
    let appartmentHeadline: string = t('appartmentContainerHeadline');
    let appartmentText: string = t('appartmentText');
    let cafeHeadline: string = t('cafeHeadline');
    let cafeText: string = t('cafeText');
    let altCafe: string = t('altCafe');
    let aktivitaetenHeadline: string = t('aktivitaetenHeadline');
    let aktivitaetenText: string = t('aktivitaetenText');
    let altAktivitaeten: string = t('altAktivitaeten');
    let altGreeting: string = t('altGreeting');
    let greetingText: string = t('greetingText');
    let greetingText2: string = t('greetingText2');
    let greetingText3: string = t('greetingText3');
    
    
    /* Muster für zb "<important> abc </important" */
    /*text1 = t.markup('text1',{
        important:(chunks) => `<b>${chunks}</b>`
    })    */ 
   
    

return (
    <>

    <div className = "content">
         
            <Hero 
                imageUrl = {HeroImage}
                imageUrlAlt = {imageAlt}
                calledFrom = "home">
            </Hero>
    <section className={styles.spacerHead}>
        <h1 className={`${heroFont.className} ${styles.h1}`}>    
            <div dangerouslySetInnerHTML={{__html: t.raw('headline')}} />
            </h1>
        <div className={styles.textTeaserContainer}>
            <div className={`${h1Font.className} ${styles.teaser}`}>
                <div dangerouslySetInnerHTML={{__html: t.raw('welcome')}} />
            </div>
        </div>

     <Booking apartmentId={"20845"}/>
    </section>
         
        <div className={styles.outerWrapper}>
            <div className={styles.innerWrapper} >
                       
                <div className={styles.box1}>
                    <div>
                        <Image
                            className={styles.image}
                            src =  {Appartments}
                            width = {800}
                            height={600}
                        
                            alt={altAppartment}
                            priority = {false}
                            // sizes ="(max-width:580px) 100vw, (max-width:1024px) 50vw, 33vw)"
                            layout="responsive"
                        />
                    </div>
                </div>  
                <div className={styles.box2} >
                    <div className={styles.textContainer}>
                        <div className={`${handwriting.className} ${styles.handwritingAppartement}`} >    
                            {appartmentTeaser}
                        </div>
                        <div className={`${h1Font.className} ${styles.h2}`} >    
                            {appartmentHeadline}
                        </div>
                        <div className={`${h1Font.className} ${styles.text}`} >
                            {appartmentText}
                        </div>
                        <Link href="#">
                            <div className={styles.button}>
                                <button className={styles.button}> {t('details')}</button>        
                             </div>
                        </Link>
                       
                    </div>
                </div>

                <div className={styles.box3} >    
                    <div className={styles.textContainer} >
                        <div className={`${h1Font.className} ${styles.h2}`} >   
                                {cafeHeadline}        
                        </div>
                            <div className={`${h1Font.className} ${styles.text}`} >
                            {cafeText}
                        </div>
                            <Link href="#">
                                <div className={styles.button}>
                                    <button className={styles.button}> {t('details')}</button>        
                                </div>
                            </Link>
                    </div>
                </div>
                        
                <div className={styles.box4}> 
                        <div>
                            <Image
                                className={styles.image}
                                src =  {Cafe}
                                width={800}
                                height={600}
                            
                                alt={altCafe}
                                priority = {false}
                                // sizes ="(max-width:580px) 100vw, (max-width:1024px) 50vw, 33vw)"
                                // style={{objectFit:"contain"}}
                                layout="responsive"
                            />
                        </div>
                </div>
               
                <div className={styles.box5}> 
                        <div>
                            <Image
                                className={styles.image}
                                src =  {Aktivitaeten}
                                width = {800}
                                height={600}
                            
                                alt={altAktivitaeten}
                                priority = {false}
                                // sizes ="(max-width:580px) 100vw, (max-width:1024px) 50vw, 33vw)"
                                layout="responsive"
                            />
                        </div>
                </div>   

                <div className={styles.box6} >    
                    <div className={styles.textContainer} >
                        <div className={`${h1Font.className} ${styles.h2}`} >   
                                {aktivitaetenHeadline}        
                        </div>
                       <div className={`${h1Font.className} ${styles.text}`} >
                            {aktivitaetenText}
                        </div>
                            <Link href="#">
                                <div className={styles.button}>
                                    <button className={styles.button}> {t('details')}</button>        
                                </div>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    <section>
               
        <div className={`${h1Font.className} ${styles.greetingContainer}`} >             
                
            <div className={styles.imageFamily}>       
                    <Image
                        className={styles.imageFamily}
                        // className={styles.image}
                        src =  {Greeting}
                        width = {400}
                        height={400}
                    
                        alt={altGreeting}
                        priority = {false}
                        // sizes ="(max-width:580px) 100vw, (max-width:1024px) 50vw, 33vw)"
                        layout="responsive"
                    />            
             </div>   
                
                <div className={styles.greetingText}>
                            
                        <div className={`${handwriting.className} ${styles.greetingHeader}`}>
                            {greetingText}
                        </div>
                        <div className={styles.greetingTextLine}>
                            {greetingText2}
                        </div>
                        <div className={styles.greetingTextLine}>
                            {greetingText3}
                        </div>
                        
                </div>
                    
            
        </div>        
    </section>    

            
</div >


</>

)
}