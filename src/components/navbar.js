import { Link } from 'react-router-dom'


let Navbar =  props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to='/'>Foxes90</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/shop">Shop</Link>
                    </li>
                    <li className="nav-item disabled">
                        <Link className="nav-link" to="">IDK</Link>
                    </li>
                </ul>
                
            </div>
        </nav>
    );
}

export default Navbar;