import GlowButton from "./GlowButton";

function HiwFooter(){
    return(
        <div className="relative mt-16 min-h-96 w-full overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-[url(/how-it-works-background.jpg)] filter-(--hero-img-filter) bg-center bg-cover"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(149,117,205,.18)_0%,transparent_65%)]"></div>

            <div className="relative z-10 mx-auto flex min-h-96 w-full max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
                <h1 className="w-full max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-normal text-(--text) sm:text-6xl">
                    Ready to get<br/>
                    <em className="text-(--bg-glow)">things done?</em>
                </h1>
                <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-(--text-muted) sm:text-md">
                    Join thoushands of people who use Taska to stay on top of their work and life.
                </p>
                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                    <GlowButton text="Create free account"/>
                </div>
            </div>
        </div>
    )
};
export default HiwFooter;
