import {useState} from "react";
import DoctorCard from "../components/DoctorCard.jsx";
import doctors from "../data/doctors";

function Doctors() {

    const [search,  setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const doctorsPerPage = 6;

            const filteredDoctors = doctors.filter(
                (doctor) =>
                    doctor.name.toLowerCase().includes(search.toLowerCase()) ||
                    doctor.specialty.toLowerCase().includes(search.toLowerCase())
            );

            const indexOfLastDoctor = currentPage * doctorsPerPage;
            const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;

            const currentDoctors = filteredDoctors.slice(
                indexOfFirstDoctor, indexOfLastDoctor 
            );

            const totalPages = Math.ceil(
                filteredDoctors.length / doctorsPerPage 
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
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />

                            </div>
                        </div>
                        </div>

                    <div className="row">
                        {currentDoctors.map((doctor) => (
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

                    {totalPages > 1 && (
                        <div className="d-flex justify-content-center mt-5">
                            <nav>
                                <ul className="pagination">
                                    <li 
                                        className={`page-item ${
                                            currentPage === 1 ? "disabled" : ""
                                        }`}
                                    >
                                        <button 
                                        className="page-link" 
                                        onClick={() => 
                                            currentPage > 1 && setCurrentPage(currentPage - 1)
                                        }
                                        >
                                            Previous
                                        </button>
                                    </li>
                                    {[...Array(totalPages)].map((_, index) => (
                                        <li key={index + 1}
                                        className={`page-item ${
                                            currentPage === index + 1 ? "active" : "" }`}>
                                                <button className="page-link" onClick={() => setCurrentPage(index+1)}>
                                                    {index + 1}
                                                </button>
                                            </li>
                                    ))}

                                    <li className={`page-item ${ currentPage === totalPages ? "disabled" : ""}`}>
                                        <button 
                                            className="page-link" 
                                            onClick={() => 
                                                currentPage < totalPages && setCurrentPage(currentPage + 1)
                                            }>
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
            )}
            </div>
        );
    }

export default Doctors;