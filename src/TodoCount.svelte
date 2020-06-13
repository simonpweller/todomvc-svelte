<script>
  export let count;
</script>

<span class="todo-count">
  <strong>{count}</strong>
  {count === 1 ? 'item' : 'items'} left
</span>
