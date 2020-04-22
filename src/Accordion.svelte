<script>
  export let multiselectable = false;

  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  const items = writable({});

  setContext("Accordion", {
    items,
    add: item => {
      items.update(_ => ({ ..._, [item.id]: item.expanded }));
    },
    remove: item => {
      items.update(_ => {
        delete _[item.id];
        return _;
      });
    },
    toggle: item => {
      items.update(_ => {
        if (!multiselectable) {
          Object.keys(_).forEach(id => (_[id] = false));
        }

        return { ..._, [item.id]: item.expanded };
      });
    }
  });
</script>

<ul {...$$restProps}>
  <slot />
</ul>
