<script>
  import { afterUpdate } from "svelte";

  export let todo;
  export let deleteTodo;

  let editedText = todo.text;
  let editing = false;
  let input;

  afterUpdate(() => editing && input && input.focus());

  function finishEditing() {
    editing = false;
    const trimmedText = editedText.trim();
    if (trimmedText.length > 0) {
      todo.text = trimmedText;
      editedText = trimmedText;
    } else {
      deleteTodo(todo.id);
    }
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
      on:change={() => (todo.completed = !todo.completed)} />
    <label on:dblclick={() => (editing = true)}>{todo.text}</label>
    <button class="destroy" on:click={() => deleteTodo(todo.id)} />
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
