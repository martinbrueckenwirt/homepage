'use client'
import React from 'react'
import Head from 'next/head'
import {useTranslations} from 'next-intl';
import styles from '../components/header.module.css'

/* *a* Title entfernen!!!!!!!!!!!!!!!!!!!!!*/

export default function Header() {

    const t = useTranslations('Common');
    const title = t('title')
    const headTitle = `${title} (${lang.toUpperCase()})`
    
  
  
  return (
    <>
      <Head>
      <title key="title">{headTitle}</title>
      </Head>
      <header className={styles.header}>
        <h1>Header.js Header </h1>
        <h1>{title}</h1>
    
               
      </header>
    </>
  )
} 