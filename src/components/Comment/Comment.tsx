import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment:string)=>void;
}

export function Comment({content, onDeleteComment}:CommentProps){
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    };

    function handleLIkeComment() {
        setLikeCount((state)=>{
            return state +1;
        });
    };

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/63628013?v=4" alt=""/>


            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gilberto Junior</strong>
                            <time title='11 de Fevereiro as 19h43' dateTime='2023-02-11 19:43:15'>Cerca de 1h atrás</time>
                        </div>
                        
                        <button onClick={handleDeleteComment} title='Deletar Comentario'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLIkeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}