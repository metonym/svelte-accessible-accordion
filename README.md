# svelte-accessible-accordion

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Accessible accordion component.

Extracted from [svelte-uswds](https://github.com/metonym/svelte-uswds), this component follows [WAI-ARIA design guidelines for an Accordion](https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html) for accessbility.

## Install

```sh
yarn add -D svelte-accessible-accordion
# OR
npm i -D svelte-accessible-accordion
```

## Usage

```html
<script>
  import Accordion, { AccordionItem } from "svelte-accessible-accordion";
</script>

<Accordion>
  <AccordionItem title="Title 1">Content 1</AccordionItem>
  <AccordionItem title="Title 2">Content 2</AccordionItem>
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

## API

### `Accordion`

| Property name   | Value                        |
| :-------------- | :--------------------------- |
| multiselectable | `boolean` (default: `false`) |

### `AccordionItem`

| Property name | Value                                                      |
| :------------ | :--------------------------------------------------------- |
| id            | `string` (default: `"item" + Math.random().toString(36)"`) |
| title         | `string` or `slot:title` (default: `"Title"`)              |
| expanded      | `boolean` (default: `false`)                               |
| disabled      | `boolean` (default: `false`)                               |

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

[npm]: https://img.shields.io/npm/v/svelte-accessible-accordion.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-accessible-accordion
[build]: https://travis-ci.com/metonym/svelte-accessible-accordion.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-accessible-accordion
