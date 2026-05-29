function GlowButton(props){
    const {text} = props;
    return(
        <>
        <div className="w-fit rounded-md bg-(--bg-glow) m-auto text-[14px] px-4 py-2 font-semibold" >
            {text}
        </div>
        </>
    )
};
export default GlowButton;