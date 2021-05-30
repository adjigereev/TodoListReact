import {useTodosContext} from "../../TodosContext/TodosList";


function TaskTodos({id, text, status}) {
    const {handlerChangeStatus, handlerDelete} = useTodosContext()
    return (
        <li id={id} className="list-group-item d-flex align-items-center justify-content-between">
            <span className={status && 'done'}>
                {text}
            </span>
            <div>
                <button className={status ? 'mx-2 btn btn-secondary' : "mx-2 btn btn-success "}
                        onClick={() => handlerChangeStatus(id)}>
                    {status ? "Отменить ": "Выполнить"}
                </button>
                <button className="mx-2 btn btn-danger" onClick={() => handlerDelete(id)}>Удалить</button>
            </div>
        </li>
    )

}

export default TaskTodos