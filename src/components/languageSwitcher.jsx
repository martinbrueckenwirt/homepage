'use client'
import React from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation';
import useTranslation from 'next-translate/useTranslation'
import styles from '../components/languageSwitcher.module.css'

export default function LanguageSwitcher() {

    const { t, lang } = useTranslation('common')
    
    const path = usePathname()
    const pathWithoutLang = path.substring(4);
    const pathLangDe ="/de/"
    const pathLangIt ="/it/"
    const pathLangEn ="/en/"
    let pathDe = pathLangDe.concat(pathWithoutLang)
    let pathIt = pathLangIt.concat(pathWithoutLang)
    let pathEn = pathLangEn.concat(pathWithoutLang)
    let finalPathDe = pathDe.concat("?lang=de as=/de")
    let finalPathIt = pathIt.concat("?lang=it as=/it")
    let finalPathEn = pathEn.concat("?lang=en as=/en")
    
  return (
    <>
      <div className={styles.switcher}>
         <div className ={styles.switcherButton}> 
          <Link href={finalPathDe}>
            Deutsch
          </Link>
          </div> 
           <div className ={styles.switcherButton}>
         <Link href={finalPathIt}>
            Italiano
          </Link>
          </div> 
        <div className ={styles.switcherButton}>
           <Link href={finalPathEn}>
              English
            </Link>
            </div> 
        
      </div>
    </>
  )
}