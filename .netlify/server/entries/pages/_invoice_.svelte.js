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
  default: () => U5Binvoiceu5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_80978f94 = require("../../chunks/index-80978f94.js");
var import_functionStore_c189635e = require("../../chunks/functionStore-c189635e.js");
var import_stores_f168da72 = require("../../chunks/stores-f168da72.js");
var import_Tag_65981a06 = require("../../chunks/Tag-65981a06.js");
var InvoiceInformation_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btns.svelte-1m31m9p.svelte-1m31m9p,.backButton.svelte-1m31m9p.svelte-1m31m9p,.bottomCard_invoiceInfo-itemList-items-total.svelte-1m31m9p.svelte-1m31m9p,.bottomCard_invoiceInfo-itemList-items.svelte-1m31m9p.svelte-1m31m9p,.topCard_btns.svelte-1m31m9p.svelte-1m31m9p,.topCard.svelte-1m31m9p.svelte-1m31m9p{display:flex}.bottomCard_invoiceInfo-billTo-invoiceDate.svelte-1m31m9p.svelte-1m31m9p,.bottomCard_invoiceInfo-billTo-invoiceDue.svelte-1m31m9p.svelte-1m31m9p,.bottomCard_invoiceInfo-billTo-client.svelte-1m31m9p.svelte-1m31m9p,.bottomCard_invoiceInfo-senderInfo.svelte-1m31m9p.svelte-1m31m9p,.bottomCard_invoiceInfo-ID.svelte-1m31m9p.svelte-1m31m9p,.bottomCard.svelte-1m31m9p.svelte-1m31m9p,.invoiceContainer.svelte-1m31m9p.svelte-1m31m9p{display:flex;flex-direction:column}.bottomCard_invoiceInfo-billTo.svelte-1m31m9p .bottomCard_invoiceInfo-billTo-email.svelte-1m31m9p,.bottomCard_invoiceInfo-billTo-invoices.svelte-1m31m9p.svelte-1m31m9p,.bottomCard_invoiceInfo-billTo.svelte-1m31m9p.svelte-1m31m9p,.bottomCard_invoiceInfo-itemList.svelte-1m31m9p.svelte-1m31m9p,.bottomCard_invoiceInfo-details.svelte-1m31m9p.svelte-1m31m9p,.bottomCard_invoiceInfo.svelte-1m31m9p.svelte-1m31m9p{display:grid}.invoiceContainer.svelte-1m31m9p.svelte-1m31m9p{width:100%;max-width:62.5rem}.topCard.svelte-1m31m9p.svelte-1m31m9p{margin-bottom:1rem}@media(min-width: 768px){.topCard.svelte-1m31m9p.svelte-1m31m9p{justify-content:space-between}}.topCard_invoiceStatus.svelte-1m31m9p.svelte-1m31m9p{display:flex;justify-content:center;align-items:center;gap:0.9375rem;width:100%;padding:0.125rem}@media(min-width: 520px) and (max-width: 767px){.topCard_invoiceStatus.svelte-1m31m9p.svelte-1m31m9p{justify-content:center;gap:3rem}}@media(min-width: 768px){.topCard_invoiceStatus.svelte-1m31m9p.svelte-1m31m9p{justify-content:center}}.topCard_btns.svelte-1m31m9p.svelte-1m31m9p{width:100%;justify-content:end;margin-right:1rem;gap:1.5625rem}.bottomCard_invoiceInfo.svelte-1m31m9p.svelte-1m31m9p{padding:0.4rem;width:100%}.bottomCard_invoiceInfo-ID.svelte-1m31m9p.svelte-1m31m9p{gap:7px}.bottomCard_invoiceInfo-details.svelte-1m31m9p.svelte-1m31m9p{margin-bottom:3rem}@media(min-width: 520px){.bottomCard_invoiceInfo-details.svelte-1m31m9p.svelte-1m31m9p{grid-template-columns:1fr 1fr}}.bottomCard_invoiceInfo-senderInfo.svelte-1m31m9p.svelte-1m31m9p{gap:0.375rem;margin:2rem 0}@media(min-width: 520px){.bottomCard_invoiceInfo-senderInfo.svelte-1m31m9p.svelte-1m31m9p{margin:0;align-items:flex-end}}.bottomCard_invoiceInfo-itemList.svelte-1m31m9p.svelte-1m31m9p{place-self:center;margin:2rem 0 0 0;max-width:600px;width:100%}.bottomCard_invoiceInfo-itemList-items.svelte-1m31m9p.svelte-1m31m9p{justify-content:space-between;padding:0.5rem;margin-bottom:0.5rem;align-items:center}.bottomCard_invoiceInfo-itemList-items-total.svelte-1m31m9p.svelte-1m31m9p{justify-content:space-between;background-color:black;padding:1rem;width:100%;border-bottom-left-radius:12px;border-bottom-right-radius:12px}.bottomCard_invoiceInfo-itemList-items-total.svelte-1m31m9p h3.svelte-1m31m9p{color:white}.bottomCard_invoiceInfo-itemList-items-description.svelte-1m31m9p.svelte-1m31m9p{display:flex;flex-direction:column;gap:5px}.bottomCard_invoiceInfo-billTo.svelte-1m31m9p.svelte-1m31m9p{grid-template-columns:1fr 1fr;gap:35px}@media(min-width: 768px){.bottomCard_invoiceInfo-billTo.svelte-1m31m9p.svelte-1m31m9p{grid-template-columns:1fr 1fr 0.25fr}}.bottomCard_invoiceInfo-billTo-invoices.svelte-1m31m9p.svelte-1m31m9p{gap:20px}.bottomCard_invoiceInfo-billTo.svelte-1m31m9p .bottomCard_invoiceInfo-billTo-email.svelte-1m31m9p{grid-column:span 2/span 2;gap:9px}@media(min-width: 768px){.bottomCard_invoiceInfo-billTo.svelte-1m31m9p .bottomCard_invoiceInfo-billTo-email.svelte-1m31m9p{display:flex;flex-direction:column;grid-column:unset}}@media(min-width: 520px) and (max-width: 767px){.bottomCard_invoiceInfo-billTo-client.svelte-1m31m9p.svelte-1m31m9p{justify-content:flex-end}}.bottomCard_invoiceInfo-billTo-client-information.svelte-1m31m9p.svelte-1m31m9p{display:flex;flex-direction:column;gap:0.4375rem}.bottomCard_invoiceInfo-billTo-invoiceDate.svelte-1m31m9p.svelte-1m31m9p,.bottomCard_invoiceInfo-billTo-invoiceDue.svelte-1m31m9p.svelte-1m31m9p,.bottomCard_invoiceInfo-billTo-client.svelte-1m31m9p.svelte-1m31m9p{gap:9px}.btns.svelte-1m31m9p.svelte-1m31m9p{justify-content:space-evenly;align-items:center;width:100%;gap:0.375rem}",
  map: null
};
const InvoiceInformation = (0, import_index_80978f94.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_globalStore;
  let $$unsubscribe_page;
  $$unsubscribe_globalStore = (0, import_index_80978f94.a)(import_functionStore_c189635e.g, (value) => value);
  $$unsubscribe_page = (0, import_index_80978f94.a)(import_stores_f168da72.p, (value) => value);
  let { status } = $$props;
  let { id } = $$props;
  let { description } = $$props;
  let { createdAt } = $$props;
  let { paymentDue } = $$props;
  let { clientName } = $$props;
  let { clientAddress } = $$props;
  let { clientEmail } = $$props;
  let { senderAddress } = $$props;
  let { items = [] } = $$props;
  let { total } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.createdAt === void 0 && $$bindings.createdAt && createdAt !== void 0)
    $$bindings.createdAt(createdAt);
  if ($$props.paymentDue === void 0 && $$bindings.paymentDue && paymentDue !== void 0)
    $$bindings.paymentDue(paymentDue);
  if ($$props.clientName === void 0 && $$bindings.clientName && clientName !== void 0)
    $$bindings.clientName(clientName);
  if ($$props.clientAddress === void 0 && $$bindings.clientAddress && clientAddress !== void 0)
    $$bindings.clientAddress(clientAddress);
  if ($$props.clientEmail === void 0 && $$bindings.clientEmail && clientEmail !== void 0)
    $$bindings.clientEmail(clientEmail);
  if ($$props.senderAddress === void 0 && $$bindings.senderAddress && senderAddress !== void 0)
    $$bindings.senderAddress(senderAddress);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  $$result.css.add(css$1);
  $$unsubscribe_globalStore();
  $$unsubscribe_page();
  return `

<div class="${"invoiceContainer svelte-1m31m9p"}"><div class="${"backButton svelte-1m31m9p"}">${(0, import_index_80978f94.v)(import_stores_f168da72.B, "BackButton").$$render($$result, { href: true }, {}, {})}</div>

    <div class="${"topCard svelte-1m31m9p"}">${(0, import_index_80978f94.v)(import_functionStore_c189635e.C, "Card").$$render($$result, { round: true }, {}, {
    default: () => {
      return `<div class="${"topCard_invoiceStatus svelte-1m31m9p"}">${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, { size: "p", text: "Status:" }, {}, {})}
                ${(0, import_index_80978f94.v)(import_Tag_65981a06.T, "Tag").$$render($$result, { status }, {}, {})}</div>
            ${``}`;
    }
  })}</div>



    <div class="${"bottomCard svelte-1m31m9p"}">${(0, import_index_80978f94.v)(import_functionStore_c189635e.C, "Card").$$render($$result, { round: true }, {}, {
    default: () => {
      return `<div class="${"bottomCard_invoiceInfo svelte-1m31m9p"}"><div class="${"bottomCard_invoiceInfo-details svelte-1m31m9p"}"><div class="${"bottomCard_invoiceInfo-ID svelte-1m31m9p"}">${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, { size: "h3", text: "#" + id }, {}, {})}
                        ${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, { size: "p", text: description }, {}, {})}</div> 
    
                    <div class="${"bottomCard_invoiceInfo-senderInfo svelte-1m31m9p"}">${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, { size: "p", text: senderAddress.street }, {}, {})}
                        ${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, { size: "p", text: senderAddress.city }, {}, {})}
                        ${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, { size: "p", text: senderAddress.postCode }, {}, {})}
                        ${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, { size: "p", text: senderAddress.country }, {}, {})}</div></div>
            
                

                <div class="${"bottomCard_invoiceInfo-billTo svelte-1m31m9p"}"><div class="${"bottomCard_invoiceInfo-billTo-invoices svelte-1m31m9p"}"><div class="${"bottomCard_invoiceInfo-billTo-invoiceDate svelte-1m31m9p"}">${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, { size: "p", text: "Invoice Date" }, {}, {})}
                            ${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, {
        size: "h3",
        text: (0, import_functionStore_c189635e.c)(createdAt, 0)
      }, {}, {})}</div>
    
                        <div class="${"bottomCard_invoiceInfo-billTo-invoiceDue svelte-1m31m9p"}">${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, { size: "p", text: "Payment Due" }, {}, {})}
                            ${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, {
        size: "h3",
        text: (0, import_functionStore_c189635e.c)(paymentDue, 0)
      }, {}, {})}</div></div>

                    <div class="${"bottomCard_invoiceInfo-billTo-client svelte-1m31m9p"}">${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, { size: "p", text: "Bill To" }, {}, {})}
                        <div>${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, { size: "h3", text: clientName }, {}, {})}</div>
                        <div class="${"bottomCard_invoiceInfo-billTo-client-information svelte-1m31m9p"}">${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, { size: "p", text: clientAddress.street }, {}, {})}
                            ${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, { size: "p", text: clientAddress.city }, {}, {})}
                            ${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, { size: "p", text: clientAddress.postCode }, {}, {})}
                            ${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, { size: "p", text: clientAddress.country }, {}, {})}</div></div>
                
                    <div class="${"bottomCard_invoiceInfo-billTo-email svelte-1m31m9p"}">${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, { size: "p", text: "Sent to" }, {}, {})}
                        ${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, { size: "h3", text: clientEmail }, {}, {})}</div></div>

                <div class="${"bottomCard_invoiceInfo-itemList svelte-1m31m9p"}">${(0, import_index_80978f94.v)(import_stores_f168da72.I, "InnerCard").$$render($$result, {}, {}, {
        default: () => {
          return `${(0, import_index_80978f94.d)(items, (item, i) => {
            return `<div class="${"bottomCard_invoiceInfo-itemList-items svelte-1m31m9p"}"><div class="${"bottomCard_invoiceInfo-itemList-items-description svelte-1m31m9p"}">${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, { size: "h3", text: item.name }, {}, {})}
                                    ${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, {
              size: "p",
              text: "$" + Number(items[i].price).toFixed(2) + " x " + items[i].quantity
            }, {}, {})}</div>
                                ${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, {
              size: "h3",
              text: "$" + (0, import_functionStore_c189635e.n)((item.quantity * item.price).toFixed(2))
            }, {}, {})}
                            </div>`;
          })}`;
        }
      })}
                    <div class="${"bottomCard_invoiceInfo-itemList-items-total svelte-1m31m9p"}"><h3 class="${"svelte-1m31m9p"}">Amount Due</h3>
                        <h3 class="${"svelte-1m31m9p"}">$${(0, import_index_80978f94.e)((0, import_functionStore_c189635e.n)(total.toFixed(2)))}</h3></div></div></div>`;
    }
  })}</div></div>


${``}


${``}


${``}`;
});
var _invoice__svelte_svelte_type_style_lang = "";
const css = {
  code: ".loader.svelte-1v7wm0g{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:10px;height:100%}",
  map: null
};
let msg = "Getting invoice information, please wait...";
const U5Binvoiceu5D = (0, import_index_80978f94.c)(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_globalStore = (0, import_index_80978f94.a)(import_functionStore_c189635e.g, (value) => $globalStore = value);
  $$unsubscribe_page = (0, import_index_80978f94.a)(import_stores_f168da72.p, (value) => $page = value);
  async function getInvoiceInformation(path) {
    await (0, import_functionStore_c189635e.a)();
    let invoice = $globalStore.invoices.find((invoice2) => invoice2.id === path);
    if (invoice) {
      return __spreadValues({}, invoice);
    } else {
      setTimeout(() => {
        location.href = "/";
      }, 3e3);
      clearTimeout();
      throw new Error("Invoice not found - redirecting you back to the invoice list in 3 seconds...");
    }
  }
  $$result.css.add(css);
  $$unsubscribe_globalStore();
  $$unsubscribe_page();
  return `





${function(__value) {
    if ((0, import_index_80978f94.j)(__value)) {
      __value.then(null, import_index_80978f94.n);
      return `
    <div class="${"loader svelte-1v7wm0g"}">${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, { size: "h2", text: msg }, {}, {})}</div>
    `;
    }
    return function(inv) {
      return `
  ${(0, import_index_80978f94.v)(InvoiceInformation, "InvoiceInformation").$$render($$result, Object.assign(inv), {}, {})}
  `;
    }(__value);
  }(getInvoiceInformation($page.params.invoice))}`;
});
