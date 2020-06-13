<script>
  export let count;
</script>

<span class="todo-count">
  <strong>{count}</strong>
  item{count !== 1 ? 's' : ''} left
</span>