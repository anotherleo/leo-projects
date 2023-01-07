import { useState } from 'react'

import { ArticleList } from './assets/components/ArticleList/ArticleList'
import { Form } from './assets/components/Form/Form'
import Header from './assets/components/Header/Header'

const App = () => {
	const [user, setUser] = useState()
	const hasUser = Boolean(user)

  return (
		<div className='h-screen'>
			<Header user={user} />
			{
				hasUser && <ArticleList />
			}
			{
				hasUser || <Form onSubmit={setUser} />
			}
		</div>
  )
}

export default App
