import SignInForm from "../components/SignInForm"
import SignInLeft from "../components/SignInLeft"
export default function SignIn(){
    return(
        <>
            <div className="relative w-full flex ">
                
                {/* left-image section */}
                <SignInLeft/>
                <SignInForm/>
            </div>
        </>
    )
};