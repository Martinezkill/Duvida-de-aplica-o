import { ThumbsDown, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { ThumbsUp } from '@phosphor-icons/react/dist/ssr'
import { Avatar } from './avatar'

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/131058355?v=4" />

            <div className={styles.commentBox}>
                 <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Emanuel Martinez </strong>
                            <time title="09 de maio às 10:00h" dateTime="2022-05-09 10:00:25">Cerca de 1hr atras</time>
                        </div>

                        <button title="Deletar comentario">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>

                 </div>

                 <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                 </footer>
            </div>
        </div>
    )
}
