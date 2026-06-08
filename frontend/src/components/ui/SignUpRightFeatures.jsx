function SignUpRightFeatures(props){
    const {icon, title, desc} = props;
    return(
        <>
            <div className="flex gap-2">
                <div className="flex items-center justify-center w-5 ounded-md bg-(--surface-strong) px-5 rounded-md">{icon}</div>
                <div className="flex flex-col">
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-(--text-muted)">{desc}</p>
                </div>
            </div>
        </>
    )
};
export default SignUpRightFeatures;