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
var import_index_6b830c0a = __toModule(require("../../chunks/index-6b830c0a.js"));
var import_Button_bc878c0c = __toModule(require("../../chunks/Button-bc878c0c.js"));
var import_functionStore_fa90724c = __toModule(require("../../chunks/functionStore-fa90724c.js"));
var import_Tag_b6bd67b0 = __toModule(require("../../chunks/Tag-b6bd67b0.js"));
var Invoice_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container-invoice.svelte-1qgxoo4 div.svelte-1qgxoo4{display:flex;flex-direction:column}.container-invoice.svelte-1qgxoo4.svelte-1qgxoo4{display:grid;grid-template-columns:1fr 0fr;width:100%}@media(min-width: 992px){.container-invoice.svelte-1qgxoo4.svelte-1qgxoo4{grid-template-columns:2fr 1fr}}.container-invoice.svelte-1qgxoo4 div.svelte-1qgxoo4{justify-content:end}@media(min-width: 768px) and (max-width: 991px){.container-invoice.svelte-1qgxoo4 div.svelte-1qgxoo4{flex-direction:row;align-items:center}}@media(min-width: 768px){.container-invoice.svelte-1qgxoo4 div.svelte-1qgxoo4{padding:1rem}}.container-invoice.svelte-1qgxoo4 .dueInformation.svelte-1qgxoo4{display:grid;grid-template-columns:1fr;padding:1rem;gap:10px}@media(min-width: 520px) and (max-width: 767px){.container-invoice.svelte-1qgxoo4 .dueInformation.svelte-1qgxoo4{grid-template-columns:1fr 2fr;place-items:center}}@media(min-width: 768px) and (max-width: 991px){.container-invoice.svelte-1qgxoo4 .dueInformation.svelte-1qgxoo4{grid-template-columns:1fr 2fr;text-align:center;padding:0}}@media(min-width: 992px) and (max-width: 1199px){.container-invoice.svelte-1qgxoo4 .dueInformation.svelte-1qgxoo4{grid-template-columns:1fr 70%;text-align:center;align-items:center}}@media(min-width: 1200px){.container-invoice.svelte-1qgxoo4 .dueInformation.svelte-1qgxoo4{grid-template-columns:1fr 2fr;align-items:center;padding:0}}.container-invoice.svelte-1qgxoo4 .dueInformation div.svelte-1qgxoo4{display:flex;flex-direction:column;justify-content:space-around}@media(min-width: 520px) and (max-width: 767px){.container-invoice.svelte-1qgxoo4 .dueInformation div.svelte-1qgxoo4{display:grid;grid-template-columns:1fr;align-items:center;gap:10px}}@media(min-width: 768px) and (max-width: 991px){.container-invoice.svelte-1qgxoo4 .dueInformation div.svelte-1qgxoo4{display:grid;place-items:center;margin:0;grid-template-columns:1fr 1fr}}@media(min-width: 992px) and (max-width: 1199px){.container-invoice.svelte-1qgxoo4 .dueInformation div.svelte-1qgxoo4{display:grid;grid-template-columns:2fr 1fr;align-items:center}}@media(min-width: 1200px){.container-invoice.svelte-1qgxoo4 .dueInformation div.svelte-1qgxoo4{display:grid;text-align:center;gap:10px}}.container-invoice.svelte-1qgxoo4 .paymentInformation.svelte-1qgxoo4{display:grid;grid-template-columns:1fr;justify-content:center;text-align:center;align-items:center;padding:0.5rem;width:95%;margin-right:-1rem;gap:7px}@media(min-width: 520px) and (max-width: 767px){.container-invoice.svelte-1qgxoo4 .paymentInformation.svelte-1qgxoo4{display:grid;grid-template-columns:1fr 1fr;place-items:center;gap:16px;justify-content:center}}@media(min-width: 992px) and (max-width: 1199px){.container-invoice.svelte-1qgxoo4 .paymentInformation.svelte-1qgxoo4{display:grid;grid-template-columns:1fr 1fr}}@media(min-width: 1200px){.container-invoice.svelte-1qgxoo4 .paymentInformation.svelte-1qgxoo4{display:flex;justify-content:center;align-items:center;padding:0 0.5rem 0 0}}",
  map: null
};
const Invoice = (0, import_index_6b830c0a.c)(($$result, $$props, $$bindings, slots) => {
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
  return `${(0, import_index_6b830c0a.v)(import_functionStore_fa90724c.C, "Card").$$render($$result, { inv: true, id }, {}, {
    default: () => `<div class="${"container-invoice svelte-1qgxoo4"}"><div class="${"dueInformation svelte-1qgxoo4"}">${(0, import_index_6b830c0a.v)(import_functionStore_fa90724c.T, "Text").$$render($$result, { size: "h3", text: "#" + id }, {}, {})}
            <div class="${"svelte-1qgxoo4"}">${(0, import_index_6b830c0a.v)(import_functionStore_fa90724c.T, "Text").$$render($$result, {
      size: "p",
      text: "Due: " + (0, import_functionStore_fa90724c.c)(paymentDue, 0)
    }, {}, {})}
                ${(0, import_index_6b830c0a.v)(import_functionStore_fa90724c.T, "Text").$$render($$result, {
      size: "h3",
      text: "$" + (0, import_functionStore_fa90724c.n)(total.toFixed(2))
    }, {}, {})}</div></div>
    <div class="${"paymentInformation svelte-1qgxoo4"}">${(0, import_index_6b830c0a.v)(import_functionStore_fa90724c.T, "Text").$$render($$result, { size: "p", text: clientName }, {}, {})}
        ${(0, import_index_6b830c0a.v)(import_Tag_b6bd67b0.T, "Tag").$$render($$result, { status }, {}, {})}</div></div>`
  })}`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-8qukzm.svelte-8qukzm{display:flex;flex-direction:column;width:100%;max-width:62.5rem}@media(min-width: 1200px){.container.svelte-8qukzm.svelte-8qukzm{display:grid;grid-template-columns:1fr;max-width:75rem}}.container.svelte-8qukzm div.invoices.svelte-8qukzm{display:flex;flex-direction:column;width:100%;max-width:62.5rem;margin-top:1.5rem}@media(min-width: 992px) and (max-width: 1199px){.container.svelte-8qukzm div.invoices.svelte-8qukzm{display:grid;place-items:center}}@media(min-width: 1200px){.container.svelte-8qukzm div.invoices.svelte-8qukzm{display:grid;grid-template-columns:1fr 1fr;gap:7px;justify-self:center;max-width:75rem}}.container.svelte-8qukzm .helperBar.svelte-8qukzm{display:flex;justify-content:space-between;margin-top:1.25rem}.container.svelte-8qukzm .helperBar_invoice.svelte-8qukzm{display:flex;flex-direction:column;justify-content:center;margin-right:1rem}.container.svelte-8qukzm .helperBar .settings.svelte-8qukzm{display:grid;grid-template-columns:1fr 1fr;gap:10px}@media(min-width: 768px){.container.svelte-8qukzm .helperBar .settings.svelte-8qukzm{place-items:initial;gap:30px}}.container.svelte-8qukzm .loading.svelte-8qukzm{display:flex;justify-content:center;align-items:center;height:80vh}.noInvoices.svelte-8qukzm.svelte-8qukzm{display:flex;justify-content:center;align-items:center;flex-direction:column;min-height:50vh}.noInvoices.svelte-8qukzm div.svelte-8qukzm{text-align:center;margin-top:1rem}",
  map: null
};
const Routes = (0, import_index_6b830c0a.c)(($$result, $$props, $$bindings, slots) => {
  let filter;
  let filteredInvoices;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_6b830c0a.a)(import_functionStore_fa90724c.g, (value) => $globalStore = value);
  const options = [
    { id: 0, text: "All", value: "all" },
    { id: 1, text: "Paid", value: "paid" },
    { id: 2, text: "Pending", value: "pending" },
    { id: 3, text: "Draft", value: "draft" }
  ];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    filter = "all";
    filteredInvoices = $globalStore.invoices.filter((invoice) => invoice.status === filter || filter === "all");
    $$rendered = `<div class="${"container svelte-8qukzm"}">${function(__value) {
      if ((0, import_index_6b830c0a.j)(__value)) {
        __value.then(null, import_index_6b830c0a.n);
        return `
    <div class="${"loading svelte-8qukzm"}">${(0, import_index_6b830c0a.v)(import_functionStore_fa90724c.T, "Text").$$render($$result, {
          size: "h2",
          text: "Getting invoices, please wait"
        }, {}, {})}</div>
    `;
      }
      return function() {
        return ` 
    <div class="${"helperBar svelte-8qukzm"}"><div class="${"helperBar_invoice svelte-8qukzm"}">${(0, import_index_6b830c0a.v)(import_functionStore_fa90724c.T, "Text").$$render($$result, { size: "h2", text: "Invoices" }, {}, {})}
            ${(0, import_index_6b830c0a.v)(import_functionStore_fa90724c.T, "Text").$$render($$result, {
          size: "p",
          text: filteredInvoices.length + " invoices"
        }, {}, {})}</div>
        <div class="${"settings svelte-8qukzm"}">${(0, import_index_6b830c0a.v)(import_Button_bc878c0c.F, "FormField").$$render($$result, {
          id: "filter",
          form: "select",
          options,
          value: filter
        }, {
          value: ($$value) => {
            filter = $$value;
            $$settled = false;
          }
        }, {})}
            ${(0, import_index_6b830c0a.v)(import_Button_bc878c0c.B, "Button").$$render($$result, {
          rounded: true,
          icon: "plus",
          text: "Add Invoice"
        }, {}, {})}</div></div>
    ${$globalStore.invoices.length > 0 ? `<div class="${"invoices svelte-8qukzm"}">${(0, import_index_6b830c0a.d)(filteredInvoices, ({ id, paymentDue, total, clientName, status }, i) => `${(0, import_index_6b830c0a.v)(Invoice, "Invoice").$$render($$result, {
          id,
          paymentDue,
          total,
          clientName,
          status
        }, {}, {})}`)}</div>` : `<div class="${"noInvoices svelte-8qukzm"}"><img src="${"./noinvoice.svg"}" alt="${"No invoice"}">
            <div class="${"svelte-8qukzm"}">${(0, import_index_6b830c0a.v)(import_functionStore_fa90724c.T, "Text").$$render($$result, {
          title: true,
          size: "h2",
          text: "No Invoices"
        }, {}, {})}
                ${(0, import_index_6b830c0a.v)(import_functionStore_fa90724c.T, "Text").$$render($$result, {
          title: true,
          size: "p",
          text: "To Create an Invoice"
        }, {}, {})}
                ${(0, import_index_6b830c0a.v)(import_functionStore_fa90724c.T, "Text").$$render($$result, {
          title: true,
          size: "p",
          text: "Click 'Add invoice' at the top"
        }, {}, {})}</div></div>`}
    `;
      }();
    }((0, import_functionStore_fa90724c.a)())}</div>`;
  } while (!$$settled);
  $$unsubscribe_globalStore();
  return $$rendered;
});
