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
  default: () => U5Binvoiceu5D
});
var import_index_6b830c0a = __toModule(require("../../chunks/index-6b830c0a.js"));
var import_functionStore_2bd81cb2 = __toModule(require("../../chunks/functionStore-2bd81cb2.js"));
var import_stores_ced9780d = __toModule(require("../../chunks/stores-ced9780d.js"));
var import_Tag_21bc3ade = __toModule(require("../../chunks/Tag-21bc3ade.js"));
var InvoiceInformation_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btns.svelte-10es1dh.svelte-10es1dh,.backButton.svelte-10es1dh.svelte-10es1dh,.bottomCard_invoiceInfo-itemList-items-total.svelte-10es1dh.svelte-10es1dh,.bottomCard_invoiceInfo-itemList-items.svelte-10es1dh.svelte-10es1dh,.topCard_btns.svelte-10es1dh.svelte-10es1dh,.topCard.svelte-10es1dh.svelte-10es1dh{display:flex}.bottomCard_invoiceInfo-billTo-invoiceDate.svelte-10es1dh.svelte-10es1dh,.bottomCard_invoiceInfo-billTo-invoiceDue.svelte-10es1dh.svelte-10es1dh,.bottomCard_invoiceInfo-billTo-client.svelte-10es1dh.svelte-10es1dh,.bottomCard_invoiceInfo-senderInfo.svelte-10es1dh.svelte-10es1dh,.bottomCard_invoiceInfo-ID.svelte-10es1dh.svelte-10es1dh,.bottomCard.svelte-10es1dh.svelte-10es1dh,.invoiceContainer.svelte-10es1dh.svelte-10es1dh{display:flex;flex-direction:column}.bottomCard_invoiceInfo-billTo.svelte-10es1dh .bottomCard_invoiceInfo-billTo-email.svelte-10es1dh,.bottomCard_invoiceInfo-billTo-invoices.svelte-10es1dh.svelte-10es1dh,.bottomCard_invoiceInfo-billTo.svelte-10es1dh.svelte-10es1dh,.bottomCard_invoiceInfo-itemList.svelte-10es1dh.svelte-10es1dh,.bottomCard_invoiceInfo-details.svelte-10es1dh.svelte-10es1dh,.bottomCard_invoiceInfo.svelte-10es1dh.svelte-10es1dh{display:grid}.invoiceContainer.svelte-10es1dh.svelte-10es1dh{width:100%;max-width:81.25rem}.topCard.svelte-10es1dh.svelte-10es1dh{margin-bottom:1rem}@media(min-width: 768px){.topCard.svelte-10es1dh.svelte-10es1dh{justify-content:space-between}}.topCard_invoiceStatus.svelte-10es1dh.svelte-10es1dh{display:flex;justify-content:center;align-items:center;gap:0.9375rem;width:100%;padding:0.125rem}@media(min-width: 520px) and (max-width: 767px){.topCard_invoiceStatus.svelte-10es1dh.svelte-10es1dh{justify-content:center;gap:3rem}}@media(min-width: 768px){.topCard_invoiceStatus.svelte-10es1dh.svelte-10es1dh{justify-content:center}}.topCard_btns.svelte-10es1dh.svelte-10es1dh{width:100%;justify-content:end;margin-right:1rem;gap:1.5625rem}.bottomCard_invoiceInfo.svelte-10es1dh.svelte-10es1dh{padding:0.4rem;width:100%}.bottomCard_invoiceInfo-ID.svelte-10es1dh.svelte-10es1dh{gap:7px}.bottomCard_invoiceInfo-details.svelte-10es1dh.svelte-10es1dh{margin-bottom:3rem}@media(min-width: 520px){.bottomCard_invoiceInfo-details.svelte-10es1dh.svelte-10es1dh{grid-template-columns:1fr 1fr}}.bottomCard_invoiceInfo-senderInfo.svelte-10es1dh.svelte-10es1dh{gap:0.25rem;margin:2rem 0}@media(min-width: 520px){.bottomCard_invoiceInfo-senderInfo.svelte-10es1dh.svelte-10es1dh{margin:0;align-items:flex-end}}.bottomCard_invoiceInfo-itemList.svelte-10es1dh.svelte-10es1dh{place-self:center;margin:2rem 0 0 0;max-width:600px;width:100%}.bottomCard_invoiceInfo-itemList-items.svelte-10es1dh.svelte-10es1dh{justify-content:space-between;padding:0.5rem;margin-bottom:0.5rem;align-items:center}.bottomCard_invoiceInfo-itemList-items-total.svelte-10es1dh.svelte-10es1dh{justify-content:space-between;background-color:black;padding:1rem;width:100%;border-bottom-left-radius:12px;border-bottom-right-radius:12px}.bottomCard_invoiceInfo-itemList-items-total.svelte-10es1dh h3.svelte-10es1dh{color:white}.bottomCard_invoiceInfo-billTo.svelte-10es1dh.svelte-10es1dh{grid-template-columns:1fr 1fr;gap:35px}@media(min-width: 768px){.bottomCard_invoiceInfo-billTo.svelte-10es1dh.svelte-10es1dh{grid-template-columns:1fr 1fr 0.25fr}}.bottomCard_invoiceInfo-billTo-invoices.svelte-10es1dh.svelte-10es1dh{gap:20px}.bottomCard_invoiceInfo-billTo.svelte-10es1dh .bottomCard_invoiceInfo-billTo-email.svelte-10es1dh{grid-column:span 2/span 2;gap:9px}@media(min-width: 768px){.bottomCard_invoiceInfo-billTo.svelte-10es1dh .bottomCard_invoiceInfo-billTo-email.svelte-10es1dh{display:flex;flex-direction:column;grid-column:unset}}@media(min-width: 520px) and (max-width: 767px){.bottomCard_invoiceInfo-billTo-client.svelte-10es1dh.svelte-10es1dh{justify-content:flex-end}}.bottomCard_invoiceInfo-billTo-client-information.svelte-10es1dh.svelte-10es1dh{line-height:1.6}.bottomCard_invoiceInfo-billTo-invoiceDate.svelte-10es1dh.svelte-10es1dh,.bottomCard_invoiceInfo-billTo-invoiceDue.svelte-10es1dh.svelte-10es1dh,.bottomCard_invoiceInfo-billTo-client.svelte-10es1dh.svelte-10es1dh{gap:9px}.btns.svelte-10es1dh.svelte-10es1dh{justify-content:space-evenly;align-items:center;width:100%;gap:0.375rem}",
  map: null
};
const InvoiceInformation = (0, import_index_6b830c0a.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_globalStore;
  let $$unsubscribe_page;
  $$unsubscribe_globalStore = (0, import_index_6b830c0a.a)(import_functionStore_2bd81cb2.g, (value) => value);
  $$unsubscribe_page = (0, import_index_6b830c0a.a)(import_stores_ced9780d.p, (value) => value);
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

<div class="${"invoiceContainer svelte-10es1dh"}"><div class="${"backButton svelte-10es1dh"}">${(0, import_index_6b830c0a.v)(import_stores_ced9780d.B, "BackButton").$$render($$result, { href: true }, {}, {})}</div>

    <div class="${"topCard svelte-10es1dh"}">${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.C, "Card").$$render($$result, { round: true }, {}, {
    default: () => `<div class="${"topCard_invoiceStatus svelte-10es1dh"}">${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "p", text: "Status:" }, {}, {})}
                ${(0, import_index_6b830c0a.v)(import_Tag_21bc3ade.T, "Tag").$$render($$result, { status }, {}, {})}</div>
            ${``}`
  })}</div>



    <div class="${"bottomCard svelte-10es1dh"}">${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.C, "Card").$$render($$result, { round: true }, {}, {
    default: () => `<div class="${"bottomCard_invoiceInfo svelte-10es1dh"}"><div class="${"bottomCard_invoiceInfo-details svelte-10es1dh"}"><div class="${"bottomCard_invoiceInfo-ID svelte-10es1dh"}">${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "h3", text: "#" + id }, {}, {})}
                        ${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "p", text: description }, {}, {})}</div> 
    
                    <div class="${"bottomCard_invoiceInfo-senderInfo svelte-10es1dh"}">${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "p", text: senderAddress.street }, {}, {})}
                        ${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "p", text: senderAddress.city }, {}, {})}
                        ${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "p", text: senderAddress.postCode }, {}, {})}
                        ${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "p", text: senderAddress.country }, {}, {})}</div></div>
            
                

                <div class="${"bottomCard_invoiceInfo-billTo svelte-10es1dh"}"><div class="${"bottomCard_invoiceInfo-billTo-invoices svelte-10es1dh"}"><div class="${"bottomCard_invoiceInfo-billTo-invoiceDate svelte-10es1dh"}">${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "p", text: "Invoice Date" }, {}, {})}
                            ${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, {
      size: "h3",
      text: (0, import_functionStore_2bd81cb2.c)(createdAt, 0)
    }, {}, {})}</div>
    
                        <div class="${"bottomCard_invoiceInfo-billTo-invoiceDue svelte-10es1dh"}">${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "p", text: "Payment Due" }, {}, {})}
                            ${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, {
      size: "h3",
      text: (0, import_functionStore_2bd81cb2.c)(paymentDue, 0)
    }, {}, {})}</div></div>

                    <div class="${"bottomCard_invoiceInfo-billTo-client svelte-10es1dh"}">${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "p", text: "Bill To" }, {}, {})}
                        <div>${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "h3", text: clientName }, {}, {})}</div>
                        <div class="${"bottomCard_invoiceInfo-billTo-client-information svelte-10es1dh"}">${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "p", text: clientAddress.street }, {}, {})}
                            ${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "p", text: clientAddress.city }, {}, {})}
                            ${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "p", text: clientAddress.postCode }, {}, {})}
                            ${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "p", text: clientAddress.country }, {}, {})}</div></div>
                
                    <div class="${"bottomCard_invoiceInfo-billTo-email svelte-10es1dh"}">${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "p", text: "Sent to" }, {}, {})}
                        ${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "h3", text: clientEmail }, {}, {})}</div></div>

                <div class="${"bottomCard_invoiceInfo-itemList svelte-10es1dh"}">${(0, import_index_6b830c0a.v)(import_stores_ced9780d.I, "InnerCard").$$render($$result, {}, {}, {
      default: () => `${(0, import_index_6b830c0a.d)(items, (item, i) => `<div class="${"bottomCard_invoiceInfo-itemList-items svelte-10es1dh"}"><div class="${"bottomCard_invoiceInfo-itemList-items-description"}">${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "h3", text: item.name }, {}, {})}
                                    ${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, {
        size: "p",
        text: "$" + (0, import_functionStore_2bd81cb2.n)(item.price.toFixed(2)) + " x " + item.quantity + " "
      }, {}, {})}</div>
                                ${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, {
        size: "h3",
        text: "$" + (0, import_functionStore_2bd81cb2.n)((item.quantity * item.price).toFixed(2))
      }, {}, {})}
                            </div>`)}`
    })}
                    <div class="${"bottomCard_invoiceInfo-itemList-items-total svelte-10es1dh"}"><h3 class="${"svelte-10es1dh"}">Amount Due</h3>
                        <h3 class="${"svelte-10es1dh"}">$${(0, import_index_6b830c0a.e)((0, import_functionStore_2bd81cb2.n)(total.toFixed(2)))}</h3></div></div></div>`
  })}</div></div>

${``}


${``}


${``}`;
});
var _invoice__svelte_svelte_type_style_lang = "";
const css = {
  code: ".loader.svelte-15x83bc{display:flex;justify-content:center;align-items:center;height:100%}",
  map: null
};
const U5Binvoiceu5D = (0, import_index_6b830c0a.c)(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_globalStore = (0, import_index_6b830c0a.a)(import_functionStore_2bd81cb2.g, (value) => $globalStore = value);
  $$unsubscribe_page = (0, import_index_6b830c0a.a)(import_stores_ced9780d.p, (value) => $page = value);
  async function getInvoiceInformation(path) {
    await (0, import_functionStore_2bd81cb2.a)();
    return $globalStore.invoices.find((invoice) => invoice.id === path);
  }
  $$result.css.add(css);
  $$unsubscribe_globalStore();
  $$unsubscribe_page();
  return `

${function(__value) {
    if ((0, import_index_6b830c0a.j)(__value)) {
      __value.then(null, import_index_6b830c0a.n);
      return `
    <div class="${"loader svelte-15x83bc"}">${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, {
        size: "h2",
        text: "Getting invoice information, please wait..."
      }, {}, {})}</div>
    `;
    }
    return function(inv) {
      return `
  ${(0, import_index_6b830c0a.v)(InvoiceInformation, "InvoiceInformation").$$render($$result, Object.assign(inv), {}, {})}
    `;
    }(__value);
  }(getInvoiceInformation($page.params.invoice))}`;
});