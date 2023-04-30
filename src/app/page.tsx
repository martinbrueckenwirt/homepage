import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import ClientCode from '../components/client-code'
import Trans from 'next-translate/Trans'
import Image from "next/image"

export default function Page() {
  const { t, lang } = useTranslation('common')
 

  console.log('app-page lang ', lang);
  const title = t('title')
  const menueAppartement = t('menue')
  console.log('***************Menu ', menueAppartement);
  

  return (
    <>
      <h1>{title}</h1>

      <ClientCode />

      <div style={{ marginTop: 20 }}>
        <Link href="/?lang=en" as="/en">
          English
        </Link>
      </div>

      <div>
        <Link href="/?lang=de" as="/de">
          Deutsch
        </Link>
      </div>

      <div>
        <Link href="/?lang=it" as="/it">
          Italienisch
        </Link>
      </div>

      <div>
        <Link href={`/second-page?lang=${lang}`} as={`/${lang}/second-page`}>
          ➡️
        </Link>
      </div>

      <div>
        <Link href={`/apartments?lang=${lang}`} as={`/${lang}/apartments`}>
          {menueAppartement}
         </Link>
      </div>

      <div>
        <Link href={`/apartments/gartenblick?lang=${lang}`} as={`/${lang}/apartments/gartenblick`}>
          Gartenblick
         </Link>
      </div>

    <img
    src= {'/p1560079.jpg'}
                    alt={'test volle größe'}
                    width = {1920} 
                    height ={1200} 
     />
    
    </>
  )
}


export const metadata = {
  title: 'App directory',
}