import Link from 'next/link'
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import JsonLD from "../../../../data/metadata";
import Head from 'next/head';
import styles from 'page.module.css';

function getJsonLDById(id: number) {
   const object = JsonLD.find((item) => item.id === id);
   return object;
}



 
export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'appartements'});
 
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




export default function Page() {
    const t = useTranslations('appartements');

  
    const h1 = t('h1');
    const h1subtitle = t('h1subtitle');

    
    return (
    <>
        <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLDById(2)) }}
                />
        </Head>
        
      <h1>  {h1}
                <p>{h1subtitle}</p>
       </h1>
      </>
      )
    }