import UIButton from "../../components/ui-button";
import UIInput from "../../components/ui-input";

const AddTask = (props) => {
    return <form onSubmit={(e) => props.handleAddTodo(e)}>
        <span>Add To Do</span>
        <UIInput
            placeholder="Enter task name"
            type="text"
            value={props.todoName()}
            onChange={(e) => props.setTodoName(e.target.value)}
        />
        <UIInput
            placeholder="Enter task description"
            type="text"
            value={props.todoDescription()}
            onChange={(e) => props.setTodoDescription(e.target.value)}
        />
        <UIButton type='submit' label="Add Task"/>
      </form>
}

export default AddTask;