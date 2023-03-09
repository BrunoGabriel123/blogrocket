import styles from './Sidebar.module.css'
import { Avatar } from './Avatar';
import {PencilLine } from 'phosphor-react'
import eu from '../../src/assets/eu.jpeg'
export function Sidebar() {
    return (
        <aside className={styles.Sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" />
        
            <div className={styles.profile}>
                <Avatar src={eu}/>
                <strong>Bruno Gabriel</strong>
                <span>Web Developer</span>

            </div>


            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        
        </aside>
    );
}