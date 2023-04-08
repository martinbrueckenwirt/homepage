'use client'
import React from 'react'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import styles from '../components/header.module.css'



export default function Header() {

    const { t, lang } = useTranslation('common')
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