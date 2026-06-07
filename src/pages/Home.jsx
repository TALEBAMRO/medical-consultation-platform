import home from "../assets/images/home.avif";

function Home() {
    return (
        <>
        <section className="container py-5">
            <div className="row align-items-center">

                <div className="col-lg-6">
                    <h1 className="display-4 fw-bold mb-3">
                        Your Health,
                        <span className="text-primary">Our Priority</span>
                    </h1>

                    <p className="lead text-muted mb-4">
                        Connect with experienced doctors, book appointments,
                        and receive professional medical consultations online.
                    </p>

                    <button className="btn btn-primary btn-lg me-3">
                        Find Doctors
                    </button>

                    <button className="btn btn-primary btn-lg me-3">
                        Learn More
                    </button>
                </div>

                <div className="col-lg-6 text-center">
                    <img
                        src={home}
                        alt="Medical Consultation"
                        className="img-fluid rounded shadow"
                    />    
                </div>
            </div>
        </section>

        <section className="container py-5">
            <h2 className="text-center page-title mb-5">
                Our Services
            </h2>

            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card custom-card h-100">
                        <div className="card-body text-center">
                            <h4>Online Consultation</h4>
                            <p className="text-muted">
                                Consult doctors remotely from anywhere
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card custom-card h-100">
                        <div className="card-body text-center">
                            <h4>Appointment Booking</h4>

                            <p className="text-muted">
                                Schedule appointments quickly and easily.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card custom-card h-100">
                        <div className="card-body text-center">
                            <h4>Medical Records</h4>

                            <p className="text-muted">
                                Access your medical information securely.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Home;