

import styles  from './cafeModule.module.css';
import Image from 'next/image'
import Link from 'next/link';
import Slider from './slider';
import { heroFont, h1Font, h2Font, h3Font, textFont, footerFont } from '@/src/functions/fonts';
import {NextIntlClientProvider,useTranslations } from 'next-intl';



export default function CafeModule() {

    const t = useTranslations('cafe');

    let text1: string = t('text1');
    let text2: string = t('text2');
    let text3: string = t('text3');
    let text4: string = t('text4');
    let text5: string = t('text5');
    let text6: string = t('text6');
    let text7: string = t('text7');
    let text8: string = t('text8');
   
    

  
  
  
/* Muster für zb "<important> abc </important" */
    let quote = t.markup('quote',{
        q:(chunks) => `"${chunks}"`
   
    })     
return (

<>

<div className ={styles.outerWrapper}>

<div className={styles.quoteContainer}> 
    <span className ={`${h1Font.className} ${styles.quote}`}> {quote} </span>
    <span className ={`${h1Font.className} `}> Lukas.H </span>
    
</div>
<div className ={styles.wrapper}>
    <div className = {styles.wrapperSliderAndText}>
        <div className ={styles.box1}>
        <NextIntlClientProvider>
            <Slider />
        </NextIntlClientProvider>
        </div>
        <div className ={`${h1Font.className} ${styles.box2}`}>
            <p>{text1}</p>
            <p>{text2}</p>
            <p>{text3}</p>
            <p>{text4}</p>
            <p>{text5}</p>
            <p>{text6}</p>
            <p>{text7}</p>
            <p>{text8}</p>
        </div>
    </div>


    <div className ={`${h1Font.className} ${styles.box3}`}>
        <div dangerouslySetInnerHTML={{__html: t.raw('knownFor')}} />
    </div>
    
    
    
</div>

</div>

</>)
}