<script>
  import { todos } from './stores';
  
  let newTodoText = "";
  function handleSubmit() {
    if (newTodoText.trim().length > 0) {
      todos.addTodo(newTodoText.trim());
      newTodoText = "";
    }
  }
</script>

<header class="header">
  <h1>todos</h1>
  <input
    class="new-todo"
    placeholder="What needs to be done?"
    autofocus
    bind:value={newTodoText}
    on:keypress={(e) => e.key === 'Enter' && handleSubmit()}
    on:blur={handleSubmit} />
</header>
