import Step from "./ui/StepUI";
import HiwFooter from "./ui/HiwFooter";
const steps = [
  {
    step: 1,
    title: "Create your account",
    desc: "Sign up free in seconds. No credit card, no fuss. Just your name and email.",
  },
  {
    step: 2,
    title: "Add your tasks",
    desc: "Capture everything on your mind. Organize into projects, set priorities and due dates.",
  },
  {
    step: 3,
    title: "Focus & accomplish",
    desc: "Use Today view to focus on what matters. Check off tasks and watch your progress grow.",
  },
];
function HowItWork(){
    return(
        <>
            <section id="hiw" className="w-full min-h-screen px-10 flex flex-col justify-center pb-5">
                <div className="w-full max-w-5xl m-auto">
                    <div className="my-20">
                        <span className="text-(--bg-glow) font-bold text-sm">GET STARTED</span>
                        <div className="w-full max-w-3xl text-balance text-3xl font-bold leading-[1.05] tracking-normal text-(--text) sm:text-5xl">
                            <p className="">Up and running</p>
                            <p className="text-(--bg-glow) text-5xl">in minutes</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-between">
                        {
                            steps.map((step)=>(
                                <Step key={step.step} step = {step.step} title = {step.title} desc = {step.desc}/>
                            ))
                        }
                    </div>
                </div>
                <HiwFooter/>
            </section>
        </>
    )
};
export default HowItWork;