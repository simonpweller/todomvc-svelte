<script>
  import { todos, allCompleted } from './stores';
</script>

<input
  id="toggle-all"
  class="toggle-all"
  type="checkbox"
  on:click={todos.toggleAll}
  checked={$allCompleted} />
<label for="toggle-all">Mark all as complete</label>
