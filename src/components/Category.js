import { Link } from "wouter";
import "Styles/Category.scss";

export default function Category({ name, options = [] }) {
    return (
        <div className="Category">
            <h3 className="Category-title">{name}</h3>
            <ul className="Category-list">
                {options.map((singleOption) => (
                    <li key={singleOption.name}>
                        <Link
                            className="Category-link"
                            to={`/search/${singleOption.name}`}
                        >
                            {singleOption.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
