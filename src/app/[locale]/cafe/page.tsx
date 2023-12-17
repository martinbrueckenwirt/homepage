import styles  from './page.module.css' 
import {useTranslations} from 'next-intl';

export default function Apartments() {
    const t = useTranslations('Cafe');
    return(
        <div className={styles.test}> {t('Einleitung')}  cafe</div>
    )
} 