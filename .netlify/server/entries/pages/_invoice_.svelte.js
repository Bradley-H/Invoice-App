import { c as create_ssr_component, a as subscribe, v as validate_component, f as each, e as escape, l as is_promise, n as noop } from "../../immutable/chunks/index-b6406b22.js";
import { g as globalStore, C as Card, T as Text, B as Button, c as convertDate, n as numberWithCommas, b as getInvoicesIndex } from "../../immutable/chunks/functionStore-d6f5ac9b.js";
import { p as page, B as BackButton, I as InnerCard } from "../../immutable/chunks/stores-491b1fed.js";
import { T as Tag } from "../../immutable/chunks/Tag-247b288a.js";
var InvoiceInformation_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btns.svelte-lrrse9.svelte-lrrse9,.backButton.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-itemList-items-total.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-itemList-items.svelte-lrrse9.svelte-lrrse9,.bottomCard_buttons.svelte-lrrse9.svelte-lrrse9,.topCard.svelte-lrrse9.svelte-lrrse9{display:flex}.bottomCard_invoiceInfo-billTo-invoiceDate.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-billTo-invoiceDue.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-billTo-client-information.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-billTo-client.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-itemList-items-description.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-senderInfo.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-ID.svelte-lrrse9.svelte-lrrse9,.bottomCard.svelte-lrrse9.svelte-lrrse9,.invoiceContainer.svelte-lrrse9.svelte-lrrse9{display:flex;flex-direction:column}.bottomCard_invoiceInfo-billTo.svelte-lrrse9 .bottomCard_invoiceInfo-billTo-email.svelte-lrrse9,.bottomCard_invoiceInfo-billTo-invoices.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-billTo.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-itemList.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-details.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo.svelte-lrrse9.svelte-lrrse9{display:grid}.invoiceContainer.svelte-lrrse9.svelte-lrrse9{width:100%;max-width:62.5rem}.topCard.svelte-lrrse9.svelte-lrrse9{margin-bottom:1rem}@media(min-width: 768px){.topCard.svelte-lrrse9.svelte-lrrse9{justify-content:space-between}}.topCard_invoiceStatus.svelte-lrrse9.svelte-lrrse9{display:flex;justify-content:center;align-items:center;gap:0.9375rem;width:100%;padding:0.125rem}@media(min-width: 520px) and (max-width: 767px){.topCard_invoiceStatus.svelte-lrrse9.svelte-lrrse9{justify-content:center;gap:3rem}}@media(min-width: 768px){.topCard_invoiceStatus.svelte-lrrse9.svelte-lrrse9{justify-content:center}}.topCard_buttons.svelte-lrrse9.svelte-lrrse9{display:none;width:100%;justify-content:end;margin-right:1rem;gap:1.5625rem}@media(min-width: 768px){.topCard_buttons.svelte-lrrse9.svelte-lrrse9{display:flex}}.bottomCard_buttons.svelte-lrrse9.svelte-lrrse9{width:100%}@media(min-width: 768px){.bottomCard_buttons.svelte-lrrse9.svelte-lrrse9{display:none}}.bottomCard_invoiceInfo.svelte-lrrse9.svelte-lrrse9{padding:0.4rem;width:100%}.bottomCard_invoiceInfo-ID.svelte-lrrse9.svelte-lrrse9{gap:7px}.bottomCard_invoiceInfo-details.svelte-lrrse9.svelte-lrrse9{margin-bottom:3rem}@media(min-width: 520px){.bottomCard_invoiceInfo-details.svelte-lrrse9.svelte-lrrse9{grid-template-columns:1fr 1fr}}.bottomCard_invoiceInfo-senderInfo.svelte-lrrse9.svelte-lrrse9{gap:0.375rem;margin:2rem 0}@media(min-width: 520px){.bottomCard_invoiceInfo-senderInfo.svelte-lrrse9.svelte-lrrse9{margin:0;align-items:flex-end}}.bottomCard_invoiceInfo-itemList.svelte-lrrse9.svelte-lrrse9{place-self:center;margin:2rem 0 0 0;max-width:600px;width:100%}.bottomCard_invoiceInfo-itemList-items.svelte-lrrse9.svelte-lrrse9{justify-content:space-between;padding:0.5rem;margin-bottom:0.5rem;align-items:center}.bottomCard_invoiceInfo-itemList-items-total.svelte-lrrse9.svelte-lrrse9{justify-content:space-between;background-color:black;padding:1rem;width:100%;border-bottom-left-radius:12px;border-bottom-right-radius:12px}.bottomCard_invoiceInfo-itemList-items-total.svelte-lrrse9 h3.svelte-lrrse9{color:white}.bottomCard_invoiceInfo-itemList-items-description.svelte-lrrse9.svelte-lrrse9{gap:5px}.bottomCard_invoiceInfo-billTo.svelte-lrrse9.svelte-lrrse9{grid-template-columns:1fr 1fr;gap:35px}@media(min-width: 768px){.bottomCard_invoiceInfo-billTo.svelte-lrrse9.svelte-lrrse9{grid-template-columns:1fr 1fr 0.25fr}}.bottomCard_invoiceInfo-billTo-invoices.svelte-lrrse9.svelte-lrrse9{gap:20px}.bottomCard_invoiceInfo-billTo.svelte-lrrse9 .bottomCard_invoiceInfo-billTo-email.svelte-lrrse9{grid-column:span 2/span 2;gap:9px}@media(min-width: 768px){.bottomCard_invoiceInfo-billTo.svelte-lrrse9 .bottomCard_invoiceInfo-billTo-email.svelte-lrrse9{display:flex;flex-direction:column;grid-column:unset}}@media(min-width: 520px) and (max-width: 767px){.bottomCard_invoiceInfo-billTo-client.svelte-lrrse9.svelte-lrrse9{justify-content:flex-end}}.bottomCard_invoiceInfo-billTo-client-information.svelte-lrrse9.svelte-lrrse9{gap:0.4375rem}.bottomCard_invoiceInfo-billTo-invoiceDate.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-billTo-invoiceDue.svelte-lrrse9.svelte-lrrse9,.bottomCard_invoiceInfo-billTo-client.svelte-lrrse9.svelte-lrrse9{gap:9px}.btns.svelte-lrrse9.svelte-lrrse9{justify-content:space-evenly;align-items:center;width:100%;gap:0.375rem}",
  map: null
};
const InvoiceInformation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_globalStore;
  let $$unsubscribe_page;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
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
  return `<div class="${"invoiceContainer svelte-lrrse9"}"><div class="${"backButton svelte-lrrse9"}">${validate_component(BackButton, "BackButton").$$render($$result, { href: true }, {}, {})}</div>

    <div class="${"topCard svelte-lrrse9"}">${validate_component(Card, "Card").$$render($$result, { round: true }, {}, {
    default: () => {
      return `<div class="${"topCard_invoiceStatus svelte-lrrse9"}">${validate_component(Text, "Text").$$render($$result, { size: "p", text: "Status:" }, {}, {})}
                ${validate_component(Tag, "Tag").$$render($$result, { status }, {}, {})}</div>
                <div class="${"topCard_buttons svelte-lrrse9"}">${validate_component(Button, "Button").$$render($$result, {
        size: "large",
        text: "Edit",
        type: "secondary",
        icon: "pen",
        rounded: true
      }, {}, {})}
                    ${validate_component(Button, "Button").$$render($$result, {
        size: "large",
        text: "Delete",
        type: "danger",
        icon: "trash",
        rounded: true
      }, {}, {})}
                    ${validate_component(Button, "Button").$$render($$result, {
        text: "Mark as Paid",
        size: "large",
        disabled: status === "paid",
        icon: "check",
        rounded: true
      }, {}, {})}</div>`;
    }
  })}</div>

    <div class="${"bottomCard svelte-lrrse9"}">${validate_component(Card, "Card").$$render($$result, { round: true }, {}, {
    default: () => {
      return `<div class="${"bottomCard_invoiceInfo svelte-lrrse9"}"><div class="${"bottomCard_invoiceInfo-details svelte-lrrse9"}"><div class="${"bottomCard_invoiceInfo-ID svelte-lrrse9"}">${validate_component(Text, "Text").$$render($$result, { size: "h3", text: "#" + id }, {}, {})}
                        ${validate_component(Text, "Text").$$render($$result, { size: "p", text: description }, {}, {})}</div>

                    <div class="${"bottomCard_invoiceInfo-senderInfo svelte-lrrse9"}">${validate_component(Text, "Text").$$render($$result, { size: "p", text: senderAddress.street }, {}, {})}
                        ${validate_component(Text, "Text").$$render($$result, { size: "p", text: senderAddress.city }, {}, {})}
                        ${validate_component(Text, "Text").$$render($$result, { size: "p", text: senderAddress.postCode }, {}, {})}
                        ${validate_component(Text, "Text").$$render($$result, { size: "p", text: senderAddress.country }, {}, {})}</div></div>

                <div class="${"bottomCard_invoiceInfo-billTo svelte-lrrse9"}"><div class="${"bottomCard_invoiceInfo-billTo-invoices svelte-lrrse9"}"><div class="${"bottomCard_invoiceInfo-billTo-invoiceDate svelte-lrrse9"}">${validate_component(Text, "Text").$$render($$result, { size: "p", text: "Invoice Date" }, {}, {})}
                            ${validate_component(Text, "Text").$$render($$result, {
        size: "h3",
        text: convertDate(createdAt, 0)
      }, {}, {})}</div>

                        <div class="${"bottomCard_invoiceInfo-billTo-invoiceDue svelte-lrrse9"}">${validate_component(Text, "Text").$$render($$result, { size: "p", text: "Payment Due" }, {}, {})}
                            ${validate_component(Text, "Text").$$render($$result, {
        size: "h3",
        text: convertDate(paymentDue, 0)
      }, {}, {})}</div></div>

                    <div class="${"bottomCard_invoiceInfo-billTo-client svelte-lrrse9"}">${validate_component(Text, "Text").$$render($$result, { size: "p", text: "Bill To" }, {}, {})}
                        <div>${validate_component(Text, "Text").$$render($$result, { size: "h3", text: clientName }, {}, {})}</div>
                        <div class="${"bottomCard_invoiceInfo-billTo-client-information svelte-lrrse9"}">${validate_component(Text, "Text").$$render($$result, { size: "p", text: clientAddress.street }, {}, {})}
                            ${validate_component(Text, "Text").$$render($$result, { size: "p", text: clientAddress.city }, {}, {})}
                            ${validate_component(Text, "Text").$$render($$result, { size: "p", text: clientAddress.postCode }, {}, {})}
                            ${validate_component(Text, "Text").$$render($$result, { size: "p", text: clientAddress.country }, {}, {})}</div></div>

                    <div class="${"bottomCard_invoiceInfo-billTo-email svelte-lrrse9"}">${validate_component(Text, "Text").$$render($$result, { size: "p", text: "Sent to" }, {}, {})}
                        ${validate_component(Text, "Text").$$render($$result, { size: "h3", text: clientEmail }, {}, {})}</div></div>

                <div class="${"bottomCard_invoiceInfo-itemList svelte-lrrse9"}">${validate_component(InnerCard, "InnerCard").$$render($$result, {}, {}, {
        default: () => {
          return `${each(items, (item, i) => {
            return `<div class="${"bottomCard_invoiceInfo-itemList-items svelte-lrrse9"}"><div class="${"bottomCard_invoiceInfo-itemList-items-description svelte-lrrse9"}">${validate_component(Text, "Text").$$render($$result, { size: "h3", text: item.name }, {}, {})}
                                    ${validate_component(Text, "Text").$$render($$result, {
              size: "p",
              text: "$" + Number(items[i].price).toFixed(2) + " x " + items[i].quantity
            }, {}, {})}</div>
                                ${validate_component(Text, "Text").$$render($$result, {
              size: "h3",
              text: "$" + numberWithCommas((item.quantity * item.price).toFixed(2))
            }, {}, {})}
                            </div>`;
          })}`;
        }
      })}
                    <div class="${"bottomCard_invoiceInfo-itemList-items-total svelte-lrrse9"}"><h3 class="${"svelte-lrrse9"}">Amount Due</h3>
                        <h3 class="${"svelte-lrrse9"}">$${escape(numberWithCommas(total.toFixed(2)))}</h3></div></div></div>`;
    }
  })}</div></div>

<div class="${"bottomCard_buttons svelte-lrrse9"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"btns svelte-lrrse9"}">${validate_component(Button, "Button").$$render($$result, {
        size: "medium",
        fluid: true,
        text: "Edit",
        type: "secondary",
        icon: "pen",
        rounded: true
      }, {}, {})}
            ${validate_component(Button, "Button").$$render($$result, {
        size: "medium",
        fluid: true,
        text: "Delete",
        type: "danger",
        icon: "trash",
        rounded: true
      }, {}, {})}
            ${validate_component(Button, "Button").$$render($$result, {
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
const U5Binvoiceu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  async function getInvoiceInformation(path) {
    await getInvoicesIndex();
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
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
    <div class="${"loader svelte-1v7wm0g"}">${validate_component(Text, "Text").$$render($$result, { size: "h2", text: msg }, {}, {})}</div>
`;
    }
    return function(inv) {
      return `
    ${validate_component(InvoiceInformation, "InvoiceInformation").$$render($$result, Object.assign(inv), {}, {})}
`;
    }(__value);
  }(getInvoiceInformation($page.params.invoice))}`;
});
export { U5Binvoiceu5D as default };
