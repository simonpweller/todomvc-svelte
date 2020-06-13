<script>
  import { afterUpdate } from "svelte";

  export let id;
  export let text;
  export let completed;
  export let toggleTodo;
  export let deleteTodo;

  let editing = false;
  let input;

  afterUpdate(() => editing && input && input.focus());
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
  <input class="edit" value={text} bind:this={input} />
</li>
