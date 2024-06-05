import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';
import { TodoItem } from './TodoItem/TodoItem';
import { CreateTodoButton } from './TodoButton/CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro de react', completed: false },
  { text: 'Subir a diamante en valorant', completed: false },
  { text: 'Dormir', completed: false }
];

function App() {
  //Estados
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  //La doble negación es para saber si son valores booleanos.
  const totalTodos = todos.length;

  console.log('Usuarios buscan TODOS de ' + searchValue);
  return (
    // <react.fragment>
    <>
 {/* Insertar/retornar un componente de react dentro de otro componente de react */}
      <TodoCounter 
      completed={completedTodos} 
      total={totalTodos}
      />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
     
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
