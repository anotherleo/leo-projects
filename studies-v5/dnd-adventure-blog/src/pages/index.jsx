import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Card from '../components/Card'

export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>D&D Adventure Blog</title>
      </Head>

      <section>
        <div className="container">
          <div className="row">
            {posts.map((post, index) => 
              <div key={index} className="col-md-4">
                <Card post={post} />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  // Get files from the posts directory
  const files = fs.readdirSync(path.join('src/data/posts'))

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('src/data/posts', filename), 'utf-8')
    
    const {data: frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  console.log(posts)
  
  return {
    props: {
      posts: posts,
    }
  }
}