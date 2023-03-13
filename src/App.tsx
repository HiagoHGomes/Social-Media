import { Post } from "./components/Post/Post";
import { Header } from "./components/Header/Header";

import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./components/Sidebar/Sidebar";
import { id } from "date-fns/locale";

//author: {avatar_url "", name "", role: ""}
//publishedAt: Date
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/90875865?v=4',
      name: 'Hiago Henrique',
      role: 'Engenheiro de Software'
    },
    content: [
      {type: 'paragraph', content:'Acabei de ser promovido!!!'},
      {type: 'paragraph', content: 'Hoje foi muito bacana, ao chegar na empresa fui surpreendido com uma festa para mim, para comemorar minha promoção!'},
      {type: 'link', content: 'github.com/hiagoHGomes.png'}
    ],
    publishedAt: new Date('2023-02-11 19:43:15')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/28395293?v=4',
      name: 'Hugo Rosa',
      role: 'Analista de suporte de TI'
    },
    content: [
      {type: 'paragraph', content:'Parabéns ao meu amigo @HiagoHGomes pela promoção!'},
      {type: 'paragraph', content: 'Voa, mlk!'},
      {type: 'link', content: 'github.com/hiagoHGomes.png'}
    ],
    publishedAt: new Date('2023-02-23 19:40:00')
  },
];

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
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
   </div>
  )
};

export default App
