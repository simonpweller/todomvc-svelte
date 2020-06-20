<script>
  import { activeTodoCount } from './stores';
</script>

<span class="todo-count">
  <strong>{$activeTodoCount}</strong>
  {$activeTodoCount === 1 ? 'item' : 'items'} left
</span>
