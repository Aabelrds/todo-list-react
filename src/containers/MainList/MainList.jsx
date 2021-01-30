import { useState } from "react";
import Title from "../../components/Title";
import Card from "../../components/Card";
import AddTodoForm from "../../components/AddTodoForm";
import "./MainList.scss";

function MainList(props) {
  const [isAddingTodo, setIsAddingTodo] = useState(false);

  const closeTodo = () => {
    setIsAddingTodo(false);
  };

  const addTodo = (todo) => {
    props.addTodo(todo);
    closeTodo();
  };

  const handleTodo = todo => props.handleTodo(todo);

  const removeTodo = todo => props.removeTodo(todo);

  const addComment = (todo, comment) => props.addComment(todo, comment);

  return (
    <section className="mainlist">
      <Title title={props.name} />

      <div>
        {props.items.map((todo) => (
          <Card
            key={todo.id}
            todo={todo}
            handleTodo={handleTodo}
            removeTodo={removeTodo}
            type={props.type}
            addComment={addComment}
          />
        ))}
      </div>

      {props.canAddTodo && <div onClick={() => setIsAddingTodo(!isAddingTodo)}>
        Añadir Tarea
      </div>}

      {isAddingTodo && (
        <div>
          <AddTodoForm addTodo={addTodo} cancelTodo={closeTodo} />
        </div>
      )}
    </section>
  );
}

export default MainList;
