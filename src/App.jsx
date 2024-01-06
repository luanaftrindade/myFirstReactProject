import { NewToDoForm } from "./NewToDoForm";
import { ToDoList } from "./ToDoList";
import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  // REACT PROJECT STRUCTURE - PART 1 - HOOKS

  const [toDos, setToDos] = useState(() => {
    // handling side effects part 2. get the items in the local storage
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  // handling side effects in functional components with useEffect and saving in the local storage
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(toDos));
  }, [toDos]);

  // REACT PROJECT STRUCTURE - PART 2 - HELPER FUNCTIONS OR CODE PARSING DATA

  function addToDo(title) {
    setToDos((currentToDoList) => {
      return [
        ...currentToDoList,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleToDo(id, completed) {
    setToDos((currentToDoList) => {
      return currentToDoList.map((toDos) => {
        if (toDos.id === id) {
          return { ...toDos, completed };
        }
        return toDos;
      });
    });
  }

  function deleteToDo(id) {
    setToDos((currentToDoList) => {
      return currentToDoList.filter((toDos) => toDos.id !== id);
    });
  }

  // REACT PROJECT STRUCTURE - PART 3 - A RETURN WITH ALL THE JSX

  return (
    <>
      <NewToDoForm onSubmit={addToDo} />
      <h1 className="header">To Do List</h1>
      <ToDoList toDos={toDos} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
    </>
  );
}
