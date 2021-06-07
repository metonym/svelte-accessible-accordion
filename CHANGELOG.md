# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

- Out-of-the box themes
- Dispatch change event for `Accordion`

## [1.0.2](https://github.com/metonym/svelte-accessible-accordion/releases/tag/v1.0.2) - 2021-06-07

**Fixes**

- set `type="button"` on AccordionItem to prevent default button behavior when used in a form
- replace `onDestroy` with `onMount` in AccordionItem

**Documentation**

- add `ref` to AccordionItem prop list
- add example for disabling accordion items
- add example for binding to `expanded`

## [1.0.1](https://github.com/metonym/svelte-accessible-accordion/releases/tag/v1.0.1) - 2021-05-12

**Fixes**

- perform null check on element reference

**Documentation**

- add SvelteKit example located in the `example` folder

## [1.0.0](https://github.com/metonym/svelte-accessible-accordion/releases/tag/v1.0.0) - 2020-12-30

**Breaking Changes**

- Accordion `multiselectable` prop renamed to `multiselect`
- AccordionItem is unstyled by default
- All forwarded events except for "click" are removed from AccordionItem
- AccordionItem: `buttonClass` prop is removed

## [0.4.0](https://github.com/metonym/svelte-accessible-accordion/releases/tag/v0.4.0) - 2020-12-23

- Use `SvelteComponentTyped` interface for TypeScript definitions

## [0.3.0](https://github.com/metonym/svelte-accessible-accordion/releases/tag/v0.3.0) - 2020-11-28

- Add a `buttonClass` prop to `AccordionItem` ([PR #1](https://github.com/metonym/svelte-accessible-accordion/pull/1), thanks [@bgilhome-lds](https://github.com/bgilhome-lds)!)

## [0.2.0](https://github.com/metonym/svelte-accessible-accordion/releases/tag/v0.2.0) - 2020-11-24

- Add TypeScript definitions

## [0.1.0](https://github.com/metonym/svelte-accessible-accordion/releases/tag/v0.1.0) - 2020-04-22

- Initial release
