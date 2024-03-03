import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server'; 
import JsonLD from "../../../../data/metadata";
import Head from 'next/head';
import { heroFont, h1Font,h2Font, h3Font,textFont, footerFont } from '@/src/functions/fonts';
import Hero from '../components/heroModule';
import styles from './page.module.css';
import Gallery from '../components/gallery';
import Image from 'next/image';
import grundriss from '../../../../public/Appartements_1.webp';
import PricingTable from '../components/pricingTable';
import pricesGeneral from '../../../../data/pricesGeneral'
import PricingTableVarious from '../components/pricingTableVarious';
import HeroImage from '../../../../public/P1190113_2550x1274-180-60.webp';
import Booking from '../components/booking';

import {BgImage} from '../components/types';

import BackgroundImage from '../components/backgroundImage';


function getJsonLDById(id: number) {
   const object = JsonLD.find((item) => item.id === id);
   return object;
}



 
export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations({locale, namespace: 'studio'});
 
    return {
      
      title: t('title'),
      description: t('description'),
      alternates: {
          canonical: `/de/appartement`,
          languages: {
                'it': `/it/appartement`,
                'en': `/en/appartement`
          }
      }
       
  };
}




export default function Studio({params: {locale}}: {params: {locale: any}}) {
    /*const locale = useLocale();*/
    unstable_setRequestLocale(locale);
    const t = useTranslations('studio');

    let imageAlt: string = t('heroImageAlt');
    const h1 = t('h1');
    const h1subtitle = t('h1subtitle');
    const altLayout = t('altLayout');
    const bookingButton = t('bookingButton');
    const winterSeason = pricesGeneral.winterSeason;
    
    return (
    <>
        <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLDById(2)) }}
                />
        </Head>
    <section className={styles.container}> 
            <Hero 
                imageUrl = {HeroImage}
                imageUrlAlt = {imageAlt}
                calledFrom = "studio">
            </Hero>
        
        
        
        
        <h1  className={`${heroFont.className}  ${styles.h1Container}`}>  
            <div className={styles.h1Text}>
                <div className={styles.h1}>
                    {h1}
                </div>
                <div className={`${h3Font.className} ${styles.subtitle}`}>
                    {h1subtitle}
                </div>
            </div>
            <button className={styles.bookButton}>{bookingButton}</button>
        </h1>
        <div id="vri-container-21197" className ={styles.test}>
              <Booking apartmentId={"21197"}/>
        </div>
       
        <BackgroundImage type ={'A'}/>
       
    </section>

    <Gallery appType ={'A'}/>

        <section className={styles.textContainer1}>
                <div className={`${h1Font.className} ${styles.textContainer1Text}`}>
                    <div dangerouslySetInnerHTML={{__html: t.raw('text1')}} />
                    <div dangerouslySetInnerHTML={{__html: t.raw('text2')}} />
                    <div dangerouslySetInnerHTML={{__html: t.raw('text3')}} />
                    <div dangerouslySetInnerHTML={{__html: t.raw('text4')}} />
                </div>

        </section>

        <div className={styles.detailsContainer}>  
            <Image className={styles.grundriss}
                src={grundriss} 
                alt={altLayout} 
                height={500}
                width={700}
            />
            <section className={styles.textContainer}>
                    <div className={`${h1Font.className} ${styles.textContainer2Text}`}>
                        <div dangerouslySetInnerHTML={{__html: t.raw('text5')}} />
                        <div dangerouslySetInnerHTML={{ __html: t.raw('text6') }} />
                        <div className={styles.horizontalGap}></div>
                       {/* <div dangerouslySetInnerHTML={{__html: t.raw('text16')}} /> */}
                        <div dangerouslySetInnerHTML={{__html: t.raw('text7')}} />
                        <div dangerouslySetInnerHTML={{__html: t.raw('text8')}} />
                        <div dangerouslySetInnerHTML={{__html: t.raw('text9')}} />
                        <div dangerouslySetInnerHTML={{__html: t.raw('text10')}} />
                        <div dangerouslySetInnerHTML={{__html: t.raw('text11')}} />
                        <div dangerouslySetInnerHTML={{__html: t.raw('text12')}} />
                        <div dangerouslySetInnerHTML={{__html: t.raw('text13')}} />
                        <div dangerouslySetInnerHTML={{__html: t.raw('text14')}} />
                        <div dangerouslySetInnerHTML={{__html: t.raw('text15')}} />

                    </div>
            </section>
        </div> 
        <section className={styles.containerPricing}>
                <div className={styles.pricingHeadline} dangerouslySetInnerHTML={{ __html: t.raw('winterSeason')}}
                     />
                
            <div>
            <PricingTable
                type = {'A'}
                season={'winter'} 
                      
            />
                </div>    
            <div className={styles.pricingHeadline} dangerouslySetInnerHTML={{__html: t.raw('summerSeason')}} />
            <div>
            <PricingTable
                type = {'A'}
                season={'summer'} 
                       
            />
            </div>  
            <div className={styles.pricingHeadline} dangerouslySetInnerHTML={{ __html: t.raw('various') }} />
            <div>
             <PricingTableVarious/>
            </div>   
            
                
        </section>
    </>
      )
    }