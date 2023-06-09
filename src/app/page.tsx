import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import ClientCode from '../components/client-code'
import Trans from 'next-translate/Trans'
import Image from "next/image"
import Gallery from "../components/gallery_a"

export default function Page() {
  const { t, lang } = useTranslation('common')
   const title = t('title')
  const menueAppartement = t('menue')
   

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

    <Image
    src= {'/p1560079a.jpg'}
                    alt={'test volle größe'}
                    
                    width = {1000} 
                    height ={800} 
                    
     />
    
    <Gallery
    
    />
    </>
  )
}


export const metadata = {
  title: 'App directory',
}