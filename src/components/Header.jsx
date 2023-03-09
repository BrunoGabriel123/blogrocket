import styles from'./Header.module.css'
import igniteLogo from '../assets/Ignite-logo.svg'



export function Header() {
    return (
        <header className={styles.Header}>
            <img src={igniteLogo} alt="LogoTipo do Ignite" />
        </header>
    );
}