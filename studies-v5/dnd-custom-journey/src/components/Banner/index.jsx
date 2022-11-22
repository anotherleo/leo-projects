import './Banner.css';

export default function Banner(props) {
    return(
        <section className="page__banner">
            <div className="container">
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
            </div>
        </section>
    )
}