function SignInLeft(){
    return(
        <>
            <div className="relative min-h-screen w-full">
                <div className="absolute inset-0 w-full h-full bg-[url(/hero-background.jpg)] filter-(--hero-img-filter) bg-center bg-cover" ></div>

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(149,117,205,.18)_0%,transparent_65%)]"></div>

                <div className="relative z-10 flex min-h-screen w-full flex-col justify-end px-6 py-6 gap-3">
                    <p className="text-(--text) text-3xl italic font-(family-name:--font-display)">"The Secret of getting ahead is getting started."</p>
                    <p className="text-(--text-muted) text-sm">-MARK TAWIN</p>
                </div>
            </div>
        </>
    )
};
export default SignInLeft;