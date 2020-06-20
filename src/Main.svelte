<script>
  import TodoList from './TodoList.svelte';
  import MarkAllComplete from './MarkAllComplete.svelte';
  import { hasTodos } from './stores';
</script>

{#if $hasTodos}
  <section class="main">
    <MarkAllComplete />
    <TodoList />
  </section>
{/if}
