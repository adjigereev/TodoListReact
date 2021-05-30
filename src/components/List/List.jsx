import TaskTodos from "../TaskTodo/TaskTodos";
import {useTodosContext} from "../../TodosContext/TodosList";

function List() {
    const {todos} = useTodosContext()
    return(
        <ul className="list-group my-2">
            {todos.length > 0 ? todos.map(todo => <TaskTodos key={todo.id} id={todo.id} text={todo.text} status={todo.completed} />) :<p>пока нет задач</p> }
        </ul>
    )
}

export default List