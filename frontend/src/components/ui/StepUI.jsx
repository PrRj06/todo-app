function Step(props){
    const {step, title, desc} = props;
    return(
        <>
            <div className="w-fit flex flex-col items-center bg-(--bg) px-5">
                <div className="w-15 h-15 text-(--bg-glow) bg-(--surface) flex justify-center items-center text-3xl rounded-full border-(--bg-glow) border">{step}</div>
                <div className="my-3 font-bold text-(--text) text-md">{title}</div>
                <p className="text-(--text-muted) text-sm text-center w-full">{desc}</p>
            </div>
        </>
    )
};
export default Step;