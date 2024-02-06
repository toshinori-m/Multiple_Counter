<main>
  <h1>Multiple Counter</h1>
  <Counter />
	<div class="container">
		<div class="new-counter">
			new counter
		</div>
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
	let count = 0;
  let titles = ['new'];
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
		height: 24px;
		margin: 0 auto;
    color: white;
		width: 384px;
    background-color: #44c774d6;
    border-radius: 3px;
    margin: 0;
  }

	.title-list, .sum-count {
    font-size: 1rem;
    margin: 0;
  }
</style>
