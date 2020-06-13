<script>
  export let id;
  export let text;
  export let completed;
  export let toggleTodo;
  export let deleteTodo;
</script>

<li class:completed>
  <div class="view">
    <input
      class="toggle"
      type="checkbox"
      checked={completed}
      on:change={() => toggleTodo(id)} />
    <label>{text}</label>
    <button class="destroy" on:click={() => deleteTodo(id)}/>
  </div>
  <input class="edit" value={text} />
</li>
