<script>
  import { v4 as uuid } from "uuid";
  import Todo from "./Todo.svelte";
  import Header from "./Header.svelte";
  import TodoCount from "./TodoCount.svelte";
  import ClearCompletedButton from "./ClearCompletedButton.svelte";

  export let filter;

  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  $: localStorage.setItem("todos", JSON.stringify(todos));

  $: visibleTodos = filter
    ? todos.filter((todo) =>
        filter === "completed" ? todo.completed : !todo.completed
      )
    : todos;

  $: todoCount = todos.length;
  $: activeTodoCount = todos.filter((todo) => !todo.completed).length;

  $: hasTodos = todoCount > 0;
  $: hasCompleted = hasTodos && activeTodoCount < todoCount;
  $: allCompleted = activeTodoCount === 0;

  function addTodo(newTodoText) {
    todos = [...todos, { id: uuid(), text: newTodoText, completed: false }];
  }

  function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
  }

  function deleteCompleted() {
    todos = todos.filter((todo) => !todo.completed);
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
        {#each visibleTodos as todo (todo.id)}
          <Todo bind:todo {deleteTodo} />
        {/each}
      </ul>
    </section>
    <footer class="footer">
      <TodoCount count={activeTodoCount} />
      <ul class="filters">
        <li>
          <a class:selected={!filter} href="#/">All</a>
        </li>
        <li>
          <a class:selected={filter === 'active'} on:keypress href="#/active">
            Active
          </a>
        </li>
        <li>
          <a class:selected={filter === 'completed'} href="#/completed">
            Completed
          </a>
        </li>
      </ul>
      {#if hasCompleted}
        <ClearCompletedButton {deleteCompleted} />
      {/if}
    </footer>
  {/if}
</section>
