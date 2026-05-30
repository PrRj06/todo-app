import { useTheme } from "../../context/ThemeContext";
import { Sun,Moon } from "lucide-react";

function ThemeToggle(){
    const {theme,setTheme} = useTheme();
    const toggleTheme = ()=>{
        setTheme(theme === "light" ? "dark" : "light");
    }
    return(
        <>
            <div className="w-fit flex items-center dark:text-yellow-300 text-gray-500">
                <button onClick={toggleTheme}>
                    {theme ===  "light" ? <Moon/> : <Sun/>}
                </button>
            </div>
        </>
    )
};

export default ThemeToggle;