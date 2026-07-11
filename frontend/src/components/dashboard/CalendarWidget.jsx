import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, FingerprintIcon } from "lucide-react";
import { useDate } from "../../context/DashboardContext";
import DateCell from "./ui/DateCell";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Format a Date as YYYY-MM-DD so comparisons stay stable across timezones.
function toISODate(d){
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2,"0")}`
}

// Return a new Date shifted by n days without mutating the original date.
function addDays(d,n){
    const c = new Date(d);
    c.setDate(c.getDate() + n);
    return c;
}

function CalendarWidget(){
    // Read and update the currently selected dashboard date.
    const {date, setDate} = useDate();
    const selectedStr = toISODate(date);

    // Capture today's date once so the "Today" button and highlight stay consistent.
    const today = useMemo(() => new Date(), []);
    const todayStr = toISODate(today);
    
    // Track which month is currently shown in the calendar grid.
    const [monthCursor, setMonthCursor] = useState(new Date(date.getFullYear(), date.getMonth(), 1));
    const monthLabel = monthCursor.toLocaleDateString("en-us",{month:"long",year:"numeric"});
    
    // Build the 6-week grid, including the leading and trailing days needed to fill the view.
    const cells = useMemo(()=>{
        const year = monthCursor.getFullYear();
        const month = monthCursor.getMonth();
        const firstOfMonth = new Date(year,month,1);
        const startOffset = firstOfMonth.getDay();
        const gridStart = addDays(firstOfMonth, -startOffset);
        return Array.from({length: 42},(_,i)=>{
            const cellDate = addDays(gridStart,i);
            return {
                cellDate,
                iso: toISODate(cellDate),
                inMonth: cellDate.getMonth() === month,
            };
        });
    },[monthCursor]);

    // Move the visible month backward or forward by one step.
    function goToMonth(offset){
        setMonthCursor((prev) => new Date(prev.getFullYear(), prev.getMonth() + offset, 1));
    }

    // Jump back to the current month and select today's date.
    function goToTodayMonth(){
        setMonthCursor(new Date(today.getFullYear(), today.getMonth(), 1));
        setDate(today);
    }
    
    // Update the shared selected date when a day is clicked.
    function selectDay(cellDate){
        setDate(cellDate);
    }
    
    return(
        <>
            <div className="w-full bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-3xl shadow-2xl flex flex-col px-3 py-3 gap-1  ">

                {/* Month navigation */}
                <div className="flex items-center justify-between py-1.5 ">
                    <div className="font-semibold text-white text-lg tracking-tight">
                        {monthLabel}
                    </div>
                    <div className="flex items-center gap-1.5">
                        <button
                            onClick={() => goToMonth(-1)}
                            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                        >
                            <ChevronLeft size={15}/>
                        </button>
                        <button
                            onClick={goToTodayMonth}  
                              className="px-2.5 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white text-xs font-mono transition-colors cursor-pointer"
                        >
                            Today
                        </button>
                        <button
                            onClick={() => goToMonth(1)}
                            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                        >
                            <ChevronRight size={15}/>
                        </button>
                    </div>
                </div>

                {/* weekday header */}
                <div className="grid grid-cols-7 gap-1.5 py-1 ">
                    {WEEKDAYS.map((w) => (
                        <span key={w} className="text-center text-[10px] uppercase tracking-widest font-mono text-slate-500">{w}</span>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-7 gap-1.5 ">
                    {cells.map(({cellDate, iso, inMonth }) => {
                        const isToday = iso === todayStr;
                        const isSelected = iso === selectedStr;
                        return(
                            <DateCell
                                key={iso}
                                iso={iso}
                                cellDate={cellDate}
                                isToday={isToday}
                                isSelected={isSelected}
                                inMonth={inMonth}
                                onClick={() => selectDay(cellDate)}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
};
export default CalendarWidget;