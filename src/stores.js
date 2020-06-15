import { v4 as uuid } from 'uuid';
import { writable } from 'svelte/store';

function createTodos() {
  const { subscribe, update } = writable(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  const updateAndStore = (updateFunction) =>
    update((todos) => {
      const updatedTodos = updateFunction(todos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    });

  const toggleAll = () => {
    updateAndStore((todos) => {
      const allCompleted = todos.every((todo) => todo.completed);
      return todos.map((todo) => ({ ...todo, completed: !allCompleted }));
    });
  };

  const toggleTodo = (id) => {
    updateAndStore((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodoText = (id, newText) => {
    updateAndStore((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const deleteCompleted = () => {
    updateAndStore((todos) => todos.filter((todo) => !todo.completed));
  };

  const deleteTodo = (id) => {
    updateAndStore((todos) => todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (newTodoText) => {
    updateAndStore((todos) => [
      ...todos,
      { id: uuid(), text: newTodoText, completed: false },
    ]);
  };

  return {
    subscribe,
    toggleAll,
    toggleTodo,
    updateTodoText,
    deleteCompleted,
    deleteTodo,
    addTodo,
  };
}

export const todos = createTodos();
