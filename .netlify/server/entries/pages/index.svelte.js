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
var import_index_80978f94 = require("../../chunks/index-80978f94.js");
var import_Button_901930a1 = require("../../chunks/Button-901930a1.js");
var import_functionStore_abc42331 = require("../../chunks/functionStore-abc42331.js");
var import_Tag_4abda796 = require("../../chunks/Tag-4abda796.js");
var Invoice_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container-invoice.svelte-1s6sk94 div.svelte-1s6sk94{display:flex;flex-direction:column}.container-invoice.svelte-1s6sk94.svelte-1s6sk94{display:grid;grid-template-columns:1fr 0fr;width:100%}@media(min-width: 992px){.container-invoice.svelte-1s6sk94.svelte-1s6sk94{grid-template-columns:2fr 1fr}}.container-invoice.svelte-1s6sk94 div.svelte-1s6sk94{justify-content:end}@media(min-width: 768px) and (max-width: 991px){.container-invoice.svelte-1s6sk94 div.svelte-1s6sk94{flex-direction:row;align-items:center}}@media(min-width: 768px){.container-invoice.svelte-1s6sk94 div.svelte-1s6sk94{padding:1rem}}.container-invoice.svelte-1s6sk94 .dueInformation.svelte-1s6sk94{display:grid;grid-template-columns:1fr;padding:1rem;gap:10px}@media(min-width: 520px) and (max-width: 767px){.container-invoice.svelte-1s6sk94 .dueInformation.svelte-1s6sk94{grid-template-columns:1fr 2fr;place-items:center}}@media(min-width: 768px) and (max-width: 991px){.container-invoice.svelte-1s6sk94 .dueInformation.svelte-1s6sk94{grid-template-columns:1fr 2fr;text-align:center;padding:0}}@media(min-width: 992px) and (max-width: 1199px){.container-invoice.svelte-1s6sk94 .dueInformation.svelte-1s6sk94{grid-template-columns:1fr 70%;text-align:center;align-items:center}}@media(min-width: 1200px){.container-invoice.svelte-1s6sk94 .dueInformation.svelte-1s6sk94{grid-template-columns:1fr 2fr;align-items:center;padding:0}}.container-invoice.svelte-1s6sk94 .dueInformation div.svelte-1s6sk94{display:flex;flex-direction:column;justify-content:space-around;gap:5px}@media(min-width: 520px) and (max-width: 767px){.container-invoice.svelte-1s6sk94 .dueInformation div.svelte-1s6sk94{display:grid;grid-template-columns:1fr;align-items:center;gap:10px}}@media(min-width: 768px) and (max-width: 991px){.container-invoice.svelte-1s6sk94 .dueInformation div.svelte-1s6sk94{display:grid;place-items:center;margin:0;grid-template-columns:1fr 1fr}}@media(min-width: 992px) and (max-width: 1199px){.container-invoice.svelte-1s6sk94 .dueInformation div.svelte-1s6sk94{display:grid;grid-template-columns:2fr 1fr;align-items:center}}@media(min-width: 1200px){.container-invoice.svelte-1s6sk94 .dueInformation div.svelte-1s6sk94{display:grid;text-align:center;gap:10px}}.container-invoice.svelte-1s6sk94 .paymentInformation.svelte-1s6sk94{display:grid;grid-template-columns:1fr;justify-content:center;text-align:center;align-items:center;padding:0.5rem;width:95%;margin-right:-1rem;gap:7px}@media(min-width: 520px) and (max-width: 767px){.container-invoice.svelte-1s6sk94 .paymentInformation.svelte-1s6sk94{display:grid;grid-template-columns:1fr 1fr;place-items:center;gap:16px;justify-content:center}}@media(min-width: 992px) and (max-width: 1199px){.container-invoice.svelte-1s6sk94 .paymentInformation.svelte-1s6sk94{display:grid;grid-template-columns:1fr 1fr}}@media(min-width: 1200px){.container-invoice.svelte-1s6sk94 .paymentInformation.svelte-1s6sk94{display:flex;justify-content:center;align-items:center;padding:0 0.5rem 0 0}}",
  map: null
};
const Invoice = (0, import_index_80978f94.c)(($$result, $$props, $$bindings, slots) => {
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
  return `${(0, import_index_80978f94.v)(import_functionStore_abc42331.C, "Card").$$render($$result, { inv: true, id }, {}, {
    default: () => {
      return `<div class="${"container-invoice svelte-1s6sk94"}"><div class="${"dueInformation svelte-1s6sk94"}">${(0, import_index_80978f94.v)(import_functionStore_abc42331.T, "Text").$$render($$result, { size: "h3", text: "#" + id }, {}, {})}
            <div class="${"svelte-1s6sk94"}">${(0, import_index_80978f94.v)(import_functionStore_abc42331.T, "Text").$$render($$result, {
        size: "p",
        text: "Due: " + (0, import_functionStore_abc42331.c)(paymentDue, 0)
      }, {}, {})}
                ${(0, import_index_80978f94.v)(import_functionStore_abc42331.T, "Text").$$render($$result, {
        size: "h3",
        text: "$" + (0, import_functionStore_abc42331.n)(total.toFixed(2))
      }, {}, {})}</div></div>
    <div class="${"paymentInformation svelte-1s6sk94"}">${(0, import_index_80978f94.v)(import_functionStore_abc42331.T, "Text").$$render($$result, { size: "p", text: clientName }, {}, {})}
        ${(0, import_index_80978f94.v)(import_Tag_4abda796.T, "Tag").$$render($$result, { status }, {}, {})}</div></div>`;
    }
  })}`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1uvekrk.svelte-1uvekrk{display:flex;flex-direction:column;width:100%;max-width:62.5rem}@media(min-width: 1200px){.container.svelte-1uvekrk.svelte-1uvekrk{display:grid;grid-template-columns:1fr;max-width:75rem}}.container.svelte-1uvekrk div.invoices.svelte-1uvekrk{display:flex;flex-direction:column;width:100%;max-width:62.5rem;margin-top:1.5rem}@media(min-width: 992px) and (max-width: 1199px){.container.svelte-1uvekrk div.invoices.svelte-1uvekrk{display:grid;place-items:center}}@media(min-width: 1200px){.container.svelte-1uvekrk div.invoices.svelte-1uvekrk{display:grid;grid-template-columns:1fr 1fr;gap:7px;justify-self:center;max-width:75rem}}.container.svelte-1uvekrk .helperBar.svelte-1uvekrk{display:flex;justify-content:space-between;margin-top:1.25rem}.container.svelte-1uvekrk .helperBar_invoice.svelte-1uvekrk{display:flex;flex-direction:column;justify-content:center;margin-right:1rem;gap:0.3125rem}.container.svelte-1uvekrk .helperBar .settings.svelte-1uvekrk{display:grid;grid-template-columns:1fr 1fr;gap:10px}@media(min-width: 768px){.container.svelte-1uvekrk .helperBar .settings.svelte-1uvekrk{place-items:initial;gap:30px}}.container.svelte-1uvekrk .loading.svelte-1uvekrk{display:flex;justify-content:center;align-items:center;height:80vh}.noInvoices.svelte-1uvekrk.svelte-1uvekrk{display:flex;justify-content:center;align-items:center;flex-direction:column;min-height:50vh}.noInvoices.svelte-1uvekrk div.svelte-1uvekrk{text-align:center;margin-top:1rem}",
  map: null
};
const Routes = (0, import_index_80978f94.c)(($$result, $$props, $$bindings, slots) => {
  let filter;
  let filteredInvoices;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_80978f94.a)(import_functionStore_abc42331.g, (value) => $globalStore = value);
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
    $$rendered = `<div class="${"container svelte-1uvekrk"}">${function(__value) {
      if ((0, import_index_80978f94.j)(__value)) {
        __value.then(null, import_index_80978f94.n);
        return `
    <div class="${"loading svelte-1uvekrk"}">${(0, import_index_80978f94.v)(import_functionStore_abc42331.T, "Text").$$render($$result, {
          size: "h3",
          text: "Getting invoices, please wait"
        }, {}, {})}</div>
    `;
      }
      return function() {
        return ` 
    <div class="${"helperBar svelte-1uvekrk"}"><div class="${"helperBar_invoice svelte-1uvekrk"}">${(0, import_index_80978f94.v)(import_functionStore_abc42331.T, "Text").$$render($$result, { size: "h2", text: "Invoices" }, {}, {})}
            ${(0, import_index_80978f94.v)(import_functionStore_abc42331.T, "Text").$$render($$result, {
          size: "p",
          text: filteredInvoices.length + " invoices"
        }, {}, {})}</div>
        <div class="${"settings svelte-1uvekrk"}">${(0, import_index_80978f94.v)(import_Button_901930a1.F, "FormField").$$render($$result, {
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
            ${(0, import_index_80978f94.v)(import_Button_901930a1.B, "Button").$$render($$result, {
          rounded: true,
          icon: "plus",
          text: "Add Invoice"
        }, {}, {})}</div></div>
    ${$globalStore.invoices.length > 0 ? `<div class="${"invoices svelte-1uvekrk"}">${(0, import_index_80978f94.d)(filteredInvoices, ({ id, paymentDue, total, clientName, status }, i) => {
          return `${(0, import_index_80978f94.v)(Invoice, "Invoice").$$render($$result, {
            id,
            paymentDue,
            total,
            clientName,
            status
          }, {}, {})}`;
        })}</div>` : `<div class="${"noInvoices svelte-1uvekrk"}"><img src="${"./noinvoice.svg"}" alt="${"No invoice"}">
            <div class="${"svelte-1uvekrk"}">${(0, import_index_80978f94.v)(import_functionStore_abc42331.T, "Text").$$render($$result, {
          title: true,
          size: "h2",
          text: "No Invoices"
        }, {}, {})}
                ${(0, import_index_80978f94.v)(import_functionStore_abc42331.T, "Text").$$render($$result, {
          title: true,
          size: "p",
          text: "To Create an Invoice"
        }, {}, {})}
                ${(0, import_index_80978f94.v)(import_functionStore_abc42331.T, "Text").$$render($$result, {
          title: true,
          size: "p",
          text: "Click 'Add invoice' at the top"
        }, {}, {})}</div></div>`}
    `;
      }();
    }((0, import_functionStore_abc42331.a)())}</div>`;
  } while (!$$settled);
  $$unsubscribe_globalStore();
  return $$rendered;
});
