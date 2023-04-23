'use client'

import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import ClientCode from '../components/client-code'
import Header from '../components/header'
import LanguageSwitcher from '../components/languageSwitcher'
import Gallery from '../components/gallery.jsx'
import GalleryA from '../components/gallery_a.jsx'

import Counter from '../components/counter'
import imageList from "../../data/image";
import styles from "../components/gallery.module.css"
import Image from "next/image"

export default function Page() {
   const { t, lang } = useTranslation('common')
  const title = t('title')
  const menueAppartement = t('menue')

  let gridImages =[]; /*Liste der anzuzeigenden Bilder */
  gridImages = imageList[0].images;
  let image = gridImages[0];
  /* 
      <Gallery id="typeA" /> */  
     
 /* <Header />

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

       src= {"/P2535132-1.webp"}
*/

  return (
    <> 
      
     

     
      <div id="grid" className={styles.gallerygridcontainer}>
   
      
   
          
            <div >
                 <Image 
                    src= {"/P1560079.jpg"}
                    alt={"test volle größe"}
                    priority= {false}
                    quality = {80}
                    width = {1920} 
                    height ={1200} 
                    /*fill */
                />

<Image 
                    src= {"/P2535132-1.webp"}
                    alt={"test webp"}
                    priority= {false}
                    quality = {80}
                    width = {1920} 
                    height ={1200} 
                    /*fill */
                />

<img 
                    src= {"/P2535132-1.jpg"}
                    alt={"image attribute"}
                    width = {1920} 
                    height ={1200} 
                    /*fill */
                />
            </div>
            
        
        
</div>
     


    </>
  )
}

/*
*a* nicht erlaubt!!
export const metadata = {
  title: 'App directory',
} */
