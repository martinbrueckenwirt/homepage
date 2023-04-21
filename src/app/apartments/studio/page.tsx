import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import Gallery from '../../../components/gallery'


export default function Page() {
  const { t, lang } = useTranslation('apartments')

 const title =t('unsereAppartements')
    const anreisser = t('anreisser')
    
  return (
    <>
      <h1>{title}</h1>
      <p>{anreisser}</p>
      <Gallery id="typeA" />
      </>
      )
    }