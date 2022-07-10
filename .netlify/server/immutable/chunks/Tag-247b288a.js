import { c as create_ssr_component, a as subscribe, e as escape, h as null_to_empty } from "./index-b6406b22.js";
import { g as globalStore } from "./functionStore-d6f5ac9b.js";
var Tag_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(min-width: 768px){div.svelte-17lhqxy.svelte-17lhqxy{margin:0}}div.svelte-17lhqxy h3.svelte-17lhqxy{display:flex;justify-content:center;align-items:center;text-transform:capitalize;height:3rem;border-radius:5px;width:8.75rem}div.svelte-17lhqxy h3.Light.paid.svelte-17lhqxy{color:rgb(43, 148, 43);background-color:rgba(24, 109, 28, 0.3)}div.svelte-17lhqxy h3.Light.pending.svelte-17lhqxy{color:#a58428;background-color:rgba(199, 165, 15, 0.15)}div.svelte-17lhqxy h3.Light.draft.svelte-17lhqxy{color:#e6e6e6;background-color:rgba(21, 21, 21, 0.6)}div.svelte-17lhqxy h3.Dark.paid.svelte-17lhqxy{color:#0dc789;background-color:rgba(45, 100, 45, 0.17)}div.svelte-17lhqxy h3.Dark.pending.svelte-17lhqxy{color:#ca980d;background-color:rgba(221, 182, 6, 0.15)}div.svelte-17lhqxy h3.Dark.draft.svelte-17lhqxy{color:#e6e6e6;background-color:rgba(56, 56, 56, 0.5)}",
  map: null
};
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  let { status = "" } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  $$result.css.add(css);
  $$unsubscribe_globalStore();
  return `<div class="${escape(null_to_empty(status), true) + " svelte-17lhqxy"}"><h3 class="${escape($globalStore.theme, true) + " " + escape(status, true) + " svelte-17lhqxy"}">${escape(status)}</h3></div>`;
});
export { Tag as T };
