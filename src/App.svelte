<main>
  <h1>Multiple Counter</h1>
  {#each counters as counter, index (index)}
		<Counter
			title={counter.title}
			on:remove={() => removeCounter(index)}
			on:updateTitle={(event) => updateTitle(event, index)}
		/>
  {/each}
	<div class="container">
		<button class="new-counter" on:click={addCounter}>new counter</button>
	</div>
  <div class="title-list">
    title list: {titles.join(', ')}
  </div>
  <div class="sum-count">
    sum of count: {count}
  </div>
</main>

<script>
  import Counter from './components/Counter.svelte';

	let counters = [{ title: 'new' }];
	let count = 0;
  let titles = ['new'];

	function addCounter() {
		counters = [...counters, { title: 'new' }];
		titles = counters.map(c => c.title);
	}

  function removeCounter(index) {
    counters = counters.filter((_, i) => i !== index);
		titles = counters.map(c => c.title);
  }

	function updateTitle(event, index) {
    counters[index].title = event.detail.title;
    titles = counters.map(c => c.title);
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
