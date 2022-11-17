import './Banner.css';

function Banner() {
    return (
        <div className="page__banner">
            <div className="container">
                <img src="https://cdn-icons-png.flaticon.com/64/6688/6688575.png" alt="d20" 
                    className="animate__animated animate__tada"
                />
                <h1>
                    D&D Party Viewer
                </h1>
                <p className="subtitle">
                    Organize grupos de personagens para enfrentar os desafios!
                </p>
            </div>
        </div>
    )
}

export default Banner;