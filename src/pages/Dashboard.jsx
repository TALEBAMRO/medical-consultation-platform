import {Link} from "react-router-dom";
import doctors from "../data/doctors";
import {FaUserMd,FaCalendarCheck,FaClock,FaHeart,} from "react-icons/fa";

function Dashboard() {
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const upcomingAppointments = appointments.filter(
        (appointment) => new Date(appointment.date) >= new Date()
    );

    return (
        <div className="container py-5">
            <h2 className="mb-4">Welcome Back</h2>
            <p className="text-secondary">
                Manage your appointment and favorite doctors.
            </p>

            <div className="row g-4">

                <div className="col-md-3">
                    <div className="card text-center shadow-sm h-100">
                        <div className="card-body">
                            <FaUserMd size={35} className="mb-3 text-primary" />
                            <h5>Total Doctors</h5>
                            <h2>{doctors.length}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-center shadow-sm h-100">
                        <div className="card-body">
                            <FaCalendarCheck size={35} className="mb-3 text-success" />
                            <h5>Appointments</h5>
                            <h2>{appointments.length}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-center shadow-sm h-100">
                        <div className="card-body">
                            <FaClock size="35" className="mb-3 text-warning" />
                            <h5>Next Appointment</h5>
                            {appointments.length > 0 ?(
                                <>
                                    <p className="fw-bold mb-1">
                                        {appointments[0]?.doctorName}
                                    </p>

                                    <small>{appointments[0]?.specialty}</small>

                                    <p className="mt-2">
                                        {appointments[0]?.date}
                                    </p>
                                </>
                            ) : (
                                <p>No appointments</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-center shadow-sm h-100">
                        <div className="card-body">
                            <FaCalendarCheck size={35} className="mb-3 text-info" />
                            <h5>Upcoming</h5>
                            <h2>{upcomingAppointments.length}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center shadow-sm h-100">
                        <div className="card-body">
                            <FaHeart size={35} className="mb-3 text-danger" />
                            <h5>Favorites</h5>
                            <h2>{favorites.length}</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h4>Quick Actions</h4>

                <div className="d-flex gap-3 flex-wrap mt-3">
                    <Link to="/doctors" className="btn btn-primary">
                    Browse Doctors
                    </Link>

                    <Link to="/my-appointments" className="btn btn-success">
                    My Appointments
                    </Link>

                    <Link to="/favorites" className="btn btn-danger">
                    Favorites
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;