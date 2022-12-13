import React from 'react'
import Tags from '../Tags'
import Cards from './Cards'
import styles from './Gallery.module.scss'
import photos from './photos.json'

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Cards photos={photos} styles={styles} />
    </section>
  )
}
