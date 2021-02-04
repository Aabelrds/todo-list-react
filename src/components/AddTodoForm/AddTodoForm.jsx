import { useState } from 'react';
// Redux
import { useDispatch } from 'react-redux';
import { addTodo, setIsAddingTodo } from '../../appSlice';
// Fin Redux
const { uuid } = require('uuidv4');

const AddTodoForm = (props) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const submitForm = ev => {
        ev.preventDefault();

        dispatch(addTodo({ title, id: uuid() }))
    }

    const handleInputChange = ev => setTitle(ev.target.value);

    return (
        <form onSubmit={submitForm} >
            <input name="title" onChange={handleInputChange} className="addtodoform__input" />
            <div className="addtodoform__buttons">
                <button type="submit">Add Todo</button>
                <button onClick={() => dispatch(setIsAddingTodo(false))}>Cancelar</button>
            </div>
        </form>
    );
}

export default AddTodoForm;