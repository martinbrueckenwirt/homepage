import styles from './page.module.css';
import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server'; 
import { Metadata } from 'next';
import JsonLD from "../../../../data/metadata";
import Head from 'next/head';
import { heroFont, h1Font, h2Font, h3Font, textFont, footerFont } from '@/src/functions/fonts';
import Hero from '../components/heroModule';
import Image from 'next/image';
import Link from 'next/link';
import {getTranslations} from 'next-intl/server';


import HeroImage from '../../../../public/P1170986-2550x1274-180-60.webp';
import studio    from '../../../../public/P1190113.webp';
import junior    from '../../../../public/P1210796_web.webp';
import family    from '../../../../public/P1360618-800x630-180-60.webp';
import familyExclusive from '../../../../public/P1360618-800x630-180-60.webp';
import topSuite  from '../../../../public/P1360933_web.jpg';
 
export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations({locale, namespace: 'appartements'});
 
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

function getJsonLDById(id: number) {
   const object = JsonLD.find((item) => item.id === id);
   return object;
}

export default function Appartements({params: {locale}}: {params: {locale: any}}) {
    /*const locale = useLocale();*/
    unstable_setRequestLocale(locale);
    const t = useTranslations('appartements');

    let imageAlt: string = t('heroImageAlt');
    const appartmentContainerHeadline = t("appartmentContainerHeadline"); 
    const subtitle = t("subtitle");
    const intro1 = t("intro1");
    const intro2 = t("intro2");
    const intro3 = t("intro3");
    const intro3a = t("intro3a");
    const intro4 = t("intro4");
    const intro4a = t("intro4a");
    const intro5 = t("intro5");
    const intro6 = t("intro6");
    const altStudio = t("altStudio");
    const altJunior = t("altJunior");
    const altFamily = t("altFamily");
    const altFamilyExclusive = t("altFamilyExclusive");
    const altTopSuite = t("altTopSuite");
    const sizes: string = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";
    const studioHeadline = t("studioHeadline");
    const studioSubHeadline = t("studioSubHeadline");
    const studioText1 = t("studioText1");
    const studioText2 = t("studioText2");
    const studioText3 = t("studioText3");
    const juniorHeadline = t("juniorHeadline");
    const juniorSubHeadline = t("juniorSubHeadline");
    const juniorText1 = t("juniorText1");
    const juniorText2 = t("juniorText2");
    const juniorText3 = t("juniorText3");
    const familyHeadline = t("familyHeadline");
    const familySubHeadline = t("familySubHeadline");
    const familyText1 = t("familyText1");
    const familyText2 = t("familyText2");
    const familyText3 = t("familyText3");
    const familyExclusiveHeadline = t("familyExclusiveHeadline");
    const familyExclusiveSubHeadline = t("familyExclusiveSubHeadline");
    const familyExclusiveText1 = t("familyExclusiveText1");
    const familyExclusiveText2 = t("familyExclusiveText2");
    const familyExclusiveText3 = t("familyExclusiveText3");
    const topSuiteHeadline = t("topSuiteHeadline");
    const topSuiteSubHeadline = t("topSuiteSubHeadline");
    const topSuiteText1 = t("topSuiteText1");
    const topSuiteText2 = t("topSuiteText2");
    const topSuiteText3 = t("topSuiteText3");


return (
    <>
    <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLDById(2)) }}
                />
        </Head>
        
    <div className = "content">
         
            <Hero 
                imageUrl = {HeroImage}
                imageUrlAlt = {imageAlt}
                calledFrom = "appartements">
            </Hero>
        </div>
         
        
        <section className={styles.spacerHead}>
        <h1 className={`${heroFont.className} ${styles.h1}`}>    
            <div dangerouslySetInnerHTML={{__html: t.raw('headline')}} />
            </h1>
        <div className={styles.textTeaserContainer}>
            <div className={`${h1Font.className} ${styles.teaser}`}>
                <div className={styles.teaserText} dangerouslySetInnerHTML={{__html: t.raw('welcome')}} />
                <div className={styles.teaserText} dangerouslySetInnerHTML={{__html: t.raw('intro1')}} />
                <div className={styles.intro} dangerouslySetInnerHTML={{__html: t.raw('intro2')}} />
                <div className={`${styles.introCompact} ${styles.intro}`} dangerouslySetInnerHTML={{__html: t.raw('intro3a')}} />
                <div className={styles.intro} dangerouslySetInnerHTML={{__html: t.raw('intro3')}} />
                <div className={`${styles.introCompact} ${styles.intro}`} dangerouslySetInnerHTML={{__html: t.raw('intro4a')}} />
                <div className={styles.intro} dangerouslySetInnerHTML={{__html: t.raw('intro4')}} />
                <div className={styles.intro} dangerouslySetInnerHTML={{__html: t.raw('intro5')}} />
                <div className={styles.intro} dangerouslySetInnerHTML={{__html: t.raw('intro6')}} />
            </div>
        </div>
        </section>



        <div className={styles.container}>

           

            <section className={styles.appartmentContainer}>
            <div className={styles.appartementCard}>
                <div >
                    <Image className={styles.cardImage}
                        src={studio}
                        alt={altStudio}
                        width={500}
                        height={350}
                        /*layout="fill" */
                        sizes={sizes}
                    />
                </div>
                <div className={`${h1Font.className} ${styles.cardTextBlock}`}>
                    <p className={styles.cardHeadline}>{familyHeadline}</p>
                    <p className={styles.cardSubHeadline}>{studioSubHeadline}</p>
                    <p className={styles.cardText}>{studioText1}</p>
                    <p className={styles.cardText}>{studioText2}</p>
                    <p className={styles.cardText}>{studioText3}</p>
            
                    <div className={styles.buttonContainer}>
                        <div >
                            <button className={styles.buttonLeft}> {t('bookingButton')}</button>        
                        </div>

                        <Link href="#">
                            <div className={styles.button}>
                                <button className={styles.buttonRight}> {t('moreDetails')}</button>        
                            </div>
                        </Link>
                    </div>
                </div>
                </div>
            <div className={styles.appartementCard}>
               
                <div className={`${h1Font.className} ${styles.cardTextBlock}`}>
                    <p className={styles.cardHeadline}>{juniorHeadline}</p>
                    <p className={styles.cardSubHeadline}>{juniorSubHeadline}</p>
                    <p className={styles.cardText}>{juniorText1}</p>
                    <p className={styles.cardText}>{juniorText2}</p>
                    <p className={styles.cardText}>{juniorText3}</p>
            
                    <div className={styles.buttonContainer}>
                        <div >
                            <button className={styles.buttonLeft}> {t('bookingButton')}</button>        
                        </div>

                        <Link href="#">
                            <div className={styles.button}>
                                <button className={styles.buttonRight}> {t('moreDetails')}</button>        
                            </div>
                        </Link>
                    </div>
                </div>
                 <div >
                    <Image className={styles.cardImage}
                        src={junior}
                        alt={altJunior}
                        width={500}
                        height={350}
                        layout="responsive" 
                        sizes={sizes}
                    />
                </div>    
            </div>
            <div className={styles.appartementCard}>
                <div >
                    <Image className={styles.cardImage}
                        src={family}
                        alt={altFamily}
                        width={500}
                        height={350}
                        /*layout="fill" */
                        sizes={sizes}
                    />
                </div>
                <div className={`${h1Font.className} ${styles.cardTextBlock}`}>
                    <p className={styles.cardHeadline}>{familyHeadline}</p>
                    <p className={styles.cardSubHeadline}>{familySubHeadline}</p>
                    <p className={styles.cardText}>{familyText1}</p>
                    <p className={styles.cardText}>{familyText2}</p>
                    <p className={styles.cardText}>{familyText3}</p>
            
                    <div className={styles.buttonContainer}>
                        <div >
                            <button className={styles.buttonLeft}> {t('bookingButton')}</button>        
                        </div>

                        <Link href="#">
                            <div className={styles.button}>
                                <button className={styles.buttonRight}> {t('moreDetails')}</button>        
                            </div>
                        </Link>
                    </div>
                </div>
                </div>    

                <div className={styles.appartementCard}>
                
                <div className={`${h1Font.className} ${styles.cardTextBlock}`}>
                    <p className={styles.cardHeadline}>{topSuiteHeadline}</p>
                    <p className={styles.cardSubHeadline}>{topSuiteSubHeadline}</p>
                    <p className={styles.cardText}>{topSuiteText1}</p>
                    <p className={styles.cardText}>{topSuiteText2}</p>
                    <p className={styles.cardText}>{topSuiteText3}</p>
            
                    <div className={styles.buttonContainer}>
                        <div >
                            <button className={styles.buttonLeft}> {t('bookingButton')}</button>        
                        </div>

                        <Link href="#">
                            <div className={styles.button}>
                                <button className={styles.buttonRight}> {t('moreDetails')}</button>        
                            </div>
                        </Link>
                    </div>
                    </div>
                    <div >
                    <Image className={styles.cardImage}
                        src={topSuite}
                        alt={altTopSuite}
                        width={500}
                        height={350}
                        /*layout="fill" */
                        sizes={sizes}
                    />
                </div>
                </div>  
                <div className={styles.appartementCard}>
                <div >
                    <Image className={styles.cardImage}
                        src={family}
                        alt={altFamily}
                        width={500}
                        height={350}
                        /*layout="fill" */
                        sizes={sizes}
                    />
                </div>
                <div className={`${h1Font.className} ${styles.cardTextBlock}`}>
                    <p className={styles.cardHeadline}>{familyExclusiveHeadline}</p>
                    <p className={styles.cardSubHeadline}>{familyExclusiveSubHeadline}</p>
                    <p className={styles.cardText}>{familyExclusiveText1}</p>
                    <p className={styles.cardText}>{familyExclusiveText2}</p>
                    <p className={styles.cardText}>{familyExclusiveText3}</p>
            
                    <div className={styles.buttonContainer}>
                        <div >
                            <button className={styles.buttonLeft}> {t('bookingButton')}</button>        
                        </div>

                        <Link href="#">
                            <div className={styles.button}>
                                <button className={styles.buttonRight}> {t('moreDetails')}</button>        
                            </div>
                        </Link>
                    </div>
                </div>
                </div>    
            </section>
        </div>

</>
            )

}