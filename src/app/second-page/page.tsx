import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import ClientCode from '../../components/client-code'

export default function Page() {
  const { t, lang } = useTranslation('common')
  const title = t(`title`)

  //   funktioniert nicht, weil key-prop fehlt <Trans i18nKey="common:second-page" components={[<b />]} />
  return (
    <>
      <h1>{title}</h1>
      <ClientCode />
      <div>
        <Link href={`/?lang=${lang}`} as={`/${lang}`}>
          ⬅️
        </Link>
      </div>
    </>
  )
}