<script>
  import { Router } from 'director/build/director';
  import { filter } from './stores.js';
  import Header from './Header.svelte';
  import Main from './Main.svelte';
  import Footer from './Footer.svelte';
  import InfoFooter from './InfoFooter.svelte';

  const router = new Router({
    '/active': () => ($filter = 'active'),
    '/completed': () => ($filter = 'completed'),
    '/': () => ($filter = null),
  });
  router.init();
</script>

<section class="todoapp">
  <Header />
  <Main />
  <Footer />
</section>
<InfoFooter />
