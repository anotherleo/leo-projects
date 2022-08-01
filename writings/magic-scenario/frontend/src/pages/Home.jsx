import React from 'react'
import data from "../data/data";
import './Home.css';

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Lista de Personagens</h2>
        </div>
      </div>
      <div className="row pt-5">
        {
          data.characters.map(character => (
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="character__card p-2">
                <img src={character.image} alt={character.name} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
