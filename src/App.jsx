import { For, createSignal } from 'solid-js';
import styles from './App.module.css';
import TaskContainer from './modules/task-container/task-container';
import AddTask from './modules/add-task/add-task';

function App() {

  const [todos, setTodos] = createSignal([]);
  const [todoName, setTodoName] = createSignal('');
  const [todoDescription, setTodoDescription] = createSignal('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if(todoName() !== '' && todoDescription() !== ''){
      setTodos([
        ...todos(),
        {
          id: todos().length + 1,
          name: todoName(),
          description: todoDescription(),
          status: 'to do'
        }
      ]);
      setTodoName('');
      setTodoDescription('');
    }
  }

  const handleTaskStatus = (id, status) => {
    setTodos(
      todos().map(todo => todo.id === id ? {
        ...todo,
        status: status
      }: todo)
    )
  }

  const handleDeleteTask = (id) => {
    setTodos(
      todos().filter(todo => todo.id !== id)
    )
  }

  return (
    <div class={styles.App}>
      <AddTask
        todoName={todoName}
        setTodoName={setTodoName}
        todoDescription={todoDescription}
        setTodoDescription={setTodoDescription}
        handleAddTodo={handleAddTodo}
      />
      <p>To Do List</p>
      <div class={styles.container}>
        <TaskContainer
          todos={todos}
          status='to do'
          handleStatus={handleTaskStatus}
        />
        <TaskContainer
          todos={todos}
          status='in progress'
          handleStatus={handleTaskStatus}
        />
         <TaskContainer
          todos={todos}
          status='complete'
          handleStatus={handleDeleteTask}
        />
      </div>
    </div>
  );
}
export default App;
