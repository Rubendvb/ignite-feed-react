import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import Avatar from '../Avatar'

interface CommentProps {
  content: string
}

export default function Comment({ content }: CommentProps) {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/71610449?v=4"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rubén Vásquez</strong>
              <time title="11 de maio às 08:13h" dateTime="2024-05-11 08:35:30">
                Cerca de 2h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
