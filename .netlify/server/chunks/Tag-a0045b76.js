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
  T: () => Tag
});
module.exports = __toCommonJS(stdin_exports);
var import_index_d2589f30 = require("./index-d2589f30.js");
var import_functionStore_31d719cc = require("./functionStore-31d719cc.js");
var Tag_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "@media(min-width: 768px){div.svelte-17lhqxy.svelte-17lhqxy{margin:0}}div.svelte-17lhqxy h3.svelte-17lhqxy{display:flex;justify-content:center;align-items:center;text-transform:capitalize;height:3rem;border-radius:5px;width:8.75rem}div.svelte-17lhqxy h3.Light.paid.svelte-17lhqxy{color:rgb(43, 148, 43);background-color:rgba(24, 109, 28, 0.3)}div.svelte-17lhqxy h3.Light.pending.svelte-17lhqxy{color:#a58428;background-color:rgba(199, 165, 15, 0.15)}div.svelte-17lhqxy h3.Light.draft.svelte-17lhqxy{color:#e6e6e6;background-color:rgba(21, 21, 21, 0.6)}div.svelte-17lhqxy h3.Dark.paid.svelte-17lhqxy{color:#0dc789;background-color:rgba(45, 100, 45, 0.17)}div.svelte-17lhqxy h3.Dark.pending.svelte-17lhqxy{color:#ca980d;background-color:rgba(221, 182, 6, 0.15)}div.svelte-17lhqxy h3.Dark.draft.svelte-17lhqxy{color:#e6e6e6;background-color:rgba(56, 56, 56, 0.5)}")();
const css = {
  code: "@media(min-width: 768px){div.svelte-17lhqxy.svelte-17lhqxy{margin:0}}div.svelte-17lhqxy h3.svelte-17lhqxy{display:flex;justify-content:center;align-items:center;text-transform:capitalize;height:3rem;border-radius:5px;width:8.75rem}div.svelte-17lhqxy h3.Light.paid.svelte-17lhqxy{color:rgb(43, 148, 43);background-color:rgba(24, 109, 28, 0.3)}div.svelte-17lhqxy h3.Light.pending.svelte-17lhqxy{color:#a58428;background-color:rgba(199, 165, 15, 0.15)}div.svelte-17lhqxy h3.Light.draft.svelte-17lhqxy{color:#e6e6e6;background-color:rgba(21, 21, 21, 0.6)}div.svelte-17lhqxy h3.Dark.paid.svelte-17lhqxy{color:#0dc789;background-color:rgba(45, 100, 45, 0.17)}div.svelte-17lhqxy h3.Dark.pending.svelte-17lhqxy{color:#ca980d;background-color:rgba(221, 182, 6, 0.15)}div.svelte-17lhqxy h3.Dark.draft.svelte-17lhqxy{color:#e6e6e6;background-color:rgba(56, 56, 56, 0.5)}",
  map: null
};
const Tag = (0, import_index_d2589f30.c)(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_d2589f30.a)(import_functionStore_31d719cc.g, (value) => $globalStore = value);
  let { status = "" } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  $$result.css.add(css);
  $$unsubscribe_globalStore();
  return `<div class="${(0, import_index_d2589f30.e)((0, import_index_d2589f30.h)(status)) + " svelte-17lhqxy"}"><h3 class="${(0, import_index_d2589f30.e)($globalStore.theme) + " " + (0, import_index_d2589f30.e)(status) + " svelte-17lhqxy"}">${(0, import_index_d2589f30.e)(status)}</h3></div>`;
});
