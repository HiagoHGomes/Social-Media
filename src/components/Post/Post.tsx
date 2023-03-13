import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import styles from './Post.module.css';
import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';


interface Author{
    name: string;
    role:string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph'|'link';
    content: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}

export function Post(props:PostProps){
    const [comments, setComments] = useState([
       'Post muito bacana!'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(props.publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {locale:ptBR});

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComment(event:FormEvent) {
        event.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    };

    function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    };

    function deleteComment(commentToDelete:string){
        const commentsWithoutDeletedOne = comments.filter(comment=>{
            return comment != commentToDelete
        });
        setComments(commentsWithoutDeletedOne);
    };

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatorio!');
    };

    const isNewCommentEmpty = newCommentText.length === 0;

    return(
       <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={props.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                    <strong>{props.author.name}</strong>
                    <span>{props.author.role}</span>
                    </div>
                    
                </div>
                <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {props.content.map(line => {
                    if (line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }else if(line.type === 'link'){
                        return <a href="#" key={line.content}>{line.content}</a>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe um comentario para seu amigo</strong>

                <textarea 
                    name='comment' 
                    placeholder='Deixe um comentario'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    required
                    onInvalid={handleNewCommentInvalid}
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentlist}>
               {comments.map(comment => {
                return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
               })}
            </div>
            
       </article>
    );
};