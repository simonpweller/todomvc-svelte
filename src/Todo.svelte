<script>
  import { afterUpdate } from "svelte";

  export let id;
  export let text;
  export let completed;
  export let toggleTodo;
  export let deleteTodo;
  export let updateTodoText;

  let editedText = text;
  let editing = false;
  let input;

  afterUpdate(() => editing && input && input.focus());

  function finishEditing() {
    editing = false;
    const trimmedText = editedText.trim();
    if (trimmedText.length > 0) {
      updateTodoText(id, trimmedText);
      editedText = trimmedText;
    } else {
      deleteTodo(id);
    }
  }

  function cancelEditing() {
    editing = false;
    editedText = text;
  }
</script>

<li class:completed class:editing>
  <div class="view">
    <input
      class="toggle"
      type="checkbox"
      checked={completed}
      on:change={() => toggleTodo(id)} />
    <label on:dblclick={() => (editing = !editing)}>{text}</label>
    <button class="destroy" on:click={() => deleteTodo(id)} />
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
