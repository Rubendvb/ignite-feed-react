import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/71610449?v=4',
      name: 'Rubén Vásquez',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que...',
      },
      { type: 'Link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que...',
      },
      { type: 'Link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Salve devs! 🚀' },
      {
        type: 'paragraph',
        content: 'Hoje lancei um novo vídeo no canal falando sobre ReactJS!',
      },
      { type: 'Link', content: 'youtube.com/maykbrito' },
    ],
    publishedAt: new Date('2022-06-10 15:30:00'),
  },
  {
    id: 4,
    author: {
      avatarUrl: 'https://github.com/rafaballerini.png',
      name: 'Rafaella Ballerini',
      role: 'Dev Influencer',
    },
    content: [
      { type: 'paragraph', content: 'Oi pessoal! ✨' },
      {
        type: 'paragraph',
        content: 'Acabei de compartilhar um novo tutorial de CSS no meu blog.',
      },
      { type: 'Link', content: 'rafaellaballerini.dev/css-tutorial' },
    ],
    publishedAt: new Date('2022-07-01 10:00:00'),
  },
  {
    id: 5,
    author: {
      avatarUrl: 'https://github.com/rafaballerini.png',
      name: 'Rafaella Ballerini',
      role: 'Dev Influencer',
    },
    content: [
      { type: 'paragraph', content: 'Oi pessoal! ✨' },
      {
        type: 'paragraph',
        content: 'Acabei de compartilhar um novo tutorial de CSS no meu blog.',
      },
      { type: 'Link', content: 'rafaellaballerini.dev/css-tutorial' },
    ],
    publishedAt: new Date('2025-03-04 15:00:00'),
  },
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
