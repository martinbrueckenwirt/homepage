import styles  from './page.module.css' 
import {useTranslations} from 'next-intl';

export default function Apartments() {
    const t = useTranslations('Apartments');
    return(
        <div className={styles.test}> {t('Einleitung')}  apartments</div>
    )
} 