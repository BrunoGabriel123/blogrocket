import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { useState } from 'react'


export function Post({author, publishedAt, content}) {    
    const [comments,setComments] = useState([
       'Post muito bacana, hein'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(publishedAt);
    
function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
}

function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é Obrigatorio!');
}

function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
}

function deleteComment(commenttoDelete) {
    const newCommentWithoutDeletedOne = comments.filter(comment => {
        return comment != commenttoDelete;
    })
     setComments(newCommentWithoutDeletedOne);
}

    const isNewCommentEmpty = newCommentText.length == 0;
    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorinfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title="11 de Maio ás 08:13h" 
                    dateTime="2022-05-11 ás 08:13:38">
                   {publishedDateFormatted}
                </time>

            </header>

            <div className={styles.content}>
               {content.map(line => {
                if(line.type == 'paragraph') {
                    return <p key={line.content}>{line.content}</p>
                } else if (line.type == 'link') {
                    return <p key={line.content}><a href="">{line.content}</a></p>
                }
               })}
            </div>

            <form onSubmit={handleCreateNewComment}className={styles.connentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                   <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.connentList}>
               {comments.map(comment => {
                return (<Comment key={comment}
                    content={comment}
                    deleteComment={deleteComment}/>
               
            
                )
            })}
            </div>
        </article>
    )
}