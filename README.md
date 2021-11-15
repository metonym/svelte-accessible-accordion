# svelte-accessible-accordion

[![NPM][npm]][npm-url]

> Accessible accordion component for Svelte

<!-- REPO_URL -->

`svelte-accessible-accordion` implements [WAI-ARIA design guidelines for an Accordion](https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html).

**Note**: This component is _unstyled_ by design. See the [Styling section](#styling).

Try it in the [Svelte REPL](https://svelte.dev/repl/85be3a105c3f4fe0892150380914be96).

---

<!-- TOC -->

## Installation

**Yarn**

```bash
yarn add -D svelte-accessible-accordion
```

**NPM**

```bash
npm i -D svelte-accessible-accordion
```

## Usage

### Basic

```svelte
<script>
  import { Accordion, AccordionItem } from "svelte-accessible-accordion";
</script>

<Accordion>
  <AccordionItem title="Title 1">Content 1</AccordionItem>
  <AccordionItem title="Title 2">Content 2</AccordionItem>
  <AccordionItem title="Title 3">Content 2</AccordionItem>
</Accordion>
```

### Slottable title

Customize the accordion title by using the `"title"` slot.

```svelte
<Accordion>
  <AccordionItem>
    <strong slot="title" style="color: red">Title 1</strong>
    Content 1
  </AccordionItem>
  <AccordionItem title="Title 2">Content 2</AccordionItem>
  <AccordionItem title="Title 3">Content 2</AccordionItem>
</Accordion>
```

### Multiselectable items

By default, only one accordion item can be expanded at one time.

Set `multiselect` to allow multiple items to be expandable.

```svelte
<Accordion multiselect>
  <AccordionItem title="Title 1">Content 1</AccordionItem>
  <AccordionItem title="Title 2">Content 2</AccordionItem>
  <AccordionItem title="Title 3">Content 2</AccordionItem>
</Accordion>
```

### Expanded items

Use the `expanded` prop to expand an accordion item.

```svelte
<Accordion>
  <AccordionItem expanded title="Title 1">Content 1</AccordionItem>
  <AccordionItem expanded title="Title 2">Content 2</AccordionItem>
  <AccordionItem expanded title="Title 3">Content 2</AccordionItem>
</Accordion>
```

Bind to the `expanded` prop on the accordion item.

```svelte
<script>
  import { Accordion, AccordionItem } from "svelte-accessible-accordion";

  let expanded;
</script>

<Accordion>
  <AccordionItem bind:expanded title="Expanded? {expanded}">
    Content
  </AccordionItem>
</Accordion>
```

### Disabled items

Set `disabled` to `true` to disable an accordion item

```svelte
<Accordion>
  <AccordionItem disabled title="Title 1">Content 1</AccordionItem>
  <AccordionItem disabled title="Title 2">Content 2</AccordionItem>
  <AccordionItem title="Title 3">Content 2</AccordionItem>
</Accordion>
```

## Styling

Style the component by targeting the `[data-accordion]` and `[data-accordion-item]` attributes.

```css
[data-accordion] {
  list-style: none;
}

[data-accordion-item] button {
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid #e0e0e0;
  background: none;
  font: inherit;
  line-height: inherit;
  color: inherit;
  cursor: pointer;
  padding: 0.5rem 1rem;
  width: 100%;
  text-align: left;
}

[data-accordion-item] button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

[data-accordion-item] [role="region"] {
  padding: 1rem;
}
```

The semantic element structure resembles the following:

```yml
- ul [data-accordion] # Accordion
  - li [data-accordion-item] # AccordionItem
    - button
    - [role="region"]
```

## API

### Accordion

| Prop name   | Type      | Default value |
| :---------- | :-------- | :------------ |
| multiselect | `boolean` | `false`       |

### AccordionItem

| Prop name | Value                    | Default value                          |
| :-------- | :----------------------- | :------------------------------------- |
| id        | `string`                 | `"item" + Math.random().toString(36)"` |
| title     | `string` or `slot:title` | `"Title"`                              |
| expanded  | `boolean`                | `false`                                |
| disabled  | `boolean`                | `false`                                |
| ref       | `HTMLButtonElement`      | `null`                                 |

#### Forwarded events

- on:click

## TypeScript

Svelte version 3.31 or greater is required to use this component with TypeScript.

TypeScript definitions are located in the [types folder](./types).

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-accessible-accordion.svg?style=for-the-badge&color=%23ff3e00
[npm-url]: https://npmjs.com/package/svelte-accessible-accordion
