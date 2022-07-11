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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_b6406b22 = require("../../immutable/chunks/index-b6406b22.js");
var import_functionStore_d6f5ac9b = require("../../immutable/chunks/functionStore-d6f5ac9b.js");
var import_Tag_247b288a = require("../../immutable/chunks/Tag-247b288a.js");
var import_InvoiceOptions_0490778f = require("../../immutable/chunks/InvoiceOptions-0490778f.js");
var Invoice_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container-invoice.svelte-1s6sk94 div.svelte-1s6sk94{display:flex;flex-direction:column}.container-invoice.svelte-1s6sk94.svelte-1s6sk94{display:grid;grid-template-columns:1fr 0fr;width:100%}@media(min-width: 992px){.container-invoice.svelte-1s6sk94.svelte-1s6sk94{grid-template-columns:2fr 1fr}}.container-invoice.svelte-1s6sk94 div.svelte-1s6sk94{justify-content:end}@media(min-width: 768px) and (max-width: 991px){.container-invoice.svelte-1s6sk94 div.svelte-1s6sk94{flex-direction:row;align-items:center}}@media(min-width: 768px){.container-invoice.svelte-1s6sk94 div.svelte-1s6sk94{padding:1rem}}.container-invoice.svelte-1s6sk94 .dueInformation.svelte-1s6sk94{display:grid;grid-template-columns:1fr;padding:1rem;gap:10px}@media(min-width: 520px) and (max-width: 767px){.container-invoice.svelte-1s6sk94 .dueInformation.svelte-1s6sk94{grid-template-columns:1fr 2fr;place-items:center}}@media(min-width: 768px) and (max-width: 991px){.container-invoice.svelte-1s6sk94 .dueInformation.svelte-1s6sk94{grid-template-columns:1fr 2fr;text-align:center;padding:0}}@media(min-width: 992px) and (max-width: 1199px){.container-invoice.svelte-1s6sk94 .dueInformation.svelte-1s6sk94{grid-template-columns:1fr 70%;text-align:center;align-items:center}}@media(min-width: 1200px){.container-invoice.svelte-1s6sk94 .dueInformation.svelte-1s6sk94{grid-template-columns:1fr 2fr;align-items:center;padding:0}}.container-invoice.svelte-1s6sk94 .dueInformation div.svelte-1s6sk94{display:flex;flex-direction:column;justify-content:space-around;gap:5px}@media(min-width: 520px) and (max-width: 767px){.container-invoice.svelte-1s6sk94 .dueInformation div.svelte-1s6sk94{display:grid;grid-template-columns:1fr;align-items:center;gap:10px}}@media(min-width: 768px) and (max-width: 991px){.container-invoice.svelte-1s6sk94 .dueInformation div.svelte-1s6sk94{display:grid;place-items:center;margin:0;grid-template-columns:1fr 1fr}}@media(min-width: 992px) and (max-width: 1199px){.container-invoice.svelte-1s6sk94 .dueInformation div.svelte-1s6sk94{display:grid;grid-template-columns:2fr 1fr;align-items:center}}@media(min-width: 1200px){.container-invoice.svelte-1s6sk94 .dueInformation div.svelte-1s6sk94{display:grid;text-align:center;gap:10px}}.container-invoice.svelte-1s6sk94 .paymentInformation.svelte-1s6sk94{display:grid;grid-template-columns:1fr;justify-content:center;text-align:center;align-items:center;padding:0.5rem;width:95%;margin-right:-1rem;gap:7px}@media(min-width: 520px) and (max-width: 767px){.container-invoice.svelte-1s6sk94 .paymentInformation.svelte-1s6sk94{display:grid;grid-template-columns:1fr 1fr;place-items:center;gap:16px;justify-content:center}}@media(min-width: 992px) and (max-width: 1199px){.container-invoice.svelte-1s6sk94 .paymentInformation.svelte-1s6sk94{display:grid;grid-template-columns:1fr 1fr}}@media(min-width: 1200px){.container-invoice.svelte-1s6sk94 .paymentInformation.svelte-1s6sk94{display:flex;justify-content:center;align-items:center;padding:0 0.5rem 0 0}}",
  map: null
};
const Invoice = (0, import_index_b6406b22.c)(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
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
  return `${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.C, "Card").$$render($$result, { inv: true, id }, {}, {
    default: () => {
      return `<div class="${"container-invoice svelte-1s6sk94"}"><div class="${"dueInformation svelte-1s6sk94"}">${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.T, "Text").$$render($$result, { size: "h3", text: "#" + id }, {}, {})}
            <div class="${"svelte-1s6sk94"}">${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.T, "Text").$$render($$result, {
        size: "p",
        text: "Due: " + (0, import_functionStore_d6f5ac9b.c)(paymentDue, 0)
      }, {}, {})}
                ${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.T, "Text").$$render($$result, {
        size: "h3",
        text: "$" + (0, import_functionStore_d6f5ac9b.n)(total.toFixed(2))
      }, {}, {})}</div></div>
    <div class="${"paymentInformation svelte-1s6sk94"}">${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.T, "Text").$$render($$result, { size: "p", text: clientName }, {}, {})}
        ${(0, import_index_b6406b22.v)(import_Tag_247b288a.T, "Tag").$$render($$result, { status }, {}, {})}</div></div>`;
    }
  })}`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1h70dj0.svelte-1h70dj0{display:flex;flex-direction:column;width:100%;max-width:62.5rem}@media(min-width: 1200px){.container.svelte-1h70dj0.svelte-1h70dj0{display:grid;grid-template-columns:1fr;max-width:75rem}}.container.svelte-1h70dj0 div.invoices.svelte-1h70dj0{display:flex;flex-direction:column;width:100%;max-width:62.5rem;margin-top:1.5rem}@media(min-width: 992px) and (max-width: 1199px){.container.svelte-1h70dj0 div.invoices.svelte-1h70dj0{display:grid;place-items:center}}@media(min-width: 1200px){.container.svelte-1h70dj0 div.invoices.svelte-1h70dj0{display:grid;grid-template-columns:1fr 1fr;gap:7px;justify-self:center;max-width:75rem}}.container.svelte-1h70dj0 .helperBar.svelte-1h70dj0{display:flex;justify-content:space-between;margin-top:1.25rem}.container.svelte-1h70dj0 .helperBar_invoice.svelte-1h70dj0{display:flex;flex-direction:column;justify-content:center;margin-right:1rem;gap:0.3125rem}.container.svelte-1h70dj0 .helperBar .settings.svelte-1h70dj0{display:grid;grid-template-columns:1fr 1fr;gap:10px}@media(min-width: 768px){.container.svelte-1h70dj0 .helperBar .settings.svelte-1h70dj0{place-items:initial;gap:30px}}.container.svelte-1h70dj0 .loading.svelte-1h70dj0{display:flex;justify-content:center;align-items:center;height:80vh}.noInvoices.svelte-1h70dj0.svelte-1h70dj0{display:flex;justify-content:center;align-items:center;flex-direction:column;height:60vh}.noInvoices.svelte-1h70dj0 div.svelte-1h70dj0{text-align:center;margin-top:1rem}",
  map: null
};
const Routes = (0, import_index_b6406b22.c)(($$result, $$props, $$bindings, slots) => {
  let filter;
  let filteredInvoices;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_b6406b22.a)(import_functionStore_d6f5ac9b.g, (value) => $globalStore = value);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    filter = "all";
    filteredInvoices = $globalStore.invoices.filter((invoice) => invoice.status === filter || filter === "all");
    $$rendered = `<div class="${"container svelte-1h70dj0"}">${function(__value) {
      if ((0, import_index_b6406b22.l)(__value)) {
        __value.then(null, import_index_b6406b22.n);
        return `
    <div class="${"loading svelte-1h70dj0"}">${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.T, "Text").$$render($$result, {
          size: "h3",
          text: "Getting invoices, please wait"
        }, {}, {})}</div>
    `;
      }
      return function() {
        return ` 
    <div class="${"helperBar svelte-1h70dj0"}"><div class="${"helperBar_invoice svelte-1h70dj0"}">${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.T, "Text").$$render($$result, { size: "h2", text: "Invoices" }, {}, {})}
            ${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.T, "Text").$$render($$result, {
          size: "p",
          text: filteredInvoices.length + " invoices"
        }, {}, {})}</div>
        <div class="${"settings svelte-1h70dj0"}">${(0, import_index_b6406b22.v)(import_InvoiceOptions_0490778f.F, "FormField").$$render($$result, {
          id: "filter",
          form: "select",
          options: import_InvoiceOptions_0490778f.a,
          value: filter
        }, {
          value: ($$value) => {
            filter = $$value;
            $$settled = false;
          }
        }, {})}
            ${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.B, "Button").$$render($$result, {
          rounded: true,
          fluid: true,
          icon: "plus",
          text: "Add Invoice"
        }, {}, {})}</div></div>
    ${$globalStore.invoices.length > 0 ? `<div class="${"invoices svelte-1h70dj0"}">${(0, import_index_b6406b22.f)(filteredInvoices, ({ id, paymentDue, total, clientName, status }, i) => {
          return `${(0, import_index_b6406b22.v)(Invoice, "Invoice").$$render($$result, {
            id,
            paymentDue,
            total,
            clientName,
            status
          }, {}, {})}`;
        })}</div>` : `<div class="${"noInvoices svelte-1h70dj0"}"><img src="${"/noInvoice.svg"}" alt="${"No invoice"}">
            <div class="${"svelte-1h70dj0"}">${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.T, "Text").$$render($$result, {
          title: true,
          size: "h2",
          text: "No Invoices"
        }, {}, {})}
                ${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.T, "Text").$$render($$result, {
          title: true,
          size: "p",
          text: "To Create an Invoice"
        }, {}, {})}
                ${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.T, "Text").$$render($$result, {
          title: true,
          size: "p",
          text: "Click 'Add invoice' at the top"
        }, {}, {})}</div></div>`}
    `;
      }();
    }((0, import_functionStore_d6f5ac9b.b)())}</div>`;
  } while (!$$settled);
  $$unsubscribe_globalStore();
  return $$rendered;
});
