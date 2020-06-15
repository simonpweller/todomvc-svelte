<script>
  import Todo from "./Todo.svelte";
  import Header from "./Header.svelte";
  import TodoCount from "./TodoCount.svelte";
  import ClearCompletedButton from "./ClearCompletedButton.svelte";
  import InfoFooter from "./InfoFooter.svelte";
  import { todos } from "./stores";

  export let filter;

  $: visibleTodos = filter
    ? $todos.filter((todo) =>
        filter === "completed" ? todo.completed : !todo.completed
      )
    : $todos;

  $: todoCount = $todos.length;
  $: activeTodoCount = $todos.filter((todo) => !todo.completed).length;

  $: hasTodos = todoCount > 0;
  $: hasCompleted = hasTodos && activeTodoCount < todoCount;
  $: allCompleted = activeTodoCount === 0;
</script>

<section class="todoapp">
  <Header addTodo={todos.addTodo} />
  {#if hasTodos}
    <section class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        on:click={todos.toggleAll}
        checked={allCompleted} />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        {#each visibleTodos as todo (todo.id)}
          <Todo {todo} />
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
        <ClearCompletedButton />
      {/if}
    </footer>
  {/if}
</section>
<InfoFooter />
