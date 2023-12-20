import styles  from './page.module.css'
import React from 'react';
import {useTranslations} from 'next-intl';

export default function CastleviewPricing() {

    const t = useTranslations('CastleviewPricing');
    return(
        <div className={styles.test}> {t('Einleitung')}  castleviewPrricing</div>
    )
} 