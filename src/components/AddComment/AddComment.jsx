import { useState } from 'react';
import './AddComment.scss'

const AddComment = (props) => {
    const [comment, setComment] = useState('');

    const submitForm = ev => {
        ev.preventDefault();

        props.addComment(comment);
    }

    const handleInputChange = ev => {
        setComment(ev.target.value)
    };

    const cancelEditing = () => props.cancelEditing();

    return (
        <form onSubmit={submitForm} >
            <textarea
                rows={6}
                value={comment}
                name="title"
                onChange={handleInputChange}
                className="addcomment__textarea"
            />
            <div className="addcomment__buttons">
                <button type="submit">Add Comment</button>
                <button onClick={cancelEditing}>Cancelar</button>
            </div>
        </form>
    );
}

export default AddComment;