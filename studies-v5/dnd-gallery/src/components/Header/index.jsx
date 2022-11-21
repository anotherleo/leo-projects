import logo from './d20.png';
import { MagnifyingGlass } from "phosphor-react";
import style from './Header.module.scss';

export default function Header() {
    return(
        <header className={style.header}>
            <div className="container">
                <h1>
                    <img src={logo} alt="ícone" aria-hidden="true" />
                    D&D Gallery
                </h1>
                <div>
                    <input type="text" placeholder="O que você procura?" />
                    <MagnifyingGlass size={32} aria-hidden="true" />
                </div>
            </div>
        </header>
    )
}