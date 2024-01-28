import styles  from './page.module.css' 
import { useLocale,useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server'; 
import Booking from '../components/booking';


export default function Cafe({params: {locale}}: {params: {locale: any}}) {
    /*const locale = useLocale();*/
    unstable_setRequestLocale(locale);
    const t = useTranslations('cafe');

    return (
        <>
        <div className={styles.test}> {t('text1')}  cafe</div>
        <Booking id={"817"}
        language={locale} />
   </>
            )
} 