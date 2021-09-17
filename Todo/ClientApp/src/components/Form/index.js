import React from 'react'
import './index.css'

function Form({ task, handleSubmit, handleChange })
{
    return (
        <div>
            <form className='form' onSubmit={handleSubmit} autoComplete="off">
                <div>
                    <input
                        type="text"
                        id='title'
                        name='title'
                        placeholder='Informe o título da tarefa...'
                        value={task.title}
                        required
                        onChange={handleChange} />
                </div>
                <div>
                    <textarea
                        name='description'
                        id='description'
                        placeholder='Informe a descrição da tarefa...'
                        value={task.description}
                        required
                        onChange={handleChange}></textarea>
                </div>
                <div>
                    <button>Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default Form;