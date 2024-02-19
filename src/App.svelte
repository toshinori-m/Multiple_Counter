<main>
  <h1>Multiple Counter</h1>
  {#each counters as counter (counter.id)}
    <Counter
      id={counter.id}
      title={counter.title}
      count={counter.count}
      on:updateCount={event => handleUpdateCount(counter.id, event.detail.newCount)}
      on:remove={() => removeCounter(counter.id)}
      on:updateTitle={event => updateTitle(counter.id, event.detail.newTitle)}
    />
  {/each}
  <div class="container">
    <button class="new-counter" on:click={addCounter}>new counter</button>
  </div>
  <div class="title-list">
    title list: {titles.join(', ')}
  </div>
  <div class="sum-count">
    sum of count: {calculateTotalCount}
  </div>
</main>

<script lang="ts">
  import Counter from './components/Counter.svelte';
  import type { CounterType } from './types';

  let counters: CounterType[] = [{ id: Date.now(), title: 'new', count: 0 }];

  $: calculateTotalCount = counters.reduce((total, counter) => total + counter.count, 0);
  $: titles = counters.map(c => c.title);

  function handleUpdateCount(id: number, newCount: number): void {
    counters = counters.map(counter => counter.id === id ? { ...counter, count: newCount } : counter);
  }

  function addCounter(): void {
    counters = [...counters, { id: Date.now(), title: 'new', count: 0 }];
  }

  function removeCounter(id: number): void {
    counters = counters.filter(counter => counter.id !== id);
  }

  function updateTitle(id: number, newTitle: string = ''): void {
    counters = counters.map(counter => counter.id === id ? { ...counter, title: newTitle } : counter);
  }
</script>

<style>
  main {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-size: 4rem;
    font-weight: inherit;
    margin: 0;
  }

  .container {
    display: flex;
    justify-content: center;
  }
  
  .new-counter {
    cursor: pointer;
    font-size: 1rem;
    text-align: center;
    padding: 0;
    height: 24px;
    margin: 0 auto;
    color: white;
    width: 384px;
    background-color: #44c774d6;
    border-radius: 3px;
  }

  .title-list, .sum-count {
    font-size: 1rem;
    margin: 0;
  }
</style>
