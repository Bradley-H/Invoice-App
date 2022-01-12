var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
  C: () => Card,
  T: () => Text,
  a: () => getInvoicesIndex,
  c: () => convertDate,
  g: () => globalStore,
  n: () => numberWithCommas
});
var import_index_6b830c0a = __toModule(require("./index-6b830c0a.js"));
const subscriber_queue = [];
function writable(value, start = import_index_6b830c0a.n) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if ((0, import_index_6b830c0a.f)(value, new_value)) {
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
  function subscribe2(run, invalidate = import_index_6b830c0a.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_6b830c0a.n;
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
  invoices: [],
  deletePrompt: false
});
var styles = "";
var Card_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.inv.svelte-1dwcrx1,a.inv.svelte-1dwcrx1,div.svelte-1dwcrx1,a.svelte-1dwcrx1{display:flex}div.modal.svelte-1dwcrx1,a.modal.svelte-1dwcrx1{display:flex;flex-direction:column}div.svelte-1dwcrx1,a.svelte-1dwcrx1{position:relative;width:100%;padding:1rem}div.Dark.svelte-1dwcrx1,a.Dark.svelte-1dwcrx1{background-color:#242843}div.Light.svelte-1dwcrx1,a.Light.svelte-1dwcrx1{background-color:#d4d4e7}div.inv.svelte-1dwcrx1,a.inv.svelte-1dwcrx1{width:100%;border-radius:12px;margin:0.25rem 0;padding:0.75rem}div.modal.svelte-1dwcrx1,a.modal.svelte-1dwcrx1{height:100%;width:100%;z-index:2;overflow:auto;padding:1.5rem}div.modal.Dark.svelte-1dwcrx1,a.modal.Dark.svelte-1dwcrx1{background-color:#161828}div.modal.Light.svelte-1dwcrx1,a.modal.Light.svelte-1dwcrx1{background-color:#c7c7df}.round.svelte-1dwcrx1{border-radius:8px}",
  map: null
};
const Card = (0, import_index_6b830c0a.c)(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_6b830c0a.a)(globalStore, (value) => $globalStore = value);
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
    (0, import_index_6b830c0a.e)((0, import_index_6b830c0a.g)($globalStore.theme)) + " svelte-1dwcrx1",
    (round ? "round" : "") + " " + (modal ? "modal" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>` : `<a href="${"/" + (0, import_index_6b830c0a.e)(id)}" class="${[
    (0, import_index_6b830c0a.e)((0, import_index_6b830c0a.g)($globalStore.theme)) + " svelte-1dwcrx1",
    inv ? "inv" : ""
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</a>`}`;
});
var Text_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h1.svelte-24ajjd,h2.svelte-24ajjd,h3.svelte-24ajjd,p.svelte-24ajjd{font-family:"Spartan", sans-serif}h1.disabled.svelte-24ajjd,h2.disabled.svelte-24ajjd,h3.disabled.svelte-24ajjd,p.disabled.svelte-24ajjd{color:grey}.title.svelte-24ajjd{margin-bottom:0.3rem}',
  map: null
};
const Text = (0, import_index_6b830c0a.c)(($$result, $$props, $$bindings, slots) => {
  let theme;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_6b830c0a.a)(globalStore, (value) => $globalStore = value);
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
  return `${size === "h1" ? `<h1 class="${[
    "txtColor" + (0, import_index_6b830c0a.e)(theme) + " svelte-24ajjd",
    (disabled ? "disabled" : "") + " " + (title ? "title" : "")
  ].join(" ").trim()}">${(0, import_index_6b830c0a.e)(text)}</h1>` : `${size === "h2" ? `<h2 class="${[
    "txtColor" + (0, import_index_6b830c0a.e)(theme) + " svelte-24ajjd",
    (disabled ? "disabled" : "") + " " + (title ? "title" : "")
  ].join(" ").trim()}">${(0, import_index_6b830c0a.e)(text)}</h2>` : `${size === "h3" ? `<h3 class="${[
    "txtColor" + (0, import_index_6b830c0a.e)(theme) + " svelte-24ajjd",
    (disabled ? "disabled" : "") + " " + (title ? "title" : "")
  ].join(" ").trim()}">${(0, import_index_6b830c0a.e)(text)}</h3>` : `<p class="${[
    "txtColor" + (0, import_index_6b830c0a.e)(theme) + " svelte-24ajjd",
    (disabled ? "disabled" : "") + " " + (title ? "title" : "")
  ].join(" ").trim()}">${(0, import_index_6b830c0a.e)(text)}</p>`}`}`}`;
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
