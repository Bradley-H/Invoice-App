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
  B: () => Button,
  F: () => FormField
});
var import_index_6b830c0a = __toModule(require("./index-6b830c0a.js"));
var import_functionStore_2bd81cb2 = __toModule(require("./functionStore-2bd81cb2.js"));
var FormField_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-jtnjs6.svelte-jtnjs6{width:100%}div.title.svelte-jtnjs6.svelte-jtnjs6{margin-bottom:0.7rem}div.svelte-jtnjs6 input.svelte-jtnjs6,div.svelte-jtnjs6 select.svelte-jtnjs6{padding:0.8rem;border-radius:5px;font-weight:bold;width:100%;height:3.5rem}div.svelte-jtnjs6 input.invalid.svelte-jtnjs6,div.svelte-jtnjs6 select.invalid.svelte-jtnjs6{border:1px solid #ec5757}div.svelte-jtnjs6 input.Dark.svelte-jtnjs6,div.svelte-jtnjs6 select.Dark.svelte-jtnjs6{background-color:#21243c;color:#fff}div.svelte-jtnjs6 input.Light.svelte-jtnjs6,div.svelte-jtnjs6 select.Light.svelte-jtnjs6{background-color:#b1b1d2;color:black}div.svelte-jtnjs6 input.svelte-jtnjs6:disabled,div.svelte-jtnjs6 select.svelte-jtnjs6:disabled{opacity:0.6}p.svelte-jtnjs6.svelte-jtnjs6{display:none;color:#ec5757;margin:0.3rem 0}p.invalid.svelte-jtnjs6.svelte-jtnjs6{display:block}select.svelte-jtnjs6.svelte-jtnjs6{border:none;margin:0;font-size:1.1rem;height:3.5rem}input[type=number].svelte-jtnjs6.svelte-jtnjs6{appearance:textfield}",
  map: null
};
const FormField = (0, import_index_6b830c0a.c)(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_6b830c0a.a)(import_functionStore_2bd81cb2.g, (value2) => $globalStore = value2);
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
  return `<div class="${["svelte-jtnjs6", title ? "title" : ""].join(" ").trim()}"><label ${disabled ? "disabled" : ""}${(0, import_index_6b830c0a.h)("for", id, 0)}>${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { disabled, size: "p", title: true, text }, {}, {})}</label>
${form === "text" ? `<input ${disabled ? "disabled" : ""} class="${[
    (0, import_index_6b830c0a.e)((0, import_index_6b830c0a.g)($globalStore.theme)) + " svelte-jtnjs6",
    !valid && touched ? "invalid" : ""
  ].join(" ").trim()}"${(0, import_index_6b830c0a.h)("id", id, 0)} type="${"text"}"${(0, import_index_6b830c0a.h)("placeholder", placeholder, 0)}${(0, import_index_6b830c0a.h)("value", value, 0)}>` : `${form === "number" ? `<input ${disabled ? "disabled" : ""} class="${[
    (0, import_index_6b830c0a.e)((0, import_index_6b830c0a.g)($globalStore.theme)) + " svelte-jtnjs6",
    !valid && touched ? "invalid" : ""
  ].join(" ").trim()}"${(0, import_index_6b830c0a.h)("step", step, 0)}${(0, import_index_6b830c0a.h)("id", id, 0)} type="${"number"}"${(0, import_index_6b830c0a.h)("placeholder", placeholder, 0)}${(0, import_index_6b830c0a.h)("value", value, 0)}>` : `${form === "date" ? `<input ${disabled ? "disabled" : ""}${(0, import_index_6b830c0a.h)("id", id, 0)} type="${"date"}"${(0, import_index_6b830c0a.h)("placeholder", placeholder, 0)} class="${["svelte-jtnjs6", !valid ? "invalid" : ""].join(" ").trim()}"${(0, import_index_6b830c0a.h)("value", value, 0)}>` : `${form === "select" ? `<select class="${(0, import_index_6b830c0a.e)((0, import_index_6b830c0a.g)($globalStore.theme)) + " svelte-jtnjs6"}">${(0, import_index_6b830c0a.d)(options, (val) => `<option${(0, import_index_6b830c0a.h)("value", val.value, 0)}>${(0, import_index_6b830c0a.e)(val.text)}</option>`)}</select>` : ``}`}`}`}
${invalidMessage && !valid && touched ? `<p class="${["svelte-jtnjs6", !valid ? "invalid" : ""].join(" ").trim()}">${(0, import_index_6b830c0a.e)(invalidMessage)}</p>` : ``}</div>`;
});
const css = {
  code: "a.svelte-1qedrgu.svelte-1qedrgu,button.svelte-1qedrgu.svelte-1qedrgu{display:flex;justify-content:center;align-items:center;padding:0.5rem;font-weight:bold;min-width:5rem;font-size:0.75rem;min-height:2.5rem;max-height:5.5rem;cursor:pointer}@media(min-width: 520px){a.svelte-1qedrgu.svelte-1qedrgu,button.svelte-1qedrgu.svelte-1qedrgu{font-size:0.875rem;min-width:6rem}}@media(min-width: 768px){a.svelte-1qedrgu.svelte-1qedrgu,button.svelte-1qedrgu.svelte-1qedrgu{font-size:1rem;min-width:8.25rem}}a.primary.svelte-1qedrgu.svelte-1qedrgu,button.primary.svelte-1qedrgu.svelte-1qedrgu{background-color:#7C5DFAFF}a.secondary.svelte-1qedrgu.svelte-1qedrgu,button.secondary.svelte-1qedrgu.svelte-1qedrgu{background-color:#7078b2;color:white}a.accent.svelte-1qedrgu.svelte-1qedrgu,button.accent.svelte-1qedrgu.svelte-1qedrgu{background-color:#7e88C3}a.danger.svelte-1qedrgu.svelte-1qedrgu,button.danger.svelte-1qedrgu.svelte-1qedrgu{background-color:#ec5757}a.fluid.svelte-1qedrgu.svelte-1qedrgu,button.fluid.svelte-1qedrgu.svelte-1qedrgu{width:100% !important}a.svelte-1qedrgu i.svelte-1qedrgu,button.svelte-1qedrgu i.svelte-1qedrgu{margin-right:0.7rem;font-size:1.1rem}a.rounded.svelte-1qedrgu.svelte-1qedrgu,button.rounded.svelte-1qedrgu.svelte-1qedrgu{border-radius:17px}a.medium.svelte-1qedrgu.svelte-1qedrgu,button.medium.svelte-1qedrgu.svelte-1qedrgu{width:7rem}a.small.svelte-1qedrgu.svelte-1qedrgu,button.small.svelte-1qedrgu.svelte-1qedrgu{width:5rem}a.large.svelte-1qedrgu.svelte-1qedrgu,button.large.svelte-1qedrgu.svelte-1qedrgu{width:9rem}button[disabled].svelte-1qedrgu.svelte-1qedrgu{opacity:0.5}",
  map: null
};
const Button = (0, import_index_6b830c0a.c)(($$result, $$props, $$bindings, slots) => {
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
    (0, import_index_6b830c0a.e)(type) + " " + (0, import_index_6b830c0a.e)(size) + " svelte-1qedrgu",
    (rounded ? "rounded" : "") + " " + (fluid ? "fluid" : "")
  ].join(" ").trim()}"><i class="${"fas fa-" + (0, import_index_6b830c0a.e)(icon) + " svelte-1qedrgu"}"></i>${(0, import_index_6b830c0a.e)(text)}</button>` : `<a class="${(0, import_index_6b830c0a.e)((0, import_index_6b830c0a.g)(type)) + " svelte-1qedrgu"}"${(0, import_index_6b830c0a.h)("href", href, 0)}><i class="${"fas fa-" + (0, import_index_6b830c0a.e)(icon) + " svelte-1qedrgu"}"></i>${(0, import_index_6b830c0a.e)(text)}</a>`}`;
});
