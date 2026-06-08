import {Link} from "react-router-dom";
import {useState} from "react";
import {toast} from "react-toastify";

function Favorites() {
    const [favorites, setFavorites] = useState( 
    JSON.parse(localStorage.getItem("favorites")) || []
    );

    const removeFavorite = (doctorId) => {
        const updatedFavorites = favorites.filter(
            (doctor) => doctor.id !== doctorId
        );

        localStorage.setItem(
            "favorites", JSON.stringify(updatedFavorites)
        );

        setFavorites(updatedFavorites);

        toast.success("Doctor removed from favorites");
    };

    return (
        <div className="container py-5">
            <h1 className="text-center mb-5">
                Favorite Doctors
            </h1>

            {favorites.length === 0 ? (
                <div className="alert alert-info text-center">
                    No favorite doctors yet 
                </div>
            ) : (
                <div className="row">
                    {favorites.map((doctor) => (
                        <div key={doctor.id} className="col-md-4 mb-4">
                            <div className="card h-100 shadow">
                                <img 
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="card-img-top"
                                    style={{
                                        height: "250px",
                                        objectFit: "cover",
                                    }}
                                    />

                                    <div className="card-body">
                                        <h4>{doctor.name}</h4>

                                        <p className="text-primary fw-bold">
                                            {doctor.specialty}
                                        </p>

                                        <p>
                                            ⭐ {doctor.rating}
                                        </p>

                                        <p className="fw-bold">
                                            ${doctor.price}
                                        </p>

                                        <div className="d-flex gap-2 mt-3">
                                            <Link  
                                                to={`/appointment/${doctor.id}`}
                                                className="btn btn-primary w-100">
                                                    Book Appointment 
                                            </Link>

                                            <Link  
                                                to={`/doctors/${doctor.id}`}
                                                className="btn btn-outline-primary w-100">
                                                    View Profile 
                                            </Link>

                                            <button 
                                                className="btn btn-danger w-100 mt-2"
                                                onClick={() => removeFavorite(doctor.id)}
                                            >
                                                Remove ❤️
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorites;