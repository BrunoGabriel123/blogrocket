import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import eu from '../../src/assets/eu.jpeg'

export function Comment({content, deleteComment}){
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        deleteComment(content)       
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }

    return (
        <div>
            <div className={styles.comment}>
                <Avatar hasBorder={false} src={eu} />

                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>Bruno Gabriel</strong>
                                <time title="11 de Maio ás 08:13h" dateTime="2022-05-11 08:13:38">Cerca há 1h atrás</time>
                            </div>
                            <button onClick={handleDeleteComment} title="Deletar comentário">
                                <Trash size={24}/>
                            </button>
                        </header>

                        <p>{content}</p>
                    </div>


                    <footer>
                        <button onClick={handleLikeComment}>
                            <ThumbsUp />
                            Aplaudir<span>{likeCount}</span>
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    )
}