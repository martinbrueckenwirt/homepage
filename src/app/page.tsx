import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import ClientCode from '../components/client-code'
import Header from '../components/header'
import LanguageSwitcher from '../components/languageSwitcher'
import Gallery from '../components/gallery.jsx'
import Counter from '../components/counter'

export default function Page() {
   const { t, lang } = useTranslation('common')
  const title = t('title')
  const menueAppartement = t('menue')

    
     
 
  return (
    <> 
      
      <Header />

      <LanguageSwitcher />
      <h1>{title}</h1>
        
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
      <p></p>
      <ClientCode />

      <p></p>

     
      <Gallery id="typeA" />
     


    </>
  )
}


export const metadata = {
  title: 'App directory',
}
