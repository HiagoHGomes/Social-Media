import styles from './Avatar.module.css';

interface AvatarProps {
    hasBorder?: boolean;
    src: string;
    alt?: string;
}

export function Avatar(props:AvatarProps){
    const hasBorder = props.hasBorder != false;
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={props.src}/>
    )
};