
<script lang="ts">
  export let name: string;

  let counter = 0;

  const increaseByOne = () => {
    counter++;
  };
</script>

<main>
  <div>{name}</div>
  <div>Counter: {counter}</div>
  <button on:click={increaseByOne}>Add 1</button>
</main>
