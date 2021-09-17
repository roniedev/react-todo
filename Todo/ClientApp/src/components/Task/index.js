import React from 'react'
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrashAlt, faArchive, faPenAlt } from '@fortawesome/free-solid-svg-icons'

function Task({ task, completeTask, deleteTask, archiveTask, editTask })
{
    return (
        <div className="task">
            <div className={task.isCompleted ? 'taskCompleted taskTitle' : 'taskTitle'}>{task.title}</div>
            <div className={task.isCompleted ? 'taskCompleted taskDescription' : 'taskDescription'}>{task.description}</div>
            <div className="taskActions">
                {
                    task.isCompleted ? ''
                        : <button
                            onClick={() => completeTask(task.id)}
                            title="Concluir tarefa"
                            className="buttonComplete">
                            <FontAwesomeIcon icon={faCheck} /></button>
                }
                {
                    task.isCompleted ? ''
                        : <button
                            onClick={() => editTask(task)}
                            title="Editar tarefa"
                            className="buttonEdit">
                            <FontAwesomeIcon icon={faPenAlt} /></button>
                }
                {
                    <button
                        onClick={() => deleteTask(task.id)}
                        title="Apagar tarefa"
                        className="buttonDelete">
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                }
                {
                    !task.isArchived && task.isCompleted ?
                        <button
                            onClick={() => archiveTask(task.id)}
                            title="Arquivar tarefa"
                            className="buttonArchive">
                            <FontAwesomeIcon icon={faArchive} />
                        </button> : ''
                }
            </div>
        </div>
    )
}

export default Task;