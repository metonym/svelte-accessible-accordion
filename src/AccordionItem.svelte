<script>
  export let id = "item" + Math.random().toString(36);
  export let title = "Title";
  export let expanded = false;
  export let disabled = false;
  export let buttonClass = "";

  import { getContext, onDestroy } from "svelte";

  const ctx = getContext("Accordion");

  let ref = null;
  let unsubscribe = undefined;

  onDestroy(() => {
    if (ctx) ctx.remove({ id });
    if (unsubscribe) unsubscribe();
  });

  $: button_id = `button-${id}`;
  $: if (ctx) {
    ctx.add({ id, expanded });
    unsubscribe = ctx.items.subscribe((value) => {
      expanded = value[id];
    });
  }
</script>

<style>
  li {
    list-style: none;
    margin: 0.25rem 0;
  }

  button {
    border: 2px solid #e0e0e0;
    background: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    cursor: pointer;
    padding: 0.5rem 1rem;
    width: 100%;
    text-align: left;
  }

  div {
    padding: 1rem;
  }
</style>

<li {...$$restProps}>
  <button
    class={buttonClass}
    bind:this={ref}
    aria-expanded={expanded}
    aria-controls={id}
    aria-disabled={disabled}
    {disabled}
    id={button_id}
    on:click
    on:click={() => {
      if (ctx !== undefined) {
        ctx.toggle({ id, expanded: !expanded });
        if (expanded && ref && ref.getBoundingClientRect().top < 0) {
          ref.scrollIntoView();
        }
      }
    }}
    on:mouseover
    on:mouseenter
    on:mouseout
    on:focus
    on:blur
    on:keydown>
    <slot name="title">{title}</slot>
  </button>
  <div role="region" {id} aria-labelledby={button_id} hidden={!expanded}>
    <slot />
  </div>
</li>
