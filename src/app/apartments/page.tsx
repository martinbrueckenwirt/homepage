import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import ClientCode from '../../components/client-code'

export default function Page() {
  const { t, lang } = useTranslation('apartments')

  console.log('appartements-page lang ', lang);

  const title =t('unsereAppartements')
    const anreisser = t('anreisser')
    
console.log(title);

  return (
    <>
      <h1>{title}</h1>
      <p>{anreisser}</p>
      </>
      )
    }