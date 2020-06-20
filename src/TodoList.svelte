<script>
  import Todo from './Todo.svelte';
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import InfoFooter from './InfoFooter.svelte';
  import { todos } from './stores';

  export let filter;

  $: visibleTodos = filter
    ? $todos.filter((todo) =>
        filter === 'completed' ? todo.completed : !todo.completed
      )
    : $todos;

  $: todoCount = $todos.length;
  $: activeTodoCount = $todos.filter((todo) => !todo.completed).length;

  $: hasTodos = todoCount > 0;
  $: allCompleted = activeTodoCount === 0;
</script>

<section class="todoapp">
  <Header addTodo={todos.addTodo} />
  {#if hasTodos}
    <section class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        on:click={todos.toggleAll}
        checked={allCompleted} />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        {#each visibleTodos as todo (todo.id)}
          <Todo {todo} />
        {/each}
      </ul>
    </section>
    <Footer />
  {/if}
</section>
<InfoFooter />
