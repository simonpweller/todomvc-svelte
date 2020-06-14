<script>
  import { Router } from "director/build/director";
  let filter = null;
  const router = new Router({
    "/active": () => (filter = "active"),
    "/completed": () => (filter = "completed"),
    "/": () => (filter = null),
  });
  router.init();
</script>

<slot {filter} />
