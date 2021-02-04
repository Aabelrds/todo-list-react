import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { removeTodo, whenCompleteTodo, whenUncompleteTodo } from '../../appSlice';
import AddComment from '../AddComment';
import "./Card.scss";

const Card = (props) => {
  const dispatch = useDispatch();
  const { type, todo } = props;
  const [isOpenComment, setIsOpenComment] = useState(false);

  const handleTodo = () => {
    if (type === "completed") {
      dispatch(whenUncompleteTodo(todo))
    } else {
      dispatch(whenCompleteTodo(todo))
    }
  };

  const onClickDelete = () => {
    dispatch(removeTodo(todo))
  }

  const onClickComment = () => setIsOpenComment(!isOpenComment);

  const cancelEditing = () => setIsOpenComment(false);

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
        todo={todo}
        cancelEditing={cancelEditing}
      />}
      {todo.comment && <div>Comentario: {todo.comment}</div>}
      <div className="separator" />
    </>
  );
};

export default Card;
