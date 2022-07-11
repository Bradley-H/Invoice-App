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
  F: () => FormField,
  a: () => options1,
  o: () => options
});
module.exports = __toCommonJS(stdin_exports);
var import_index_b6406b22 = require("./index-b6406b22.js");
var import_functionStore_d6f5ac9b = require("./functionStore-d6f5ac9b.js");
var FormField_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1b38cb9.svelte-1b38cb9{width:100%}div.title.svelte-1b38cb9.svelte-1b38cb9{margin-bottom:0.7rem}div.svelte-1b38cb9 input.svelte-1b38cb9,div.svelte-1b38cb9 select.svelte-1b38cb9{padding:0.8rem;border-radius:5px;font-weight:bold;width:100%;height:3.8rem}div.svelte-1b38cb9 input.invalid.svelte-1b38cb9,div.svelte-1b38cb9 select.invalid.svelte-1b38cb9{border:1px solid #ec5757}div.svelte-1b38cb9 input.Dark.svelte-1b38cb9,div.svelte-1b38cb9 select.Dark.svelte-1b38cb9{background-color:#21243c;color:#fff}div.svelte-1b38cb9 input.Light.svelte-1b38cb9,div.svelte-1b38cb9 select.Light.svelte-1b38cb9{background-color:#b1b1d2;color:black}div.svelte-1b38cb9 input.svelte-1b38cb9:disabled,div.svelte-1b38cb9 select.svelte-1b38cb9:disabled{opacity:0.6}p.svelte-1b38cb9.svelte-1b38cb9{display:none;color:#ec5757;margin:0.3rem 0}p.invalid.svelte-1b38cb9.svelte-1b38cb9{display:block}select.svelte-1b38cb9.svelte-1b38cb9{border:none;margin:0;font-size:1.1rem;height:3.5rem}input[type=number].svelte-1b38cb9.svelte-1b38cb9{appearance:textfield}",
  map: null
};
const FormField = (0, import_index_b6406b22.c)(($$result, $$props, $$bindings, slots) => {
  let theme;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_b6406b22.a)(import_functionStore_d6f5ac9b.g, (value2) => $globalStore = value2);
  let { form = "text" } = $$props;
  let { title = false } = $$props;
  let { id = "" } = $$props;
  let { text = "" } = $$props;
  let { value } = $$props;
  let { options: options2 = [] } = $$props;
  let { valid = false } = $$props;
  let { disabled = false } = $$props;
  let { placeholder = "" } = $$props;
  let { invalidMessage = "" } = $$props;
  let touched = false;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.options === void 0 && $$bindings.options && options2 !== void 0)
    $$bindings.options(options2);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.invalidMessage === void 0 && $$bindings.invalidMessage && invalidMessage !== void 0)
    $$bindings.invalidMessage(invalidMessage);
  $$result.css.add(css);
  theme = $globalStore.theme;
  $$unsubscribe_globalStore();
  return `<div class="${["svelte-1b38cb9", title ? "title" : ""].join(" ").trim()}"><label ${disabled ? "disabled" : ""}${(0, import_index_b6406b22.j)("for", id, 0)}>${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.T, "Text").$$render($$result, { disabled, size: "p", title: true, text }, {}, {})}</label>
${form === "text" ? `<input ${disabled ? "disabled" : ""} class="${[
    (0, import_index_b6406b22.e)((0, import_index_b6406b22.h)(theme), true) + " svelte-1b38cb9",
    !valid && touched ? "invalid" : ""
  ].join(" ").trim()}"${(0, import_index_b6406b22.j)("id", id, 0)} type="${"text"}"${(0, import_index_b6406b22.j)("placeholder", placeholder, 0)}${(0, import_index_b6406b22.j)("value", value, 0)}>` : `${form === "number" ? `<input ${disabled ? "disabled" : ""} class="${[
    (0, import_index_b6406b22.e)((0, import_index_b6406b22.h)(theme), true) + " svelte-1b38cb9",
    !valid && touched ? "invalid" : ""
  ].join(" ").trim()}"${(0, import_index_b6406b22.j)("id", id, 0)} type="${"number"}"${(0, import_index_b6406b22.j)("placeholder", placeholder, 0)}${(0, import_index_b6406b22.j)("value", value, 0)}>` : `${form === "date" ? `<input ${disabled ? "disabled" : ""}${(0, import_index_b6406b22.j)("id", id, 0)} type="${"date"}"${(0, import_index_b6406b22.j)("placeholder", placeholder, 0)} class="${["svelte-1b38cb9", !valid ? "invalid" : ""].join(" ").trim()}"${(0, import_index_b6406b22.j)("value", value, 0)}>` : `${form === "select" ? `<select class="${(0, import_index_b6406b22.e)((0, import_index_b6406b22.h)(theme), true) + " svelte-1b38cb9"}">${(0, import_index_b6406b22.f)(options2, (val) => {
    return `<option${(0, import_index_b6406b22.j)("value", val.value, 0)}>${(0, import_index_b6406b22.e)(val.text)}</option>`;
  })}</select>` : ``}`}`}`}
${invalidMessage && !valid && touched ? `<p class="${["svelte-1b38cb9", !valid ? "invalid" : ""].join(" ").trim()}">${(0, import_index_b6406b22.e)(invalidMessage)}</p>` : ``}</div>`;
});
const options = [
  { id: 0, text: "Within 30 Days", value: 30 },
  { id: 1, text: "Within 60 Days", value: 60 }
];
const options1 = [
  { id: 0, text: "All", value: "all" },
  { id: 1, text: "Paid", value: "paid" },
  { id: 2, text: "Pending", value: "pending" },
  { id: 3, text: "Draft", value: "draft" }
];
