# svelte-accessible-accordion

[![NPM][npm]][npm-url]

> Accessible accordion component for Svelte.

This Svelte component implements [WAI-ARIA design guidelines for an Accordion](https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html).

**Note**: This component is _unstyled_ by default.

Try it in the [Svelte REPL](https://svelte.dev/repl/85be3a105c3f4fe0892150380914be96?version=3.30.0).

<!-- REPO_URL -->

---

<!-- TOC -->

## Install

```bash
yarn add -D svelte-accessible-accordion
# OR
npm i -D svelte-accessible-accordion
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

## Usage

### Basic

<!-- prettier-ignore-start -->
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
<!-- prettier-ignore-end -->

### Multiselect

By default, only one accordion item can be expanded at one time. Set `multiselect` to allow multi-item expansion.

<!-- prettier-ignore-start -->
```svelte
<Accordion multiselect>
  <AccordionItem title="Title 1">Content 1</AccordionItem>
  <AccordionItem title="Title 2">Content 2</AccordionItem>
  <AccordionItem title="Title 3">Content 2</AccordionItem>
</Accordion>
```
<!-- prettier-ignore-end -->

### Expanded items

Use the `expanded` prop to expand an accordion item.

<!-- prettier-ignore-start -->
```svelte
<Accordion>
  <AccordionItem expanded title="Title 1">Content 1</AccordionItem>
  <AccordionItem expanded title="Title 2">Content 2</AccordionItem>
  <AccordionItem expanded title="Title 3">Content 2</AccordionItem>
</Accordion>
```
<!-- prettier-ignore-end -->

## API

### Accordion

| Prop name   | Value                        |
| :---------- | :--------------------------- |
| multiselect | `boolean` (default: `false`) |

### AccordionItem

| Prop name | Value                                                      |
| :-------- | :--------------------------------------------------------- |
| id        | `string` (default: `"item" + Math.random().toString(36)"`) |
| title     | `string` or `slot:title` (default: `"Title"`)              |
| expanded  | `boolean` (default: `false`)                               |
| disabled  | `boolean` (default: `false`)                               |

#### Forwarded events

- on:click

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-accessible-accordion.svg?style=for-the-badge&color=%23ff3e00
[npm-url]: https://npmjs.com/package/svelte-accessible-accordion
