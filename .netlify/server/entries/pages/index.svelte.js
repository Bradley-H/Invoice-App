import { c as create_ssr_component, v as validate_component, a as subscribe, l as is_promise, n as noop, f as each } from "../../chunks/index-d2589f30.js";
import { C as Card, T as Text, c as convertDate, n as numberWithCommas, B as Button, b as getInvoicesIndex, g as globalStore } from "../../chunks/functionStore-31d719cc.js";
import { T as Tag } from "../../chunks/Tag-a0045b76.js";
import { F as FormField, a as options1 } from "../../chunks/InvoiceOptions-4b5fe3d5.js";
var Invoice_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".container-invoice.svelte-1s6sk94 div.svelte-1s6sk94{display:flex;flex-direction:column}.container-invoice.svelte-1s6sk94.svelte-1s6sk94{display:grid;grid-template-columns:1fr 0fr;width:100%}@media(min-width: 992px){.container-invoice.svelte-1s6sk94.svelte-1s6sk94{grid-template-columns:2fr 1fr}}.container-invoice.svelte-1s6sk94 div.svelte-1s6sk94{justify-content:end}@media(min-width: 768px) and (max-width: 991px){.container-invoice.svelte-1s6sk94 div.svelte-1s6sk94{flex-direction:row;align-items:center}}@media(min-width: 768px){.container-invoice.svelte-1s6sk94 div.svelte-1s6sk94{padding:1rem}}.container-invoice.svelte-1s6sk94 .dueInformation.svelte-1s6sk94{display:grid;grid-template-columns:1fr;padding:1rem;gap:10px}@media(min-width: 520px) and (max-width: 767px){.container-invoice.svelte-1s6sk94 .dueInformation.svelte-1s6sk94{grid-template-columns:1fr 2fr;place-items:center}}@media(min-width: 768px) and (max-width: 991px){.container-invoice.svelte-1s6sk94 .dueInformation.svelte-1s6sk94{grid-template-columns:1fr 2fr;text-align:center;padding:0}}@media(min-width: 992px) and (max-width: 1199px){.container-invoice.svelte-1s6sk94 .dueInformation.svelte-1s6sk94{grid-template-columns:1fr 70%;text-align:center;align-items:center}}@media(min-width: 1200px){.container-invoice.svelte-1s6sk94 .dueInformation.svelte-1s6sk94{grid-template-columns:1fr 2fr;align-items:center;padding:0}}.container-invoice.svelte-1s6sk94 .dueInformation div.svelte-1s6sk94{display:flex;flex-direction:column;justify-content:space-around;gap:5px}@media(min-width: 520px) and (max-width: 767px){.container-invoice.svelte-1s6sk94 .dueInformation div.svelte-1s6sk94{display:grid;grid-template-columns:1fr;align-items:center;gap:10px}}@media(min-width: 768px) and (max-width: 991px){.container-invoice.svelte-1s6sk94 .dueInformation div.svelte-1s6sk94{display:grid;place-items:center;margin:0;grid-template-columns:1fr 1fr}}@media(min-width: 992px) and (max-width: 1199px){.container-invoice.svelte-1s6sk94 .dueInformation div.svelte-1s6sk94{display:grid;grid-template-columns:2fr 1fr;align-items:center}}@media(min-width: 1200px){.container-invoice.svelte-1s6sk94 .dueInformation div.svelte-1s6sk94{display:grid;text-align:center;gap:10px}}.container-invoice.svelte-1s6sk94 .paymentInformation.svelte-1s6sk94{display:grid;grid-template-columns:1fr;justify-content:center;text-align:center;align-items:center;padding:0.5rem;width:95%;margin-right:-1rem;gap:7px}@media(min-width: 520px) and (max-width: 767px){.container-invoice.svelte-1s6sk94 .paymentInformation.svelte-1s6sk94{display:grid;grid-template-columns:1fr 1fr;place-items:center;gap:16px;justify-content:center}}@media(min-width: 992px) and (max-width: 1199px){.container-invoice.svelte-1s6sk94 .paymentInformation.svelte-1s6sk94{display:grid;grid-template-columns:1fr 1fr}}@media(min-width: 1200px){.container-invoice.svelte-1s6sk94 .paymentInformation.svelte-1s6sk94{display:flex;justify-content:center;align-items:center;padding:0 0.5rem 0 0}}")();
const css$1 = {
  code: ".container-invoice.svelte-1s6sk94 div.svelte-1s6sk94{display:flex;flex-direction:column}.container-invoice.svelte-1s6sk94.svelte-1s6sk94{display:grid;grid-template-columns:1fr 0fr;width:100%}@media(min-width: 992px){.container-invoice.svelte-1s6sk94.svelte-1s6sk94{grid-template-columns:2fr 1fr}}.container-invoice.svelte-1s6sk94 div.svelte-1s6sk94{justify-content:end}@media(min-width: 768px) and (max-width: 991px){.container-invoice.svelte-1s6sk94 div.svelte-1s6sk94{flex-direction:row;align-items:center}}@media(min-width: 768px){.container-invoice.svelte-1s6sk94 div.svelte-1s6sk94{padding:1rem}}.container-invoice.svelte-1s6sk94 .dueInformation.svelte-1s6sk94{display:grid;grid-template-columns:1fr;padding:1rem;gap:10px}@media(min-width: 520px) and (max-width: 767px){.container-invoice.svelte-1s6sk94 .dueInformation.svelte-1s6sk94{grid-template-columns:1fr 2fr;place-items:center}}@media(min-width: 768px) and (max-width: 991px){.container-invoice.svelte-1s6sk94 .dueInformation.svelte-1s6sk94{grid-template-columns:1fr 2fr;text-align:center;padding:0}}@media(min-width: 992px) and (max-width: 1199px){.container-invoice.svelte-1s6sk94 .dueInformation.svelte-1s6sk94{grid-template-columns:1fr 70%;text-align:center;align-items:center}}@media(min-width: 1200px){.container-invoice.svelte-1s6sk94 .dueInformation.svelte-1s6sk94{grid-template-columns:1fr 2fr;align-items:center;padding:0}}.container-invoice.svelte-1s6sk94 .dueInformation div.svelte-1s6sk94{display:flex;flex-direction:column;justify-content:space-around;gap:5px}@media(min-width: 520px) and (max-width: 767px){.container-invoice.svelte-1s6sk94 .dueInformation div.svelte-1s6sk94{display:grid;grid-template-columns:1fr;align-items:center;gap:10px}}@media(min-width: 768px) and (max-width: 991px){.container-invoice.svelte-1s6sk94 .dueInformation div.svelte-1s6sk94{display:grid;place-items:center;margin:0;grid-template-columns:1fr 1fr}}@media(min-width: 992px) and (max-width: 1199px){.container-invoice.svelte-1s6sk94 .dueInformation div.svelte-1s6sk94{display:grid;grid-template-columns:2fr 1fr;align-items:center}}@media(min-width: 1200px){.container-invoice.svelte-1s6sk94 .dueInformation div.svelte-1s6sk94{display:grid;text-align:center;gap:10px}}.container-invoice.svelte-1s6sk94 .paymentInformation.svelte-1s6sk94{display:grid;grid-template-columns:1fr;justify-content:center;text-align:center;align-items:center;padding:0.5rem;width:95%;margin-right:-1rem;gap:7px}@media(min-width: 520px) and (max-width: 767px){.container-invoice.svelte-1s6sk94 .paymentInformation.svelte-1s6sk94{display:grid;grid-template-columns:1fr 1fr;place-items:center;gap:16px;justify-content:center}}@media(min-width: 992px) and (max-width: 1199px){.container-invoice.svelte-1s6sk94 .paymentInformation.svelte-1s6sk94{display:grid;grid-template-columns:1fr 1fr}}@media(min-width: 1200px){.container-invoice.svelte-1s6sk94 .paymentInformation.svelte-1s6sk94{display:flex;justify-content:center;align-items:center;padding:0 0.5rem 0 0}}",
  map: null
};
const Invoice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `${validate_component(Card, "Card").$$render($$result, { inv: true, id }, {}, {
    default: () => {
      return `<div class="${"container-invoice svelte-1s6sk94"}"><div class="${"dueInformation svelte-1s6sk94"}">${validate_component(Text, "Text").$$render($$result, { size: "h3", text: "#" + id }, {}, {})}
            <div class="${"svelte-1s6sk94"}">${validate_component(Text, "Text").$$render($$result, {
        size: "p",
        text: "Due: " + convertDate(paymentDue, 0)
      }, {}, {})}
                ${validate_component(Text, "Text").$$render($$result, {
        size: "h3",
        text: "$" + numberWithCommas(total.toFixed(2))
      }, {}, {})}</div></div>
    <div class="${"paymentInformation svelte-1s6sk94"}">${validate_component(Text, "Text").$$render($$result, { size: "p", text: clientName }, {}, {})}
        ${validate_component(Tag, "Tag").$$render($$result, { status }, {}, {})}</div></div>`;
    }
  })}`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".container.svelte-1h70dj0.svelte-1h70dj0{display:flex;flex-direction:column;width:100%;max-width:62.5rem}@media(min-width: 1200px){.container.svelte-1h70dj0.svelte-1h70dj0{display:grid;grid-template-columns:1fr;max-width:75rem}}.container.svelte-1h70dj0 div.invoices.svelte-1h70dj0{display:flex;flex-direction:column;width:100%;max-width:62.5rem;margin-top:1.5rem}@media(min-width: 992px) and (max-width: 1199px){.container.svelte-1h70dj0 div.invoices.svelte-1h70dj0{display:grid;place-items:center}}@media(min-width: 1200px){.container.svelte-1h70dj0 div.invoices.svelte-1h70dj0{display:grid;grid-template-columns:1fr 1fr;gap:7px;justify-self:center;max-width:75rem}}.container.svelte-1h70dj0 .helperBar.svelte-1h70dj0{display:flex;justify-content:space-between;margin-top:1.25rem}.container.svelte-1h70dj0 .helperBar_invoice.svelte-1h70dj0{display:flex;flex-direction:column;justify-content:center;margin-right:1rem;gap:0.3125rem}.container.svelte-1h70dj0 .helperBar .settings.svelte-1h70dj0{display:grid;grid-template-columns:1fr 1fr;gap:10px}@media(min-width: 768px){.container.svelte-1h70dj0 .helperBar .settings.svelte-1h70dj0{place-items:initial;gap:30px}}.container.svelte-1h70dj0 .loading.svelte-1h70dj0{display:flex;justify-content:center;align-items:center;height:80vh}.noInvoices.svelte-1h70dj0.svelte-1h70dj0{display:flex;justify-content:center;align-items:center;flex-direction:column;height:60vh}.noInvoices.svelte-1h70dj0 div.svelte-1h70dj0{text-align:center;margin-top:1rem}")();
const css = {
  code: ".container.svelte-1h70dj0.svelte-1h70dj0{display:flex;flex-direction:column;width:100%;max-width:62.5rem}@media(min-width: 1200px){.container.svelte-1h70dj0.svelte-1h70dj0{display:grid;grid-template-columns:1fr;max-width:75rem}}.container.svelte-1h70dj0 div.invoices.svelte-1h70dj0{display:flex;flex-direction:column;width:100%;max-width:62.5rem;margin-top:1.5rem}@media(min-width: 992px) and (max-width: 1199px){.container.svelte-1h70dj0 div.invoices.svelte-1h70dj0{display:grid;place-items:center}}@media(min-width: 1200px){.container.svelte-1h70dj0 div.invoices.svelte-1h70dj0{display:grid;grid-template-columns:1fr 1fr;gap:7px;justify-self:center;max-width:75rem}}.container.svelte-1h70dj0 .helperBar.svelte-1h70dj0{display:flex;justify-content:space-between;margin-top:1.25rem}.container.svelte-1h70dj0 .helperBar_invoice.svelte-1h70dj0{display:flex;flex-direction:column;justify-content:center;margin-right:1rem;gap:0.3125rem}.container.svelte-1h70dj0 .helperBar .settings.svelte-1h70dj0{display:grid;grid-template-columns:1fr 1fr;gap:10px}@media(min-width: 768px){.container.svelte-1h70dj0 .helperBar .settings.svelte-1h70dj0{place-items:initial;gap:30px}}.container.svelte-1h70dj0 .loading.svelte-1h70dj0{display:flex;justify-content:center;align-items:center;height:80vh}.noInvoices.svelte-1h70dj0.svelte-1h70dj0{display:flex;justify-content:center;align-items:center;flex-direction:column;height:60vh}.noInvoices.svelte-1h70dj0 div.svelte-1h70dj0{text-align:center;margin-top:1rem}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filter;
  let filteredInvoices;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    filter = "all";
    filteredInvoices = $globalStore.invoices.filter((invoice) => invoice.status === filter || filter === "all");
    $$rendered = `<div class="${"container svelte-1h70dj0"}">${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return `
    <div class="${"loading svelte-1h70dj0"}">${validate_component(Text, "Text").$$render($$result, {
          size: "h3",
          text: "Getting invoices, please wait"
        }, {}, {})}</div>
    `;
      }
      return function() {
        return ` 
    <div class="${"helperBar svelte-1h70dj0"}"><div class="${"helperBar_invoice svelte-1h70dj0"}">${validate_component(Text, "Text").$$render($$result, { size: "h2", text: "Invoices" }, {}, {})}
            ${validate_component(Text, "Text").$$render($$result, {
          size: "p",
          text: filteredInvoices.length + " invoices"
        }, {}, {})}</div>
        <div class="${"settings svelte-1h70dj0"}">${validate_component(FormField, "FormField").$$render($$result, {
          id: "filter",
          form: "select",
          options: options1,
          value: filter
        }, {
          value: ($$value) => {
            filter = $$value;
            $$settled = false;
          }
        }, {})}
            ${validate_component(Button, "Button").$$render($$result, {
          rounded: true,
          fluid: true,
          icon: "plus",
          text: "Add Invoice"
        }, {}, {})}</div></div>
    ${$globalStore.invoices.length > 0 ? `<div class="${"invoices svelte-1h70dj0"}">${each(filteredInvoices, ({ id, paymentDue, total, clientName, status }, i) => {
          return `${validate_component(Invoice, "Invoice").$$render($$result, {
            id,
            paymentDue,
            total,
            clientName,
            status
          }, {}, {})}`;
        })}</div>` : `<div class="${"noInvoices svelte-1h70dj0"}"><img src="${"/noInvoice.svg"}" alt="${"No invoice"}">
            <div class="${"svelte-1h70dj0"}">${validate_component(Text, "Text").$$render($$result, {
          title: true,
          size: "h2",
          text: "No Invoices"
        }, {}, {})}
                ${validate_component(Text, "Text").$$render($$result, {
          title: true,
          size: "p",
          text: "To Create an Invoice"
        }, {}, {})}
                ${validate_component(Text, "Text").$$render($$result, {
          title: true,
          size: "p",
          text: "Click 'Add invoice' at the top"
        }, {}, {})}</div></div>`}
    `;
      }();
    }(getInvoicesIndex())}</div>`;
  } while (!$$settled);
  $$unsubscribe_globalStore();
  return $$rendered;
});
export { Routes as default };
