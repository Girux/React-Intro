import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';
import { TodoItem } from './TodoItem/TodoItem';
import { CreateTodoButton } from './TodoButton/CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro de react', completed: false },
  { text: 'Subir a diamante en valorant', completed: true },
  { text: 'Dormir', completed: false }
];

function App() {
  return (
    // <react.fragment>
    <>
 {/* Insertar/retornar un componente de react dentro de otro componente de react */}
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />
     
      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      </>
  );
}

export default App;
