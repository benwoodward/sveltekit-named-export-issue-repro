<script>
  import { waitUntil } from 'async-wait-until'

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
