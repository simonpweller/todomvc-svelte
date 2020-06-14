<script>
  import Router from "./Router.svelte";
  import TodoList from "./TodoList.svelte";
  import InfoFooter from "./InfoFooter.svelte";
</script>

<Router let:filter>
  <TodoList {filter} />
</Router>
<InfoFooter />
