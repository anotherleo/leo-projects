import './Aside.css';
import cover from './cover.jpg';

export default function Aside() {
    return(
        <aside className="offset-md-1 col-md-4">
            <img src={cover} alt="cover" className="img-fluid aside__cover" />
        </aside>
    )
}