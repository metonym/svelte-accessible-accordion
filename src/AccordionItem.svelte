<script>
  /**
   * Specify the accordion item title text.
   * Alternatively, use the "title" slot
   */
  export let title = "Title";

  /**
   * Set to `true` to expand the accordion item
   */
  export let expanded = false;

  /**
   * Set to `true` to disable the accordion item
   */
  export let disabled = false;

  /**
   * Specify the id
   */
  export let id = "item" + Math.random().toString(36);

  /**
   * Obtain a reference to the `button` element
   */
  export let ref = null;

  import { getContext, onMount } from "svelte";

  const ctx = getContext("Accordion");

  let unsubscribe = undefined;

  onMount(() => {
    return () => {
      if (ctx) ctx.remove({ id });
      if (unsubscribe) unsubscribe();
    };
  });

  $: button_id = `button-${id}`;
  $: if (ctx) {
    ctx.add({ id, expanded });
    unsubscribe = ctx.items.subscribe((value) => {
      expanded = value[id];
    });
  }
</script>

<li data-accordion-item {...$$restProps}>
  <button
    bind:this={ref}
    type="button"
    aria-expanded={expanded}
    aria-controls={id}
    aria-disabled={disabled}
    {disabled}
    id={button_id}
    on:click
    on:click={() => {
      if (ctx) {
        ctx.toggle({ id, expanded: !expanded });
        if (expanded && ref && ref.getBoundingClientRect().top < 0) {
          ref.scrollIntoView();
        }
      }
    }}
  >
    <slot name="title">{title}</slot>
  </button>
  <div role="region" {id} aria-labelledby={button_id} hidden={!expanded}>
    <slot />
  </div>
</li>
