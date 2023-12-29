'use client';

import { useRouter, usePathname } from 'next/navigation';
import german from '../../../../public/deutsch.webp';
import english from '../../../../public/englisch.webp';
import italian   from '../../../../public/italienisch.webp';
import Image from 'next/image';
import styles from './languageChanger.module.css';


import Link from 'next/link';

export default function LanguageChanger({ locale }: { locale: string }) {
/*export default function LanguageChanger({ locale }):string {*/
  const router = useRouter();
  const pathname = usePathname();
  const pathWithoutLang = pathname.substring(4);
  
  
  function getNewPath(lang:string) {
    let newPath = lang.concat(pathWithoutLang);  
    return (newPath)
    }

    /*const handleChangeLang = e => {
        const newLocale = e.target.value;
        const newPathname = pathname.replace(`${locale}`, `${newLocale}`);
        router.push(newPathname, { locale: newLocale });
    
    console.log(' LanguageChanger    2: ',e.target.value);
    console.log('new Pathname        2: ',newPathname);
    console.log(' router.pathname    2: ',router.push)
    
  };*/

    
  return (
    /*<select value={locale} onChange={handleChange}>
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="it">Italian</option>
     </select>*/
    
    <div className ={styles.languageButtons}>
      <Link href={getNewPath('/de/')} > <Image src={german} alt="german" width={70} height={30} />  </Link>
      <Link href={getNewPath('/en/')}> <Image src={english} alt="english" width={70} height={30} /> </Link>
      <Link href={getNewPath('/it/')}> <Image src={italian} alt="italian" width={70} height={30} /> </Link>
    </div>
    
  );
}