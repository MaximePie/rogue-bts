<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }

  export function double(number: number): number {
    return number * 2
  };
</script>

<button on:click={increment}>
  count is {count}
</button>
