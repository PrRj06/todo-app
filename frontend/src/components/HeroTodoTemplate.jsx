import HeroTodo from "./ui/HeroTodo";
function HeroTodoTemplate({ className = "" }){
    const data = [
        {status:true, task:"Design system audit",tag:"work"},
        {status:true, task:"Morning workout",tag:"health"},
        {status:false, task:"Review Q3 report slides",tag:"work"},
        {status:false, task:"Call Mom - Birthday",tag:"personal"},
    ]
    return(
        <>
        <div className={`mt-10 flex flex-col gap-2 min-w-xl rounded-md shadow-[0_0_10px_3px_var(--bg-glow)] bg-(#151e35) p-5 backdrop-blur-md`}>
            <div className="flex justify-between">
                <p className="font-bold text-sm">Today's Focus</p>
                <span className="text-xs text-(--text-mounted)">2 of 4 done</span>
            </div>
            <div className="flex flex-col gap-1">
                {
                    data.map(element => (
                        <HeroTodo key={element.task} className="mt-2" status={element.status} task={element.task} tag={element.tag} />
                    ))
                }
            </div>
        </div>
        </>
    )
};
export default HeroTodoTemplate;
