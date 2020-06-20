<script>
  import { filter } from './stores';
</script>

<ul class="filters">
  <li>
    <a class:selected={!$filter} href="#/">All</a>
  </li>
  <li>
    <a class:selected={$filter === 'active'} on:keypress href="#/active">
      Active
    </a>
  </li>
  <li>
    <a class:selected={$filter === 'completed'} href="#/completed">Completed</a>
  </li>
</ul>
