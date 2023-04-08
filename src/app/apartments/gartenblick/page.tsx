import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import LanguageSwitcher from '../../../components/languageSwitcher'

export default function Page() {
  const { t, lang } = useTranslation('apartments')

  console.log('appartements-page lang ', lang);

  const title =t('gartenblick')
  const anreisser = t('anreisser')
    
console.log(title);

  return (
    <>
    <LanguageSwitcher/>
      <h1>{title}</h1>
      <p>{anreisser}</p>

      <div>
        <Link href={`/?lang=${lang}`} as={`/${lang}`}>
          Home
         </Link>
      </div>

      </>
      )
    }