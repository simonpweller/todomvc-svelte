<script>
  import { tick } from "svelte";

  export let todo;
  export let deleteTodo;

  let editedText = todo.text;
  let editing = false;
  let input;

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
      on:change={() => (todo.completed = !todo.completed)} />
    <label on:dblclick={startEditing}>{todo.text}</label>
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
