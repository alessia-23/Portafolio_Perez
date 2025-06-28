function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#">Alessia</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href={"/"}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"/#Portafolio"}>Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"/#about"}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"/#expert"}>Expert</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"/#testimonials"}>Testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"/#contact"}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
