function FeatureGridItem(props){
    const {icon, title, desc} = props;
    return(
        <>
            <div className="flex flex-col bg-(--bg) py-10 px-7 ">
                <div className="rounded-md bg-(--surface) w-fit p-2.5 ">{icon}</div>
                <div className="my-3 font-bold text-(--text) text-xl">{title}</div>
                <p className="text-(--text-muted) text-sm text-justify">{desc}</p>
            </div>
        </>
    )
};
export default FeatureGridItem;