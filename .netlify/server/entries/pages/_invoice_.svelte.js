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
  default: () => U5Binvoiceu5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e78bd06d = require("../../chunks/index-e78bd06d.js");
var import_functionStore_1bfb3d3a = require("../../chunks/functionStore-1bfb3d3a.js");
var import_stores_cd2a3e26 = require("../../chunks/stores-cd2a3e26.js");
var import_Tag_29e959ce = require("../../chunks/Tag-29e959ce.js");
var InvoiceInformation_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btns.svelte-lrrse9.svelte-lrrse9,.backButton.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-itemList-items-total.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-itemList-items.svelte-lrrse9.svelte-lrrse9,.bottomCard_buttons.svelte-lrrse9.svelte-lrrse9,.topCard.svelte-lrrse9.svelte-lrrse9{display:flex}.bottomCard_invoiceInfo-billTo-invoiceDate.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-billTo-invoiceDue.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-billTo-client-information.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-billTo-client.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-itemList-items-description.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-senderInfo.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-ID.svelte-lrrse9.svelte-lrrse9,.bottomCard.svelte-lrrse9.svelte-lrrse9,.invoiceContainer.svelte-lrrse9.svelte-lrrse9{display:flex;flex-direction:column}.bottomCard_invoiceInfo-billTo.svelte-lrrse9 .bottomCard_invoiceInfo-billTo-email.svelte-lrrse9,.bottomCard_invoiceInfo-billTo-invoices.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-billTo.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-itemList.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-details.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo.svelte-lrrse9.svelte-lrrse9{display:grid}.invoiceContainer.svelte-lrrse9.svelte-lrrse9{width:100%;max-width:62.5rem}.topCard.svelte-lrrse9.svelte-lrrse9{margin-bottom:1rem}@media(min-width: 768px){.topCard.svelte-lrrse9.svelte-lrrse9{justify-content:space-between}}.topCard_invoiceStatus.svelte-lrrse9.svelte-lrrse9{display:flex;justify-content:center;align-items:center;gap:0.9375rem;width:100%;padding:0.125rem}@media(min-width: 520px) and (max-width: 767px){.topCard_invoiceStatus.svelte-lrrse9.svelte-lrrse9{justify-content:center;gap:3rem}}@media(min-width: 768px){.topCard_invoiceStatus.svelte-lrrse9.svelte-lrrse9{justify-content:center}}.topCard_buttons.svelte-lrrse9.svelte-lrrse9{display:none;width:100%;justify-content:end;margin-right:1rem;gap:1.5625rem}@media(min-width: 768px){.topCard_buttons.svelte-lrrse9.svelte-lrrse9{display:flex}}.bottomCard_buttons.svelte-lrrse9.svelte-lrrse9{width:100%}@media(min-width: 768px){.bottomCard_buttons.svelte-lrrse9.svelte-lrrse9{display:none}}.bottomCard_invoiceInfo.svelte-lrrse9.svelte-lrrse9{padding:0.4rem;width:100%}.bottomCard_invoiceInfo-ID.svelte-lrrse9.svelte-lrrse9{gap:7px}.bottomCard_invoiceInfo-details.svelte-lrrse9.svelte-lrrse9{margin-bottom:3rem}@media(min-width: 520px){.bottomCard_invoiceInfo-details.svelte-lrrse9.svelte-lrrse9{grid-template-columns:1fr 1fr}}.bottomCard_invoiceInfo-senderInfo.svelte-lrrse9.svelte-lrrse9{gap:0.375rem;margin:2rem 0}@media(min-width: 520px){.bottomCard_invoiceInfo-senderInfo.svelte-lrrse9.svelte-lrrse9{margin:0;align-items:flex-end}}.bottomCard_invoiceInfo-itemList.svelte-lrrse9.svelte-lrrse9{place-self:center;margin:2rem 0 0 0;max-width:600px;width:100%}.bottomCard_invoiceInfo-itemList-items.svelte-lrrse9.svelte-lrrse9{justify-content:space-between;padding:0.5rem;margin-bottom:0.5rem;align-items:center}.bottomCard_invoiceInfo-itemList-items-total.svelte-lrrse9.svelte-lrrse9{justify-content:space-between;background-color:black;padding:1rem;width:100%;border-bottom-left-radius:12px;border-bottom-right-radius:12px}.bottomCard_invoiceInfo-itemList-items-total.svelte-lrrse9 h3.svelte-lrrse9{color:white}.bottomCard_invoiceInfo-itemList-items-description.svelte-lrrse9.svelte-lrrse9{gap:5px}.bottomCard_invoiceInfo-billTo.svelte-lrrse9.svelte-lrrse9{grid-template-columns:1fr 1fr;gap:35px}@media(min-width: 768px){.bottomCard_invoiceInfo-billTo.svelte-lrrse9.svelte-lrrse9{grid-template-columns:1fr 1fr 0.25fr}}.bottomCard_invoiceInfo-billTo-invoices.svelte-lrrse9.svelte-lrrse9{gap:20px}.bottomCard_invoiceInfo-billTo.svelte-lrrse9 .bottomCard_invoiceInfo-billTo-email.svelte-lrrse9{grid-column:span 2/span 2;gap:9px}@media(min-width: 768px){.bottomCard_invoiceInfo-billTo.svelte-lrrse9 .bottomCard_invoiceInfo-billTo-email.svelte-lrrse9{display:flex;flex-direction:column;grid-column:unset}}@media(min-width: 520px) and (max-width: 767px){.bottomCard_invoiceInfo-billTo-client.svelte-lrrse9.svelte-lrrse9{justify-content:flex-end}}.bottomCard_invoiceInfo-billTo-client-information.svelte-lrrse9.svelte-lrrse9{gap:0.4375rem}.bottomCard_invoiceInfo-billTo-invoiceDate.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-billTo-invoiceDue.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-billTo-client.svelte-lrrse9.svelte-lrrse9{gap:9px}.btns.svelte-lrrse9.svelte-lrrse9{justify-content:space-evenly;align-items:center;width:100%;gap:0.375rem}",
  map: null
};
const InvoiceInformation = (0, import_index_e78bd06d.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_globalStore;
  let $$unsubscribe_page;
  $$unsubscribe_globalStore = (0, import_index_e78bd06d.a)(import_functionStore_1bfb3d3a.g, (value) => value);
  $$unsubscribe_page = (0, import_index_e78bd06d.a)(import_stores_cd2a3e26.p, (value) => value);
  let { status = "" } = $$props;
  let { id = "" } = $$props;
  let { description = "" } = $$props;
  let { createdAt = "" } = $$props;
  let { paymentDue = "" } = $$props;
  let { clientName = "" } = $$props;
  let { clientAddress } = $$props;
  let { clientEmail = "" } = $$props;
  let { senderAddress } = $$props;
  let { items = [] } = $$props;
  let { total = 0 } = $$props;
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
  return `<div class="${"invoiceContainer svelte-lrrse9"}"><div class="${"backButton svelte-lrrse9"}">${(0, import_index_e78bd06d.v)(import_stores_cd2a3e26.B, "BackButton").$$render($$result, { href: true }, {}, {})}</div>

    <div class="${"topCard svelte-lrrse9"}">${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.C, "Card").$$render($$result, { round: true }, {}, {
    default: () => {
      return `<div class="${"topCard_invoiceStatus svelte-lrrse9"}">${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, { size: "p", text: "Status:" }, {}, {})}
                ${(0, import_index_e78bd06d.v)(import_Tag_29e959ce.T, "Tag").$$render($$result, { status }, {}, {})}</div>
                <div class="${"topCard_buttons svelte-lrrse9"}">${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.B, "Button").$$render($$result, {
        size: "large",
        text: "Edit",
        type: "secondary",
        icon: "pen",
        rounded: true
      }, {}, {})}
                    ${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.B, "Button").$$render($$result, {
        size: "large",
        text: "Delete",
        type: "danger",
        icon: "trash",
        rounded: true
      }, {}, {})}
                    ${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.B, "Button").$$render($$result, {
        text: "Mark as Paid",
        size: "large",
        disabled: status === "paid",
        icon: "check",
        rounded: true
      }, {}, {})}</div>`;
    }
  })}</div>

    <div class="${"bottomCard svelte-lrrse9"}">${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.C, "Card").$$render($$result, { round: true }, {}, {
    default: () => {
      return `<div class="${"bottomCard_invoiceInfo svelte-lrrse9"}"><div class="${"bottomCard_invoiceInfo-details svelte-lrrse9"}"><div class="${"bottomCard_invoiceInfo-ID svelte-lrrse9"}">${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, { size: "h3", text: "#" + id }, {}, {})}
                        ${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, { size: "p", text: description }, {}, {})}</div>

                    <div class="${"bottomCard_invoiceInfo-senderInfo svelte-lrrse9"}">${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, { size: "p", text: senderAddress.street }, {}, {})}
                        ${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, { size: "p", text: senderAddress.city }, {}, {})}
                        ${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, { size: "p", text: senderAddress.postCode }, {}, {})}
                        ${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, { size: "p", text: senderAddress.country }, {}, {})}</div></div>

                <div class="${"bottomCard_invoiceInfo-billTo svelte-lrrse9"}"><div class="${"bottomCard_invoiceInfo-billTo-invoices svelte-lrrse9"}"><div class="${"bottomCard_invoiceInfo-billTo-invoiceDate svelte-lrrse9"}">${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, { size: "p", text: "Invoice Date" }, {}, {})}
                            ${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, {
        size: "h3",
        text: (0, import_functionStore_1bfb3d3a.c)(createdAt, 0)
      }, {}, {})}</div>

                        <div class="${"bottomCard_invoiceInfo-billTo-invoiceDue svelte-lrrse9"}">${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, { size: "p", text: "Payment Due" }, {}, {})}
                            ${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, {
        size: "h3",
        text: (0, import_functionStore_1bfb3d3a.c)(paymentDue, 0)
      }, {}, {})}</div></div>

                    <div class="${"bottomCard_invoiceInfo-billTo-client svelte-lrrse9"}">${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, { size: "p", text: "Bill To" }, {}, {})}
                        <div>${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, { size: "h3", text: clientName }, {}, {})}</div>
                        <div class="${"bottomCard_invoiceInfo-billTo-client-information svelte-lrrse9"}">${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, { size: "p", text: clientAddress.street }, {}, {})}
                            ${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, { size: "p", text: clientAddress.city }, {}, {})}
                            ${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, { size: "p", text: clientAddress.postCode }, {}, {})}
                            ${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, { size: "p", text: clientAddress.country }, {}, {})}</div></div>

                    <div class="${"bottomCard_invoiceInfo-billTo-email svelte-lrrse9"}">${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, { size: "p", text: "Sent to" }, {}, {})}
                        ${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, { size: "h3", text: clientEmail }, {}, {})}</div></div>

                <div class="${"bottomCard_invoiceInfo-itemList svelte-lrrse9"}">${(0, import_index_e78bd06d.v)(import_stores_cd2a3e26.I, "InnerCard").$$render($$result, {}, {}, {
        default: () => {
          return `${(0, import_index_e78bd06d.f)(items, (item, i) => {
            return `<div class="${"bottomCard_invoiceInfo-itemList-items svelte-lrrse9"}"><div class="${"bottomCard_invoiceInfo-itemList-items-description svelte-lrrse9"}">${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, { size: "h3", text: item.name }, {}, {})}
                                    ${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, {
              size: "p",
              text: "$" + Number(items[i].price).toFixed(2) + " x " + items[i].quantity
            }, {}, {})}</div>
                                ${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, {
              size: "h3",
              text: "$" + (0, import_functionStore_1bfb3d3a.n)((item.quantity * item.price).toFixed(2))
            }, {}, {})}
                            </div>`;
          })}`;
        }
      })}
                    <div class="${"bottomCard_invoiceInfo-itemList-items-total svelte-lrrse9"}"><h3 class="${"svelte-lrrse9"}">Amount Due</h3>
                        <h3 class="${"svelte-lrrse9"}">$${(0, import_index_e78bd06d.e)((0, import_functionStore_1bfb3d3a.n)(total.toFixed(2)))}</h3></div></div></div>`;
    }
  })}</div></div>

<div class="${"bottomCard_buttons svelte-lrrse9"}">${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.C, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"btns svelte-lrrse9"}">${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.B, "Button").$$render($$result, {
        size: "medium",
        fluid: true,
        text: "Edit",
        type: "secondary",
        icon: "pen",
        rounded: true
      }, {}, {})}
            ${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.B, "Button").$$render($$result, {
        size: "medium",
        fluid: true,
        text: "Delete",
        type: "danger",
        icon: "trash",
        rounded: true
      }, {}, {})}
            ${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.B, "Button").$$render($$result, {
        text: "Mark as Paid",
        size: "medium",
        fluid: true,
        icon: "check",
        disabled: status === "paid",
        rounded: true
      }, {}, {})}</div>`;
    }
  })}</div>


${``}

${``}`;
});
var _invoice__svelte_svelte_type_style_lang = "";
const css = {
  code: ".loader.svelte-1v7wm0g{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:10px;height:100%}",
  map: null
};
let msg = "Getting invoice information, please wait...";
const U5Binvoiceu5D = (0, import_index_e78bd06d.c)(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_globalStore = (0, import_index_e78bd06d.a)(import_functionStore_1bfb3d3a.g, (value) => $globalStore = value);
  $$unsubscribe_page = (0, import_index_e78bd06d.a)(import_stores_cd2a3e26.p, (value) => $page = value);
  async function getInvoiceInformation(path) {
    await (0, import_functionStore_1bfb3d3a.b)();
    let invoice = $globalStore.invoices.find((invoice2) => invoice2.id === path);
    if (invoice) {
      return { ...invoice };
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
  return `${function(__value) {
    if ((0, import_index_e78bd06d.l)(__value)) {
      __value.then(null, import_index_e78bd06d.n);
      return `
    <div class="${"loader svelte-1v7wm0g"}">${(0, import_index_e78bd06d.v)(import_functionStore_1bfb3d3a.T, "Text").$$render($$result, { size: "h2", text: msg }, {}, {})}</div>
`;
    }
    return function(inv) {
      return `
    ${(0, import_index_e78bd06d.v)(InvoiceInformation, "InvoiceInformation").$$render($$result, Object.assign(inv), {}, {})}
`;
    }(__value);
  }(getInvoiceInformation($page.params.invoice))}`;
});
