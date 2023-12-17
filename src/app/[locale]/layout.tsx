import {notFound} from 'next/navigation';
import Navigation from './components/navigation';
import Footer from './components/footer'
import { NavigationPropsNew } from './components/types';

import {useTranslations} from 'next-intl';

 
// Can be imported from a shared config
const locales = ['en', 'de','it'];
 
export default function LocaleLayout({children, params: {locale}}) {
  // Validate that the incoming `locale` parameter is valid
  const t = useTranslations('Navigation');
  const myLocale =useTranslations.locale;
  const apartmentTrans = t('apartment');
  const cafeTrans = t('cafe');
  const contactTrans = t('contact');
  const aboutTrans = t('about');

  if (!locales.includes(locale as any)) notFound();
 
  return (
    <html lang={locale}>
      
      <body>
        <Navigation transparency={false} apartment={apartmentTrans} cafe={cafeTrans} contact={contactTrans} about ={aboutTrans}  locale={locale}/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}