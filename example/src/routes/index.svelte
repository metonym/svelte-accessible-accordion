<script>
  import { Accordion, AccordionItem } from "../../../src";
</script>

<Accordion>
  <AccordionItem>
    <strong slot="title" style="color: red">Title 1</strong>
    By default, only one accordion item can be expanded at one time. Set `multiselect`
    to allow multi-item expansion.
  </AccordionItem>
  <AccordionItem title="Title 2">
    By default, only one accordion item can be expanded at one time. Set
    `multiselect` to allow multi-item expansion.
  </AccordionItem>
  <AccordionItem title="Title 3">
    By default, only one accordion item can be expanded at one time. Set
    `multiselect` to allow multi-item expansion.
  </AccordionItem>
</Accordion>

<style>
  :global([data-accordion]) {
    list-style: none;
    font-size: 2rem;
  }

  :global([data-accordion-item] button) {
    border: 0;
    border-bottom: 1px solid #e0e0e0;
    background: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    cursor: pointer;
    padding: 1rem;
    width: 100%;
    text-align: left;
  }

  :global([data-accordion-item] [role="region"]) {
    padding: 1rem;
  }
</style>
