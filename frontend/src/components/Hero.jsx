import GlowButton from "./ui/GlowButton";
function Hero(){
    return(
        <>
            <div className="relative min-h-screen w-full">
                <div className="absolute inset-0 w-full h-full bg-[url(/hero-background.jpg)] filter-(--hero-img-filter) bg-center bg-cover" ></div>

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(149,117,205,.18)_0%,transparent_65%)]"></div>

                <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-6 pt-20 text-center">
                    <h1 className="text-balance text-[.72rem] font-bold leading-[1.05] tracking-normal text-(--text) sm:text-6xl lg:text-7xl">
                        Organize your<br/>
                        <em className="text-(--bg-glow)">life's work</em><br/>
                        beautifully
                    </h1>
                    <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-(--text-muted) sm:text-lg">
                        A thoughtfully crafted todo app that turns overwhelming lists into calm, focused progress. Your tasks, your way.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                        <GlowButton text="Start for free"/>
                        <a className="rounded-md border border-(--border-h) bg-[rgba(255,255,255,0.08)] px-5 py-2 text-sm font-semibold text-(--text) shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-(--bg-glow) hover:bg-[rgba(127,30,212,0.12)] hover:text-(--bg-glow) focus:outline-none focus:ring-2 focus:ring-(--bg-glow) focus:ring-offset-2 focus:ring-offset-transparent" href="/login">Sign in</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero;
