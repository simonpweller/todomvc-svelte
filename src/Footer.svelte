<script>
  import TodoCount from './TodoCount.svelte';
  import Filters from './Filters.svelte';
  import ClearCompletedButton from './ClearCompletedButton.svelte';
  import { hasTodos } from './stores';
</script>

{#if $hasTodos}
  <footer class="footer">
    <TodoCount />
    <Filters />
    <ClearCompletedButton />
  </footer>
{/if}
