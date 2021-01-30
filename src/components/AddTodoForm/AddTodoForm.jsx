import { useState } from 'react';
const { uuid } = require('uuidv4');

const AddTodoForm = (props) => {
    const [title, setTitle] = useState('');

    const submitForm = ev => {
        ev.preventDefault();

        props.addTodo({ title, id: uuid() });
    }

    const handleInputChange = ev => setTitle(ev.target.value);

    const cancelTodo = () => props.cancelTodo();

    return (
        <form onSubmit={submitForm} >
            <input name="title" onChange={handleInputChange} className="addtodoform__input" />
            <div className="addtodoform__buttons">
                <button type="submit">Add Todo</button>
                <button onClick={cancelTodo}>Cancelar</button>
            </div>
        </form>
    );
}

export default AddTodoForm;