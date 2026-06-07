import {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import Loading from "./Loading";

function PageLoader({children}) {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // defer setting loading to avoid synchronous setState inside effect
        const startTimer = setTimeout(() => setLoading(true), 0);

        const endTimer = setTimeout(() => {
            setLoading(false);
        }, 700);

        return () => {
            clearTimeout(startTimer);
            clearTimeout(endTimer);
        };
    }, [location]);

    if (loading) {
        return <Loading />;
    }

    return children;
}

export default PageLoader;