import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro de react', completed: false },
  { text: 'Subir a diamante en valo', completed: true },
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
