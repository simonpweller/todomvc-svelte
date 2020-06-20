<script>
  import TodoCount from './TodoCount.svelte';
  import Filters from './Filters.svelte';
  import ClearCompletedButton from './ClearCompletedButton.svelte';
  import { hasTodos, hasCompleted, activeTodoCount } from './stores';
</script>

{#if $hasTodos}
  <footer class="footer">
    <TodoCount count={$activeTodoCount} />
    <Filters />
    {#if $hasCompleted}
      <ClearCompletedButton />
    {/if}
  </footer>
{/if}
