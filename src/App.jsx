import {BrowserRouter, Routes, Route} from "react-router-dom";
import PageLoader from "./components/PageLoader";
import DoctorDetails from "./pages/DoctorDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import NotFound from "./pages/NotFound";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyAppointments from "./pages/MyAppointments";
import Favorites from "./pages/Favorites";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import "./App.css";

function App() {
    return ( 
        <BrowserRouter>
        <div className="watermark"></div>
            <Navbar />
            <main className="flex-grow-1">
                <PageLoader>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/doctors" element={<Doctors />} />
                    <Route path="/doctors/:id" element={<DoctorDetails/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/appointment/:id" element={<ProtectedRoute> <Appointment/> </ProtectedRoute>} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/my-appointments" element={<ProtectedRoute> <MyAppointments /> </ProtectedRoute>} />
                    <Route path="/favorites" element={<ProtectedRoute> <Favorites /> </ProtectedRoute>} />
                    <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
                </Routes>
                </PageLoader>
            </main>
            <Footer />
            <ToastContainer 
                    position="top-right"
                    autoClose={300}
                    theme="colored"
                    />
        </BrowserRouter>
    );
}

export default App;