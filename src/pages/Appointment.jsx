import {useState} from "react";
import {useParams} from "react-router-dom";
import doctors from "../data/doctors";

function Appointment () {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        notes: "",
    });

    const [success, setSuccess] = useState(false);

    const {id} = useParams();

    const doctor = doctors.find(
        (d) => d.id === Number(id)
    );

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
    };

    return (
        <div className="container py-5">
            
            <h1 className="text-center mb-4">
                Book Appointment
            </h1>

            <h4 className="text-center text-primary mb-4">
                {doctor?.name}
            </h4>

            <p className="text-center text-muted">
                {doctor?.specialty}
            </p>

            <img 
                src={doctor?.image}
                alt={doctor?.name}
                className="rounded-circle d-block mx-auto mb-3"
                style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover"
                }}
                />

            {success ? (
                <div className="card shadow border-0 text-center p-5">
                    <h2 className="text-success mb-4">
                        ✅ Appointment Confirmed
                    </h2>

                    <div className="mb-3">
                        <h4>{doctor?.name}</h4>
                        <p className="text-muted">
                            {doctor?.specialty}
                        </p>
                    </div>
                    <hr />

                    <p>
                        <strong>patient:</strong>{formData.name}
                    </p>

                    <p>
                        <strong>Email:</strong>{formData.email}
                    </p>

                    <p>
                        <strong>Phone:</strong>{formData.phone}
                    </p>

                    <p>
                        <strong>Date:</strong>{formData.date}
                    </p>

                    <p>
                        <strong>Time:</strong>{formData.time}
                    </p>

                    {formData.notes && (
                        <p>
                            <strong>Notes:</strong>{formData.notes}
                        </p>
                    )}
                </div>
            ) :(
                <form className="card shadow p-4" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">
                            Full Name
                        </label>

                        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Email
                        </label>

                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Phone Number
                        </label>

                        <input type="phone" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Appointment Date
                        </label>

                        <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Preferred Time
                        </label>

                        <input type="time" className="form-control" name="time" value={formData.time} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Notes
                        </label>

                        <textarea className="form-control" rows="4" name="notes" value={formData.notes} onChange={handleChange} />
                    </div>

                    <button className="btn btn-primary btn-lg" type="submit">
                        Confirm Appointment
                    </button>
                </form>
            )}
        </div>
    );
}

export default Appointment;