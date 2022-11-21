import './Card.css';

const Card = (props) => {
    return (
        <div className="page__card">
            <div>
                <img src={props.img} alt={props.nome} />
            </div>
            <div>
                <h4>{props.nome}</h4>
                <h5>{props.classes} nv.{props.level}</h5>
                <em>{props.raca}</em>
            </div>
        </div>
    )
}

export default Card;