import { useState } from "react";
import { useDate } from "../../context/DashboardContext";
import CalendarWidget from "./CalendarWidget";
function DateLabel(){
    const [open, setOpen] = useState(true);
    const { date, setDate } = useDate();
    return(
        <>
            <div className="flex flex-col md:max-w-3xl mx-auto gap-2 ">
                <div className="flex justify-between items-center w-full  p-2">
                    <div className="">
                        <div className="text-4xl font-bold">
                            <span>
                                {(date.toLocaleDateString() === new Date().toLocaleDateString()) && <span>Today, </span>}
                                {date.toLocaleDateString('en-us',{month:'short',day:'numeric'})}<br/>
                            </span>
                        </div>
                        <span className="text-sm">3 tasks left</span>
                    </div>
                    <button 
                        onClick={() => setOpen(prev => (!prev))}
                        className={["cursor-pointer border border-orange-400 p-2 rounded-2xl", open ? "bg-orange-500/20" : ""].join(" ")}
                    >
                        Calendar
                    </button>
                </div>
                {open && <CalendarWidget/>}
            </div>
        </>
    )
}
export default DateLabel;

