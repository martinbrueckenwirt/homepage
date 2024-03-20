import styles  from './page.module.css' 
import { useLocale, useTranslations } from 'next-intl';
import { heroFont, h1Font, h2Font, h3Font, textFont, footerFont,handwriting } from '@/src/functions/fonts';
import Hero from '../components/heroModule';
import Slider from '../components/slider';
import Image from 'next/image';
import HeroImage from '../../../../public/P1180423-2550x1274-180-60.webp';
import CafeImage from '../../../../public/P2902846-RW2-1-300x200-180-70.webp';
import TerraceImage from '../../../../public/P1270601-300x200-180-70.webp';
import GardenImage from '../../../../public/P2566173-1-300x200-180-70.webp';
import PlaygroundImage from '../../../../public/P1260376-300x200-180-70.webp';
import Link from 'next/link';


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
    const reservierung = t('reservierung');
    const contact = t('contact');   
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
    const cafeImageAlt = t('cafeImageAlt');
    const terraceImageAlt = t('terraceImageAlt');
    const gardenImageAlt = t('gardenImageAlt');
    const imagePlaygroundAlt = t('imagePlaygroundAlt');
    const contactURL = `/${locale}/contact`;

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
                       <p className={`${h1Font.className} ${styles.opentimes}`}>{oeffnungszeiten}: {oeffnungszeitenText}</p>
                        <p className={`${h1Font.className} ${styles.reservation}`}>{reservierung}: +43 4842 6336</p>
                        <p className={`${h1Font.className} ${styles.reservation}`}>
                            <Link className={styles.link} href={contactURL}>
                                {contact}
                            </Link></p>
                    </h2>
                    
                <div className={styles.contentContainer}>
                    
                    <div className={styles.slider} >
                            <Slider />        
                    </div>
                        <div className={`${heroFont.className} ${styles.textContent}`} >
                            <p className={styles.text}>{text3}</p>
                            <p className={styles.text}>{text4}</p>
                            <p className={styles.text}>{text5}</p>
                            <p className={styles.text}>{text6}</p>
                            <p className={styles.text}>{text9}</p>

                        </div>
                </div>
                <p className={`${heroFont.className} ${styles.knownFor}`} dangerouslySetInnerHTML={{ __html: t.raw('knownFor') }} />
                    <div className={`${heroFont.className} ${styles.cafeContainer}`}>
                    <div className={styles.cafeInnerContainer}>
                        <div className={styles.cafeCard}>
                            <Image className={styles.cafeCardImage}
                                src={CafeImage}
                                alt={cafeImageAlt}
                                width={300}
                                height={200}
                            />
                            <p className={styles.cafeCardText} dangerouslySetInnerHTML={{ __html: t.raw('text2') }} />
                        </div>
                        <div className={styles.cafeCard}>
                            <Image className={styles.cafeCardImage}
                                src={TerraceImage}
                              alt={terraceImageAlt}
                                width={300}
                                height={200}
                            />
                            <p className={styles.cafeCardText} dangerouslySetInnerHTML={{ __html: t.raw('sunTerrace') }} />
                        </div>
                    </div>    
                    <div className={styles.cafeInnerContainer}> 
                        <div className={styles.cafeCard}>
                            <Image className={styles.cafeCardImage}
                                src={GardenImage}
                              alt={gardenImageAlt}
                                width={300}
                                height={200}
                            />
                            <p className={styles.cafeCardText} dangerouslySetInnerHTML={{ __html: t.raw('text7') }} />
                            
                        </div>
                        <div className={styles.cafeCard}>
                            <Image className={styles.cafeCardImage}
                                src={PlaygroundImage}
                              alt={imagePlaygroundAlt}
                                width={300}
                                height={200}
                            />
                            <p className={styles.cafeCardText} dangerouslySetInnerHTML={{ __html: t.raw('text8') }} />
                        </div>
                    </div>  
                </div>    
             </div>
        </div>
   
        </>
    );
        
} 