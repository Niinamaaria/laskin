import styles from './header.module.scss';

function Header(props) {
    return (
        <div className={styles.header}>
            <div className={styles.header_main}>
                Myyntilaskuri
            </div>
            <div className={styles.header_secondary}>
                Arvio lisämyynnistä, kun tarjousten voittoprosenttia nostetaan.
            </div>
            
        </div>
    );
}

export default Header;