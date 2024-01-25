import styles  from './page.module.css' 
import { useTranslations } from 'next-intl';
import Booking from '../components/booking';


export default function Apartments() {
    const t = useTranslations('Cafe');
    return (
        <>
        <div className={styles.test}> {t('Einleitung')}  cafe</div>
        <Booking id={817} />
   </>
            )
} 