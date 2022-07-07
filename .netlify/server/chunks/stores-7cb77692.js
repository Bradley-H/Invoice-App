import { c as create_ssr_component, v as validate_component, a as subscribe, e as escape, h as null_to_empty, k as getContext } from "./index-d2589f30.js";
import { T as Text, g as globalStore } from "./functionStore-31d719cc.js";
var BackButton_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "a.svelte-mjdnc8,button.svelte-mjdnc8{display:flex;justify-content:center;font-size:1rem;margin:1.5rem 0;cursor:pointer}i.svelte-mjdnc8{color:#7c5dfa;font-weight:bold;margin-right:0.5rem;font-size:1.2rem}")();
const css$1 = {
  code: "a.svelte-mjdnc8,button.svelte-mjdnc8{display:flex;justify-content:center;font-size:1rem;margin:1.5rem 0;cursor:pointer}i.svelte-mjdnc8{color:#7c5dfa;font-weight:bold;margin-right:0.5rem;font-size:1.2rem}",
  map: null
};
const BackButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css$1);
  return `${href ? `<a href="${"/"}" class="${"svelte-mjdnc8"}"><i class="${"fas fa-chevron-left svelte-mjdnc8"}"></i>${validate_component(Text, "Text").$$render($$result, { size: "h3", text: "Go back" }, {}, {})}</a>` : `<button class="${"svelte-mjdnc8"}"><i class="${"fas fa-chevron-left svelte-mjdnc8"}"></i>${validate_component(Text, "Text").$$render($$result, { size: "h3", text: "Go back" }, {}, {})}</button>`}`;
});
var InnerCard_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "div.svelte-buor3{display:block;border-top-left-radius:12px;border-top-right-radius:12px;border:2px solid black;padding:0.8rem;position:relative;width:100%;max-width:62.5rem}div.Dark.svelte-buor3{background-color:#2f3457}div.Light.svelte-buor3{background-color:#d8d8e8}div.modal.svelte-buor3{border-radius:0}div.modal.Dark.svelte-buor3{background-color:#242843}div.modal.Light.svelte-buor3{background-color:#c7c7df}")();
const css = {
  code: "div.svelte-buor3{display:block;border-top-left-radius:12px;border-top-right-radius:12px;border:2px solid black;padding:0.8rem;position:relative;width:100%;max-width:62.5rem}div.Dark.svelte-buor3{background-color:#2f3457}div.Light.svelte-buor3{background-color:#d8d8e8}div.modal.svelte-buor3{border-radius:0}div.modal.Dark.svelte-buor3{background-color:#242843}div.modal.Light.svelte-buor3{background-color:#c7c7df}",
  map: null
};
const InnerCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  let { modal = false } = $$props;
  if ($$props.modal === void 0 && $$bindings.modal && modal !== void 0)
    $$bindings.modal(modal);
  $$result.css.add(css);
  $$unsubscribe_globalStore();
  return `<div class="${[
    escape(null_to_empty($globalStore.theme)) + " svelte-buor3",
    modal ? "modal" : ""
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>`;
});
var ModalPrompt_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".prompt.svelte-1vb4462{display:flex;justify-content:center;align-items:center;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:100%;max-width:600px;z-index:5;padding:1.5rem;text-align:center}.overlay.svelte-1vb4462{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:4}.btns.svelte-1vb4462{display:flex;justify-content:space-around;margin-top:20px}")();
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
export { BackButton as B, InnerCard as I, page as p };
