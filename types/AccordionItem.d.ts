/// <reference types="svelte" />

export interface AccordionItemProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["li"]> {
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
   * @default ""
   */
  buttonClass?: string;
}

export default class AccordionItem {
  $$prop_def: AccordionItemProps;
  $$slot_def: {
    default: {};
    title: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: "mouseover", cb: (event: WindowEventMap["mouseover"]) => void): () => void;
  $on(eventname: "mouseenter", cb: (event: WindowEventMap["mouseenter"]) => void): () => void;
  $on(eventname: "mouseout", cb: (event: WindowEventMap["mouseout"]) => void): () => void;
  $on(eventname: "focus", cb: (event: WindowEventMap["focus"]) => void): () => void;
  $on(eventname: "blur", cb: (event: WindowEventMap["blur"]) => void): () => void;
  $on(eventname: "keydown", cb: (event: WindowEventMap["keydown"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
