import { Link } from "react-router-dom";
import GlowButton from "./ui/GlowButton";
import ThemeToggle from "./ui/ThemeToggle";
function HeroNav(){
    return(
        <>
        <div className="fixed top-0 z-50 w-full flex justify-between items-center border-b border-(--border) bg-[linear-gradient(180deg,var(--bg-soft),var(--bg))] px-6 py-2 text-(--text)">
            <div>TASKA</div>
            <div className="flex items-center gap-6">
                <div><a href="/#features">FEATURES</a></div>
                <div><a href="/#hiw">HOW IT WORKS</a></div>
                <div><Link to="/signin">SIGN IN</Link></div>
                <GlowButton text="GET STARTED FREE" to="/signup"/>
            </div>
            <ThemeToggle/>
        </div>
        </>
    )
};
export default HeroNav;
