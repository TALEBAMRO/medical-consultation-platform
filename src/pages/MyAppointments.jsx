import {useState} from "react";
import {toast} from "react-toastify";

function MyAppointments() {
    const [appointments, setAppointments] = useState (
        JSON.parse(localStorage.getItem("appointments")) || [] 
    );

    const deleteAppointment = (indexToDelete) => {
        const updatedAppointments = 
        appointments.filter(
            (_,index) => index !== indexToDelete  
        );

        localStorage.setItem(
            "appointments",
            JSON.stringify(updatedAppointments)
        );
        setAppointments(updatedAppointments);

        toast.success("Appointment deleted");
    };

    return (
        <div className="container py-5">
            <h1 className="text-center mb-5">
                My Appointments
            </h1>

            {appointments.length === 0 ? (
                <div className="alert alert-info text-center">
                    No appointments found
                </div>
            ) : (
                <div className="row">
                    {appointments.map((appointment, index) => (
                        <div key={index} className="col-md-6 mb-4">
                            <div className="card shadow h-100">
                                <div className="card-body">
                                    <h4 className="text-primary">
                                        {appointment.doctorName}
                                    </h4>

                                    <p className="text-muted">
                                        {appointment.doctorSpecialty}
                                    </p>

                                    <hr />

                                    <p>
                                        <strong>Patient:</strong>{" "}
                                        {appointment.name}
                                    </p>
                                    <p>
                                        <strong>Email:</strong>{" "}
                                        {appointment.email}
                                    </p>
                                    <p>
                                        <strong>Phone:</strong>{" "}
                                        {appointment.phone}
                                    </p>
                                    <p>
                                        <strong>Date:</strong>{" "}
                                        {appointment.date}
                                    </p>
                                    <p>
                                        <strong>Time:</strong>{" "}
                                        {appointment.time}
                                    </p>
                                    <p>
                                        <strong>Type:</strong>{" "}
                                        {appointment.type === "Online"
                                            ? "🎥 Online Consultation"
                                            : "🏥 In-Person Visit"}
                                    </p>

                                    {appointment.notes && (
                                        <p>
                                        <strong>Notes:</strong>{" "}
                                        {appointment.notes}
                                    </p>
                                    )}

                                    {appointment.type === "Online" ? (
                                        <a 
                                            href={appointment.meetingLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-success btn-sm mt-3 me-2">
                                                🎥 Join Consultation
                                            </a>
                                    ) : (
                                        <button className="btn btn-outline-primary btn-sm mt-3 me-2" disabled>
                                            In-Person Visit
                                        </button>
                                    )}

                                    <button className="btn btn-danger btn-sm mt-3"
                                    onClick={() => deleteAppointment(index)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MyAppointments;