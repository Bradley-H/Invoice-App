var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
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
  C: () => Card,
  T: () => Text,
  a: () => getInvoicesIndex,
  c: () => convertDate,
  e: () => emailValid,
  g: () => globalStore,
  n: () => numberWithCommas,
  s: () => strValid
});
module.exports = __toCommonJS(stdin_exports);
var import_index_80978f94 = require("./index-80978f94.js");
const subscriber_queue = [];
function writable(value, start = import_index_80978f94.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_80978f94.f)(value, new_value)) {
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
  function subscribe2(run, invalidate = import_index_80978f94.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_80978f94.n;
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
  editedInvoice: {},
  invoices: []
});
var styles = "";
var Card_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.inv.svelte-73fq0y,a.inv.svelte-73fq0y,div.svelte-73fq0y,a.svelte-73fq0y{display:flex}div.modal.svelte-73fq0y,a.modal.svelte-73fq0y{display:flex;flex-direction:column}div.svelte-73fq0y,a.svelte-73fq0y{position:relative;width:100%;padding:1rem;margin-top:0.5rem}div.Dark.svelte-73fq0y,a.Dark.svelte-73fq0y{background-color:#242843}div.Light.svelte-73fq0y,a.Light.svelte-73fq0y{background-color:#d4d4e7}div.inv.svelte-73fq0y,a.inv.svelte-73fq0y{width:100%;border-radius:12px;margin:0.25rem 0;padding:0.75rem}div.modal.svelte-73fq0y,a.modal.svelte-73fq0y{height:100%;width:100%;z-index:2;overflow:auto;padding:1.5rem;margin:0}div.modal.Dark.svelte-73fq0y,a.modal.Dark.svelte-73fq0y{background-color:#161828}div.modal.Light.svelte-73fq0y,a.modal.Light.svelte-73fq0y{background-color:#c7c7df}.round.svelte-73fq0y{border-radius:8px}",
  map: null
};
const Card = (0, import_index_80978f94.c)(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_80978f94.a)(globalStore, (value) => $globalStore = value);
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
  $$result.css.add(css$1);
  $$unsubscribe_globalStore();
  return `${!inv ? `<div class="${[
    (0, import_index_80978f94.e)((0, import_index_80978f94.g)($globalStore.theme)) + " svelte-73fq0y",
    (round ? "round" : "") + " " + (modal ? "modal" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>` : `<a href="${"/" + (0, import_index_80978f94.e)(id)}" class="${[
    (0, import_index_80978f94.e)((0, import_index_80978f94.g)($globalStore.theme)) + " svelte-73fq0y",
    inv ? "inv" : ""
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</a>`}`;
});
var Text_svelte_svelte_type_style_lang = "";
const css = {
  code: ".disabled.svelte-zyf5ro{color:grey}.title.svelte-zyf5ro{margin-bottom:0.3rem}",
  map: null
};
const Text = (0, import_index_80978f94.c)(($$result, $$props, $$bindings, slots) => {
  let theme;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_80978f94.a)(globalStore, (value) => $globalStore = value);
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
  $$result.css.add(css);
  theme = $globalStore.theme;
  $$unsubscribe_globalStore();
  return `<${size} class="${[
    "txtColor" + (0, import_index_80978f94.e)(theme) + " svelte-zyf5ro",
    (disabled ? "disabled" : "") + " " + (title ? "title" : "")
  ].join(" ").trim()}">${(0, import_index_80978f94.e)(text)}</${size}>`;
});
var Button_svelte_svelte_type_style_lang = "";
function convertDate(date, term = 30) {
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
      return __spreadValues({}, $store);
    });
  else {
    const response = await fetch("./data.json");
    const data = await response.json();
    globalStore.update(($store) => {
      localStorage.setItem("invoices", JSON.stringify(data));
      $store.invoices = JSON.parse(localStorage.getItem("invoices"));
      return __spreadValues({}, $store);
    });
  }
}
