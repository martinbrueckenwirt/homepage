'use client';

import { useRouter, usePathname } from 'next/navigation';
import german from '../../../../public/deutsch.webp';
import english from '../../../../public/englisch.webp';
import italian   from '../../../../public/italienisch.webp';
import Image from 'next/image';

export default function LanguageChanger({ locale }) {
  const router = useRouter();
  const pathname = usePathname();
  console.log(' LanguageChanger 1: ',locale);
  console.log(' pathname        1: ',pathname)

  /*const handleChange = e => {
    router.push(pathname, { locale: e.target.value });*/


    const handleChange = e => {
        const newLocale = e.target.value;
        const newPathname = pathname.replace(`${locale}`, `${newLocale}`);
        router.push(newPathname, { locale: newLocale });
    
    console.log(' LanguageChanger    2: ',e.target.value);
    console.log('new Pathname        2: ',newPathname);
    console.log(' router.pathname    2: ',router.push)
    
  };

  return (
    <select value={locale} onChange={handleChange}>
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="it">Italian</option>
     </select>
  );
}