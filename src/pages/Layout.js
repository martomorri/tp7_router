import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                <div className="container-fluid">
                    {/* <Link to="/"></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='btn btn-light' to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='btn btn-light' to="/productos">Productos</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="btn btn-light dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </button>
                                <ul className="dropdown-menu">

                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className='btn btn-light' to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}