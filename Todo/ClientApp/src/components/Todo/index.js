import React from 'react'
import Form from '../Form'
import Task from '../Task'
import Modal from '../Modal'
import './index.css'

const initialFormState = { id: 0, title: '', description: '', isCompleted: false, isArchived: false }

function Todo()
{
    const [tasks, setTasks] = React.useState([]);
    const [modal, setModal] = React.useState(false);
    const [task, setTask] = React.useState(initialFormState);

    React.useEffect(() =>
    {
        getTasks()
    }, []);

    async function getTasks()
    {
        setTasks([]);

        fetch("Task")
            .then(response => response.json())
            .then(data => { setTasks(data); })
    }

    function toggleModal()
    {
        if (modal)
        {
            document.getElementById('title').focus();
        }

        setTask(initialFormState);
        setModal(!modal)
    }

    function handleChange(event)
    {
        const { name, value } = event.target;
        setTask({ ...task, [name]: value });
    }

    function completeTask(id)
    {
        fetch(`Task/Complete/${id}`, { method: "put" })
            .then(response => response.json())
            .then(data =>
            {
                if (data.isSuccess) getTasks()
                else alert(data.message)
            });
    }

    function deleteTask(id)
    {
        fetch(`Task/Delete/${id}`, { method: "delete" })
            .then(response => response.json())
            .then(data =>
            {
                if (data.isSuccess) getTasks();
                else alert(data.message);
            });
    }

    function archiveTask(id)
    {
        fetch(`Task/Archive/${id}`, { method: "put" })
            .then(response => response.json())
            .then(data =>
            {
                if (data.isSuccess) getTasks();
                else alert(data.message);
            });
    }

    function handleSubmit(event)
    {
        const url = task.id ? 'Task/Update' : 'Task/Insert';
        const method = task.id ? 'PUT' : 'POST';

        fetch(url, {
            method: method,
            headers: { 'Accept': 'application/json', 'content-type': 'application/json' },
            body: JSON.stringify(task)
        })
            .then(response => response.json())
            .then(data =>
            {
                if (data.isSuccess)
                {
                    getTasks();
                }
                else
                {
                    alert(data.message);
                }

                toggleModal();
                setTask(initialFormState);
            })
            .catch(error => console.log(error));

        event.preventDefault();
    }

    function editTask(task)
    {
        setTask(task);
        toggleModal();
    }

    return (
        <div>
            <button className="novaTarefa" onClick={toggleModal}>Nova tarefa</button>
            <Modal isOpen={modal} toggle={toggleModal} title='Nova tarefa' backdrop={true} keyboard={true} >
                <Form task={task} handleChange={handleChange} handleSubmit={handleSubmit} />
            </Modal>

            <div className="tasks">
                {
                    tasks.length > 0 ? tasks.map(task =>
                    {
                        return (
                            <Task key={task.id}
                                task={task}
                                completeTask={completeTask}
                                deleteTask={deleteTask}
                                archiveTask={archiveTask}
                                editTask={editTask}
                            />
                        )
                    }) : <div>
                            <h4>Nenhuma tarefa cadastrada, crie sua primeira tarefa...</h4>
                        </div>
                }
            </div>
        </div>
    )
}

export default Todo;