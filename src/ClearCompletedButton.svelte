<script>
  import { todos, hasCompleted } from './stores';
</script>

{#if $hasCompleted}
  <button class="clear-completed" on:click={todos.deleteCompleted}>
    Clear completed
  </button>
{/if}
