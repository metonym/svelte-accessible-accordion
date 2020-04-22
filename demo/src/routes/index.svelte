<script>
  import Accordion, { AccordionItem } from "svelte-accessible-accordion";
</script>

<svelte:head>
  <title>svelte-accessible-accordion</title>
</svelte:head>

<Accordion multiselectable>
  <AccordionItem title="First Amendment" expanded>
    Congress shall make no law respecting an establishment of religion, or
    prohibiting the free exercise thereof; or abridging the freedom of speech,
    or of the press; or the right of the people peaceably to assemble, and to
    petition the Government for a redress of grievances.
  </AccordionItem>
  <AccordionItem title="Second Amendment">
    A well regulated Militia, being necessary to the security of a free State,
    the right of the people to keep and bear Arms, shall not be infringed.
  </AccordionItem>
  <AccordionItem title="Third Amendment">
    No Soldier shall, in time of peace be quartered in any house, without the
    consent of the Owner, nor in time of war, but in a manner to be prescribed
    by law.
  </AccordionItem>
</Accordion>
