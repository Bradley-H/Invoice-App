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
  B: () => Button,
  F: () => FormField
});
module.exports = __toCommonJS(stdin_exports);
var import_index_80978f94 = require("./index-80978f94.js");
var import_functionStore_abc42331 = require("./functionStore-abc42331.js");
var FormField_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-1b38cb9.svelte-1b38cb9{width:100%}div.title.svelte-1b38cb9.svelte-1b38cb9{margin-bottom:0.7rem}div.svelte-1b38cb9 input.svelte-1b38cb9,div.svelte-1b38cb9 select.svelte-1b38cb9{padding:0.8rem;border-radius:5px;font-weight:bold;width:100%;height:3.8rem}div.svelte-1b38cb9 input.invalid.svelte-1b38cb9,div.svelte-1b38cb9 select.invalid.svelte-1b38cb9{border:1px solid #ec5757}div.svelte-1b38cb9 input.Dark.svelte-1b38cb9,div.svelte-1b38cb9 select.Dark.svelte-1b38cb9{background-color:#21243c;color:#fff}div.svelte-1b38cb9 input.Light.svelte-1b38cb9,div.svelte-1b38cb9 select.Light.svelte-1b38cb9{background-color:#b1b1d2;color:black}div.svelte-1b38cb9 input.svelte-1b38cb9:disabled,div.svelte-1b38cb9 select.svelte-1b38cb9:disabled{opacity:0.6}p.svelte-1b38cb9.svelte-1b38cb9{display:none;color:#ec5757;margin:0.3rem 0}p.invalid.svelte-1b38cb9.svelte-1b38cb9{display:block}select.svelte-1b38cb9.svelte-1b38cb9{border:none;margin:0;font-size:1.1rem;height:3.5rem}input[type=number].svelte-1b38cb9.svelte-1b38cb9{appearance:textfield}",
  map: null
};
const FormField = (0, import_index_80978f94.c)(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_80978f94.a)(import_functionStore_abc42331.g, (value2) => $globalStore = value2);
  let { form = "text" } = $$props;
  let { title = false } = $$props;
  let { id = "" } = $$props;
  let { text = "" } = $$props;
  let { value } = $$props;
  let { options = [] } = $$props;
  let { valid = false } = $$props;
  let { disabled = false } = $$props;
  let { placeholder = "" } = $$props;
  let { step = 0.1 } = $$props;
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
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.invalidMessage === void 0 && $$bindings.invalidMessage && invalidMessage !== void 0)
    $$bindings.invalidMessage(invalidMessage);
  $$result.css.add(css$1);
  $$unsubscribe_globalStore();
  return `<div class="${["svelte-1b38cb9", title ? "title" : ""].join(" ").trim()}"><label ${disabled ? "disabled" : ""}${(0, import_index_80978f94.h)("for", id, 0)}>${(0, import_index_80978f94.v)(import_functionStore_abc42331.T, "Text").$$render($$result, { disabled, size: "p", title: true, text }, {}, {})}</label>
${form === "text" ? `<input ${disabled ? "disabled" : ""} class="${[
    (0, import_index_80978f94.e)((0, import_index_80978f94.g)($globalStore.theme)) + " svelte-1b38cb9",
    !valid && touched ? "invalid" : ""
  ].join(" ").trim()}"${(0, import_index_80978f94.h)("id", id, 0)} type="${"text"}"${(0, import_index_80978f94.h)("placeholder", placeholder, 0)}${(0, import_index_80978f94.h)("value", value, 0)}>` : `${form === "number" ? `<input ${disabled ? "disabled" : ""} class="${[
    (0, import_index_80978f94.e)((0, import_index_80978f94.g)($globalStore.theme)) + " svelte-1b38cb9",
    !valid && touched ? "invalid" : ""
  ].join(" ").trim()}"${(0, import_index_80978f94.h)("step", step, 0)}${(0, import_index_80978f94.h)("id", id, 0)} type="${"number"}"${(0, import_index_80978f94.h)("placeholder", placeholder, 0)}${(0, import_index_80978f94.h)("value", value, 0)}>` : `${form === "date" ? `<input ${disabled ? "disabled" : ""}${(0, import_index_80978f94.h)("id", id, 0)} type="${"date"}"${(0, import_index_80978f94.h)("placeholder", placeholder, 0)} class="${["svelte-1b38cb9", !valid ? "invalid" : ""].join(" ").trim()}"${(0, import_index_80978f94.h)("value", value, 0)}>` : `${form === "select" ? `<select class="${(0, import_index_80978f94.e)((0, import_index_80978f94.g)($globalStore.theme)) + " svelte-1b38cb9"}">${(0, import_index_80978f94.d)(options, (val) => {
    return `<option${(0, import_index_80978f94.h)("value", val.value, 0)}>${(0, import_index_80978f94.e)(val.text)}</option>`;
  })}</select>` : ``}`}`}`}
${invalidMessage && !valid && touched ? `<p class="${["svelte-1b38cb9", !valid ? "invalid" : ""].join(" ").trim()}">${(0, import_index_80978f94.e)(invalidMessage)}</p>` : ``}</div>`;
});
const css = {
  code: "a.svelte-1cwhfm4.svelte-1cwhfm4,button.svelte-1cwhfm4.svelte-1cwhfm4{display:flex;justify-content:center;align-items:center;padding:0.5rem;font-weight:bold;min-width:5rem;font-size:0.75rem;min-height:2.5rem;max-height:5.5rem;cursor:pointer}@media(min-width: 520px){a.svelte-1cwhfm4.svelte-1cwhfm4,button.svelte-1cwhfm4.svelte-1cwhfm4{font-size:0.875rem;min-width:6rem}}@media(min-width: 768px){a.svelte-1cwhfm4.svelte-1cwhfm4,button.svelte-1cwhfm4.svelte-1cwhfm4{font-size:1rem;min-width:8.25rem}}a.primary.svelte-1cwhfm4.svelte-1cwhfm4,button.primary.svelte-1cwhfm4.svelte-1cwhfm4{background-color:#7c5dfa}a.secondary.svelte-1cwhfm4.svelte-1cwhfm4,button.secondary.svelte-1cwhfm4.svelte-1cwhfm4{background-color:#7078b2;color:white}a.accent.svelte-1cwhfm4.svelte-1cwhfm4,button.accent.svelte-1cwhfm4.svelte-1cwhfm4{background-color:#7e88C3}a.danger.svelte-1cwhfm4.svelte-1cwhfm4,button.danger.svelte-1cwhfm4.svelte-1cwhfm4{background-color:#ec5757}a.fluid.svelte-1cwhfm4.svelte-1cwhfm4,button.fluid.svelte-1cwhfm4.svelte-1cwhfm4{width:100% !important}a.svelte-1cwhfm4 i.svelte-1cwhfm4,button.svelte-1cwhfm4 i.svelte-1cwhfm4{margin-right:0.7rem;font-size:1.1rem}a.rounded.svelte-1cwhfm4.svelte-1cwhfm4,button.rounded.svelte-1cwhfm4.svelte-1cwhfm4{border-radius:20px}a.medium.svelte-1cwhfm4.svelte-1cwhfm4,button.medium.svelte-1cwhfm4.svelte-1cwhfm4{width:7rem}a.small.svelte-1cwhfm4.svelte-1cwhfm4,button.small.svelte-1cwhfm4.svelte-1cwhfm4{width:5rem}a.large.svelte-1cwhfm4.svelte-1cwhfm4,button.large.svelte-1cwhfm4.svelte-1cwhfm4{width:9rem}button[disabled].svelte-1cwhfm4.svelte-1cwhfm4{opacity:0.5}",
  map: null
};
const Button = (0, import_index_80978f94.c)(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { text = "" } = $$props;
  let { type = "primary" } = $$props;
  let { icon = "" } = $$props;
  let { size = null } = $$props;
  let { fluid = false } = $$props;
  let { disabled = false } = $$props;
  let { rounded = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  $$result.css.add(css);
  return `${!href ? `<button ${disabled ? "disabled" : ""} class="${[
    (0, import_index_80978f94.e)(type) + " " + (0, import_index_80978f94.e)(size) + " svelte-1cwhfm4",
    (rounded ? "rounded" : "") + " " + (fluid ? "fluid" : "")
  ].join(" ").trim()}"><i class="${"fas fa-" + (0, import_index_80978f94.e)(icon) + " svelte-1cwhfm4"}"></i>${(0, import_index_80978f94.e)(text)}</button>` : `<a class="${(0, import_index_80978f94.e)((0, import_index_80978f94.g)(type)) + " svelte-1cwhfm4"}"${(0, import_index_80978f94.h)("href", href, 0)}><i class="${"fas fa-" + (0, import_index_80978f94.e)(icon) + " svelte-1cwhfm4"}"></i>${(0, import_index_80978f94.e)(text)}</a>`}`;
});
