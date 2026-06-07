import {useState} from "react";
import DoctorCard from "../components/DoctorCard.jsx";
import doctors from "../data/doctors";

function Doctors() {

    const [search,  setSearch] = useState("");

            const filteredDoctors = doctors.filter(
                (doctor) =>
                    doctor.name.toLowerCase().includes(search.toLowerCase()) ||
                    doctor.specialty.toLowerCase().includes(search.toLowerCase())
            );

            return (
                <div className="container py-5">
                    
                    <h1 className="page-title text-center mb-5">
                        Our Doctors
                    </h1>

                    <div className="row justify-content-center mb-5">
                        <div className="col-md-6">
                            <div className="input-group shadow-sm">

                            <span className="input-group-text bg-white">
                                🔍
                            </span>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by doctor name or specialty..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            </div>
                        </div>
                        </div>

                    <div className="row">
                        {filteredDoctors.map((doctor) => (
                            <DoctorCard
                            key={doctor.id}
                            doctor={doctor}
                            />
                            
                        ))}
                        {filteredDoctors.length === 0 && (
                            <div className="text-center">
                                <h4>No doctors found</h4>
                            </div>
                        )}
                    </div>
                </div>
            );
}

export default Doctors;