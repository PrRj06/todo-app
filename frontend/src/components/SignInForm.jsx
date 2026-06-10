import { Mail } from "lucide-react";
import { KeyRound } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ui/ThemeToggle";
import { validateLoginPassword, validateEmail } from "../utils/formValidators";
const INITIAL_FORM_STATE = {
    email: "",
    password: "",
};

function SignInForm(){
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const [errorData, setErrorData] = useState(INITIAL_FORM_STATE);

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name] : value}));
        setErrorData(prev => ({...prev, [name]: ""}))
    }

    const validateForm = (e)=>{
        e.preventDefault();
        const errors = {
            email: validateEmail(formData.email),
            password: validateLoginPassword(formData.password)
        };
        setErrorData(errors);

        let containsError = Object.values(errors).some(
            error => error !== ""
        );

        if(!containsError){
            alert("Login Successful");
            setFormData(INITIAL_FORM_STATE);
            setErrorData(INITIAL_FORM_STATE);
        }
    }

    return(
        <>
            <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
                <div className="absolute z-100 top-6 right-6">
                    <ThemeToggle/>
                </div>
                <div className="min-w-100">
                    <span className="text-(--bg-glow) font-bold text-sm">WELCOME BACK</span>
                    <div className="max-w-3xl text-balance text-3xl font-bold font-(family-name:--font-display) leading-[1.05] tracking-normal text-(--text) sm:text-5xl">
                        <p className="my-1.5">
                            Sign <em className="text-(--bg-glow)">in</em><br />
                            to Taska
                        </p>
                    </div>
                    <p className="text-sm text-(--text-muted)">No account? <Link to="/signup" className="text-(--bg-glow)">Create one free →</Link></p>

                    <form className="my-5" onSubmit={validateForm}>
                        {/* email input field */}
                        <div className="flex flex-col my-4">
                            <label className="text-sm text-(--text-muted) font-bold"  htmlFor="email">EMAIL ADDRESS</label>
                            <div className={`flex items-center rounded-md border-[0.5px] ${errorData.email ? "border-red-500" : "border-white/20"} px-2 py-2 bg-(--smooth-surface) text-sm gap-3`}>
                            {/* <div className="flex items-center rounded-md border-[0.5px] border-white/20 px-2 py-2 bg-(--smooth-surface) text-sm gap-3"> */}
                                <Mail className="text-(--text-muted) size-4"/>
                                <input
                                    id="email"
                                    name="email"
                                    type="email" 
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent text-(--text) outline-none placeholder:text-(--text-muted)" 
                                />
                            </div>
                            {
                                errorData.email && (
                                    <p className="text-red-500 text-sm my-1 mx-1">{errorData.email}</p>
                                )
                            }
                        </div>

                        {/* password input field */}
                        <div className="relative flex flex-col my-4 text-(--text-muted) text-sm ">
                            <label className="font-bold"  htmlFor="password">PASSWORD</label>
                            <div className={`flex items-center rounded-md border-[0.5px] ${errorData.password ? "border-red-500" : "border-white/20"} px-2 py-2 bg-(--smooth-surface) text-sm gap-3`}>
                            {/* <div className="flex items-center rounded-md border-[0.5px] border-white/20 px-2 py-2 bg-(--smooth-surface) text-sm gap-3"> */}
                                <KeyRound className="text-(--text-muted) size-4"/>
                                <input 
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full bg-transparent text-(--text) outline-none placeholder:text-(--text-muted)" 
                                />
                                {/* password hide and show feature */}
                                <button type="button" onClick={() => setShowPassword((current) => !current)} className="absolute right-3 cursor-pointer text-(--bg-glow) font-bold">{showPassword ? "Hide" : "Show"}</button>
                            </div>
                            {
                                errorData.password && (
                                    <p className="text-red-500 text-sm my-1 mx-1">{errorData.password}</p>
                                )
                            }
                        </div>

                        <div className="flex justify-between items-center text-sm my-4">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" />
                                Remember me 
                            </div>
                            <button type="button" className=" cursor-pointer font-semibold text-(--bg-glow)">Forgot password</button>
                        </div>
                        <button type="submit" className="w-full text-center rounded-md font-bold cursor-pointer bg-(--bg-glow) py-3">Sign In</button>
                    </form>

                    <div className="w-full flex items-center justify-between text-white/50 text-sm">
                        <div className="bg-white/15 min-w-[30%] min-h-px"></div>
                        <span>or continue with</span>
                        <div className="bg-white/15 min-w-[30%] min-h-px"></div>
                    </div>
                    <button className="w-full flex justify-center items-center gap-1.5 font-bold text-sm py-3 bg-(--surface-strong) rounded-md cursor-pointer my-5">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                        <span>Google</span>
                    </button>
                </div>
            </div>
        </>
    )
};
export default SignInForm;
