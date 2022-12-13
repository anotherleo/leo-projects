import React, { useState } from 'react'
import Tags from '../Tags'
import Cards from './Cards'
import styles from './Gallery.module.scss'
import photos from './photos.json'

export default function Gallery() {
  const [itens, setItens] = useState(photos)
  const tags = [...new Set(photos.map((value) => value.tag))]

  const filterPhotos = (tag) => {
    const newPhotos = photos.filter((photo) => {
      return photo.tag === tag;
    })

    setItens(newPhotos);
  }

  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filterPhotos={filterPhotos} setItens={setItens} />
      <Cards photos={itens} styles={styles} />
    </section>
  )
}
