import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import AddComment from '../AddComment';
import "./Card.scss";

const Card = (props) => {
  const { type, todo } = props;
  const [isOpenComment, setIsOpenComment] = useState(false);

  const handleTodo = () => {
    props.handleTodo(todo);
  };

  const onClickDelete = () => {
    props.removeTodo(todo);
  }

  const onClickComment = () => setIsOpenComment(!isOpenComment);

  const cancelEditing = () => setIsOpenComment(false);

  const addComment = comment => {
    props.addComment(todo, comment)
  }

  return (
    <>
      <div className="card">
        <input
          type="checkbox"
          onClick={handleTodo}
          defaultChecked={type === "completed" ? true : false}
        />
        <p>{todo.title}</p>
        <div className="card__icons">
          <FontAwesomeIcon
            className="card__icons__icon"
            icon={faTrashAlt}
            onClick={onClickDelete}
          />
          <FontAwesomeIcon
            className="card__icons__icon"
            icon={faCommentAlt}
            onClick={onClickComment}
          />
        </div>
      </div>
      {isOpenComment && <AddComment
        cancelEditing={cancelEditing}
        addComment={addComment}
      />}
      {todo.comment && <div>Comentario: {todo.comment}</div>}
      <div className="separator" />
    </>
  );
};

export default Card;
