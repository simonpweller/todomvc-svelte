<script>
  import { Router } from "director/build/director";
  import TodoList from "./TodoList.svelte";

  let filter = null;
  const router = new Router({
    "/active": () => (filter = "active"),
    "/completed": () => (filter = "completed"),
    "/": () => (filter = null),
  });
  router.init();
</script>

<TodoList {filter} />
