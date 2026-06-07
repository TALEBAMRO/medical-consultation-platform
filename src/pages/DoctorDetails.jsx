import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";
import Loading from "../components/Loading";
import doctors from "../data/doctors";
import {Link} from "react-router-dom";

function DoctorDetails() {
    const {id} = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const doctor = doctors.find(
    (d) => d.id === Number(id)
    );


    if(!doctor) {
        return (
            <div className="container py-5">
                <h2>Doctor Not Found</h2>
            </div>
        );
    }

    if (loading) {
        return <Loading />
    }


    return (
        <div className="container py-5">
            
            <button 
                className="btn btn-outline-secondary mb-4"
                onClick={() => navigate(-1)}
                >
                    ← Back
            </button>
            <div className="card shadow border-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="img-fluid h-100 w-100 object-fit-cover"
                        />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body p-4">
                            <h2>{doctor.name}</h2>

                            <h5 className="text-primary">
                                {doctor.specialty}
                            </h5>

                            <p className="mt-3">
                                ⭐ {doctor.rating}
                            </p>

                            <p>
                                💰 ${doctor.price}
                            </p>

                            <p>
                                🩺 Experience: {doctor.experience}
                            </p>

                            <hr />

                            <h5>About Doctor</h5>

                            <p>
                                {doctor.about}
                            </p>

                            <Link to={`/appointment/${doctor.id}`} className="btn btn-primary flex-fill">
                                Book Appointment
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorDetails;