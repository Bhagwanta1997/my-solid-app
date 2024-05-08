import { For, Match, Switch, createEffect } from "solid-js"

import styles from './task-container.module.css';
import UIButton from "../../components/ui-button";
import { BUTTON_LABEL, TODO_STATUS } from "../../constants/constant";

const TaskContainer = (props) => {
    return (
        <div class={styles.tasks_container}>
        <span>{props.status}</span>
        <hr />
        <ul>
            <For each={props.todos().filter(todo => todo.status === props.status)}>
                {
                    (todo) => <li>
                        <span title={todo.name}>{todo.name}</span>
                        <span title={todo.description}>{todo.description}</span>
                        <Switch fallback={null}>
                            <Match when={props.status === TODO_STATUS.TO_DO}>
                                <UIButton 
                                    onClick={() => props.handleStatus(todo.id, TODO_STATUS.IN_PROGRESS)} 
                                    label={BUTTON_LABEL.START_TASK}
                                />
                                <UIButton 
                                    class={styles.delete_button} 
                                    onClick={() => props.handleStatus(todo.id)} 
                                    label={BUTTON_LABEL.DELETE_TASK}
                                />
                            </Match>
                            <Match when={props.status === TODO_STATUS.IN_PROGRESS}>
                                <UIButton 
                                    onClick={() => props.handleStatus(todo.id, TODO_STATUS.COMPLETE)} 
                                    label={BUTTON_LABEL.COMPLETE_TASK}
                                />
                                <UIButton 
                                    class={styles.delete_button} 
                                    onClick={() => props.handleStatus(todo.id)} 
                                    label={BUTTON_LABEL.DELETE_TASK}
                                />
                            </Match>
                        </Switch>
                    </li>
                }
            </For>
        </ul>
        </div>
    )
}

export default TaskContainer