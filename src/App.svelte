<script>
  import { Router } from 'director/build/director';
  import Header from './Header.svelte';
  import MarkAllComplete from './MarkAllComplete.svelte';
  import TodoList from './TodoList.svelte';
  import TodoCount from './TodoCount.svelte';
  import Filters from './Filters.svelte';
  import ClearCompletedButton from './ClearCompletedButton.svelte';
  import InfoFooter from './InfoFooter.svelte';
  import { hasTodos, filter } from './stores';

  const router = new Router({
    '/active': () => ($filter = 'active'),
    '/completed': () => ($filter = 'completed'),
    '/': () => ($filter = null),
  });
  router.init();
</script>

<section class="todoapp">
  <Header />
  {#if $hasTodos}
    <section class="main">
      <MarkAllComplete />
      <TodoList />
    </section>
    <footer class="footer">
      <TodoCount />
      <Filters />
      <ClearCompletedButton />
    </footer>
  {/if}
</section>
<InfoFooter />
