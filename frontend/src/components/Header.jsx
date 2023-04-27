import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export function Header(){
    return (
        <div className={styles.header}>
            <header>
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/register">Cadastrar</Link></li>
                </ul>
            </header>
        </div>
    );
};