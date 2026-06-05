import { Link } from "react-router-dom";

function GlowButton(props){
    const {text, to} = props;
    const className = "w-fit rounded-md bg-(--bg-glow) text-white text-[14px] px-4 py-2 font-semibold cursor-pointer";

    if(to){
        return(
            <Link className={className} to={to}>
                {text}
            </Link>
        )
    }

    return(
        <>
        <div className={className} >
            {text}
        </div>
        </>
    )
};
export default GlowButton;
