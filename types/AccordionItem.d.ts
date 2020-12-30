/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AccordionItemProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["li"]> {
  /**
   * @default "item" + Math.random().toString(36)
   */
  id?: string;

  /**
   * @default "Title"
   */
  title?: string;

  /**
   * @default false
   */
  expanded?: boolean;

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default null
   */
  ref?: null | HTMLButtonElement;
}

export default class AccordionItem extends SvelteComponentTyped<
  AccordionItemProps,
  { click: WindowEventMap["click"] },
  { default: {}; title: {} }
> {}
