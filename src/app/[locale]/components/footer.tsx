import styles  from './footer.module.css' 
import {useTranslations} from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');
    return(
        <div className={styles.test}> {t('Einleitung')}  Footer</div>
    )
} 