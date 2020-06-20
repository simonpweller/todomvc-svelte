<script>
  import Header from './Header.svelte';
  import Main from './Main.svelte';
  import Footer from './Footer.svelte';
  import InfoFooter from './InfoFooter.svelte';
  import { todos } from './stores';

  $: todoCount = $todos.length;
  $: hasTodos = todoCount > 0;
</script>

<section class="todoapp">
  <Header addTodo={todos.addTodo} />
  {#if hasTodos}
    <Main />
    <Footer />
  {/if}
</section>
<InfoFooter />
