<script>
  import { todos } from "./stores";
  import { tick } from "svelte";

  export let todo;

  let editedText = todo.text;
  let editing = false;
  let input;

  function finishEditing() {
    editing = false;
    const trimmedText = editedText.trim();
    if (trimmedText.length > 0) {
      todos.updateTodoText(todo.id, trimmedText)
      editedText = trimmedText;
    } else {
      todos.deleteTodo(todo.id);
    }
  }

  async function startEditing() {
    editing = true;
    await tick();
    input.focus();
  }

  function cancelEditing() {
    editing = false;
    editedText = todo.text;
  }
</script>

<li class:completed={todo.completed} class:editing>
  <div class="view">
    <input
      class="toggle"
      type="checkbox"
      checked={todo.completed}
      on:change={() => todos.toggleTodo(todo.id)} />
    <label on:dblclick={startEditing}>{todo.text}</label>
    <button class="destroy" on:click={() => todos.deleteTodo(todo.id)} />
  </div>
  <input
    class="edit"
    bind:value={editedText}
    bind:this={input}
    on:blur={finishEditing}
    on:keypress={(e) => {
      if (e.key === 'Enter') {
        finishEditing();
      }
    }}
    on:keyup={(e) => {
      if (e.key === 'Escape') {
        cancelEditing();
      }
    }} />
</li>
