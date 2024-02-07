<div class="counter-container">
  <input class="counter-input" type="text" placeholder="new" />
  <span class="counter-number">{count}</span>
  <button class="counter-button-plus" on:click={increment}>+</button>
  <button class="counter-button-minus" on:click={decrement}>-</button>
  <button class="counter-zero" on:click={reset}>0</button>
  <button class="counter-delete" on:click={remove}>x</button>
</div>

<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let count = 0;

  function increment() {
    count += 1;
  }

  function decrement() {
    if (count > 0) {
      count -= 1;
    }
  }

  function reset() {
    count = 0;
  }

  function remove() {
    dispatch('remove');
  }
</script>

<style>
  .counter-container {
    height: 43px;
    width: 384px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background-color: #f7f7fa;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
    margin: 12px auto 8px;
    position: relative;
  }

  .counter-input {
    margin: 0 16px;
    height: 24px;
    padding: 0 4px;
    border-radius: 3px;
    border: 0;
    width: 8rem;
    text-align: left;
  }

  .counter-number {
    font-weight: 700;
    margin: 0 5px;
    padding: 0 10px;
    text-align: center;
    width: 50px;
  }

  .counter-button-plus {
    height: 35px;
    width: 32px;
    padding: 4px 12px;
    border: 0;
    margin: 0 0 0 4px;
    cursor: pointer;
    color: rgb(255 255 255);
    background-color: rgba(255, 12, 12, 0.699);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .counter-button-minus {
    height: 35px;
    width: 32px;
    padding: 4px 12px;
    border: 0;
    margin: 0;
    cursor: pointer;
    color: rgb(255 255 255);
    background-color: rgb(59 130 246);
  }

  .counter-zero {
    height: 35px;
    width: 32px;
    padding: 4px 12px;
    border: 0;
    margin: 0 4px 0 0;
    cursor: pointer;
    color: rgb(255 255 255);
    background-color: rgb(248, 198, 48);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .counter-delete {
    height: 35px;
    width: 32px;
    padding: 4px 12px;
    border: 0;
    margin: 0 4px 0 0;
    cursor: pointer;
    color: rgb(169, 170, 172);;
  }
</style>
