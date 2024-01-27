
import styles from './page.module.css';
import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Metadata } from 'next';
import { heroFont, h1Font, h2Font, h3Font, textFont, footerFont } from '@/src/functions/fonts';
import  Hero from './components/heroModule';
/*import HeroImage from '../../../public/P1540356-25-1.webp';*/
import HeroImage from '../../../public/P1540356_2550x898.webp';
/*import HeroImage from '../../../public/P1190113.webp';*/
import TextModule from './components/textModule';

import ApartmentModule from './components/apartementModule';
import CafeModule from './components/cafeModule';
import History from './components/history';
import Booking from './components/booking';


import {getTranslations} from 'next-intl/server';
 
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





export default function Home() {
    const t = useTranslations('home');

    let imageAlt: string="";
    imageAlt = t('heroimagealt');

    let text1: string ="";
    let cafeIntro:string=""
    let appartmentContainerHeadline: string ="";
    appartmentContainerHeadline = t("appartmentContainerHeadline"); 
    let cafeContainerHeadline: string ="";
    cafeContainerHeadline = t("cafeContainerHeadline"); 
    let textCafe: string ="";
    let history: string ="";
    history = t("history"); 
    let historyContainerHeadline: string ="";
    historyContainerHeadline = t("historyContainerHeadline"); 
    const locale = useLocale();
   
   

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
    <section>
            <div className={styles.textContainer}>
                <div className={`${h1Font.className} ${styles.text}`}>
                    <div dangerouslySetInnerHTML={{__html: t.raw('text1')}} />
                 </div>
            </div>

    <Booking 
    id={"20845"} 
    language={locale}
    />

    <h2 className={`${h1Font.className} ${styles.appartmentContainer}`}>
        {appartmentContainerHeadline}
     </h2>
     <div className={styles.modulesContainer}>
        <ApartmentModule appType = {'A'} /> 
        <ApartmentModule appType={'C'} />       
        <ApartmentModule appType = {'B'} />
       
        <ApartmentModule appType = {'D'} /> 
        <ApartmentModule appType = {'E'} />  
       <TextModule /> 

        </div>
    </section>

    <section>

    <div className={styles.textContainer}>
                <div className={`${h1Font.className} ${styles.text}`}>
                {/*    <p dangerouslySetInnerHTML={{ __html: text1 }} />*/}
                    <div dangerouslySetInnerHTML={{__html: t.raw('cafeIntro')}} />
                    
                </div>
            </div>
    <h2 className={`${h1Font.className} ${styles.appartmentContainer}`}>
        {cafeContainerHeadline}
     </h2>
<CafeModule /> 
    </section>

    <section className='section'>

<div className={styles.textContainer}>
            <div className={`${h1Font.className} ${styles.text}`}>
                <div dangerouslySetInnerHTML={{__html: t.raw('history')}} />
                
            </div>
        </div>
<h2 className={`${h1Font.className} ${styles.appartmentContainer}`}>
    {historyContainerHeadline}
 </h2>
<History /> 
</section>

</div >
</>
    )
}