import React from 'react'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Gallery from '../../components/Gallery'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import styles from './HomePage.module.scss'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
      </main>
      <div className={styles.gallery}>
        <Gallery />
      </div>
      <Footer />
    </>
  )
}
