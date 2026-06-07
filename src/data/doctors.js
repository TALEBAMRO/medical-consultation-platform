import doctor1 from "../assets/images/doctor1.avif";
import doctor2 from "../assets/images/doctor2.webp";
import doctor3 from "../assets/images/doctor3.jpg";
import doctor4 from "../assets/images/doctor4.jpg";
import doctor5 from "../assets/images/doctor5.jpg";

const doctors = [
    {
        id: 1,
        name: "Dr. Ahmed Ali",
        specialty: "Cardiologist",
        rating: 4.9,
        price: 50,
        experience: "10 Years",
        about: "Specialized in diagnosing and treating heart diseases.",
        image: doctor1,
    },
    {
        id: 2,
        name: "Dr. Sarah Omar",
        specialty: "Dermatologist",
        rating: 4.8,
        price: 45,
        experience: "8 Years",
        about: "Expert in skin care and cosmetic dermatology.",
        image: doctor2,
    },
    {
        id: 3,
        name: "Dr. Mohammed Saleh",
        specialty: "Neurologist",
        rating: 4.7,
        price: 60,
        experience: "12 Years",
        about: "Experienced in treating neurological disorders.",
        image: doctor3,
    },
    {
        id: 4,
        name: "Dr. Khaled Nasser",
        specialty: "Orthopedic",
        rating: 4.6,
        price: 65,
        experience: "15 Years",
        about: "Specialist in bones and joint surgeries.",
        image: doctor4,
    },
    {
        id: 5,
        name: "Dr. Noor Ahmed",
        specialty: "Dentist",
        rating: 4.8,
        price: 40,
        experience: "7 Years",
        about: "Providing advanced dental care services.",
        image: doctor5,
    },
];

export default doctors;