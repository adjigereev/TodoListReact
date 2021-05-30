import {
    createContext,
    useState,
    useContext
} from "react"


const todosContext = createContext()

const TodosContextProvider = ({children}) => {
    const [todos, setTodos] = useState([])
    const addHandlerTodos = (text) => {
        setTodos(prev => [
            ...prev,
            {
                id: Date.now(),
                text,
                completed: false
            }
        ])
    }
    const handlerChangeStatus =(id)=>{
        setTodos(prev=>prev.map(todo=>{
            if (todo.id===id){
                return{
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }))
    }
    const handlerDelete =(id)=>{
        setTodos(prev=>prev.filter(todo=>todo.id !== id))
    }
    return (
        <todosContext.Provider value={{
            addHandlerTodos,
            todos,
            handlerChangeStatus,
            handlerDelete

        }}>
            {children}
        </todosContext.Provider>
    )
}
export default TodosContextProvider

const useTodosContext = () => useContext(todosContext)
export {
    useTodosContext
}
