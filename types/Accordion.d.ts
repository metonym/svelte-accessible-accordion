/// <reference types="svelte" />

export interface AccordionProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["ul"]> {
  /**
   * @default false
   */
  multiselectable?: boolean;
}

export default class Accordion {
  $$prop_def: AccordionProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
