/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AccordionProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["ul"]> {
  /**
   * @default false
   */
  multiselect?: boolean;
}

export default class Accordion extends SvelteComponentTyped<
  AccordionProps,
  {},
  { default: {} }
> {}
