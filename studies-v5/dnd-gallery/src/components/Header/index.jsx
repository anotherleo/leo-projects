import logo from './d20.png';
import { MagnifyingGlass } from "phosphor-react";
import './Header.css';

export default function Header() {
    return(
        <header className="page__header">
            <div className="container">
                <h1>
                    <img src={logo} alt="ícone" aria-hidden="true" />
                    D&D Gallery
                </h1>
                <div className="searchbar">
                    <input type="text" placeholder="O que você procura?" />
                    <MagnifyingGlass size={16} />
                </div>
            </div>
        </header>
    )
}