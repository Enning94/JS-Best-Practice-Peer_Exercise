import { editLocalTodos } from './localStorage.js';

const editTodo = (e) => {
  const item = e.target;
  if (item.classList[0] === 'input') {
    const todo = item.parentElement;
    editLocalTodos(todo);
  }
};
export default editTodo;