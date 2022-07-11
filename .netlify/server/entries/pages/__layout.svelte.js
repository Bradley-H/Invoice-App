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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_b6406b22 = require("../../immutable/chunks/index-b6406b22.js");
var import_functionStore_d6f5ac9b = require("../../immutable/chunks/functionStore-d6f5ac9b.js");
var import_InvoiceOptions_0490778f = require("../../immutable/chunks/InvoiceOptions-0490778f.js");
var import_stores_491b1fed = require("../../immutable/chunks/stores-491b1fed.js");
var import_uid = require("uid");
var Navigation_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "nav.svelte-bj8hib.svelte-bj8hib{display:flex;height:4.375rem;width:100%;background-color:#1e2139;z-index:3}@media(min-width: 992px){nav.svelte-bj8hib.svelte-bj8hib{flex-direction:column;height:100%;width:4.6875rem;position:fixed;left:0;top:0;border-top-right-radius:15px}}nav.svelte-bj8hib .settings.svelte-bj8hib{display:flex;justify-content:center;align-items:center;flex-direction:row;color:white;height:100%;font-size:1.75rem;margin:0 0 0 auto}@media(min-width: 992px){nav.svelte-bj8hib .settings.svelte-bj8hib{flex-direction:column;width:4.6875rem;height:100%;margin:auto 0 0 0}}nav.svelte-bj8hib .settings i.svelte-bj8hib{cursor:pointer;display:flex;justify-content:center;align-items:center;height:100%;width:100%}nav.svelte-bj8hib .settings .themeSwitcher.svelte-bj8hib{border-right:2px solid rgba(128, 128, 128, 0.6);height:100%;padding:0 1.5625rem 0 1.5625rem}@media(min-width: 992px){nav.svelte-bj8hib .settings .themeSwitcher.svelte-bj8hib{border-bottom:2px solid rgba(128, 128, 128, 0.6);border-right:none;width:4.6875rem;padding:0 0 2.0625rem 0;margin-top:auto;height:0}}nav.svelte-bj8hib .settings .avatar.svelte-bj8hib{padding:0 1.5625rem}@media(min-width: 992px){nav.svelte-bj8hib .settings .avatar.svelte-bj8hib{padding:1.25rem 0 0.9375rem 0}}a.svelte-bj8hib.svelte-bj8hib{display:flex;justify-content:center;align-items:center;background-color:#7c5dfa;color:white;width:4.6875rem;height:4.375rem;font-size:1.5625rem;transition:transform 0.4s ease-in-out;border-top-right-radius:15px}a.svelte-bj8hib.svelte-bj8hib:hover{transform:scale(1.1)}",
  map: null
};
const Navigation = (0, import_index_b6406b22.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_b6406b22.a)(import_functionStore_d6f5ac9b.g, (value) => value);
  let icon = "moon";
  $$result.css.add(css$3);
  $$unsubscribe_globalStore();
  return `<nav class="${"svelte-bj8hib"}"><a href="${"/"}" class="${"svelte-bj8hib"}"><i class="${"fas fa-home svelte-bj8hib"}"></i></a>
        
    <div class="${"settings svelte-bj8hib"}"><div class="${"themeSwitcher svelte-bj8hib"}"><i class="${"fas fa-" + (0, import_index_b6406b22.e)(icon, true) + " svelte-bj8hib"}"></i></div>
        <div class="${"avatar svelte-bj8hib"}"><i class="${"fas fa-user-circle svelte-bj8hib"}"></i></div></div>
</nav>`;
});
const css$2 = {
  code: ".prompt.svelte-1vb4462{display:flex;justify-content:center;align-items:center;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:100%;max-width:600px;z-index:5;padding:1.5rem;text-align:center}.overlay.svelte-1vb4462{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:4}.btns.svelte-1vb4462{display:flex;justify-content:space-around;margin-top:20px}",
  map: null
};
const ModalPrompt = (0, import_index_b6406b22.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_index_b6406b22.b)();
  let { text = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$2);
  return `<div class="${"prompt svelte-1vb4462"}">${(0, import_index_b6406b22.v)(import_stores_491b1fed.I, "InnerCard").$$render($$result, { modal: true }, {}, {
    default: () => {
      return `${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.T, "Text").$$render($$result, { size: "h3", text }, {}, {})}
       <div class="${"btns svelte-1vb4462"}">${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.B, "Button").$$render($$result, { type: "secondary", text: "Yes" }, {}, {})}
           ${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.B, "Button").$$render($$result, { type: "danger", text: "No" }, {}, {})}</div>`;
    }
  })}</div>

<div class="${"overlay svelte-1vb4462"}"></div>`;
});
var InvoiceModal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btns.svelte-zxxez div.svelte-zxxez,.btns.svelte-zxxez.svelte-zxxez{display:flex}form.svelte-zxxez .billFrom.svelte-zxxez{display:flex;flex-direction:column}form.svelte-zxxez .billTo_information.svelte-zxxez,form.svelte-zxxez .billFrom_information.svelte-zxxez{display:grid}form.svelte-zxxez .billTo_information-city.svelte-zxxez,form.svelte-zxxez .billFrom_information-city.svelte-zxxez{display:grid;grid-template-columns:repeat(2, 1fr);gap:10px}form.svelte-zxxez p.svelte-zxxez{color:#7c5dfa;margin:1rem 0;font-weight:bold}form.svelte-zxxez .items.svelte-zxxez{margin-bottom:5rem}form.svelte-zxxez .title.svelte-zxxez{margin-bottom:2.1875rem}form.svelte-zxxez .billFrom.svelte-zxxez{margin-top:2.1875rem}@media(min-width: 768px){form.svelte-zxxez .billFrom_information-city.svelte-zxxez{grid-template-columns:1fr 1fr 1fr}}form.svelte-zxxez .billFrom_information-country.svelte-zxxez{grid-column:span 2/span 2}@media(min-width: 768px){form.svelte-zxxez .billFrom_information-country.svelte-zxxez{grid-column:unset}}form.svelte-zxxez .billTo.svelte-zxxez{display:grid;grid-template-columns:1fr;gap:15px}@media(min-width: 768px){form.svelte-zxxez .billTo_invoiceInformation.svelte-zxxez{display:grid;grid-template-columns:1fr 1fr;gap:10px}}form.svelte-zxxez .billTo_information-city.svelte-zxxez{margin:1rem 0}@media(min-width: 768px){form.svelte-zxxez .billTo_information-city.svelte-zxxez{grid-template-columns:1fr 1fr 1fr}}form.svelte-zxxez .billTo_information-country.svelte-zxxez{grid-column:span 2/span 2}@media(min-width: 768px){form.svelte-zxxez .billTo_information-country.svelte-zxxez{grid-column:unset}}.modal.svelte-zxxez.svelte-zxxez{width:100%;height:100%;z-index:2;position:fixed;margin:2rem 0 0 0;max-width:37.5rem;margin:4.375rem 0 0 0;inset:0 0 0 0}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-zxxez.svelte-zxxez{max-width:700px}}@media(min-width: 992px){.modal.svelte-zxxez.svelte-zxxez{max-width:575px;margin:0 0 0 4.6875rem}}div.overlay.svelte-zxxez.svelte-zxxez{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:1}.btns.svelte-zxxez.svelte-zxxez{justify-content:center;max-width:37.5rem;transform:translateY(-2.5rem);position:sticky;margin:2rem 0}@media(min-width: 520px){.btns.svelte-zxxez.svelte-zxxez{justify-content:space-between}}@media(min-width: 992px){.btns.svelte-zxxez.svelte-zxxez{margin:0}}.btns.svelte-zxxez div.svelte-zxxez{gap:10px;margin-left:0.5rem}@media(min-width: 992px){.btns.svelte-zxxez.svelte-zxxez{transform:translateY(-1rem)}}.itemList.svelte-zxxez.svelte-zxxez{display:grid;margin-bottom:2rem;gap:10px}@media(min-width: 520px){.itemList.svelte-zxxez.svelte-zxxez{display:grid;grid-template-columns:0.7fr 1.5fr}}.itemList.svelte-zxxez .nameField.svelte-zxxez{display:grid;grid-template-columns:1fr}.attributes.svelte-zxxez.svelte-zxxez{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px}@media(min-width: 768px){.attributes.svelte-zxxez.svelte-zxxez{grid-template-columns:1fr 1fr 1.5fr 0.3fr}}i.svelte-zxxez.svelte-zxxez{color:red;font-size:1.1rem}button.svelte-zxxez.svelte-zxxez{height:5.5rem}",
  map: null
};
const InvoiceModal = (0, import_index_b6406b22.c)(($$result, $$props, $$bindings, slots) => {
  let senderAddress;
  let clientAddress;
  let items;
  let id;
  let clientName;
  let description;
  let clientEmail;
  let filterItem;
  let saveInvoice;
  let discardInvoice;
  let addItem;
  let calculateTotal;
  let $globalStore, $$unsubscribe_globalStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_globalStore = (0, import_index_b6406b22.a)(import_functionStore_d6f5ac9b.g, (value) => $globalStore = value);
  $$unsubscribe_page = (0, import_index_b6406b22.a)(import_stores_491b1fed.p, (value) => $page = value);
  (0, import_index_b6406b22.o)(() => {
    (0, import_index_b6406b22.d)(import_functionStore_d6f5ac9b.g, $globalStore.modalStatus = null, $globalStore);
    newInvoice = null;
  });
  let isValid = false;
  let prompt = null;
  let terms = 30;
  let newInvoice = {
    id: $globalStore.modalStatus === "edit" ? $page.params.invoice : (0, import_uid.uid)(6).toUpperCase(),
    senderAddress: {
      street: "",
      city: "",
      country: "",
      postCode: ""
    },
    clientAddress: {
      street: "",
      city: "",
      country: "",
      postCode: ""
    },
    items: [
      {
        name: "",
        quantity: 0,
        price: 0,
        total: 0
      }
    ],
    clientName: "",
    clientEmail: "",
    paymentDue: (0, import_functionStore_d6f5ac9b.c)(new Date(), terms),
    createdAt: (0, import_functionStore_d6f5ac9b.c)(new Date(), 0),
    status: "",
    terms: +terms,
    description: "",
    total: 0,
    addItem() {
      newInvoice.items = [
        ...items,
        {
          name: "",
          quantity: 0,
          price: 0,
          total: 0
        }
      ];
    },
    discardInvoice() {
      prompt = null;
      (0, import_functionStore_d6f5ac9b.a)();
    },
    calculateTotal() {
      let total = 0;
      items.forEach((item) => {
        total += item.quantity * item.price;
      });
      newInvoice.total = total;
      return total;
    },
    saveInvoice(status) {
      newInvoice.status = status;
      if ($globalStore.modalStatus === "edit") {
        let invoice = $globalStore.invoices.find((invoice2) => invoice2.id === $page.params.invoice);
        this.calculateTotal();
        invoice.senderAddress = senderAddress;
        invoice.clientAddress = clientAddress;
        invoice.items = items;
        invoice.clientName = newInvoice.clientName;
        invoice.clientEmail = newInvoice.clientEmail;
        invoice.paymentDue = (0, import_functionStore_d6f5ac9b.c)(new Date(), terms);
        invoice.createdAt = newInvoice.createdAt;
        invoice.description = newInvoice.description;
        invoice.total = newInvoice.total;
        invoice.terms = newInvoice.terms;
        invoice.status = status;
        (0, import_index_b6406b22.d)(import_functionStore_d6f5ac9b.g, $globalStore.invoices = [...$globalStore.invoices], $globalStore);
        localStorage.setItem("invoices", JSON.stringify($globalStore.invoices));
        (0, import_functionStore_d6f5ac9b.a)();
        location.reload();
      } else {
        this.calculateTotal();
        (0, import_index_b6406b22.d)(import_functionStore_d6f5ac9b.g, $globalStore.invoices = [...$globalStore.invoices, newInvoice], $globalStore);
        localStorage.setItem("invoices", JSON.stringify($globalStore.invoices));
        (0, import_functionStore_d6f5ac9b.a)();
      }
    },
    filterItem(index) {
      items = items.filter((item, i) => i !== index);
    }
  };
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ senderAddress, clientAddress, items, id, clientName, description, clientEmail, filterItem, saveInvoice, discardInvoice, addItem, calculateTotal } = newInvoice);
    {
      if ((0, import_functionStore_d6f5ac9b.s)(senderAddress.street) && (0, import_functionStore_d6f5ac9b.s)(senderAddress.city) && (0, import_functionStore_d6f5ac9b.s)(senderAddress.country) && (0, import_functionStore_d6f5ac9b.s)(senderAddress.postCode) && (0, import_functionStore_d6f5ac9b.s)(clientAddress.street) && (0, import_functionStore_d6f5ac9b.s)(clientAddress.city) && (0, import_functionStore_d6f5ac9b.s)(clientAddress.country) && (0, import_functionStore_d6f5ac9b.s)(clientAddress.postCode) && (0, import_functionStore_d6f5ac9b.s)(newInvoice.clientName) && (0, import_functionStore_d6f5ac9b.e)(newInvoice.clientEmail) && (0, import_functionStore_d6f5ac9b.s)(newInvoice.description) && items.length > 0 && items.every((item) => (0, import_functionStore_d6f5ac9b.s)(item.name)) && items.every((item) => item.quantity > 0) && items.every((item) => item.price > 0)) {
        isValid = true;
      } else {
        isValid = false;
      }
    }
    $$rendered = `<div class="${"modal svelte-zxxez"}">${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.C, "Card").$$render($$result, { modal: true }, {}, {
      default: () => {
        return `<form class="${"svelte-zxxez"}"><div class="${"title svelte-zxxez"}">${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.T, "Text").$$render($$result, {
          title: true,
          size: "h2",
          text: $globalStore.modalStatus === "add" ? "Add New Invoice" : `Edit Invoice #${id}`
        }, {}, {})}

                ${(0, import_index_b6406b22.v)(import_stores_491b1fed.B, "BackButton").$$render($$result, {}, {}, {})}</div>

            <div class="${"billFrom svelte-zxxez"}"><p class="${"svelte-zxxez"}">Bill From</p>
                <div class="${"billFrom_information svelte-zxxez"}">${(0, import_index_b6406b22.v)(import_InvoiceOptions_0490778f.F, "FormField").$$render($$result, {
          title: true,
          text: "Street Address",
          id: "senderStreet",
          placeholder: "Street Address",
          valid: (0, import_functionStore_d6f5ac9b.s)(senderAddress.street),
          invalidMessage: "Please enter a valid street address",
          value: senderAddress.street
        }, {
          value: ($$value) => {
            senderAddress.street = $$value;
            $$settled = false;
          }
        }, {})}

                    <div class="${"billFrom_information-city svelte-zxxez"}">${(0, import_index_b6406b22.v)(import_InvoiceOptions_0490778f.F, "FormField").$$render($$result, {
          title: true,
          text: "City",
          id: "senderCity",
          placeholder: "City",
          valid: (0, import_functionStore_d6f5ac9b.s)(senderAddress.city),
          invalidMessage: "Please enter a valid City",
          value: senderAddress.city
        }, {
          value: ($$value) => {
            senderAddress.city = $$value;
            $$settled = false;
          }
        }, {})}

                        ${(0, import_index_b6406b22.v)(import_InvoiceOptions_0490778f.F, "FormField").$$render($$result, {
          title: true,
          text: "Postal Code",
          id: "senderPostCode",
          placeholder: "Postal code",
          valid: (0, import_functionStore_d6f5ac9b.s)(senderAddress.postCode),
          invalidMessage: "Please enter a valid postCode",
          value: senderAddress.postCode
        }, {
          value: ($$value) => {
            senderAddress.postCode = $$value;
            $$settled = false;
          }
        }, {})}

                        <div class="${"billFrom_information-country svelte-zxxez"}">${(0, import_index_b6406b22.v)(import_InvoiceOptions_0490778f.F, "FormField").$$render($$result, {
          title: true,
          id: "senderCountry",
          text: "Country",
          placeholder: "Country",
          valid: (0, import_functionStore_d6f5ac9b.s)(senderAddress.country),
          invalidMessage: "Please enter a valid Country",
          value: senderAddress.country
        }, {
          value: ($$value) => {
            senderAddress.country = $$value;
            $$settled = false;
          }
        }, {})}</div></div></div></div>

            <div class="${"billTo svelte-zxxez"}"><p class="${"svelte-zxxez"}">Bill To</p>
                ${(0, import_index_b6406b22.v)(import_InvoiceOptions_0490778f.F, "FormField").$$render($$result, {
          text: "Client's Name",
          id: "clientName",
          placeholder: "Name",
          valid: (0, import_functionStore_d6f5ac9b.s)(clientName),
          invalidMessage: "Please enter a valid Name",
          value: newInvoice.clientName
        }, {
          value: ($$value) => {
            newInvoice.clientName = $$value;
            $$settled = false;
          }
        }, {})}

                ${(0, import_index_b6406b22.v)(import_InvoiceOptions_0490778f.F, "FormField").$$render($$result, {
          text: "Client's Email",
          id: "clientEmail",
          placeholder: "Email",
          valid: (0, import_functionStore_d6f5ac9b.e)(clientEmail),
          invalidMessage: "Please enter a valid Email",
          value: newInvoice.clientEmail
        }, {
          value: ($$value) => {
            newInvoice.clientEmail = $$value;
            $$settled = false;
          }
        }, {})}

                ${(0, import_index_b6406b22.v)(import_InvoiceOptions_0490778f.F, "FormField").$$render($$result, {
          text: "Street Address",
          id: "clientStreet",
          placeholder: "Street Address",
          valid: (0, import_functionStore_d6f5ac9b.s)(clientAddress.street),
          invalidMessage: "Please enter a valid Street",
          value: clientAddress.street
        }, {
          value: ($$value) => {
            clientAddress.street = $$value;
            $$settled = false;
          }
        }, {})}

                <div class="${"billTo_information svelte-zxxez"}"><div class="${"billTo_information-city svelte-zxxez"}">${(0, import_index_b6406b22.v)(import_InvoiceOptions_0490778f.F, "FormField").$$render($$result, {
          text: "City",
          id: "clientCity",
          placeholder: "City",
          valid: (0, import_functionStore_d6f5ac9b.s)(clientAddress.city),
          invalidMessage: "Please enter a valid City",
          value: clientAddress.city
        }, {
          value: ($$value) => {
            clientAddress.city = $$value;
            $$settled = false;
          }
        }, {})}

                        ${(0, import_index_b6406b22.v)(import_InvoiceOptions_0490778f.F, "FormField").$$render($$result, {
          text: "Postal Code",
          id: "clientPostCode",
          placeholder: "Postal code",
          valid: (0, import_functionStore_d6f5ac9b.s)(clientAddress.postCode),
          invalidMessage: "Please enter a valid postal code",
          value: clientAddress.postCode
        }, {
          value: ($$value) => {
            clientAddress.postCode = $$value;
            $$settled = false;
          }
        }, {})}

                        <div class="${"billTo_information-country svelte-zxxez"}">${(0, import_index_b6406b22.v)(import_InvoiceOptions_0490778f.F, "FormField").$$render($$result, {
          id: "clientCountry",
          text: "Country",
          placeholder: "Country",
          valid: (0, import_functionStore_d6f5ac9b.s)(clientAddress.country),
          invalidMessage: "Please enter a valid Country",
          value: clientAddress.country
        }, {
          value: ($$value) => {
            clientAddress.country = $$value;
            $$settled = false;
          }
        }, {})}</div></div></div>

                <div class="${"billTo_invoiceInformation svelte-zxxez"}">${(0, import_index_b6406b22.v)(import_InvoiceOptions_0490778f.F, "FormField").$$render($$result, {
          text: "Payment Due",
          id: "paymentDue",
          disabled: true,
          value: (0, import_functionStore_d6f5ac9b.c)(new Date(), terms),
          valid: true
        }, {}, {})}

                    ${(0, import_index_b6406b22.v)(import_InvoiceOptions_0490778f.F, "FormField").$$render($$result, {
          form: "select",
          text: "Payment Terms",
          options: import_InvoiceOptions_0490778f.o,
          id: "paymentTerms",
          value: terms
        }, {
          value: ($$value) => {
            terms = $$value;
            $$settled = false;
          }
        }, {})}</div>
                ${(0, import_index_b6406b22.v)(import_InvoiceOptions_0490778f.F, "FormField").$$render($$result, {
          text: "Project Description",
          id: "description",
          placeholder: "Project Description",
          valid: (0, import_functionStore_d6f5ac9b.s)(description),
          invalidMessage: "Please enter a valid Description",
          value: newInvoice.description
        }, {
          value: ($$value) => {
            newInvoice.description = $$value;
            $$settled = false;
          }
        }, {})}</div>

            <p class="${"svelte-zxxez"}">Item list</p>
            <div class="${"items svelte-zxxez"}">${(0, import_index_b6406b22.f)(items, (item, i) => {
          return `<div class="${"itemList svelte-zxxez"}"><div class="${"nameField svelte-zxxez"}">${(0, import_index_b6406b22.v)(import_InvoiceOptions_0490778f.F, "FormField").$$render($$result, {
            title: true,
            id: "Name" + i,
            text: "Name",
            placeholder: "Item",
            valid: (0, import_functionStore_d6f5ac9b.s)(item.name),
            invalidMessage: "Must be greater than 5 characters",
            value: item.name
          }, {
            value: ($$value) => {
              item.name = $$value;
              $$settled = false;
            }
          }, {})}</div>
                        <div class="${"attributes svelte-zxxez"}">${(0, import_index_b6406b22.v)(import_InvoiceOptions_0490778f.F, "FormField").$$render($$result, {
            title: true,
            id: "qty" + i,
            form: "number",
            text: "Qty",
            valid: item.quantity >= 1,
            invalidMessage: "Must be greater than 1",
            value: item.quantity
          }, {
            value: ($$value) => {
              item.quantity = $$value;
              $$settled = false;
            }
          }, {})}

                            ${(0, import_index_b6406b22.v)(import_InvoiceOptions_0490778f.F, "FormField").$$render($$result, {
            title: true,
            id: "price" + i,
            form: "number",
            text: "Price",
            valid: item.price >= 1,
            invalidMessage: "Must be greater than 1",
            value: item.price
          }, {
            value: ($$value) => {
              item.price = $$value;
              $$settled = false;
            }
          }, {})}

                            ${(0, import_index_b6406b22.v)(import_InvoiceOptions_0490778f.F, "FormField").$$render($$result, {
            title: true,
            value: "$" + (0, import_functionStore_d6f5ac9b.n)(item.quantity * item.price),
            valid: true,
            id: "total" + i,
            disabled: true,
            text: "Total",
            placeholder: "Total"
          }, {}, {})}
                            <button class="${"svelte-zxxez"}"><i class="${"fas fa-trash svelte-zxxez"}"></i>
                            </button></div>
                    </div>`;
        })}
                ${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.B, "Button").$$render($$result, {
          rounded: true,
          icon: "plus",
          fluid: true,
          text: "Add Item"
        }, {}, {})}</div>
            <div class="${"btns svelte-zxxez"}">${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.B, "Button").$$render($$result, {
          type: "danger",
          icon: "trash",
          size: "medium",
          rounded: true,
          text: "Discard"
        }, {}, {})}
                <div class="${"svelte-zxxez"}">${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.B, "Button").$$render($$result, {
          type: "secondary",
          icon: "save",
          size: "medium",
          disabled: !isValid,
          rounded: true,
          text: "Save as Draft"
        }, {}, {})}
                    ${(0, import_index_b6406b22.v)(import_functionStore_d6f5ac9b.B, "Button").$$render($$result, {
          type: "primary",
          size: "medium",
          icon: "paper-plane",
          disabled: !isValid,
          rounded: true,
          text: "Save and Send"
        }, {}, {})}</div></div></form>`;
      }
    })}</div>

<div class="${"overlay svelte-zxxez"}"></div>


${prompt == "discard" ? `${(0, import_index_b6406b22.v)(ModalPrompt, "ModalPrompt").$$render($$result, { text: "You want to discard the changes?" }, {}, {})}` : ``}

${prompt === "draft" ? `${(0, import_index_b6406b22.v)(ModalPrompt, "ModalPrompt").$$render($$result, {
      text: "You want to save this invoice as draft?"
    }, {}, {})}` : ``}

${prompt === "pending" ? `${(0, import_index_b6406b22.v)(ModalPrompt, "ModalPrompt").$$render($$result, {
      text: "You want to save this invoice as pending?"
    }, {}, {})}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_globalStore();
  $$unsubscribe_page();
  return $$rendered;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1vdlmt2{display:flex;align-items:center;flex-direction:column;height:100%;width:100%;padding:1.25rem 1.0625rem;overflow:auto}@media(min-width: 992px){main.svelte-1vdlmt2{padding:1rem 2rem 2rem 6.5rem}}",
  map: null
};
const _layout = (0, import_index_b6406b22.c)(($$result, $$props, $$bindings, slots) => {
  let theme;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_b6406b22.a)(import_functionStore_d6f5ac9b.g, (value) => $globalStore = value);
  $$result.css.add(css);
  theme = $globalStore.theme;
  $$unsubscribe_globalStore();
  return `${$globalStore.modalStatus !== null ? `${(0, import_index_b6406b22.v)(InvoiceModal, "InvoiceModal").$$render($$result, {}, {}, {})}` : ``}


${(0, import_index_b6406b22.v)(Navigation, "Navigation").$$render($$result, {}, {}, {})}
<main class="${"bgColor" + (0, import_index_b6406b22.e)(theme, true) + " svelte-1vdlmt2"}">${slots.default ? slots.default({}) : ``}</main>`;
});
