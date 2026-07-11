import { useContext, createContext, useState, useEffect } from "react";
const TaskContext = createContext();
const TagsContext = createContext();
const DateContext = createContext();

export function DateProvider({children}){
    const [date, setDate] = useState(new Date());
    
    return(
        <DateContext.Provider value={{date,setDate}}>
            {children}
        </DateContext.Provider>
    )
}
export function TaskProvider({children}){
    const [task, setTasks] = useState();

    return(
        <TaskContext.Provider value={{task,setTasks}}>
            {children}
        </TaskContext.Provider>
    )
}
export function TagsProvider({children}){
    const [tags, setTags] = useState();

    return(
        <TagsContext.Provider value={{tags,setTags}}>
            {children}
        </TagsContext.Provider>
    )
}

export function useDate(){
    return useContext(DateContext);
}

export function useTasks(){
    return useContext(TaskContext);
}

export function useTags(){
    return useContext(TagsContext);
}
