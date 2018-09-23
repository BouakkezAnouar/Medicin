import React from "react";
function NavBar() {

    return (
        <div id="NavBar">
            <nav className="navbar navbar-light navbar-expand-md" >
                <div className="container-fluid">
                    <a href="#" className="navbar-brand" id="siteName">
                        Dr. Taieb ETTOUNSI
            </a>
                    <button
                        data-toggle="collapse"
                        data-target="#navcol-1"
                        className="navbar-toggler"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <a href="#" className="nav-link active">
                                    <strong>Acceill</strong>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <strong>Espace Patient</strong>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <strong>Espace Docteur</strong>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <strong>Conseils Drs</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default NavBar;
