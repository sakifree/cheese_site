import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/">
                <span>Cheeses</span>
            </Link>
            <Link to="create">
                <span>New Cheese</span>
            </Link>
        </div>
    )
}

export default Nav