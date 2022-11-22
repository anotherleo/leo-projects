import './Card.css';

export default function Card(props) {
    return (
        <div className="col-md-4">
            <a className="main__card" href={props.anchor}>
                <img src={props.image} alt="Nix" />
                <h3>{props.name}</h3>
                <p>{props.subtitle}</p>
            </a>
        </div>
    )
}