import "./Navbar.css";

function Navbar (props){

    return(
        <nav className="navbar navbar-expand-lg d-flex justify-content-center navPpal">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">{props.nombre1}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="nosotros">{props.nombre2}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="peluqueria">{props.nombre3}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="contactos">{props.nombre3}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{props.nombre4}</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )


}

export default Navbar;