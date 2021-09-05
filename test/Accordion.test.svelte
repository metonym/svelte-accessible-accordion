<script lang="ts">
  import { Accordion, AccordionItem } from "../types";
  import AccordionComponent from "../types/Accordion.svelte";

  let ref: HTMLButtonElement;
</script>

<!-- svelte-ignore missing-declaration -->
<Accordion multiselect>
  <AccordionItem bind:ref expanded disabled title="Title 1">
    Content 1
  </AccordionItem>
  <AccordionItem>
    <svelte:fragment slot="title">Title 2</svelte:fragment>
    Content 2
  </AccordionItem>
  <AccordionItem title="Title 3">Content 2</AccordionItem>
</Accordion>

<!-- svelte-ignore missing-declaration -->
<AccordionComponent />
