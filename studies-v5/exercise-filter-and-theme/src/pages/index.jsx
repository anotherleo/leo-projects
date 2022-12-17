import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Tags from '../components/Tags'
import Gallery from '../components/Gallery'
import { UISideBackground } from '../components/UI'
import Explain from '../components/Explain'

export default function Home() {
  return (
    <>
      <Head>
        <title>Exercício de Map | @thomasleo.js</title>
        <meta name="description" content="Exercício de Map | @thomasleo.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

			<UISideBackground>
				<Header />
				<Gallery />
				<Explain />
				<Footer />
			</UISideBackground>
    </>
  )
}
