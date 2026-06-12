import ThemeToggle from "./ThemeToggle";
import Avatar from "./Avatar";
import { LogOut } from "lucide-react";
function ProfileDropdown(){
    return(
        <>
            <div className="flex flex-col w-fit border rounded-xl ">
                <div className="flex flex-col border-0 border-b border-b-white/50 border-solid px-2 py-2">
                    <p className="text-(--bg-glow) font-bold text-sm">ACCOUNT DETAILS</p>
                    <div className="flex gap-3 my-3">
                        <Avatar/>
                        <div className="flex flex-col">
                            <p className="text-xl">John Doe</p>
                            <p className="text-sm">johndoe@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 items-center border-0 border-b border-b-white/25 px-2 py-2" >
                    <div className="rounded-xl bg-(--surface-strong) p-2 cursor-pointer ">
                        <ThemeToggle/>
                    </div>
                    <p>Change Theme</p>
                </div>
                <div className="flex gap-3 items-center px-2 py-2">
                    <div className="rounded-xl bg-(--surface-strong) p-2 cursor-pointer">
                        <LogOut />
                    </div>
                    <p>Logout</p>
                </div>
            </div>
        </>
    )
};
export default ProfileDropdown;