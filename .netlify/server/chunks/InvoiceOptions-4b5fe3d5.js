import { c as create_ssr_component, a as subscribe, j as add_attribute, v as validate_component, e as escape, h as null_to_empty, f as each } from "./index-d2589f30.js";
import { g as globalStore, T as Text } from "./functionStore-31d719cc.js";
var FormField_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "div.svelte-1b38cb9.svelte-1b38cb9{width:100%}div.title.svelte-1b38cb9.svelte-1b38cb9{margin-bottom:0.7rem}div.svelte-1b38cb9 input.svelte-1b38cb9,div.svelte-1b38cb9 select.svelte-1b38cb9{padding:0.8rem;border-radius:5px;font-weight:bold;width:100%;height:3.8rem}div.svelte-1b38cb9 input.invalid.svelte-1b38cb9,div.svelte-1b38cb9 select.invalid.svelte-1b38cb9{border:1px solid #ec5757}div.svelte-1b38cb9 input.Dark.svelte-1b38cb9,div.svelte-1b38cb9 select.Dark.svelte-1b38cb9{background-color:#21243c;color:#fff}div.svelte-1b38cb9 input.Light.svelte-1b38cb9,div.svelte-1b38cb9 select.Light.svelte-1b38cb9{background-color:#b1b1d2;color:black}div.svelte-1b38cb9 input.svelte-1b38cb9:disabled,div.svelte-1b38cb9 select.svelte-1b38cb9:disabled{opacity:0.6}p.svelte-1b38cb9.svelte-1b38cb9{display:none;color:#ec5757;margin:0.3rem 0}p.invalid.svelte-1b38cb9.svelte-1b38cb9{display:block}select.svelte-1b38cb9.svelte-1b38cb9{border:none;margin:0;font-size:1.1rem;height:3.5rem}input[type=number].svelte-1b38cb9.svelte-1b38cb9{appearance:textfield}")();
const css = {
  code: "div.svelte-1b38cb9.svelte-1b38cb9{width:100%}div.title.svelte-1b38cb9.svelte-1b38cb9{margin-bottom:0.7rem}div.svelte-1b38cb9 input.svelte-1b38cb9,div.svelte-1b38cb9 select.svelte-1b38cb9{padding:0.8rem;border-radius:5px;font-weight:bold;width:100%;height:3.8rem}div.svelte-1b38cb9 input.invalid.svelte-1b38cb9,div.svelte-1b38cb9 select.invalid.svelte-1b38cb9{border:1px solid #ec5757}div.svelte-1b38cb9 input.Dark.svelte-1b38cb9,div.svelte-1b38cb9 select.Dark.svelte-1b38cb9{background-color:#21243c;color:#fff}div.svelte-1b38cb9 input.Light.svelte-1b38cb9,div.svelte-1b38cb9 select.Light.svelte-1b38cb9{background-color:#b1b1d2;color:black}div.svelte-1b38cb9 input.svelte-1b38cb9:disabled,div.svelte-1b38cb9 select.svelte-1b38cb9:disabled{opacity:0.6}p.svelte-1b38cb9.svelte-1b38cb9{display:none;color:#ec5757;margin:0.3rem 0}p.invalid.svelte-1b38cb9.svelte-1b38cb9{display:block}select.svelte-1b38cb9.svelte-1b38cb9{border:none;margin:0;font-size:1.1rem;height:3.5rem}input[type=number].svelte-1b38cb9.svelte-1b38cb9{appearance:textfield}",
  map: null
};
const FormField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let theme;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = subscribe(globalStore, (value2) => $globalStore = value2);
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
  return `<div class="${["svelte-1b38cb9", title ? "title" : ""].join(" ").trim()}"><label ${disabled ? "disabled" : ""}${add_attribute("for", id, 0)}>${validate_component(Text, "Text").$$render($$result, { disabled, size: "p", title: true, text }, {}, {})}</label>
${form === "text" ? `<input ${disabled ? "disabled" : ""} class="${[
    escape(null_to_empty(theme)) + " svelte-1b38cb9",
    !valid && touched ? "invalid" : ""
  ].join(" ").trim()}"${add_attribute("id", id, 0)} type="${"text"}"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}>` : `${form === "number" ? `<input ${disabled ? "disabled" : ""} class="${[
    escape(null_to_empty(theme)) + " svelte-1b38cb9",
    !valid && touched ? "invalid" : ""
  ].join(" ").trim()}"${add_attribute("id", id, 0)} type="${"number"}"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}>` : `${form === "date" ? `<input ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)} type="${"date"}"${add_attribute("placeholder", placeholder, 0)} class="${["svelte-1b38cb9", !valid ? "invalid" : ""].join(" ").trim()}"${add_attribute("value", value, 0)}>` : `${form === "select" ? `<select class="${escape(null_to_empty(theme)) + " svelte-1b38cb9"}">${each(options2, (val) => {
    return `<option${add_attribute("value", val.value, 0)}>${escape(val.text)}</option>`;
  })}</select>` : ``}`}`}`}
${invalidMessage && !valid && touched ? `<p class="${["svelte-1b38cb9", !valid ? "invalid" : ""].join(" ").trim()}">${escape(invalidMessage)}</p>` : ``}</div>`;
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
export { FormField as F, options1 as a, options as o };
