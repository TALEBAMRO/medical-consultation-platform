import {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import Loading from "./Loading";

function PageLoader({children}) {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setLoading(true);
        }, 0);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => {
            clearTimeout(startTimeout);
            clearTimeout(timer);
        };
    }, [location.pathname]);

    return loading ? <Loading /> : children;
}

export default PageLoader;