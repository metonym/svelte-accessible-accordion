/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AccordionItemProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["li"]> {
  /**
   * Specify the accordion item title text.
   * Alternatively, use the "title" slot
   * @default "Title"
   */
  title?: string;

  /**
   * Set to `true` to expand the accordion item
   * @default false
   */
  expanded?: boolean;

  /**
   * Set to `true` to disable the accordion item
   * @default false
   */
  disabled?: boolean;

  /**
   * Specify the id
   * @default "item" + Math.random().toString(36)
   */
  id?: string;

  /**
   * Obtain a reference to the `button` element
   * @default null
   */
  ref?: null | HTMLButtonElement;
}

export default class AccordionItem extends SvelteComponentTyped<
  AccordionItemProps,
  { click: WindowEventMap["click"] },
  { default: {}; title: {} }
> {}
