function DateCell({iso, cellDate, isToday, isSelected, inMonth, onClick}){
    return(
        <>
            <button 
                type="button"
                onClick={onClick}
                className={[
                    "aspect-video rounded-2xl flex items-center justify-center text-sm transition-all border ",
                    inMonth ? "text-slate-300" : "text-slate-600", 
                    isSelected ? "bg-orange-500/20 border-orange-400 text-white font-semibold"
                    : isToday
                    ? "border-orange-400/70 text-white font-semibold hover:bg-white/10"
                    : "border-transparent hover:bg-white/10",
                ].join(" ")}
            >
                {cellDate.getDate()}
            </button>
        </>
    )
};
export default DateCell