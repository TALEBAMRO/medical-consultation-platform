function Register() {
    return (
    <div className="container py-5">
        <div className="row justify-content-center">
        <div className="col-md-7">
            <div className="card custom-card">
            <div className="card-body p-5">
                <h2 className="text-center page-title mb-4">
                Create Your Account
                </h2>

                <p className="text-center text-muted mb-4">
                Join our medical consultation platform today
                </p>

                <form>
                <div className="mb-3">
                    <label className="form-label">
                    Full Name
                    </label>

                    <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                    Email Address
                    </label>

                    <input
                    type="email"
                    className="form-control"
                    placeholder="example@email.com"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                    Password
                    </label>

                    <input
                    type="password"
                    className="form-control"
                    placeholder="********"
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label">
                    Confirm Password
                    </label>

                    <input
                    type="password"
                    className="form-control"
                    placeholder="********"
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-success custom-btn w-100"
                >
                    Create Account
                </button>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
    );
}

export default Register;