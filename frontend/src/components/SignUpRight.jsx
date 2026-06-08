import SignUpRightFeatures from "./ui/SignUpRightFeatures";
function SignUpRight(){
    return(
        <>
            <div className="relative min-h-screen w-full">
                <div className="absolute inset-0 w-full h-full bg-[url(/hero-background.jpg)] filter-(--hero-img-filter) bg-center bg-cover" ></div>

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(149,117,205,.18)_0%,transparent_65%)]"></div>

                <div className="relative z-10 flex min-h-screen w-full flex-col justify-center px-10 py-6 gap-3">
                     <div className="max-w-3xl text-balance text-3xl font-semibold font-(family-name:--font-display) leading-[1.05] tracking-normal text-(--text) sm:text-5xl">
                        <p className="my-1.5">
                            Your most <br />
                             <em className="text-(--bg-glow)">productive </em><br />
                            self starts here
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <SignUpRightFeatures icon={"✓"} title={"Free forever plan"} desc={"Unlimited tasks, projects, and tags -always free."}/>
                        <SignUpRightFeatures icon={"🔒"} title={"Fully private"} desc={"Your tasks are yours. No selling, no ads, no tracking."}/>
                        <SignUpRightFeatures icon={"⚡"} title={"Instant setup"} desc={"Ready in under 60 seconds."}/>
                    </div>
                </div>
            </div>
        </>
    )
};
export default SignUpRight;