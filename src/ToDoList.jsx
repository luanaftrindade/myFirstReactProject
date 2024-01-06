import { ToDoItem } from "./ToDoItem";

export function ToDoList({ toDos, toggleToDo, deleteToDo }) {
  return (
    <ul className="list">
      {toDos.length === 0 && "There's no do's in your list"}
      {toDos.map((toDo) => {
        return (
          <ToDoItem
            {...toDo}
            key={toDo.id}
            toggleToDo={toggleToDo}
            deleteToDo={deleteToDo}
          />
        );
      })}
    </ul>
  );
}
