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
  C: () => Card,
  T: () => Text,
  a: () => numberWithCommas,
  f: () => formateDate,
  g: () => globalStore,
  n: () => numValid,
  s: () => strValid
});
var import_index_905b6237 = __toModule(require("./index-905b6237.js"));
const subscriber_queue = [];
function writable(value, start = import_index_905b6237.n) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if ((0, import_index_905b6237.f)(value, new_value)) {
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
  function subscribe2(run, invalidate = import_index_905b6237.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_905b6237.n;
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
  code: "div.inv.svelte-1dwcrx1,a.inv.svelte-1dwcrx1,div.svelte-1dwcrx1,a.svelte-1dwcrx1{display:flex}div.modal.svelte-1dwcrx1,a.modal.svelte-1dwcrx1{display:flex;flex-direction:column}div.svelte-1dwcrx1,a.svelte-1dwcrx1{position:relative;width:100%;padding:1rem}div.Dark.svelte-1dwcrx1,a.Dark.svelte-1dwcrx1{background-color:#242843}div.Light.svelte-1dwcrx1,a.Light.svelte-1dwcrx1{background-color:#d4d4e7}div.inv.svelte-1dwcrx1,a.inv.svelte-1dwcrx1{width:100%;border-radius:12px;margin:0.25rem 0;padding:0.75rem}div.modal.svelte-1dwcrx1,a.modal.svelte-1dwcrx1{height:100%;width:100%;z-index:2;overflow:auto;padding:1.5rem}div.modal.Dark.svelte-1dwcrx1,a.modal.Dark.svelte-1dwcrx1{background-color:#161828}div.modal.Light.svelte-1dwcrx1,a.modal.Light.svelte-1dwcrx1{background-color:#c7c7df}.round.svelte-1dwcrx1{border-radius:8px}",
  map: null
};
const Card = (0, import_index_905b6237.c)(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_905b6237.a)(globalStore, (value) => $globalStore = value);
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
    (0, import_index_905b6237.e)((0, import_index_905b6237.g)($globalStore.theme)) + " svelte-1dwcrx1",
    (round ? "round" : "") + " " + (modal ? "modal" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>` : `<a href="${"/" + (0, import_index_905b6237.e)(id)}" class="${[
    (0, import_index_905b6237.e)((0, import_index_905b6237.g)($globalStore.theme)) + " svelte-1dwcrx1",
    inv ? "inv" : ""
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</a>`}`;
});
var Text_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.disabled.svelte-bgfnvq,h2.disabled.svelte-bgfnvq,h3.disabled.svelte-bgfnvq,p.disabled.svelte-bgfnvq{color:grey}.title.svelte-bgfnvq{margin-bottom:0.3rem}",
  map: null
};
const Text = (0, import_index_905b6237.c)(($$result, $$props, $$bindings, slots) => {
  let theme;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_905b6237.a)(globalStore, (value) => $globalStore = value);
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
    "txtColor" + (0, import_index_905b6237.e)(theme) + " svelte-bgfnvq",
    (disabled ? "disabled" : "") + " " + (title ? "title" : "")
  ].join(" ").trim()}">${(0, import_index_905b6237.e)(text)}</h1>` : `${size === "h2" ? `<h2 class="${[
    "txtColor" + (0, import_index_905b6237.e)(theme) + " svelte-bgfnvq",
    (disabled ? "disabled" : "") + " " + (title ? "title" : "")
  ].join(" ").trim()}">${(0, import_index_905b6237.e)(text)}</h2>` : `${size === "h3" ? `<h3 class="${[
    "txtColor" + (0, import_index_905b6237.e)(theme) + " svelte-bgfnvq",
    (disabled ? "disabled" : "") + " " + (title ? "title" : "")
  ].join(" ").trim()}">${(0, import_index_905b6237.e)(text)}</h3>` : `<p class="${[
    "txtColor" + (0, import_index_905b6237.e)(theme) + " svelte-bgfnvq",
    (disabled ? "disabled" : "") + " " + (title ? "title" : "")
  ].join(" ").trim()}">${(0, import_index_905b6237.e)(text)}</p>`}`}`}`;
});
function formateDate(date) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let newDate = new Date(date);
  let month = months[newDate.getMonth()];
  let day = newDate.getDate();
  let year = newDate.getFullYear();
  return `${month} ${day}, ${year}`;
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function numValid(val) {
  if (val === "" || val === 0 || val === null) {
    return false;
  }
  if (val.length > 1 || val > 0) {
    return true;
  }
}
function strValid(str) {
  let REGEX = /^[a-zA-Z0-9]{6,}$/;
  if (REGEX.test(str)) {
    return true;
  }
}
var Button_svelte_svelte_type_style_lang = "";
