import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-md">
                <a className="navbar-brand" href="/#">APP - NOTES</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Notas
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            <li><Link className="dropdown-item" to="/ver-notas">Ver Notas</Link></li>
                            <li><Link className="dropdown-item" to="/modificar-nota">Modificar Nota</Link></li>
                        </ul>
                        </li>
                    <Link className="nav-link" to="/login">Login</Link>
                    
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default navbar