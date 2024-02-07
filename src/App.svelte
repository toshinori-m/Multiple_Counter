<main>
  <h1>Multiple Counter</h1>
  {#each counters as counter, index (index)}
    <Counter on:remove={() => removeCounter(index)} />
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

	let counters = [{}];
	let count = 0;
  let titles = ['new'];

	function addCounter() {
    counters = [...counters, {}];
  }

  function removeCounter(index) {
    counters = counters.filter((_, i) => i !== index);
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
