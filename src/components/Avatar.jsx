
import styles from './Avatar.module.css'
import eu from '../../src/assets/eu.jpeg'
export function Avatar(props) {

    return (
        <img 
            className={props.hasBorder ? styles.AvatarWithBorder : styles.Avatar} 
            src={props.src}  />
    )

}