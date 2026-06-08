import FeatureGrid from "./FeatureGrid";
function Feature(){
    return(
        <>  
            <section id="features" className="flex flex-col justify-center min-h-screen w-full max-w-5xl m-auto">
                <div className="my-20">
                    <span className="text-(--bg-glow) font-bold text-sm">WHY TASKA</span>
                    <div className="w-full max-w-3xl text-balance text-3xl font-bold font-(family-name:--font-display) leading-[1.05] tracking-normal text-(--text) sm:text-5xl">
                        <p className="">Everything you need,</p>
                        <em className="text-(--bg-glow) text-5xl">nothing you don't</em>
                    </div>
                </div>
                <FeatureGrid/>
            </section>
        </>
    )
};
export default Feature;