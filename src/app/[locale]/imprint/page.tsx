
import styles from './page.module.css';
import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Metadata } from 'next';
import { heroFont, h1Font, h2Font, h3Font, textFont, footerFont } from '@/src/functions/fonts';

import {getTranslations} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server'; 
 
export async function generateMetadata({params: {locale}}: {params: {locale: any}}) {
  const t = await getTranslations({locale, namespace: 'imprint'});
 
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





export default function Contact({params: {locale}}: {params: {locale: any}}) {
    /*const locale = useLocale();*/
    unstable_setRequestLocale(locale);
    const t = useTranslations('imprint');

    let h1:string = t('h1');
    let companyName:string = t('companyName');
    let jobname:string = t('jobname');
    let medialaw:string = t('medialaw');
    let authority:string = t('authority');
    let responsible: string = t('responsible');
    let liability: string = t('liability');
    let liabilityText: string = t('liabilityText');
    let upTime: string = t('upTime');
    let upTimeText: string = t('upTimeText');
    let externalLinks: string = t('externalLinks');
    let externalLinksText: string = t('externalLinksText');
    let copyright: string = t('copyright');
    let copyrightText: string = t('copyrightText');
    let privacy: string = t('privacy');  
    let privacyText: string = t('privacyText');
    let cookies: string = t('cookies');
    let cookiesText: string = t('cookiesText');
    let jurisdiction: string = t('jurisdiction');
    let jurisdictionText: string = t('jurisdictionText');
   
    

return (
    <>

    <div className = "content">
    
    <div className={styles.outerWrapper}>
         
   
        <h1>
            <div className={`${h1Font.className} ${styles.h1}`}>
                <p> {h1} </p>
            </div>
        </h1>
        <div className ={`${h1Font.className} ${styles.textContainer}`}>
            <p className={styles.bold}>{companyName}</p>
            <p className={styles.compact}>Mag. Evelyn Pichler {jobname}</p>
            <p className={styles.compact}>Mag. Dr. Martin Bürger {jobname}</p>
            <p className={styles.compact}>Panzendorf 12</p>
            <p className={styles.compact}>9919 Heinfels</p>
            <p className={styles.compact}>+43 (0)4842 6336</p>
            <Link target="blank" href="https://firmen.wko.at/br%c3%bcckenwirt-appartements-gmbh/tirol/?firmaid=6acca61e-e1c1-4df2-805b-4b4614303d5c"
             className={styles.spacerAbove}>{medialaw}
            </Link>
            <p>{authority} Bezirkshauptmannschaft Lienz</p>
            <p>{responsible} Mag. Dr. Martin Bürgler, Mag. Evelyn Pichler</p>
            <p className={styles.bold}>{liability}</p>
            <p className={styles.text}>{liabilityText} </p>
            <p className={styles.bold}> {upTime}</p>
            <p className={styles.text}>{upTimeText}</p>
            <p className={styles.bold}>{externalLinks}</p>
            <p className={styles.text}>{externalLinksText}</p>
            <p className={styles.bold}>{privacy}</p>
            <p className={styles.text}>{privacyText}</p>
            <p className={styles.bold}>{cookies}</p>
            <p className={styles.text}>{cookiesText}</p>
            <p className={styles.bold}>{jurisdiction}</p>
            <p className={styles.text}>{jurisdictionText}</p>
            <p className={styles.bold}>{copyright}</p>
            <p className={styles.text}>{copyrightText}</p>



        </div>
        

</div>
</div>
   
</>
    )
}