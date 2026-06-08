import SignUpForm from "../components/SignUpForm"
import SignUpRight from "../components/SignUpRight"
export default function SignUp(){
    return(
        <>
            <div className="w-full flex ">
                {/* right-image section */}
                <SignUpForm/>
                <SignUpRight/>
            </div>
        </>
    )
};