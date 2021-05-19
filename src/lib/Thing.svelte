<script>
  import waitUntil from 'async-wait-until' // works
  // import { waitUntil } from 'async-wait-until' // named export error
  // import { waitUntil } from 'async-wait-until/dist/index.esm.js'; // named export error

  const task = async () => {
    await waitUntil(
      () => {
        return true;
      },
      { timeout: 50000 },
    );
  };
</script>

{#await task() then _}
  Hello World
{/await}
