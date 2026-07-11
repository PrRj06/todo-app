import { DateProvider } from "../context/DashboardContext"
import DateLabel from "../components/dashboard/DateLabel"
import ThemeToggle from "../components/ui/ThemeToggle";
export default function Dashboard(){
    return(
        <>
            <DateProvider>
                {/* <ThemeToggle/> */}
                <DateLabel/>
            </DateProvider>
        </>
    )
};
