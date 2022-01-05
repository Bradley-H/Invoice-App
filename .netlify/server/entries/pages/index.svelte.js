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
  default: () => Routes
});
var import_index_3930c651 = __toModule(require("../../chunks/index-3930c651.js"));
var import_Button_15a9fb03 = __toModule(require("../../chunks/Button-15a9fb03.js"));
var import_functionStore_b30ced0b = __toModule(require("../../chunks/functionStore-b30ced0b.js"));
var import_Tag_d5d0e364 = __toModule(require("../../chunks/Tag-d5d0e364.js"));
var Invoice_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container-invoice.svelte-1qgxoo4 div.svelte-1qgxoo4{display:flex;flex-direction:column}.container-invoice.svelte-1qgxoo4.svelte-1qgxoo4{display:grid;grid-template-columns:1fr 0fr;width:100%}@media(min-width: 992px){.container-invoice.svelte-1qgxoo4.svelte-1qgxoo4{grid-template-columns:2fr 1fr}}.container-invoice.svelte-1qgxoo4 div.svelte-1qgxoo4{justify-content:end}@media(min-width: 768px) and (max-width: 991px){.container-invoice.svelte-1qgxoo4 div.svelte-1qgxoo4{flex-direction:row;align-items:center}}@media(min-width: 768px){.container-invoice.svelte-1qgxoo4 div.svelte-1qgxoo4{padding:1rem}}.container-invoice.svelte-1qgxoo4 .dueInformation.svelte-1qgxoo4{display:grid;grid-template-columns:1fr;padding:1rem;gap:10px}@media(min-width: 520px) and (max-width: 767px){.container-invoice.svelte-1qgxoo4 .dueInformation.svelte-1qgxoo4{grid-template-columns:1fr 2fr;place-items:center}}@media(min-width: 768px) and (max-width: 991px){.container-invoice.svelte-1qgxoo4 .dueInformation.svelte-1qgxoo4{grid-template-columns:1fr 2fr;text-align:center;padding:0}}@media(min-width: 992px) and (max-width: 1199px){.container-invoice.svelte-1qgxoo4 .dueInformation.svelte-1qgxoo4{grid-template-columns:1fr 70%;text-align:center;align-items:center}}@media(min-width: 1200px){.container-invoice.svelte-1qgxoo4 .dueInformation.svelte-1qgxoo4{grid-template-columns:1fr 2fr;align-items:center;padding:0}}.container-invoice.svelte-1qgxoo4 .dueInformation div.svelte-1qgxoo4{display:flex;flex-direction:column;justify-content:space-around}@media(min-width: 520px) and (max-width: 767px){.container-invoice.svelte-1qgxoo4 .dueInformation div.svelte-1qgxoo4{display:grid;grid-template-columns:1fr;align-items:center;gap:10px}}@media(min-width: 768px) and (max-width: 991px){.container-invoice.svelte-1qgxoo4 .dueInformation div.svelte-1qgxoo4{display:grid;place-items:center;margin:0;grid-template-columns:1fr 1fr}}@media(min-width: 992px) and (max-width: 1199px){.container-invoice.svelte-1qgxoo4 .dueInformation div.svelte-1qgxoo4{display:grid;grid-template-columns:2fr 1fr;align-items:center}}@media(min-width: 1200px){.container-invoice.svelte-1qgxoo4 .dueInformation div.svelte-1qgxoo4{display:grid;text-align:center;gap:10px}}.container-invoice.svelte-1qgxoo4 .paymentInformation.svelte-1qgxoo4{display:grid;grid-template-columns:1fr;justify-content:center;text-align:center;align-items:center;padding:0.5rem;width:95%;margin-right:-1rem;gap:7px}@media(min-width: 520px) and (max-width: 767px){.container-invoice.svelte-1qgxoo4 .paymentInformation.svelte-1qgxoo4{display:grid;grid-template-columns:1fr 1fr;place-items:center;gap:16px;justify-content:center}}@media(min-width: 992px) and (max-width: 1199px){.container-invoice.svelte-1qgxoo4 .paymentInformation.svelte-1qgxoo4{display:grid;grid-template-columns:1fr 1fr}}@media(min-width: 1200px){.container-invoice.svelte-1qgxoo4 .paymentInformation.svelte-1qgxoo4{display:flex;justify-content:center;align-items:center;padding:0 0.5rem 0 0}}",
  map: null
};
const Invoice = (0, import_index_3930c651.c)(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { paymentDue = "" } = $$props;
  let { total = 0 } = $$props;
  let { clientName = "" } = $$props;
  let { status = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.paymentDue === void 0 && $$bindings.paymentDue && paymentDue !== void 0)
    $$bindings.paymentDue(paymentDue);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  if ($$props.clientName === void 0 && $$bindings.clientName && clientName !== void 0)
    $$bindings.clientName(clientName);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  $$result.css.add(css$1);
  return `${(0, import_index_3930c651.v)(import_functionStore_b30ced0b.C, "Card").$$render($$result, { inv: true, id }, {}, {
    default: () => `<div class="${"container-invoice svelte-1qgxoo4"}"><div class="${"dueInformation svelte-1qgxoo4"}">${(0, import_index_3930c651.v)(import_functionStore_b30ced0b.T, "Text").$$render($$result, { size: "h3", text: "#" + id }, {}, {})}
            <div class="${"svelte-1qgxoo4"}">${(0, import_index_3930c651.v)(import_functionStore_b30ced0b.T, "Text").$$render($$result, {
      size: "p",
      text: "Due: " + (0, import_functionStore_b30ced0b.c)(paymentDue)
    }, {}, {})}
                ${(0, import_index_3930c651.v)(import_functionStore_b30ced0b.T, "Text").$$render($$result, {
      size: "h3",
      text: "$" + (0, import_functionStore_b30ced0b.n)(total.toFixed(2))
    }, {}, {})}</div></div>
    <div class="${"paymentInformation svelte-1qgxoo4"}">${(0, import_index_3930c651.v)(import_functionStore_b30ced0b.T, "Text").$$render($$result, { size: "p", text: clientName }, {}, {})}
        ${(0, import_index_3930c651.v)(import_Tag_d5d0e364.T, "Tag").$$render($$result, { status }, {}, {})}</div></div>`
  })}`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-4nkv9z.svelte-4nkv9z{display:flex;flex-direction:column;width:100%;max-width:81.25rem}@media(min-width: 1200px){.container.svelte-4nkv9z.svelte-4nkv9z{display:grid;grid-template-columns:1fr;max-width:100rem}}.container.svelte-4nkv9z div.invoices.svelte-4nkv9z{display:flex;flex-direction:column;width:100%;max-width:81.25rem;margin-top:1.5rem}@media(min-width: 992px) and (max-width: 1199px){.container.svelte-4nkv9z div.invoices.svelte-4nkv9z{display:grid;place-items:center}}@media(min-width: 1200px){.container.svelte-4nkv9z div.invoices.svelte-4nkv9z{display:grid;grid-template-columns:1fr 1fr;gap:7px;justify-self:center;max-width:100rem}}.container.svelte-4nkv9z .helperBar.svelte-4nkv9z{display:flex;justify-content:space-between}.container.svelte-4nkv9z .helperBar_invoice.svelte-4nkv9z{display:flex;flex-direction:column;justify-content:center;margin-right:1rem}.container.svelte-4nkv9z .helperBar .settings.svelte-4nkv9z{display:grid;grid-template-columns:1fr 1fr;gap:10px}@media(min-width: 768px){.container.svelte-4nkv9z .helperBar .settings.svelte-4nkv9z{place-items:initial}}.container.svelte-4nkv9z .loading.svelte-4nkv9z{height:100vh;max-height:100%}",
  map: null
};
const Routes = (0, import_index_3930c651.c)(($$result, $$props, $$bindings, slots) => {
  let filter;
  let filteredInvoices;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_3930c651.a)(import_functionStore_b30ced0b.g, (value) => $globalStore = value);
  const options = [
    { id: 0, text: "All", value: "all" },
    { id: 1, text: "Paid", value: "paid" },
    { id: 2, text: "Pending", value: "pending" },
    { id: 3, text: "Draft", value: "draft" }
  ];
  async function getInvoices() {
    let res = await fetch("./data.json");
    let data = await res.json();
    (0, import_index_3930c651.h)(import_functionStore_b30ced0b.g, $globalStore.invoices = data, $globalStore);
    localStorage.getItem("invoices") ? (0, import_index_3930c651.h)(import_functionStore_b30ced0b.g, $globalStore.invoices = JSON.parse(localStorage.getItem("invoices")), $globalStore) : null;
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    filter = "all";
    filteredInvoices = $globalStore.invoices.filter((invoice) => invoice.status === filter || filter === "all");
    $$rendered = `<div class="${"container svelte-4nkv9z"}">${function(__value) {
      if ((0, import_index_3930c651.i)(__value)) {
        __value.then(null, import_index_3930c651.n);
        return `
    <div class="${"loading svelte-4nkv9z"}">${(0, import_index_3930c651.v)(import_functionStore_b30ced0b.T, "Text").$$render($$result, {
          size: "h1",
          text: "Getting invoices, please wait"
        }, {}, {})}</div>
    `;
      }
      return function() {
        return ` 
    <div class="${"helperBar svelte-4nkv9z"}"><div class="${"helperBar_invoice svelte-4nkv9z"}">${(0, import_index_3930c651.v)(import_functionStore_b30ced0b.T, "Text").$$render($$result, { size: "h2", text: "Invoices" }, {}, {})}
            ${(0, import_index_3930c651.v)(import_functionStore_b30ced0b.T, "Text").$$render($$result, {
          size: "p",
          text: filteredInvoices.length + " invoices"
        }, {}, {})}</div>
        <div class="${"settings svelte-4nkv9z"}">${(0, import_index_3930c651.v)(import_Button_15a9fb03.F, "FormField").$$render($$result, {
          id: "filter",
          form: "select",
          options,
          text: "",
          value: filter
        }, {
          value: ($$value) => {
            filter = $$value;
            $$settled = false;
          }
        }, {})}
            ${(0, import_index_3930c651.v)(import_Button_15a9fb03.B, "Button").$$render($$result, {
          rounded: true,
          icon: "plus",
          text: "Add Invoice"
        }, {}, {})}</div></div>
    <div class="${"invoices svelte-4nkv9z"}">${(0, import_index_3930c651.b)(filteredInvoices, ({ id, paymentDue, total, clientName, status }, i) => `${(0, import_index_3930c651.v)(Invoice, "Invoice").$$render($$result, {
          id,
          paymentDue,
          total,
          clientName,
          status
        }, {}, {})}`)}</div>
    `;
      }();
    }(getInvoices())}</div>`;
  } while (!$$settled);
  $$unsubscribe_globalStore();
  return $$rendered;
});
