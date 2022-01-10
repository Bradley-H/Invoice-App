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
  code: "@media(min-width: 768px){div.svelte-20ag7m.svelte-20ag7m{margin:0}}div.svelte-20ag7m h3.svelte-20ag7m{display:flex;justify-content:center;align-items:center;text-transform:capitalize;height:3rem;border-radius:5px;width:8.75rem}div.svelte-20ag7m h3.paid.svelte-20ag7m{color:#1ab581;background-color:rgba(61, 179, 61, 0.17)}div.svelte-20ag7m h3.pending.svelte-20ag7m{color:#ca980d;background-color:rgba(221, 182, 6, 0.15)}div.svelte-20ag7m h3.draft.svelte-20ag7m{color:#e6e6e6;background-color:rgba(41, 41, 41, 0.5)}",
  map: null
};
const Tag = (0, import_index_6b830c0a.c)(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  $$result.css.add(css);
  return `<div class="${(0, import_index_6b830c0a.e)((0, import_index_6b830c0a.g)(status)) + " svelte-20ag7m"}"><h3 class="${(0, import_index_6b830c0a.e)((0, import_index_6b830c0a.g)(status)) + " svelte-20ag7m"}">${(0, import_index_6b830c0a.e)(status)}</h3></div>`;
});
