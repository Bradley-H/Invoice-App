var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  B: () => BackButton,
  I: () => InnerCard,
  p: () => page
});
var import_index_6b830c0a = __toModule(require("./index-6b830c0a.js"));
var import_functionStore_2bd81cb2 = __toModule(require("./functionStore-2bd81cb2.js"));
var BackButton_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.svelte-1l6v9yg,button.svelte-1l6v9yg{display:flex;justify-content:center;font-size:1rem;margin:1.5rem 0;cursor:pointer}i.svelte-1l6v9yg{color:#7C5DFAFF;font-weight:bold;margin-right:0.5rem;font-size:1.2rem}",
  map: null
};
const BackButton = (0, import_index_6b830c0a.c)(($$result, $$props, $$bindings, slots) => {
  let { href = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css$1);
  return `${href ? `<a href="${"/"}" class="${"svelte-1l6v9yg"}"><i class="${"fas fa-chevron-left svelte-1l6v9yg"}"></i>${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "h3", text: "Go back" }, {}, {})}</a>` : `<button class="${"svelte-1l6v9yg"}"><i class="${"fas fa-chevron-left svelte-1l6v9yg"}"></i>${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "h3", text: "Go back" }, {}, {})}</button>`}`;
});
var InnerCard_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-k32ir6{display:block;border-top-left-radius:12px;border-top-right-radius:12px;border:2px solid black;padding:0.8rem;position:relative;width:100%;max-width:81.25rem}div.Dark.svelte-k32ir6{background-color:#2f3457}div.Light.svelte-k32ir6{background-color:#d8d8e8}div.modal.svelte-k32ir6{border-radius:0}div.modal.Dark.svelte-k32ir6{background-color:#242843}div.modal.Light.svelte-k32ir6{background-color:#c7c7df}",
  map: null
};
const InnerCard = (0, import_index_6b830c0a.c)(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_6b830c0a.a)(import_functionStore_2bd81cb2.g, (value) => $globalStore = value);
  let { modal = false } = $$props;
  if ($$props.modal === void 0 && $$bindings.modal && modal !== void 0)
    $$bindings.modal(modal);
  $$result.css.add(css);
  $$unsubscribe_globalStore();
  return `<div class="${[
    (0, import_index_6b830c0a.e)((0, import_index_6b830c0a.g)($globalStore.theme)) + " svelte-k32ir6",
    modal ? "modal" : ""
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>`;
});
var ModalPrompt_svelte_svelte_type_style_lang = "";
const getStores = () => {
  const stores = (0, import_index_6b830c0a.i)("__svelte__");
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
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
