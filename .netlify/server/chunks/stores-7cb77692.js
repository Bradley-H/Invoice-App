var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  B: () => BackButton,
  I: () => InnerCard,
  p: () => page
});
module.exports = __toCommonJS(stdin_exports);
var import_index_d2589f30 = require("./index-d2589f30.js");
var import_functionStore_31d719cc = require("./functionStore-31d719cc.js");
var BackButton_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "a.svelte-mjdnc8,button.svelte-mjdnc8{display:flex;justify-content:center;font-size:1rem;margin:1.5rem 0;cursor:pointer}i.svelte-mjdnc8{color:#7c5dfa;font-weight:bold;margin-right:0.5rem;font-size:1.2rem}")();
const css$1 = {
  code: "a.svelte-mjdnc8,button.svelte-mjdnc8{display:flex;justify-content:center;font-size:1rem;margin:1.5rem 0;cursor:pointer}i.svelte-mjdnc8{color:#7c5dfa;font-weight:bold;margin-right:0.5rem;font-size:1.2rem}",
  map: null
};
const BackButton = (0, import_index_d2589f30.c)(($$result, $$props, $$bindings, slots) => {
  let { href = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css$1);
  return `${href ? `<a href="${"/"}" class="${"svelte-mjdnc8"}"><i class="${"fas fa-chevron-left svelte-mjdnc8"}"></i>${(0, import_index_d2589f30.v)(import_functionStore_31d719cc.T, "Text").$$render($$result, { size: "h3", text: "Go back" }, {}, {})}</a>` : `<button class="${"svelte-mjdnc8"}"><i class="${"fas fa-chevron-left svelte-mjdnc8"}"></i>${(0, import_index_d2589f30.v)(import_functionStore_31d719cc.T, "Text").$$render($$result, { size: "h3", text: "Go back" }, {}, {})}</button>`}`;
});
var InnerCard_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "div.svelte-buor3{display:block;border-top-left-radius:12px;border-top-right-radius:12px;border:2px solid black;padding:0.8rem;position:relative;width:100%;max-width:62.5rem}div.Dark.svelte-buor3{background-color:#2f3457}div.Light.svelte-buor3{background-color:#d8d8e8}div.modal.svelte-buor3{border-radius:0}div.modal.Dark.svelte-buor3{background-color:#242843}div.modal.Light.svelte-buor3{background-color:#c7c7df}")();
const css = {
  code: "div.svelte-buor3{display:block;border-top-left-radius:12px;border-top-right-radius:12px;border:2px solid black;padding:0.8rem;position:relative;width:100%;max-width:62.5rem}div.Dark.svelte-buor3{background-color:#2f3457}div.Light.svelte-buor3{background-color:#d8d8e8}div.modal.svelte-buor3{border-radius:0}div.modal.Dark.svelte-buor3{background-color:#242843}div.modal.Light.svelte-buor3{background-color:#c7c7df}",
  map: null
};
const InnerCard = (0, import_index_d2589f30.c)(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_d2589f30.a)(import_functionStore_31d719cc.g, (value) => $globalStore = value);
  let { modal = false } = $$props;
  if ($$props.modal === void 0 && $$bindings.modal && modal !== void 0)
    $$bindings.modal(modal);
  $$result.css.add(css);
  $$unsubscribe_globalStore();
  return `<div class="${[
    (0, import_index_d2589f30.e)((0, import_index_d2589f30.h)($globalStore.theme)) + " svelte-buor3",
    modal ? "modal" : ""
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>`;
});
var ModalPrompt_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".prompt.svelte-1vb4462{display:flex;justify-content:center;align-items:center;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:100%;max-width:600px;z-index:5;padding:1.5rem;text-align:center}.overlay.svelte-1vb4462{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:4}.btns.svelte-1vb4462{display:flex;justify-content:space-around;margin-top:20px}")();
const getStores = () => {
  const stores = (0, import_index_d2589f30.k)("__svelte__");
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
