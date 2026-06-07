import "bootstrap-icons/font/bootstrap-icons.css";
import "./Loading.css";

function Loading() {
    return (
        <div className="loading-container">
        <i className="bi bi-heart-pulse-fill medical-loader"></i>

        <h1 className="text-primary fw-bold mt-3">
            MediCare
        </h1>

        <p className="text-muted">
            Loading...
        </p>
        </div>
    );
}

export default Loading;