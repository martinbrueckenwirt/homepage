import styles  from './page.module.css' 
import { useLocale, useTranslations } from 'next-intl';
import { heroFont, h1Font, h2Font, h3Font, textFont, footerFont,handwriting } from '@/src/functions/fonts';
import Hero from '../components/heroModule';
import Slider from '../components/slider';
import HeroImage from '../../../../public/P1180423-2550x1274-180-60.webp';


export default function Cafe({params: {locale}}: {params: {locale: any}}) {

    const t = useTranslations('cafe');
    // const quote = t('quote');


    // const quote = t.markup('quote',{
        // myquote:(chunks) => `<b>${chunks}</b>`
    // }) 

    let imageAlt: string = t('heroImageAlt');
    const h1 = t('h1');
    const oeffnungszeiten = t('oeffnungszeiten');
    const oeffnungszeitenText = t('oeffnungszeitenText');
    const text1 = t('text1');
    const text2 = t('text2');
    const text3 = t('text3');
    const text4 = t('text4');
    const text5 = t('text5');
    const text6 = t('text6');
    const text7 = t('text7');
    const text8 = t('text8');
    const text9 = t('text9');
    const knownFor = t('knownFor');    

    return (
        <>    
           
                
            <Hero 
                imageUrl = {HeroImage}
                imageUrlAlt = {imageAlt}
                calledFrom = "cafe">
            </Hero>
 <div className={styles.container} >

            <div className={styles.innerContainer} >
                <h1 className={`${heroFont.className} ${styles.h1}`}> 
                        {h1}
                </h1>
                    <h2 className={styles.h2}>
                        <div className={`${handwriting.className} ${styles.h2Line}`} dangerouslySetInnerHTML={{ __html: t.raw('quote') }} />
                        <div className={`${h1Font.className} ${styles.quoteLine2}`}> Lukas H.</div>
                       
                </h2>
                    
                <div className={styles.contentContainer}>
                    
                    <div className={styles.slider} >
                            <Slider />        
                    </div>
                    {/* <div dangerouslySetInnerHTML={{__html: text1}} /> */}
                        <div className={`${heroFont.className} ${styles.textContent}`} >
                         
                            
                            <p className={styles.text}>{text3}</p>
                            <p className={styles.text}>{text4}</p>
                            <p className={styles.text}>{text5}</p>
                            <p className={styles.text}>{text6}</p>
                            <p className={styles.text}>{text9}</p>
                            <p className={styles.oeffnungszeiten}>{oeffnungszeiten}: {oeffnungszeitenText}</p>
                             
                        </div>
                             
                    </div>
                    <p className={styles.knownFor} dangerouslySetInnerHTML={{__html: t.raw('knownFor')}} />
 
            </div>
        </div>
   
        </>
    );
        
} 