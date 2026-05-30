import { CircleCheck } from "lucide-react";
function HeroTodo(props){
    const {status,task,tag,className = ""} = props;
    return(
        <>
            <div className={`w-full flex justify-between items-center mx-auto rounded-md px-3 py-1 bg-(--bg-soft)`}>
                <div className="flex items-center gap-2">
                    {
                        status ? <CircleCheck className="bg-(--bg-glow) rounded-full size-5"/> : <div className="w-5 h-5 rounded-full border-2 border-(--bg-glow)"></div>

                    }
                    <p className={status ? "line-through text-(--text-muted)" : ""}>{task}</p>
                </div>
                <span className="rounded-2xl text-(--bg-glow) text-xs cursor-default">{tag}</span>
            </div>
        </>
    )
};
export default HeroTodo;
