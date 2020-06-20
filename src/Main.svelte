<script>
  import Todo from './Todo.svelte';
  import { todos, hasTodos, visibleTodos, allCompleted } from './stores';
</script>

{#if $hasTodos}
  <section class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      on:click={todos.toggleAll}
      checked={$allCompleted} />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      {#each $visibleTodos as todo (todo.id)}
        <Todo {todo} />
      {/each}
    </ul>
  </section>
{/if}
