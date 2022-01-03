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
var import_index_905b6237 = __toModule(require("../../chunks/index-905b6237.js"));
var import_Button_svelte_svelte_type_style_lang_13fe77f7 = __toModule(require("../../chunks/Button.svelte_svelte_type_style_lang-13fe77f7.js"));
var import_BackButton_ea71b0cc = __toModule(require("../../chunks/BackButton-ea71b0cc.js"));
var import_Tag_399a1d08 = __toModule(require("../../chunks/Tag-399a1d08.js"));
var InnerCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-1utl24k{display:block;border-top-left-radius:12px;border-top-right-radius:12px;border:2px solid black;padding:0.5rem;position:relative;width:100%;max-width:81.25rem}div.Dark.svelte-1utl24k{background-color:#2f3457}div.Light.svelte-1utl24k{background-color:#d8d8e8}",
  map: null
};
const InnerCard = (0, import_index_905b6237.c)(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_905b6237.a)(import_Button_svelte_svelte_type_style_lang_13fe77f7.g, (value) => $globalStore = value);
  $$result.css.add(css$1);
  $$unsubscribe_globalStore();
  return `<div class="${(0, import_index_905b6237.e)((0, import_index_905b6237.g)($globalStore.theme)) + " svelte-1utl24k"}">${slots.default ? slots.default({}) : ``}</div>`;
});
const getStores = () => {
  const stores = (0, import_index_905b6237.k)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var InvoiceInformation_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btns.svelte-hyhlu6.svelte-hyhlu6,.backButton.svelte-hyhlu6.svelte-hyhlu6,.bottomCard_invoiceInfo-itemList-items-total.svelte-hyhlu6.svelte-hyhlu6,.bottomCard_invoiceInfo-itemList-items.svelte-hyhlu6.svelte-hyhlu6,.topCard_btns.svelte-hyhlu6.svelte-hyhlu6,.topCard.svelte-hyhlu6.svelte-hyhlu6{display:flex}.bottomCard_invoiceInfo-billTo-invoiceDate.svelte-hyhlu6.svelte-hyhlu6,.bottomCard_invoiceInfo-billTo-invoiceDue.svelte-hyhlu6.svelte-hyhlu6,.bottomCard_invoiceInfo-billTo-client.svelte-hyhlu6.svelte-hyhlu6,.bottomCard_invoiceInfo-senderInfo.svelte-hyhlu6.svelte-hyhlu6,.bottomCard_invoiceInfo-ID.svelte-hyhlu6.svelte-hyhlu6,.bottomCard.svelte-hyhlu6.svelte-hyhlu6,.invoiceContainer.svelte-hyhlu6.svelte-hyhlu6{display:flex;flex-direction:column}.bottomCard_invoiceInfo-billTo.svelte-hyhlu6 .bottomCard_invoiceInfo-billTo-email.svelte-hyhlu6,.bottomCard_invoiceInfo-billTo-invoices.svelte-hyhlu6.svelte-hyhlu6,.bottomCard_invoiceInfo-billTo.svelte-hyhlu6.svelte-hyhlu6,.bottomCard_invoiceInfo-itemList.svelte-hyhlu6.svelte-hyhlu6,.bottomCard_invoiceInfo-details.svelte-hyhlu6.svelte-hyhlu6,.bottomCard_invoiceInfo.svelte-hyhlu6.svelte-hyhlu6{display:grid}.invoiceContainer.svelte-hyhlu6.svelte-hyhlu6{width:100%;max-width:81.25rem}.topCard.svelte-hyhlu6.svelte-hyhlu6{margin-bottom:1rem}@media(min-width: 768px){.topCard.svelte-hyhlu6.svelte-hyhlu6{justify-content:space-between}}.topCard_invoiceStatus.svelte-hyhlu6.svelte-hyhlu6{display:flex;justify-content:center;align-items:center;gap:0.9375rem;width:100%;padding:0.125rem}@media(min-width: 520px) and (max-width: 767px){.topCard_invoiceStatus.svelte-hyhlu6.svelte-hyhlu6{justify-content:center;gap:3rem}}@media(min-width: 768px){.topCard_invoiceStatus.svelte-hyhlu6.svelte-hyhlu6{justify-content:center}}.topCard_btns.svelte-hyhlu6.svelte-hyhlu6{width:100%;justify-content:end;margin-right:1rem;gap:1.5625rem}.bottomCard_invoiceInfo.svelte-hyhlu6.svelte-hyhlu6{padding:0.4rem;width:100%}.bottomCard_invoiceInfo-ID.svelte-hyhlu6.svelte-hyhlu6{gap:7px}.bottomCard_invoiceInfo-details.svelte-hyhlu6.svelte-hyhlu6{margin-bottom:3rem}@media(min-width: 520px){.bottomCard_invoiceInfo-details.svelte-hyhlu6.svelte-hyhlu6{grid-template-columns:1fr 1fr}}.bottomCard_invoiceInfo-senderInfo.svelte-hyhlu6.svelte-hyhlu6{gap:0.25rem;margin:2rem 0}@media(min-width: 520px){.bottomCard_invoiceInfo-senderInfo.svelte-hyhlu6.svelte-hyhlu6{margin:0;align-items:flex-end}}.bottomCard_invoiceInfo-itemList.svelte-hyhlu6.svelte-hyhlu6{place-self:center;margin:2rem 0 0 0;max-width:600px;width:100%}.bottomCard_invoiceInfo-itemList-items.svelte-hyhlu6.svelte-hyhlu6{justify-content:space-between;padding:0.5rem;margin-bottom:0.5rem;align-items:center}.bottomCard_invoiceInfo-itemList-items-total.svelte-hyhlu6.svelte-hyhlu6{justify-content:space-between;background-color:black;padding:1rem;width:100%;border-bottom-left-radius:12px;border-bottom-right-radius:12px}.bottomCard_invoiceInfo-itemList-items-total.svelte-hyhlu6 h3.svelte-hyhlu6{color:white}.bottomCard_invoiceInfo-billTo.svelte-hyhlu6.svelte-hyhlu6{grid-template-columns:1fr 1fr;gap:35px}@media(min-width: 768px){.bottomCard_invoiceInfo-billTo.svelte-hyhlu6.svelte-hyhlu6{grid-template-columns:1fr 1fr 0fr}}.bottomCard_invoiceInfo-billTo-invoices.svelte-hyhlu6.svelte-hyhlu6{gap:20px}.bottomCard_invoiceInfo-billTo.svelte-hyhlu6 .bottomCard_invoiceInfo-billTo-email.svelte-hyhlu6{grid-column:span 2/span 2;gap:9px}@media(min-width: 768px){.bottomCard_invoiceInfo-billTo.svelte-hyhlu6 .bottomCard_invoiceInfo-billTo-email.svelte-hyhlu6{display:flex;flex-direction:column;grid-column:unset}}@media(min-width: 520px) and (max-width: 767px){.bottomCard_invoiceInfo-billTo-client.svelte-hyhlu6.svelte-hyhlu6{justify-content:flex-end}}.bottomCard_invoiceInfo-billTo-client-information.svelte-hyhlu6.svelte-hyhlu6{line-height:1.6}.bottomCard_invoiceInfo-billTo-invoiceDate.svelte-hyhlu6.svelte-hyhlu6,.bottomCard_invoiceInfo-billTo-invoiceDue.svelte-hyhlu6.svelte-hyhlu6,.bottomCard_invoiceInfo-billTo-client.svelte-hyhlu6.svelte-hyhlu6{gap:9px}.btns.svelte-hyhlu6.svelte-hyhlu6{justify-content:space-evenly;align-items:center;width:100%;gap:0.375rem}",
  map: null
};
const InvoiceInformation = (0, import_index_905b6237.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_905b6237.a)(page, (value) => value);
  let { status } = $$props;
  let { id } = $$props;
  let { description } = $$props;
  let { createdAt } = $$props;
  let { paymentDue } = $$props;
  let { clientName } = $$props;
  let { clientCity } = $$props;
  let { clientCountry } = $$props;
  let { clientAddress } = $$props;
  let { clientEmail } = $$props;
  let { clientPostCode } = $$props;
  let { senderAddress } = $$props;
  let { senderCity } = $$props;
  let { senderCountry } = $$props;
  let { senderPostCode } = $$props;
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
  if ($$props.clientCity === void 0 && $$bindings.clientCity && clientCity !== void 0)
    $$bindings.clientCity(clientCity);
  if ($$props.clientCountry === void 0 && $$bindings.clientCountry && clientCountry !== void 0)
    $$bindings.clientCountry(clientCountry);
  if ($$props.clientAddress === void 0 && $$bindings.clientAddress && clientAddress !== void 0)
    $$bindings.clientAddress(clientAddress);
  if ($$props.clientEmail === void 0 && $$bindings.clientEmail && clientEmail !== void 0)
    $$bindings.clientEmail(clientEmail);
  if ($$props.clientPostCode === void 0 && $$bindings.clientPostCode && clientPostCode !== void 0)
    $$bindings.clientPostCode(clientPostCode);
  if ($$props.senderAddress === void 0 && $$bindings.senderAddress && senderAddress !== void 0)
    $$bindings.senderAddress(senderAddress);
  if ($$props.senderCity === void 0 && $$bindings.senderCity && senderCity !== void 0)
    $$bindings.senderCity(senderCity);
  if ($$props.senderCountry === void 0 && $$bindings.senderCountry && senderCountry !== void 0)
    $$bindings.senderCountry(senderCountry);
  if ($$props.senderPostCode === void 0 && $$bindings.senderPostCode && senderPostCode !== void 0)
    $$bindings.senderPostCode(senderPostCode);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `

<div class="${"invoiceContainer svelte-hyhlu6"}"><div class="${"backButton svelte-hyhlu6"}">${(0, import_index_905b6237.v)(import_BackButton_ea71b0cc.B, "BackButton").$$render($$result, { href: true }, {}, {})}</div>

    <div class="${"topCard svelte-hyhlu6"}">${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.C, "Card").$$render($$result, { round: true }, {}, {
    default: () => `<div class="${"topCard_invoiceStatus svelte-hyhlu6"}">${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, { size: "p", text: "Status:" }, {}, {})}
                ${(0, import_index_905b6237.v)(import_Tag_399a1d08.T, "Tag").$$render($$result, { status }, {}, {})}</div>
            ${``}`
  })}</div>



    <div class="${"bottomCard svelte-hyhlu6"}">${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.C, "Card").$$render($$result, { round: true }, {}, {
    default: () => `<div class="${"bottomCard_invoiceInfo svelte-hyhlu6"}"><div class="${"bottomCard_invoiceInfo-details svelte-hyhlu6"}"><div class="${"bottomCard_invoiceInfo-ID svelte-hyhlu6"}">${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, { size: "h3", text: "#" + id }, {}, {})}
                        ${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, { size: "p", text: description }, {}, {})}</div> 
    
                    <div class="${"bottomCard_invoiceInfo-senderInfo svelte-hyhlu6"}">${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, { size: "p", text: senderAddress }, {}, {})}
                        ${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, { size: "p", text: senderCity }, {}, {})}
                        ${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, { size: "p", text: senderPostCode }, {}, {})}
                        ${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, { size: "p", text: senderCountry }, {}, {})}</div></div>
            
                

                <div class="${"bottomCard_invoiceInfo-billTo svelte-hyhlu6"}"><div class="${"bottomCard_invoiceInfo-billTo-invoices svelte-hyhlu6"}"><div class="${"bottomCard_invoiceInfo-billTo-invoiceDate svelte-hyhlu6"}">${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, { size: "p", text: "Invoice Date" }, {}, {})}
                            ${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, { size: "h3", text: (0, import_Button_svelte_svelte_type_style_lang_13fe77f7.f)(createdAt) }, {}, {})}</div>
    
                        <div class="${"bottomCard_invoiceInfo-billTo-invoiceDue svelte-hyhlu6"}">${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, { size: "p", text: "Payment Due" }, {}, {})}
                            ${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, {
      size: "h3",
      text: (0, import_Button_svelte_svelte_type_style_lang_13fe77f7.f)(paymentDue)
    }, {}, {})}</div></div>

                    <div class="${"bottomCard_invoiceInfo-billTo-client svelte-hyhlu6"}">${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, { size: "p", text: "Bill To" }, {}, {})}
                        <div>${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, { size: "h3", text: clientName }, {}, {})}</div>
                        <div class="${"bottomCard_invoiceInfo-billTo-client-information svelte-hyhlu6"}">${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, { size: "p", text: clientAddress }, {}, {})}
                            ${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, { size: "p", text: clientCity }, {}, {})}
                            ${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, { size: "p", text: clientPostCode }, {}, {})}
                            ${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, { size: "p", text: clientCountry }, {}, {})}</div></div>
                
                    <div class="${"bottomCard_invoiceInfo-billTo-email svelte-hyhlu6"}">${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, { size: "p", text: "Sent to" }, {}, {})}
                        ${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, { size: "h3", text: clientEmail }, {}, {})}</div></div>

                <div class="${"bottomCard_invoiceInfo-itemList svelte-hyhlu6"}">${(0, import_index_905b6237.v)(InnerCard, "InnerCard").$$render($$result, {}, {}, {
      default: () => `${(0, import_index_905b6237.d)(items, (item, i) => `<div class="${"bottomCard_invoiceInfo-itemList-items svelte-hyhlu6"}"><div class="${"bottomCard_invoiceInfo-itemList-items-description"}">${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, { size: "h3", text: item.itemName }, {}, {})}
                                    ${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, {
        size: "p",
        text: "$" + (0, import_Button_svelte_svelte_type_style_lang_13fe77f7.a)(item.itemPrice.toFixed(2)) + " x " + item.itemQuantity + " "
      }, {}, {})}</div>
                                ${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, {
        size: "h3",
        text: "$" + (0, import_Button_svelte_svelte_type_style_lang_13fe77f7.a)((item.itemQuantity * item.itemPrice).toFixed(2))
      }, {}, {})}
                            </div>`)}`
    })}
                    <div class="${"bottomCard_invoiceInfo-itemList-items-total svelte-hyhlu6"}"><h3 class="${"svelte-hyhlu6"}">Amount Due</h3>
                        <h3 class="${"svelte-hyhlu6"}">$${(0, import_index_905b6237.e)((0, import_Button_svelte_svelte_type_style_lang_13fe77f7.a)(total.toFixed(2)))}</h3></div></div></div>`
  })}</div></div>

${``}`;
});
const U5Binvoiceu5D = (0, import_index_905b6237.c)(($$result, $$props, $$bindings, slots) => {
  return `

${function(__value) {
    if ((0, import_index_905b6237.i)(__value)) {
      __value.then(null, import_index_905b6237.n);
      return `
    <div class="${"loader"}">${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, {
        size: "h2",
        text: "Getting invoice information, please wait..."
      }, {}, {})}</div>
    `;
    }
    return function(inv) {
      return `
  ${(0, import_index_905b6237.v)(InvoiceInformation, "InvoiceInformation").$$render($$result, Object.assign(inv), {}, {})}
    `;
    }(__value);
  }(getInvoices())}`;
});
