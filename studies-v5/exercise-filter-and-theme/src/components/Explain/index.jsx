import React from 'react'
import styles from './Explain.module.scss'

export default function Explain() {
	return (
		<section className={styles.explain}>
			<div className="container">
				<div className="row">
					<div className="col-7 col-md-5">
						<p className={styles.devtalk}>DevTalk</p>
						<p>Esse projeto foi desenvolvido em React e Next.js como um exercício. Fiz o design primeiro no Figma e então desenvolvi o código da interface. Com isso, criei um arquivo .json com o conjunto de imagens e informações que gostaria de disponibilizar ao usuário, e usei map&#40;&#41; no componenente da galeria para exibir os cards. A estilização foi feita com SASS, CSS Modules e Styled Components. Essa é a primeira parte de um projeto com três etapas: a primeira são os cards, a segunda é um filtro via tags, e a terceira é um seletor de modo claro/escuro.</p>
					</div>
				</div>
			</div>
		</section>
	)
}
