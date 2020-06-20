<script>
  import TodoCount from './TodoCount.svelte';
  import ClearCompletedButton from './ClearCompletedButton.svelte';
  import { filter, activeTodoCount, hasCompleted } from './stores';
</script>

<footer class="footer">
  <TodoCount count={$activeTodoCount} />
  <ul class="filters">
    <li>
      <a class:selected={!$filter} href="#/">All</a>
    </li>
    <li>
      <a class:selected={$filter === 'active'} on:keypress href="#/active">
        Active
      </a>
    </li>
    <li>
      <a class:selected={$filter === 'completed'} href="#/completed">
        Completed
      </a>
    </li>
  </ul>
  {#if $hasCompleted}
    <ClearCompletedButton />
  {/if}
</footer>
