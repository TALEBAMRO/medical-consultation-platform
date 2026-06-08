import {Link} from "react-router-dom";
import {useState} from "react";

function DoctorCard({doctor}) {

    const [favorite, setFavorite] = useState(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        return favorites.some(
            (fav) => fav.id === doctor.id
        );
    });

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if(favorite) {
            const updatedFavorites = favorites.filter(
                (fav) => fav.id !== doctor.id
            );

            localStorage.setItem(
                "favorites",
                JSON.stringify(updatedFavorites)
        );
        } else {
            favorites.push(doctor);

            localStorage.setItem(
                "favorites",JSON.stringify(favorites)
            );
        }

        setFavorite(!favorite);
    }
    return (
        <div className="col-md-4 mb-4">
            <div className="card custom-card h-100">
                
                <img 
                    src={doctor.image}
                    alt={doctor.name}
                    className="card-img-top"
                    style={{
                        height: "280px",
                        objectFit: "cover"
                    }}
                    />

                    <div className="text-end">
                        <button className="btn border-0 fs-4"
                        onClick={toggleFavorite}>
                            {favorite ? "❤️" : "🤍"}
                        </button>
                    </div>

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
                        <Link to={`/appointment/${doctor.id}`} className="btn btn-primary w-100 mt-3">
                            Book Appointment
                            </Link>

                        <Link 
                            to={`/doctors/${doctor.id}`}
                            className="btn btn-outline-primary  w-100 mt-3"
                            >
                                View Profile
                            </Link>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default DoctorCard;