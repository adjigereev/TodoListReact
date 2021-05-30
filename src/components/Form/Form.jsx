import {useState} from "react";
import {useTodosContext} from "../../TodosContext/TodosList";


function Form() {
    const [input, setInput] = useState('')
    const {addHandlerTodos} = useTodosContext()
    const handlerChangeInput = (e) => {

        setInput(e.target.value)
    }
    const handlerSubmit = (e) => {
        e.preventDefault()
        if (input.trim()) {
            addHandlerTodos(input.trim())
            setInput("")
        }else {
            alert("Извините но поле не должно быть пустым")
        }
    }
    return (
        <form onSubmit={handlerSubmit} className="d-flex container justify-content-center  align-content-center mt-4 ">
            <input required className="form mx-2" value={input} onChange={handlerChangeInput} type="text"
                   placeholder="Добавить задачу"/>
            <button className="btn btn-primary" type="submit">Добавить</button>
        </form>
    )
}


export default Form