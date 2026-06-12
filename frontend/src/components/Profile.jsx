import { useState } from "react";
import ProfileDropdown from "./ui/ProfileDropdown";
import Avatar from "./ui/Avatar";
function Profile(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <div className="relative"
                onClick={()=>setIsOpen(prev => !prev)} 
            >
                <Avatar/>
                {
                    isOpen && (
                        <div className="absolute top-full right-0 mt-2">
                            <ProfileDropdown/>
                        </div>
                    )
                }
            </div>
            
        </>
    )
};
export default Profile;