import GlowButton from "./ui/GlowButton";
import ThemeToggle from "./ui/ThemeToggle";
function HeroNav(){
    return(
        <>
        <div className="w-screen flex justify-between items-center dark:text-white px-6 py-2">
            <div>TASKA</div>
            <div className="flex items-center gap-6">
                <div><a href="/#features">FEATURES</a></div>
                <div><a href="/#hiw">HOW IT WORKS</a></div>
                <div><a href="/#signin">SIGN IN</a></div>
                <GlowButton text="GET STARTED FREE"/>
            </div>
            <ThemeToggle/>
        </div>
        </>
    )
};
export default HeroNav;