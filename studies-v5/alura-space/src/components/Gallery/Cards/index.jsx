import React from 'react'
import Card from './Card'

export default function Cards({ photos, styles }) {
	return (
		<ul className={styles.gallery__cards}>
			{photos.map((photo) => {
				return (
					<Card key={photo.id} photo={photo} styles={styles} />
				)
			})}
		</ul>
	)
}
