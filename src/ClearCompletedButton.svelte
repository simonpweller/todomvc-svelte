<script>
  import { todos } from "./stores";
</script>

<button class="clear-completed" on:click={todos.deleteCompleted}>
  Clear completed
</button>
