
import styles from './page.module.css';
import React from 'react';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import { heroFont, h1Font, h2Font, h3Font, textFont, footerFont } from '@/src/functions/fonts';
import  Hero from './components/heroModule';
import HeroImage from '../../../public/P1540356-25-1.webp';
/*import HeroImage from '../../../public/P1190113.webp';*/
import TextModule from './components/textModule';

import ApartmentModule from './components/apartementModule';

import {getTranslations} from 'next-intl/server';
 
export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
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
  };
}





export default function Home() {
    const t = useTranslations('home');

    let imageAlt: string="";
    imageAlt = t('heroimagealt');

    let text1: string ="";
    let appartmentContainerHeadline: string ="";
    appartmentContainerHeadline = t("appartmentContainerHeadline"); 
   

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

            <div className={styles.textContainer}>
                <div className={`${h1Font.className} ${styles.text}`}>
                    <p dangerouslySetInnerHTML={{ __html: text1 }} />
                    <div dangerouslySetInnerHTML={{__html: t.raw('text1')}} />
                    
                </div>
            </div>

    <section>
    <h2 className={`${h1Font.className} ${styles.appartmentContainer}`}>
        {appartmentContainerHeadline}
     </h2>
     <div className={styles.modulesContainer}>
        <ApartmentModule appType = {'A'} /> 
        <ApartmentModule appType={'C'} />       
        <ApartmentModule appType = {'B'} />
       
        <ApartmentModule appType = {'C'} /> 
        <ApartmentModule appType = {'C'} />  
        <TextModule />

        </div>
         </section>
  

</div >
</>
    )
}