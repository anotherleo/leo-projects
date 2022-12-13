import { ArrowsOutSimple, Heart } from 'phosphor-react'
import React from 'react'
import Tags from '../Tags'
import styles from './Gallery.module.scss'
import photos from './photos.json'

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <ul className={styles.gallery__cards}>
        {photos.map((photo)=>{
          return (
          <li key={photo.id} className={styles.gallery__card}>
            <img 
              src={photo.image}
              alt={photo.title}
              className={styles.gallery__image}
            />
            <p className={styles.gallery__description}>
              {photo.title}
            </p>
            <div>
              <p>{photo.credits}</p>
              <span>
                <Heart size={22} weight='light' color='white' />
                <ArrowsOutSimple size={22} weight='light' color='white' />
              </span>
            </div>
          </li>
          )
        })}
      </ul>
    </section>
  )
}
