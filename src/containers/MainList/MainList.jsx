import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Title from "../../components/Title";
import Card from "../../components/Card";
import AddTodoForm from "../../components/AddTodoForm";
import { selectIsAddingTodo, setIsAddingTodo } from '../../appSlice';
import "./MainList.scss";

function MainList(props) {
  const dispatch = useDispatch();
  const isAddingTodo = useSelector(selectIsAddingTodo); 

  return (
    <section className="mainlist">
      <Title title={props.name} />

      <div>
        {props.items.map((todo) => (
          <Card
            key={todo.id}
            todo={todo}
            type={props.type}
          />
        ))}
      </div>

      {props.canAddTodo && <div onClick={() => dispatch(setIsAddingTodo(!isAddingTodo))}>
        Añadir Tarea
      </div>}

      {isAddingTodo && (
        <div>
          <AddTodoForm />
        </div>
      )}
    </section>
  );
}

export default MainList;
