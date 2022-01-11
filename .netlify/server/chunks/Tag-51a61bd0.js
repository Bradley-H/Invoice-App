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
  T: () => Tag
});
var import_index_6b830c0a = __toModule(require("./index-6b830c0a.js"));
var import_functionStore_2bd81cb2 = __toModule(require("./functionStore-2bd81cb2.js"));
var Tag_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(min-width: 768px){div.svelte-3uyvkz.svelte-3uyvkz{margin:0}}div.svelte-3uyvkz h3.svelte-3uyvkz{display:flex;justify-content:center;align-items:center;text-transform:capitalize;height:3rem;border-radius:5px;width:8.75rem}div.svelte-3uyvkz h3.Light.paid.svelte-3uyvkz{color:#189418;background-color:rgba(2, 172, 11, 0.2)}div.svelte-3uyvkz h3.Light.pending.svelte-3uyvkz{color:#a58428;background-color:rgba(199, 165, 15, 0.15)}div.svelte-3uyvkz h3.Light.draft.svelte-3uyvkz{color:#e6e6e6;background-color:rgba(41, 41, 41, 0.5)}div.svelte-3uyvkz h3.Dark.paid.svelte-3uyvkz{color:#18a777;background-color:rgba(61, 179, 61, 0.17)}div.svelte-3uyvkz h3.Dark.pending.svelte-3uyvkz{color:#ca980d;background-color:rgba(221, 182, 6, 0.15)}div.svelte-3uyvkz h3.Dark.draft.svelte-3uyvkz{color:#e6e6e6;background-color:rgba(41, 41, 41, 0.5)}",
  map: null
};
const Tag = (0, import_index_6b830c0a.c)(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_6b830c0a.a)(import_functionStore_2bd81cb2.g, (value) => $globalStore = value);
  let { status } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  $$result.css.add(css);
  $$unsubscribe_globalStore();
  return `<div class="${(0, import_index_6b830c0a.e)((0, import_index_6b830c0a.g)(status)) + " svelte-3uyvkz"}"><h3 class="${(0, import_index_6b830c0a.e)($globalStore.theme) + " " + (0, import_index_6b830c0a.e)(status) + " svelte-3uyvkz"}">${(0, import_index_6b830c0a.e)(status)}</h3></div>`;
});