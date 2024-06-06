import React from "react";
import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { TodoList } from "./TodoList/TodoList";
import { TodoItem } from "./TodoItem/TodoItem";
import { CreateTodoButton } from "./TodoButton/CreateTodoButton";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro de react", completed: false },
  { text: "Subir a diamante en valorant", completed: false },
  { text: "Dormir", completed: false },
];

function App() {
  //Estados
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  //La doble negación es para saber si son valores booleanos.
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    // Hay dos maneras de llamar el estado con su metodo toLowerCase
    // 1
    // return todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase());
    // 2
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
  );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };
  
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    // El splice nos pide una posición del array y nos pide cuantos elementos debo quitar
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    // <react.fragment>
    <>
      {/* Insertar/retornar un componente de react dentro de otro componente de react */}
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
