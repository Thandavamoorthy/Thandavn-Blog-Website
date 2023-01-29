import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <Link class="navbar-brand d-flex" to="/">
                        <img src={logo} alt="logo" width={50} heigh={50} />
                        <span className='ms-2 mt-2 fs-4 fw-bold text-white'>Thandavn Blog</span>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="/blog">Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar