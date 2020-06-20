<script>
  import { Router } from 'director/build/director';
  import TodoList from './TodoList.svelte';
  import { filter } from './stores.js';

  const router = new Router({
    '/active': () => ($filter = 'active'),
    '/completed': () => ($filter = 'completed'),
    '/': () => ($filter = null),
  });
  router.init();
</script>

<TodoList />
