<script>
  import Todo from './Todo.svelte';
  import { visibleTodos } from './stores';
</script>

<ul class="todo-list">
  {#each $visibleTodos as todo (todo.id)}
    <Todo {todo} />
  {/each}
</ul>
