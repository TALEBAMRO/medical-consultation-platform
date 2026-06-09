import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem("user", "true");
        toast.success("Login Successful");

        navigate("/dashboard");
    };

    return (
    <div className="container py-5">
        <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card custom-card">
            <div className="card-body p-5">
                <h2 className="text-center page-title mb-4">
                Welcome Back
                </h2>

                <p className="text-center text-muted mb-4">
                Sign in to access your medical consultations
                </p>

                <form onSubmit={handleLogin}>
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

                <div className="mb-4">
                    <label className="form-label">
                    Password
                    </label>

                    <input
                    type="password"
                    className="form-control"
                    placeholder="********"
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary custom-btn w-100"
                >
                    Login
                </button>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
    );
}

export default Login;