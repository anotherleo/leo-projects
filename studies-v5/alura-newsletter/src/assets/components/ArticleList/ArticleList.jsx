import React from 'react'
import data from '../../data/articles.json'
import { Article } from '../Article/Article'

export const ArticleList = () => {
	return (
		<div className='mt-5 m-auto max-w-4xl grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1000px]'>
			{
				data.map((props, index) => {
					return (
						<Article key={index} {...props} />
					)
				})
			}
		</div>
	)
}
