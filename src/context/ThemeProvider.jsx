import {useState, useEffect} from "react";
import ThemeContext from "./ThemeContext";
export function ThemeProvider({children}) {
    const [darkMode,  setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        document.body.style.transition = "all 0.4s ease-in-out";
        
        if(darkMode) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </ThemeContext.Provider>
    );
}


export default ThemeProvider;