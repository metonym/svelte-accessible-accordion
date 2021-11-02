/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AccordionProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["ul"]> {
  /**
   * Set to `true` to for multiple accordion items to be expandable
   * @default false
   */
  multiselect?: boolean;
}

export default class Accordion extends SvelteComponentTyped<
  AccordionProps,
  {},
  { default: {} }
> {}
