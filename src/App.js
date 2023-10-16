import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';

const defaultTodos = [
  {text: 'Estudien vagos', completed: true},
  {text: 'Hacer el almuerzo', completed: false},
  {text: 'Trabaje :v', completed: false},
  {text: 'Sacar al perro', completed: false},
];

function App() {
  return (
    <>
      <TodoCounter completed={5} total={10}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
            <TodoItem 
              key = {todo.text} 
              text = {todo.text}
              completed = {todo.completed}
            />
          ) 
        )}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
