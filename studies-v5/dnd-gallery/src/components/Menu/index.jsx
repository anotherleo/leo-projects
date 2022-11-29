import React from 'react';
import { Balloon, Eye, House, Sparkle, ThumbsUp } from "phosphor-react";
import './Menu.css';

export default function Menu() {
  return (
    <nav className="page__menu">
        <ul>
            <li>
                <House size={16} />
                <a href="/">Início</a>
            </li>
            <li>
                <ThumbsUp size={16} />
                <a href="/">Mais curtidas</a>
            </li>
            <li>
                <Eye size={16} />
                <a href="/">Mais vistas</a>
            </li>
            <li>
                <Balloon size={16} />
                <a href="/">Novas</a>
            </li>
            <li>
                <Sparkle size={16} />
                <a href="/">Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}
