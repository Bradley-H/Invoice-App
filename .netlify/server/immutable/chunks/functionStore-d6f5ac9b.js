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
  C: () => Card,
  T: () => Text,
  a: () => closeModal,
  b: () => getInvoicesIndex,
  c: () => convertDate,
  e: () => emailValid,
  g: () => globalStore,
  n: () => numberWithCommas,
  s: () => strValid
});
module.exports = __toCommonJS(stdin_exports);
var import_index_b6406b22 = require("./index-b6406b22.js");
const subscriber_queue = [];
function writable(value, start = import_index_b6406b22.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_b6406b22.g)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_b6406b22.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_b6406b22.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
let globalStore = writable({
  theme: "Dark",
  modalStatus: null,
  invoices: []
});
var styles = "";
var Card_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "div.inv.svelte-1652flt,a.inv.svelte-1652flt,div.svelte-1652flt,a.svelte-1652flt{display:flex}div.modal.svelte-1652flt,a.modal.svelte-1652flt{display:flex;flex-direction:column}div.svelte-1652flt,a.svelte-1652flt{position:relative;width:100%;padding:0.6rem;margin-top:0.5rem}div.Dark.svelte-1652flt,a.Dark.svelte-1652flt{background-color:#242843}div.Light.svelte-1652flt,a.Light.svelte-1652flt{background-color:#d4d4e7}div.inv.svelte-1652flt,a.inv.svelte-1652flt{width:100%;border-radius:12px;margin:0.25rem 0;padding:0.75rem}div.modal.svelte-1652flt,a.modal.svelte-1652flt{height:100%;width:100%;z-index:2;overflow:auto;padding:1.5rem;margin:0}div.modal.Dark.svelte-1652flt,a.modal.Dark.svelte-1652flt{background-color:#161828}div.modal.Light.svelte-1652flt,a.modal.Light.svelte-1652flt{background-color:#c7c7df}.round.svelte-1652flt{border-radius:8px}",
  map: null
};
const Card = (0, import_index_b6406b22.c)(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_b6406b22.a)(globalStore, (value) => $globalStore = value);
  let { inv = false } = $$props;
  let { id = "" } = $$props;
  let { modal = false } = $$props;
  let { round = false } = $$props;
  if ($$props.inv === void 0 && $$bindings.inv && inv !== void 0)
    $$bindings.inv(inv);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.modal === void 0 && $$bindings.modal && modal !== void 0)
    $$bindings.modal(modal);
  if ($$props.round === void 0 && $$bindings.round && round !== void 0)
    $$bindings.round(round);
  $$result.css.add(css$2);
  $$unsubscribe_globalStore();
  return `${!inv ? `<div class="${[
    (0, import_index_b6406b22.e)((0, import_index_b6406b22.h)($globalStore.theme), true) + " svelte-1652flt",
    (round ? "round" : "") + " " + (modal ? "modal" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>` : `<a href="${"/" + (0, import_index_b6406b22.e)(id, true)}" class="${[
    (0, import_index_b6406b22.e)((0, import_index_b6406b22.h)($globalStore.theme), true) + " svelte-1652flt",
    inv ? "inv" : ""
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</a>`}`;
});
var Text_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".disabled.svelte-zyf5ro{color:grey}.title.svelte-zyf5ro{margin-bottom:0.3rem}",
  map: null
};
const Text = (0, import_index_b6406b22.c)(($$result, $$props, $$bindings, slots) => {
  let theme;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_b6406b22.a)(globalStore, (value) => $globalStore = value);
  let { text = "Hello World" } = $$props;
  let { size = "h1" } = $$props;
  let { title = false } = $$props;
  let { disabled = false } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  $$result.css.add(css$1);
  theme = $globalStore.theme;
  $$unsubscribe_globalStore();
  return `${((tag) => {
    return tag ? `<${size} class="${[
      "txtColor" + (0, import_index_b6406b22.e)(theme, true) + " svelte-zyf5ro",
      (disabled ? "disabled" : "") + " " + (title ? "title" : "")
    ].join(" ").trim()}">${(0, import_index_b6406b22.i)(tag) ? "" : `${(0, import_index_b6406b22.e)(text)}`}${(0, import_index_b6406b22.i)(tag) ? "" : `</${tag}>`}` : "";
  })(size)}`;
});
var Button_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-10q8qgs.svelte-10q8qgs,button.svelte-10q8qgs.svelte-10q8qgs{display:flex;justify-content:center;align-items:center;padding:0.5rem;font-weight:bold;min-width:5rem;font-size:0.75rem;height:100%;cursor:pointer}@media(min-width: 520px){a.svelte-10q8qgs.svelte-10q8qgs,button.svelte-10q8qgs.svelte-10q8qgs{font-size:0.875rem;min-width:6rem}}@media(min-width: 768px){a.svelte-10q8qgs.svelte-10q8qgs,button.svelte-10q8qgs.svelte-10q8qgs{font-size:1rem;min-width:8.25rem}}a.primary.svelte-10q8qgs.svelte-10q8qgs,button.primary.svelte-10q8qgs.svelte-10q8qgs{background-color:#7c5dfa}a.secondary.svelte-10q8qgs.svelte-10q8qgs,button.secondary.svelte-10q8qgs.svelte-10q8qgs{background-color:#7078b2;color:white}a.accent.svelte-10q8qgs.svelte-10q8qgs,button.accent.svelte-10q8qgs.svelte-10q8qgs{background-color:#7e88C3}a.danger.svelte-10q8qgs.svelte-10q8qgs,button.danger.svelte-10q8qgs.svelte-10q8qgs{background-color:#ec5757}a.fluid.svelte-10q8qgs.svelte-10q8qgs,button.fluid.svelte-10q8qgs.svelte-10q8qgs{width:100% !important}a.svelte-10q8qgs i.svelte-10q8qgs,button.svelte-10q8qgs i.svelte-10q8qgs{margin-right:0.7rem;font-size:1.1rem}a.rounded.svelte-10q8qgs.svelte-10q8qgs,button.rounded.svelte-10q8qgs.svelte-10q8qgs{border-radius:20px}a.small.svelte-10q8qgs.svelte-10q8qgs,button.small.svelte-10q8qgs.svelte-10q8qgs{width:5rem}a.medium.svelte-10q8qgs.svelte-10q8qgs,button.medium.svelte-10q8qgs.svelte-10q8qgs{min-width:3rem;max-width:10rem;height:3rem}a.large.svelte-10q8qgs.svelte-10q8qgs,button.large.svelte-10q8qgs.svelte-10q8qgs{width:9rem}button[disabled].svelte-10q8qgs.svelte-10q8qgs{opacity:0.5}",
  map: null
};
const Button = (0, import_index_b6406b22.c)(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { text = "" } = $$props;
  let { type = "primary" } = $$props;
  let { icon = "" } = $$props;
  let { size = "" } = $$props;
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
    (0, import_index_b6406b22.e)(type, true) + " " + (0, import_index_b6406b22.e)(size, true) + " svelte-10q8qgs",
    (rounded ? "rounded" : "") + " " + (fluid ? "fluid" : "")
  ].join(" ").trim()}"><i class="${"fas fa-" + (0, import_index_b6406b22.e)(icon, true) + " svelte-10q8qgs"}"></i>${(0, import_index_b6406b22.e)(text)}</button>` : `<a class="${(0, import_index_b6406b22.e)((0, import_index_b6406b22.h)(type), true) + " svelte-10q8qgs"}"${(0, import_index_b6406b22.j)("href", href, 0)}><i class="${"fas fa-" + (0, import_index_b6406b22.e)(icon, true) + " svelte-10q8qgs"}"></i>${(0, import_index_b6406b22.e)(text)}</a>`}`;
});
function convertDate(date, term) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let newDate = new Date(date);
  let month = months[newDate.getMonth() + term / 30];
  let day = newDate.getDate();
  let year = newDate.getFullYear();
  return `${month} ${day}, ${year}`;
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function closeModal() {
  globalStore.update(($store) => {
    $store.modalStatus = null;
    return $store;
  });
}
function strValid(str) {
  if (str.length >= 5) {
    return true;
  }
}
function emailValid(str) {
  let REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (REGEX.test(str)) {
    return true;
  }
}
async function getInvoicesIndex() {
  if (localStorage.getItem("invoices"))
    globalStore.update(($store) => {
      $store.invoices = JSON.parse(localStorage.getItem("invoices"));
      return { ...$store };
    });
  else {
    const response = await fetch("./data.json");
    const data = await response.json();
    globalStore.update(($store) => {
      localStorage.setItem("invoices", JSON.stringify(data));
      $store.invoices = JSON.parse(localStorage.getItem("invoices"));
      return { ...$store };
    });
  }
}
