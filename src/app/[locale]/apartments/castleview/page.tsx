import styles  from './page.module.css'
import React from 'react';
import { useTranslations } from 'next-intl';

export default function Castleview() {

    const t = useTranslations('Castleview');
    return(
        <>
        <div className={styles.test}> {t('Einleitung')}  castleView</div>
        </>

    )
} 