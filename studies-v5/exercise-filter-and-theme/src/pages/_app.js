import '../styles/globals.scss'

import { Nunito } from '@next/font/google'

const nunito = Nunito({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <div className={nunito.className}>
      <Component {...pageProps} />
    </div>
  )
}
