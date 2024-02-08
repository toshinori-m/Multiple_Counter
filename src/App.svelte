<main>
  <h1>Multiple Counter</h1>
  {#each counters as counter (counter.id)}
		<Counter
			id={counter.id}
			title={counter.title}
			count={counter.count}
      on:updateCount={handleUpdateCount}
			on:remove={event => removeCounter(event.detail.id)}
			on:updateTitle={event => updateTitle(event, counter.id)}
		/>
  {/each}
	<div class="container">
		<button class="new-counter" on:click={addCounter}>new counter</button>
	</div>
  <div class="title-list">
    title list: {titles.join(', ')}
  </div>
  <div class="sum-count">
    sum of count: {totalCount}
  </div>
</main>

<script>
  import Counter from './components/Counter.svelte';

	let counters = [{ id: Date.now(), title: 'new', count: 0 }];
  let titles = ['new'];

	const calculateTotalCount = () => {
    return counters.reduce((total, counter) => total + counter.count, 0);
  };
	
  let totalCount = calculateTotalCount();

  function handleUpdateCount(event) {
    const { id, count } = event.detail;
    const index = counters.findIndex(counter => counter.id === id);
    if (index !== -1) {
      counters[index].count = count;
      totalCount = calculateTotalCount();
    }
  }

	function addCounter() {
    const newCounter = {
      id: Date.now(),
      title: 'new',
      count: 0
    };
    counters = [...counters, newCounter];
    titles = counters.map(c => c.title);
	}

	function removeCounter(id) {
    counters = counters.filter(counter => counter.id !== id);
    titles = counters.map(c => c.title);
    totalCount = calculateTotalCount();
  }

	function updateTitle(event, id) {
		const index = counters.findIndex(counter => counter.id === id);
		if (index !== -1) {
			counters[index].title = event.detail.title;
			titles = counters.map(c => c.title);
		}
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
