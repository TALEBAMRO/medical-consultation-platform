import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            toast.error("PLease fill in all fields");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        const userData ={
            name,
            email,
            password,
        };

        localStorage.setItem("registeredUser", JSON.stringify(userData));
        localStorage.setItem("user", "true");

        toast.success("Account created successfully!");
        navigate("/dashboard");
    }

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

                <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label className="form-label">
                    Full Name
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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