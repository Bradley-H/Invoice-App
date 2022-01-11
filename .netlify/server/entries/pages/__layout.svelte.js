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
  default: () => _layout
});
var import_index_6b830c0a = __toModule(require("../../chunks/index-6b830c0a.js"));
var import_functionStore_2bd81cb2 = __toModule(require("../../chunks/functionStore-2bd81cb2.js"));
var import_Button_bdd8baf3 = __toModule(require("../../chunks/Button-bdd8baf3.js"));
var import_stores_ced9780d = __toModule(require("../../chunks/stores-ced9780d.js"));
var import_uid = __toModule(require("uid"));
var Navigation_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "nav.svelte-cy09dy.svelte-cy09dy{display:flex;height:4.375rem;width:100%;background-color:#1e2139;z-index:3}@media(min-width: 992px){nav.svelte-cy09dy.svelte-cy09dy{flex-direction:column;height:100%;width:4.6875rem;position:fixed;left:0;top:0}}nav.svelte-cy09dy .settings.svelte-cy09dy{display:flex;justify-content:center;align-items:center;flex-direction:row;color:white;height:100%;font-size:1.75rem;margin:0 0 0 auto}@media(min-width: 992px){nav.svelte-cy09dy .settings.svelte-cy09dy{flex-direction:column;width:4.6875rem;height:100%;margin:auto 0 0 0}}nav.svelte-cy09dy .settings i.svelte-cy09dy{cursor:pointer;display:flex;justify-content:center;align-items:center;height:100%;width:100%}nav.svelte-cy09dy .settings .themeSwitcher.svelte-cy09dy{border-right:2px solid rgba(128, 128, 128, 0.6);height:100%;padding:0 1.5625rem 0 1.5625rem}@media(min-width: 992px){nav.svelte-cy09dy .settings .themeSwitcher.svelte-cy09dy{border-bottom:2px solid rgba(128, 128, 128, 0.6);border-right:none;width:4.6875rem;padding:0 0 2.0625rem 0;margin-top:auto;height:0}}nav.svelte-cy09dy .settings .avatar.svelte-cy09dy{padding:0 1.5625rem}@media(min-width: 992px){nav.svelte-cy09dy .settings .avatar.svelte-cy09dy{padding:1.25rem 0 0.9375rem 0}}a.svelte-cy09dy.svelte-cy09dy{display:flex;justify-content:center;align-items:center;background-color:#7C5DFAFF;color:white;width:4.6875rem;height:4.375rem;font-size:1.5625rem;border-radius:0 12px 12px 0;transition:transform 0.7s ease-in-out}a.svelte-cy09dy.svelte-cy09dy:hover{transform:scale(1.1)}",
  map: null
};
const Navigation = (0, import_index_6b830c0a.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_6b830c0a.a)(import_functionStore_2bd81cb2.g, (value) => value);
  let icon = "moon";
  $$result.css.add(css$4);
  $$unsubscribe_globalStore();
  return `<nav class="${"svelte-cy09dy"}"><a href="${"/"}" class="${"svelte-cy09dy"}"><i class="${"fas fa-home svelte-cy09dy"}"></i></a>
    <div class="${"settings svelte-cy09dy"}"><div class="${"themeSwitcher svelte-cy09dy"}"><i class="${"fas fa-" + (0, import_index_6b830c0a.e)(icon) + " svelte-cy09dy"}"></i></div>
        <div class="${"avatar svelte-cy09dy"}"><i class="${"fas fa-user-circle svelte-cy09dy"}"></i></div></div></nav>`;
});
const css$3 = {
  code: ".prompt.svelte-1vb4462{display:flex;justify-content:center;align-items:center;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:100%;max-width:600px;z-index:5;padding:1.5rem;text-align:center}.overlay.svelte-1vb4462{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:4}.btns.svelte-1vb4462{display:flex;justify-content:space-around;margin-top:20px}",
  map: null
};
const ModalPrompt = (0, import_index_6b830c0a.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_index_6b830c0a.b)();
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$3);
  return `<div class="${"prompt svelte-1vb4462"}">${(0, import_index_6b830c0a.v)(import_stores_ced9780d.I, "InnerCard").$$render($$result, { modal: true }, {}, {
    default: () => `${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, { size: "h3", text }, {}, {})}
       <div class="${"btns svelte-1vb4462"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.B, "Button").$$render($$result, { type: "secondary", text: "Yes" }, {}, {})}
           ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.B, "Button").$$render($$result, { type: "danger", text: "No" }, {}, {})}</div>`
  })}</div>

<div class="${"overlay svelte-1vb4462"}"></div>`;
});
var NewInvoiceModal_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".btns.svelte-1eyjac7 div.svelte-1eyjac7,.btns.svelte-1eyjac7.svelte-1eyjac7{display:flex}form.svelte-1eyjac7 .billFrom.svelte-1eyjac7{display:flex;flex-direction:column}form.svelte-1eyjac7 .billTo_information.svelte-1eyjac7,form.svelte-1eyjac7 .billFrom_information.svelte-1eyjac7{display:grid}form.svelte-1eyjac7 .billTo_information-city.svelte-1eyjac7,form.svelte-1eyjac7 .billFrom_information-city.svelte-1eyjac7{display:grid;grid-template-columns:repeat(2, 1fr);gap:10px}form.svelte-1eyjac7 p.svelte-1eyjac7{color:#7C5DFAFF;margin:1rem 0;font-weight:bold}form.svelte-1eyjac7 .items.svelte-1eyjac7{margin-bottom:5rem}form.svelte-1eyjac7 .title.svelte-1eyjac7{margin-bottom:2.1875rem}form.svelte-1eyjac7 .billFrom.svelte-1eyjac7{margin-top:2.1875rem}@media(min-width: 768px){form.svelte-1eyjac7 .billFrom_information-city.svelte-1eyjac7{grid-template-columns:1fr 1fr 1fr}}form.svelte-1eyjac7 .billFrom_information-country.svelte-1eyjac7{grid-column:span 2/span 2}@media(min-width: 768px){form.svelte-1eyjac7 .billFrom_information-country.svelte-1eyjac7{grid-column:unset}}form.svelte-1eyjac7 .billTo.svelte-1eyjac7{display:grid;grid-template-columns:1fr;gap:15px}@media(min-width: 768px){form.svelte-1eyjac7 .billTo_invoiceInformation.svelte-1eyjac7{display:grid;grid-template-columns:1fr 1fr;gap:10px}}form.svelte-1eyjac7 .billTo_information-city.svelte-1eyjac7{margin:1rem 0}@media(min-width: 768px){form.svelte-1eyjac7 .billTo_information-city.svelte-1eyjac7{grid-template-columns:1fr 1fr 1fr}}form.svelte-1eyjac7 .billTo_information-country.svelte-1eyjac7{grid-column:span 2/span 2}@media(min-width: 768px){form.svelte-1eyjac7 .billTo_information-country.svelte-1eyjac7{grid-column:unset}}.modal.svelte-1eyjac7.svelte-1eyjac7{width:100%;height:100%;z-index:2;position:fixed;margin:2rem 0 0 0;max-width:37.5rem;margin:4.375rem 0 0 0}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1eyjac7.svelte-1eyjac7{max-width:700px}}@media(min-width: 992px){.modal.svelte-1eyjac7.svelte-1eyjac7{max-width:575px;margin:0 0 0 4.6875rem}}div.overlay.svelte-1eyjac7.svelte-1eyjac7{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:1}.btns.svelte-1eyjac7.svelte-1eyjac7{justify-content:center;max-width:37.5rem;transform:translateY(-2.5rem);position:sticky;margin:2rem 0}@media(min-width: 520px){.btns.svelte-1eyjac7.svelte-1eyjac7{justify-content:space-between}}@media(min-width: 992px){.btns.svelte-1eyjac7.svelte-1eyjac7{margin:0}}.btns.svelte-1eyjac7 div.svelte-1eyjac7{gap:10px;margin-left:0.5rem}@media(min-width: 992px){.btns.svelte-1eyjac7.svelte-1eyjac7{transform:translateY(-1rem)}}.itemList.svelte-1eyjac7.svelte-1eyjac7{display:grid;margin-bottom:2rem;gap:10px}@media(min-width: 520px){.itemList.svelte-1eyjac7.svelte-1eyjac7{display:grid;grid-template-columns:0.7fr 1.5fr}}.itemList.svelte-1eyjac7 .nameField.svelte-1eyjac7{display:grid;grid-template-columns:1fr}.attributes.svelte-1eyjac7.svelte-1eyjac7{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px}@media(min-width: 768px){.attributes.svelte-1eyjac7.svelte-1eyjac7{grid-template-columns:1fr 1fr 1.5fr 0.3fr}}i.svelte-1eyjac7.svelte-1eyjac7{color:red;font-size:1.1rem}button.svelte-1eyjac7.svelte-1eyjac7{height:5.5rem}",
  map: null
};
const NewInvoiceModal = (0, import_index_6b830c0a.c)(($$result, $$props, $$bindings, slots) => {
  let terms;
  let newInvoice;
  let isValid;
  let prompt;
  let senderAddress;
  let clientAddress;
  let items;
  let $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_6b830c0a.a)(import_functionStore_2bd81cb2.g, (value) => value);
  const options = [
    { id: 0, text: "Within 30 Days", value: 30 },
    { id: 1, text: "Within 60 Days", value: 60 }
  ];
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    terms = 30;
    newInvoice = {
      id: (0, import_uid.uid)(6),
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
      paymentDue: (0, import_functionStore_2bd81cb2.c)(new Date()),
      createdAt: "",
      status: "",
      paymentTerms: terms,
      description: "",
      total: 0
    };
    ({ senderAddress, clientAddress, items } = newInvoice);
    {
      if (newInvoice.senderAddress.street.length > 5 && newInvoice.senderAddress.city.length > 5 && newInvoice.senderAddress.country.length > 5 && newInvoice.senderAddress.postCode.length > 5 && newInvoice.clientAddress.street.length > 5 && newInvoice.clientAddress.city.length > 5 && newInvoice.clientAddress.country.length > 5 && newInvoice.clientAddress.postCode.length > 5 && newInvoice.clientName.length > 5 && newInvoice.clientEmail.length > 5 && newInvoice.description.length > 5 && newInvoice.items[items.length - 1].name !== "" && newInvoice.items[items.length - 1].quantity !== 0 && newInvoice.items[items.length - 1].price !== 0) {
        isValid = true;
      } else {
        isValid = false;
      }
    }
    isValid = false;
    prompt = null;
    $$rendered = `<div class="${"modal svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.C, "Card").$$render($$result, { modal: true }, {}, {
      default: () => `<form class="${"svelte-1eyjac7"}"><div class="${"title svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, {
        title: true,
        size: "h2",
        text: "Add New Invoice"
      }, {}, {})}
        ${(0, import_index_6b830c0a.v)(import_stores_ced9780d.B, "BackButton").$$render($$result, {}, {}, {})}</div>

        <div class="${"billFrom svelte-1eyjac7"}"><p class="${"svelte-1eyjac7"}">Bill From</p>    
            <div class="${"billFrom_information svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        title: true,
        text: "Street Address",
        id: "senderStreet",
        placeholder: "Street Address",
        valid: senderAddress.street.trim().length >= 5,
        invalidMessage: "Please enter a valid street address",
        value: newInvoice.senderAddress.street
      }, {
        value: ($$value) => {
          newInvoice.senderAddress.street = $$value;
          $$settled = false;
        }
      }, {})}

                <div class="${"billFrom_information-city svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        title: true,
        text: "City",
        id: "senderCity",
        placeholder: "City",
        valid: senderAddress.city.trim().length > 5,
        invalidMessage: "Please enter a valid City",
        value: senderAddress.city
      }, {
        value: ($$value) => {
          senderAddress.city = $$value;
          $$settled = false;
        }
      }, {})}
                    ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        title: true,
        text: "Postal Code",
        id: "senderPostCode",
        placeholder: "Postal code",
        valid: senderAddress.postCode.trim().length > 5,
        invalidMessage: "Please enter a valid postCode",
        value: senderAddress.postCode
      }, {
        value: ($$value) => {
          senderAddress.postCode = $$value;
          $$settled = false;
        }
      }, {})}
                    <div class="${"billFrom_information-country svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        title: true,
        id: "senderCountry",
        text: "Country",
        placeholder: "Country",
        valid: senderAddress.country.trim().length > 5,
        invalidMessage: "Please enter a valid Country",
        value: senderAddress.country
      }, {
        value: ($$value) => {
          senderAddress.country = $$value;
          $$settled = false;
        }
      }, {})}</div></div></div></div>
    

    <div class="${"billTo svelte-1eyjac7"}"><p class="${"svelte-1eyjac7"}">Bill To</p>
        ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        text: "Client's Name",
        id: "clientName",
        placeholder: "Name",
        valid: newInvoice.clientName.trim().length > 5,
        invalidMessage: "Please enter a valid Name",
        value: newInvoice.clientName
      }, {
        value: ($$value) => {
          newInvoice.clientName = $$value;
          $$settled = false;
        }
      }, {})}
        ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        text: "Client's Email",
        id: "clientEmail",
        placeholder: "Email",
        valid: newInvoice.clientEmail.trim().length > 5,
        invalidMessage: "Please enter a valid Email",
        value: newInvoice.clientEmail
      }, {
        value: ($$value) => {
          newInvoice.clientEmail = $$value;
          $$settled = false;
        }
      }, {})}
        ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        text: "Street Address",
        id: "clientStreet",
        placeholder: "Street Address",
        valid: newInvoice.clientAddress.street.trim().length > 5,
        invalidMessage: "Please enter a valid Street",
        value: clientAddress.street
      }, {
        value: ($$value) => {
          clientAddress.street = $$value;
          $$settled = false;
        }
      }, {})}

        <div class="${"billTo_information svelte-1eyjac7"}"><div class="${"billTo_information-city svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        text: "City",
        id: "clientCity",
        placeholder: "City",
        valid: newInvoice.clientAddress.city.trim().length > 5,
        invalidMessage: "Please enter a valid City",
        value: clientAddress.city
      }, {
        value: ($$value) => {
          clientAddress.city = $$value;
          $$settled = false;
        }
      }, {})}
                ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        text: "Postal Code",
        id: "clientPostCode",
        placeholder: "Postal code",
        valid: newInvoice.clientAddress.postCode.trim().length > 5,
        invalidMessage: "Please enter a valid postal code",
        value: clientAddress.postCode
      }, {
        value: ($$value) => {
          clientAddress.postCode = $$value;
          $$settled = false;
        }
      }, {})}
                <div class="${"billTo_information-country svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        id: "clientCountry",
        text: "Country",
        placeholder: "Country",
        valid: newInvoice.clientAddress.country.trim().length > 5,
        invalidMessage: "Please enter a valid Country",
        value: clientAddress.country
      }, {
        value: ($$value) => {
          clientAddress.country = $$value;
          $$settled = false;
        }
      }, {})}</div></div></div>

        <div class="${"billTo_invoiceInformation svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        text: "Payment Due",
        id: "paymentDue",
        disabled: true,
        value: (0, import_functionStore_2bd81cb2.c)(new Date(), newInvoice.paymentTerms),
        valid: true
      }, {}, {})}
            ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        form: "select",
        text: "Payment Terms",
        options,
        id: "paymentTerms",
        value: terms
      }, {
        value: ($$value) => {
          terms = $$value;
          $$settled = false;
        }
      }, {})}</div>
        ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        text: "Project Description",
        id: "description",
        placeholder: "Project Description",
        valid: newInvoice.description.trim().length > 5,
        invalidMessage: "Please enter a valid Description",
        value: newInvoice.description
      }, {
        value: ($$value) => {
          newInvoice.description = $$value;
          $$settled = false;
        }
      }, {})}</div>

    <p class="${"svelte-1eyjac7"}">Item list</p>
    <div class="${"items svelte-1eyjac7"}">${(0, import_index_6b830c0a.d)(items, (item, i) => `<div class="${"itemList svelte-1eyjac7"}"><div class="${"nameField svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        title: true,
        id: "Name" + i,
        text: "Name",
        placeholder: "Item",
        valid: item.name.length >= 5,
        invalidMessage: "Must be greater than 5 characters",
        value: item.name
      }, {
        value: ($$value) => {
          item.name = $$value;
          $$settled = false;
        }
      }, {})}</div>
                <div class="${"attributes svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        title: true,
        id: "qty" + i,
        form: "number",
        text: "Qty",
        valid: item.quantity >= 1,
        invalidMessage: "Must be greater than 0",
        value: item.quantity
      }, {
        value: ($$value) => {
          item.quantity = $$value;
          $$settled = false;
        }
      }, {})}
                    ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        title: true,
        step: 0.1,
        id: "price" + i,
        form: "number",
        text: "Price",
        valid: item.price >= 1,
        invalidMessage: "Must be greater than 0",
        value: item.price
      }, {
        value: ($$value) => {
          item.price = $$value;
          $$settled = false;
        }
      }, {})}
                    ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        title: true,
        value: "$" + (0, import_functionStore_2bd81cb2.n)(item.quantity * item.price),
        valid: true,
        id: "total" + i,
        disabled: true,
        text: "Total",
        placeholder: "Total"
      }, {}, {})}
                    <button class="${"svelte-1eyjac7"}"><i class="${"fas fa-trash svelte-1eyjac7"}"></i>
                </button></div>
            </div>`)}
        ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.B, "Button").$$render($$result, {
        rounded: true,
        icon: "plus",
        fluid: true,
        text: "Add Item"
      }, {}, {})}</div>
    <div class="${"btns svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.B, "Button").$$render($$result, {
        type: "danger",
        icon: "trash",
        size: "medium",
        rounded: true,
        text: "Discard"
      }, {}, {})}
        <div class="${"svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.B, "Button").$$render($$result, {
        type: "secondary",
        icon: "save",
        size: "medium",
        disabled: !isValid,
        rounded: true,
        text: "Save as Draft"
      }, {}, {})}
            ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.B, "Button").$$render($$result, {
        type: "primary",
        size: "medium",
        icon: "paper-plane",
        disabled: !isValid,
        rounded: true,
        text: "Save and Send"
      }, {}, {})}</div></div></form>`
    })}</div>


<div class="${"overlay svelte-1eyjac7"}"></div>



${prompt == "discard" ? `${(0, import_index_6b830c0a.v)(ModalPrompt, "ModalPrompt").$$render($$result, {
      text: "You want to discard this invoice?"
    }, {}, {})}` : ``}

${prompt === "draft" ? `${(0, import_index_6b830c0a.v)(ModalPrompt, "ModalPrompt").$$render($$result, {
      text: "You want to Save this invoice as draft?"
    }, {}, {})}` : ``}

${prompt === "pending" ? `${(0, import_index_6b830c0a.v)(ModalPrompt, "ModalPrompt").$$render($$result, {
      text: "You want to Save this invoice as pending?"
    }, {}, {})}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_globalStore();
  return $$rendered;
});
var EditInvoiceModal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btns.svelte-1eyjac7 div.svelte-1eyjac7,.btns.svelte-1eyjac7.svelte-1eyjac7{display:flex}form.svelte-1eyjac7 .billFrom.svelte-1eyjac7{display:flex;flex-direction:column}form.svelte-1eyjac7 .billTo_information.svelte-1eyjac7,form.svelte-1eyjac7 .billFrom_information.svelte-1eyjac7{display:grid}form.svelte-1eyjac7 .billTo_information-city.svelte-1eyjac7,form.svelte-1eyjac7 .billFrom_information-city.svelte-1eyjac7{display:grid;grid-template-columns:repeat(2, 1fr);gap:10px}form.svelte-1eyjac7 p.svelte-1eyjac7{color:#7C5DFAFF;margin:1rem 0;font-weight:bold}form.svelte-1eyjac7 .items.svelte-1eyjac7{margin-bottom:5rem}form.svelte-1eyjac7 .title.svelte-1eyjac7{margin-bottom:2.1875rem}form.svelte-1eyjac7 .billFrom.svelte-1eyjac7{margin-top:2.1875rem}@media(min-width: 768px){form.svelte-1eyjac7 .billFrom_information-city.svelte-1eyjac7{grid-template-columns:1fr 1fr 1fr}}form.svelte-1eyjac7 .billFrom_information-country.svelte-1eyjac7{grid-column:span 2/span 2}@media(min-width: 768px){form.svelte-1eyjac7 .billFrom_information-country.svelte-1eyjac7{grid-column:unset}}form.svelte-1eyjac7 .billTo.svelte-1eyjac7{display:grid;grid-template-columns:1fr;gap:15px}@media(min-width: 768px){form.svelte-1eyjac7 .billTo_invoiceInformation.svelte-1eyjac7{display:grid;grid-template-columns:1fr 1fr;gap:10px}}form.svelte-1eyjac7 .billTo_information-city.svelte-1eyjac7{margin:1rem 0}@media(min-width: 768px){form.svelte-1eyjac7 .billTo_information-city.svelte-1eyjac7{grid-template-columns:1fr 1fr 1fr}}form.svelte-1eyjac7 .billTo_information-country.svelte-1eyjac7{grid-column:span 2/span 2}@media(min-width: 768px){form.svelte-1eyjac7 .billTo_information-country.svelte-1eyjac7{grid-column:unset}}.modal.svelte-1eyjac7.svelte-1eyjac7{width:100%;height:100%;z-index:2;position:fixed;margin:2rem 0 0 0;max-width:37.5rem;margin:4.375rem 0 0 0}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1eyjac7.svelte-1eyjac7{max-width:700px}}@media(min-width: 992px){.modal.svelte-1eyjac7.svelte-1eyjac7{max-width:575px;margin:0 0 0 4.6875rem}}div.overlay.svelte-1eyjac7.svelte-1eyjac7{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:1}.btns.svelte-1eyjac7.svelte-1eyjac7{justify-content:center;max-width:37.5rem;transform:translateY(-2.5rem);position:sticky;margin:2rem 0}@media(min-width: 520px){.btns.svelte-1eyjac7.svelte-1eyjac7{justify-content:space-between}}@media(min-width: 992px){.btns.svelte-1eyjac7.svelte-1eyjac7{margin:0}}.btns.svelte-1eyjac7 div.svelte-1eyjac7{gap:10px;margin-left:0.5rem}@media(min-width: 992px){.btns.svelte-1eyjac7.svelte-1eyjac7{transform:translateY(-1rem)}}.itemList.svelte-1eyjac7.svelte-1eyjac7{display:grid;margin-bottom:2rem;gap:10px}@media(min-width: 520px){.itemList.svelte-1eyjac7.svelte-1eyjac7{display:grid;grid-template-columns:0.7fr 1.5fr}}.itemList.svelte-1eyjac7 .nameField.svelte-1eyjac7{display:grid;grid-template-columns:1fr}.attributes.svelte-1eyjac7.svelte-1eyjac7{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px}@media(min-width: 768px){.attributes.svelte-1eyjac7.svelte-1eyjac7{grid-template-columns:1fr 1fr 1.5fr 0.3fr}}i.svelte-1eyjac7.svelte-1eyjac7{color:red;font-size:1.1rem}button.svelte-1eyjac7.svelte-1eyjac7{height:5.5rem}",
  map: null
};
const EditInvoiceModal = (0, import_index_6b830c0a.c)(($$result, $$props, $$bindings, slots) => {
  let senderAddress;
  let id;
  let clientAddress;
  let createdAt;
  let items;
  let clientEmail;
  let clientName;
  let description;
  let paymentTerms;
  let paymentDue;
  let total;
  let terms;
  let isValid;
  let prompt;
  let $globalStore, $$unsubscribe_globalStore;
  let $$unsubscribe_page;
  $$unsubscribe_globalStore = (0, import_index_6b830c0a.a)(import_functionStore_2bd81cb2.g, (value) => $globalStore = value);
  $$unsubscribe_page = (0, import_index_6b830c0a.a)(import_stores_ced9780d.p, (value) => value);
  const options = [
    { id: 0, text: "Within 30 Days", value: 30 },
    { id: 1, text: "Within 60 Days", value: 60 }
  ];
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ senderAddress, id, clientAddress, createdAt, items, clientEmail, clientName, description, paymentTerms, paymentDue, total } = $globalStore.editedInvoice);
    terms = 30;
    {
      if (senderAddress.street.length > 5 && senderAddress.city.length > 5 && senderAddress.country.length > 5 && senderAddress.postCode.length > 5 && clientAddress.street.length > 5 && clientAddress.city.length > 5 && clientAddress.country.length > 5 && clientAddress.postCode.length > 5 && clientName.length > 5 && clientEmail.length > 5 && description.length > 5 && items[items.length - 1].name !== "" && items[items.length - 1].quantity !== 0 && items[items.length - 1].price !== 0) {
        isValid = true;
      } else {
        isValid = false;
      }
    }
    isValid = false;
    prompt = null;
    $$rendered = `<div class="${"modal svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.C, "Card").$$render($$result, { modal: true }, {}, {
      default: () => `<form class="${"svelte-1eyjac7"}"><div class="${"title svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_functionStore_2bd81cb2.T, "Text").$$render($$result, {
        title: true,
        size: "h2",
        text: "Editing #" + id
      }, {}, {})}
        ${(0, import_index_6b830c0a.v)(import_stores_ced9780d.B, "BackButton").$$render($$result, {}, {}, {})}</div>

        <div class="${"billFrom svelte-1eyjac7"}"><p class="${"svelte-1eyjac7"}">Bill From</p>    
            <div class="${"billFrom_information svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        title: true,
        text: "Street Address",
        id: "senderStreet",
        placeholder: "Street Address",
        valid: senderAddress.street.trim().length >= 5,
        invalidMessage: "Please enter a valid street address",
        value: senderAddress.street
      }, {
        value: ($$value) => {
          senderAddress.street = $$value;
          $$settled = false;
        }
      }, {})}

                <div class="${"billFrom_information-city svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        title: true,
        text: "City",
        id: "senderCity",
        placeholder: "City",
        valid: senderAddress.city.trim().length > 5,
        invalidMessage: "Please enter a valid City",
        value: senderAddress.city
      }, {
        value: ($$value) => {
          senderAddress.city = $$value;
          $$settled = false;
        }
      }, {})}
                    ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        title: true,
        text: "Postal Code",
        id: "senderPostCode",
        placeholder: "Postal code",
        valid: senderAddress.postCode.trim().length > 5,
        invalidMessage: "Please enter a valid postCode",
        value: senderAddress.postCode
      }, {
        value: ($$value) => {
          senderAddress.postCode = $$value;
          $$settled = false;
        }
      }, {})}
                    <div class="${"billFrom_information-country svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        title: true,
        id: "senderCountry",
        text: "Country",
        placeholder: "Country",
        valid: senderAddress.country.trim().length > 5,
        invalidMessage: "Please enter a valid Country",
        value: senderAddress.country
      }, {
        value: ($$value) => {
          senderAddress.country = $$value;
          $$settled = false;
        }
      }, {})}</div></div></div></div>
    

    <div class="${"billTo svelte-1eyjac7"}"><p class="${"svelte-1eyjac7"}">Bill To</p>
        ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        text: "Client's Name",
        id: "clientName",
        placeholder: "Name",
        valid: clientName.trim().length > 5,
        invalidMessage: "Please enter a valid Name",
        value: $globalStore.editedInvoice.clientName
      }, {
        value: ($$value) => {
          $globalStore.editedInvoice.clientName = $$value;
          $$settled = false;
        }
      }, {})}
        ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        text: "Client's Email",
        id: "clientEmail",
        placeholder: "Email",
        valid: clientEmail.trim().length > 5,
        invalidMessage: "Please enter a valid Email",
        value: $globalStore.editedInvoice.clientEmail
      }, {
        value: ($$value) => {
          $globalStore.editedInvoice.clientEmail = $$value;
          $$settled = false;
        }
      }, {})}
        ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        text: "Street Address",
        id: "clientStreet",
        placeholder: "Street Address",
        valid: clientAddress.street.trim().length > 5,
        invalidMessage: "Please enter a valid Street",
        value: clientAddress.street
      }, {
        value: ($$value) => {
          clientAddress.street = $$value;
          $$settled = false;
        }
      }, {})}

        <div class="${"billTo_information svelte-1eyjac7"}"><div class="${"billTo_information-city svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        text: "City",
        id: "clientCity",
        placeholder: "City",
        valid: clientAddress.city.trim().length > 5,
        invalidMessage: "Please enter a valid City",
        value: clientAddress.city
      }, {
        value: ($$value) => {
          clientAddress.city = $$value;
          $$settled = false;
        }
      }, {})}
                ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        text: "Postal Code",
        id: "clientPostCode",
        placeholder: "Postal code",
        valid: clientAddress.postCode.trim().length > 5,
        invalidMessage: "Please enter a valid postal code",
        value: clientAddress.postCode
      }, {
        value: ($$value) => {
          clientAddress.postCode = $$value;
          $$settled = false;
        }
      }, {})}
                <div class="${"billTo_information-country svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        id: "clientCountry",
        text: "Country",
        placeholder: "Country",
        valid: clientAddress.country.trim().length > 5,
        invalidMessage: "Please enter a valid Country",
        value: clientAddress.country
      }, {
        value: ($$value) => {
          clientAddress.country = $$value;
          $$settled = false;
        }
      }, {})}</div></div></div>

        <div class="${"billTo_invoiceInformation svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        text: "Payment Due",
        id: "paymentDue",
        disabled: true,
        value: (0, import_functionStore_2bd81cb2.c)(new Date(), terms),
        valid: true
      }, {}, {})}
            ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        form: "select",
        text: "Payment Terms",
        options,
        id: "paymentTerms",
        value: terms
      }, {
        value: ($$value) => {
          terms = $$value;
          $$settled = false;
        }
      }, {})}</div>
        ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        text: "Project Description",
        id: "description",
        placeholder: "Project Description",
        valid: description.trim().length > 5,
        invalidMessage: "Please enter a valid Description",
        value: description
      }, {
        value: ($$value) => {
          description = $$value;
          $$settled = false;
        }
      }, {})}</div>

    <p class="${"svelte-1eyjac7"}">Item list</p>
    <div class="${"items svelte-1eyjac7"}">${(0, import_index_6b830c0a.d)(items, (item, i) => `<div class="${"itemList svelte-1eyjac7"}"><div class="${"nameField svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        title: true,
        id: "Name" + i,
        text: "Name",
        placeholder: "Item",
        valid: item.name.length >= 5,
        invalidMessage: "Must be greater than 5 characters",
        value: item.name
      }, {
        value: ($$value) => {
          item.name = $$value;
          $$settled = false;
        }
      }, {})}</div>
                <div class="${"attributes svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        title: true,
        id: "qty" + i,
        form: "number",
        text: "Qty",
        valid: item.quantity >= 1,
        invalidMessage: "Must be greater than 0",
        value: item.quantity
      }, {
        value: ($$value) => {
          item.quantity = $$value;
          $$settled = false;
        }
      }, {})}
                    ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        title: true,
        step: 0.1,
        id: "price" + i,
        form: "number",
        text: "Price",
        valid: item.price >= 1,
        invalidMessage: "Must be greater than 0",
        value: item.price
      }, {
        value: ($$value) => {
          item.price = $$value;
          $$settled = false;
        }
      }, {})}
                    ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.F, "FormField").$$render($$result, {
        title: true,
        value: "$" + (0, import_functionStore_2bd81cb2.n)(item.quantity * item.price),
        valid: true,
        id: "total" + i,
        disabled: true,
        text: "Total",
        placeholder: "Total"
      }, {}, {})}
                    <button class="${"svelte-1eyjac7"}"><i class="${"fas fa-trash svelte-1eyjac7"}"></i>
                </button></div>
            </div>`)}
        ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.B, "Button").$$render($$result, {
        rounded: true,
        icon: "plus",
        fluid: true,
        text: "Add Item"
      }, {}, {})}</div>
    <div class="${"btns svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.B, "Button").$$render($$result, {
        type: "danger",
        icon: "trash",
        size: "medium",
        rounded: true,
        text: "Discard"
      }, {}, {})}
        <div class="${"svelte-1eyjac7"}">${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.B, "Button").$$render($$result, {
        type: "secondary",
        icon: "save",
        size: "medium",
        disabled: !isValid,
        rounded: true,
        text: "Save as Draft"
      }, {}, {})}
            ${(0, import_index_6b830c0a.v)(import_Button_bdd8baf3.B, "Button").$$render($$result, {
        type: "primary",
        size: "medium",
        icon: "paper-plane",
        disabled: !isValid,
        rounded: true,
        text: "Save and Send"
      }, {}, {})}</div></div></form>`
    })}</div>


<div class="${"overlay svelte-1eyjac7"}"></div>



${prompt == "discard" ? `${(0, import_index_6b830c0a.v)(ModalPrompt, "ModalPrompt").$$render($$result, {
      text: "You want to discard this invoice?"
    }, {}, {})}` : ``}

${prompt === "draft" ? `${(0, import_index_6b830c0a.v)(ModalPrompt, "ModalPrompt").$$render($$result, {
      text: "You want to Save this invoice as draft?"
    }, {}, {})}` : ``}

${prompt === "pending" ? `${(0, import_index_6b830c0a.v)(ModalPrompt, "ModalPrompt").$$render($$result, {
      text: "You want to Save this invoice as pending?"
    }, {}, {})}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_globalStore();
  $$unsubscribe_page();
  return $$rendered;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-17tl8y2{display:flex;align-items:center;flex-direction:column;height:100vh;width:100%;padding:1rem 1.5rem;overflow:auto}@media(min-width: 992px){main.svelte-17tl8y2{padding:1rem 2rem 2rem 6.5rem}}",
  map: null
};
const _layout = (0, import_index_6b830c0a.c)(($$result, $$props, $$bindings, slots) => {
  let theme;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_6b830c0a.a)(import_functionStore_2bd81cb2.g, (value) => $globalStore = value);
  $$result.css.add(css);
  theme = $globalStore.theme;
  $$unsubscribe_globalStore();
  return `${$globalStore.modalStatus === "add" ? `${(0, import_index_6b830c0a.v)(NewInvoiceModal, "NewInvoiceModal").$$render($$result, {}, {}, {})}` : ``}

${$globalStore.modalStatus === "edit" ? `${(0, import_index_6b830c0a.v)(EditInvoiceModal, "EditInvoiceModal").$$render($$result, {}, {}, {})}` : ``}
${(0, import_index_6b830c0a.v)(Navigation, "Navigation").$$render($$result, {}, {}, {})}
<main class="${"bgColor" + (0, import_index_6b830c0a.e)(theme) + " svelte-17tl8y2"}">${slots.default ? slots.default({}) : ``}</main>`;
});
