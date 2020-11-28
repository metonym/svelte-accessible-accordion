# svelte-accessible-accordion

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Accessible accordion component for Svelte.

This Svelte component implements [WAI-ARIA design guidelines for an Accordion](https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html).

Try it in the [Svelte REPL](https://svelte.dev/repl/85be3a105c3f4fe0892150380914be96?version=3.30.0).

## Install

```bash
yarn add -D svelte-accessible-accordion
# OR
npm i -D svelte-accessible-accordion
```

## Usage

```svelte
<script>
  import Accordion, { AccordionItem } from "svelte-accessible-accordion";
</script>

<Accordion>
  <AccordionItem title="Title 1">Content 1</AccordionItem>
  <AccordionItem title="Title 2">Content 2</AccordionItem>
  <AccordionItem title="Title 3">Content 2</AccordionItem>
</Accordion>
```

### Multiselectable

By default, only one accordion item can be expanded at one time. Set `multiselectable` to allow multi-item expansion.

```svelte
<Accordion multiselectable>
  <AccordionItem title="Title 1">Content 1</AccordionItem>
  <AccordionItem title="Title 2">Content 2</AccordionItem>
</Accordion>
```

### Expanded items

Use the `expanded` prop to expand an accordion item.

```svelte
<AccordionItem title="Title 1" expanded>Content 1</AccordionItem>
```

### `AccordionItem` button class

Provide a button class using the `buttonClass` prop.

```svelte
<AccordionItem buttonClass="bg-gray-100">Content 1</AccordionItem>
```

## API

### `Accordion`

| Prop name   | Value                        |
| :-------------- | :--------------------------- |
| multiselectable | `boolean` (default: `false`) |

### `AccordionItem`

| Prop name | Value                                                      |
| :------------ | :--------------------------------------------------------- |
| id            | `string` (default: `"item" + Math.random().toString(36)"`) |
| title         | `string` or `slot:title` (default: `"Title"`)              |
| expanded      | `boolean` (default: `false`)                               |
| disabled      | `boolean` (default: `false`)                               |
| buttonClass   | `string` (default: `""`)                                   |

#### Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:focus
- on:blur
- on:keydown

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-accessible-accordion.svg?style=for-the-badge&color=%23ff3e00
[npm-url]: https://npmjs.com/package/svelte-accessible-accordion
[build]: https://img.shields.io/travis/com/metonym/svelte-accessible-accordion?color=28a745&style=for-the-badge
[build-badge]: https://travis-ci.com/metonym/svelte-accessible-accordion
