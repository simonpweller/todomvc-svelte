<script>
  export let text;
</script>

<li>
  <div class="view">
    <input class="toggle" type="checkbox">
    <label>{text}</label>
    <button class="destroy"></button>
  </div>
  <input class="edit" value={text}>
</li>
