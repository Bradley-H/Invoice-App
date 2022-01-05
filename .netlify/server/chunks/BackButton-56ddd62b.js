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
  B: () => BackButton
});
var import_index_3930c651 = __toModule(require("./index-3930c651.js"));
var import_functionStore_b30ced0b = __toModule(require("./functionStore-b30ced0b.js"));
var BackButton_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-gp9t8m,button.svelte-gp9t8m{display:flex;justify-content:center;align-items:center;font-size:1rem;margin:1.5rem 0;cursor:pointer}i.svelte-gp9t8m{color:#7C5DFAFF;font-weight:bold;margin-right:0.5rem;font-size:1.2rem}",
  map: null
};
const BackButton = (0, import_index_3930c651.c)(($$result, $$props, $$bindings, slots) => {
  let { href = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css);
  return `${href ? `<a href="${"/"}" class="${"svelte-gp9t8m"}"><i class="${"fas fa-chevron-left svelte-gp9t8m"}"></i>${(0, import_index_3930c651.v)(import_functionStore_b30ced0b.T, "Text").$$render($$result, { size: "h3", text: "Go back" }, {}, {})}</a>` : `<button class="${"svelte-gp9t8m"}"><i class="${"fas fa-chevron-left svelte-gp9t8m"}"></i>${(0, import_index_3930c651.v)(import_functionStore_b30ced0b.T, "Text").$$render($$result, { size: "h3", text: "Go back" }, {}, {})}</button>`}`;
});
