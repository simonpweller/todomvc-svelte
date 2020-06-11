<script>
  import { v4 as uuid } from "uuid";
  import Todo from "./Todo.svelte";
  import Header from "./Header.svelte";

  let todos = [];
  $: hasTodos = todos.length > 0;
  $: allCompleted = todos.every((todo) => todo.completed);

  function addTodo(newTodoText) {
    todos = [...todos, { id: uuid(), text: newTodoText, completed: false }];
  }

  function toggleTodo(id) {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  function toggleAll() {
    todos = todos.map((todo) => ({ ...todo, completed: !allCompleted }));
  }
</script>

<section class="todoapp">
  <Header {addTodo} />
  {#if hasTodos}
    <section class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        on:click={toggleAll}
        checked={allCompleted} />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        {#each todos as todo}
          <Todo {...todo} {toggleTodo} />
        {/each}
      </ul>
    </section>
    <footer class="footer">
      <span class="todo-count">
        <strong>0</strong>
        item left
      </span>
      <ul class="filters">
        <li>
          <a class="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button class="clear-completed">Clear completed</button>
    </footer>
  {/if}
</section>
<footer class="info">
  <p>Double-click to edit a todo</p>
  <p>
    Template by
    <a href="http://sindresorhus.com">Sindre Sorhus</a>
  </p>
  <p>
    Created by
    <a href="http://todomvc.com">you</a>
  </p>
  <p>
    Part of
    <a href="http://todomvc.com">TodoMVC</a>
  </p>
</footer>
