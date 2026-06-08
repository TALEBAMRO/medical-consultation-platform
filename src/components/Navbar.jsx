import { Link } from "react-router-dom";
import {useContext} from "react";
import ThemeContext from "../context/ThemeContext";

function Navbar() {

    const {darkMode, setDarkMode} = useContext(ThemeContext);

    return (
    <nav className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-white"
    } `}>
        <div className="container">

        <Link className="navbar-brand fw-bold text-primary fs-3" to="/">
            MediCare
        </Link>

        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div
            className="collapse navbar-collapse"
            id="navbarNav"
        >
            <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
                <Link
                className="nav-link fw-semibold"
                to="/"
                >
                Home
                </Link>
            </li>

            <li className="nav-item">
                <Link
                className="nav-link fw-semibold"
                to="/doctors"
                >
                Doctors
                </Link>
            </li>

            <li className="nav-item ms-2">
                <button 
                    className="btn btn-outline-secondary"
                    onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? (
                            <>
                            ☀️
                            </>
                        ) : (
                            <>
                            🌙
                            </>
                        )}
                    </button>
            </li>

            <li className="nav-item">
                <Link 
                className="nav-link fw-semibold"
                to="/my-appointments"
                >
                    My Appointments
                </Link>
            </li>

            <li className="nav-item ms-2">
                <Link
                className="btn btn-outline-primary"
                to="/login"
                >
                Login
                </Link>
            </li>

            <li className="nav-item ms-2">
                <Link
                className="btn btn-primary"
                to="/register"
                >
                Register
                </Link>
            </li>

            </ul>
        </div>

        </div>
    </nav>
    );
}

export default Navbar;