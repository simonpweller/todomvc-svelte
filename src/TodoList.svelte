<script>
  import Header from './Header.svelte';
  import Main from './Main.svelte';
  import Footer from './Footer.svelte';
  import InfoFooter from './InfoFooter.svelte';
  import { todos } from './stores';
</script>

<section class="todoapp">
  <Header addTodo={todos.addTodo} />
  <Main />
  <Footer />
</section>
<InfoFooter />
