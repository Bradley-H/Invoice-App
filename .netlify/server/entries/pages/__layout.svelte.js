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
var import_index_80978f94 = require("../../chunks/index-80978f94.js");
var import_functionStore_c189635e = require("../../chunks/functionStore-c189635e.js");
var import_Button_a2d409b1 = require("../../chunks/Button-a2d409b1.js");
var import_stores_f168da72 = require("../../chunks/stores-f168da72.js");
var import_uid = require("uid");
var Navigation_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "nav.svelte-1082by3.svelte-1082by3{display:flex;height:4.375rem;width:100%;background-color:#1e2139;z-index:3}@media(min-width: 992px){nav.svelte-1082by3.svelte-1082by3{flex-direction:column;height:100%;width:4.6875rem;position:fixed;left:0;top:0}}nav.svelte-1082by3 .settings.svelte-1082by3{display:flex;justify-content:center;align-items:center;flex-direction:row;color:white;height:100%;font-size:1.75rem;margin:0 0 0 auto}@media(min-width: 992px){nav.svelte-1082by3 .settings.svelte-1082by3{flex-direction:column;width:4.6875rem;height:100%;margin:auto 0 0 0}}nav.svelte-1082by3 .settings i.svelte-1082by3{cursor:pointer;display:flex;justify-content:center;align-items:center;height:100%;width:100%}nav.svelte-1082by3 .settings .themeSwitcher.svelte-1082by3{border-right:2px solid rgba(128, 128, 128, 0.6);height:100%;padding:0 1.5625rem 0 1.5625rem}@media(min-width: 992px){nav.svelte-1082by3 .settings .themeSwitcher.svelte-1082by3{border-bottom:2px solid rgba(128, 128, 128, 0.6);border-right:none;width:4.6875rem;padding:0 0 2.0625rem 0;margin-top:auto;height:0}}nav.svelte-1082by3 .settings .avatar.svelte-1082by3{padding:0 1.5625rem}@media(min-width: 992px){nav.svelte-1082by3 .settings .avatar.svelte-1082by3{padding:1.25rem 0 0.9375rem 0}}a.svelte-1082by3.svelte-1082by3{display:flex;justify-content:center;align-items:center;background-color:#7c5dfa;color:white;width:4.6875rem;height:4.375rem;font-size:1.5625rem;transition:transform 0.4s ease-in-out}a.svelte-1082by3.svelte-1082by3:hover{transform:scale(1.1)}",
  map: null
};
const Navigation = (0, import_index_80978f94.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_80978f94.a)(import_functionStore_c189635e.g, (value) => value);
  let icon = "moon";
  $$result.css.add(css$4);
  $$unsubscribe_globalStore();
  return `<nav class="${"svelte-1082by3"}"><a href="${"/"}" class="${"svelte-1082by3"}"><i class="${"fas fa-home svelte-1082by3"}"></i></a>
    <div class="${"settings svelte-1082by3"}"><div class="${"themeSwitcher svelte-1082by3"}"><i class="${"fas fa-" + (0, import_index_80978f94.e)(icon) + " svelte-1082by3"}"></i></div>
        <div class="${"avatar svelte-1082by3"}"><i class="${"fas fa-user-circle svelte-1082by3"}"></i></div></div></nav>`;
});
const css$3 = {
  code: ".prompt.svelte-1vb4462{display:flex;justify-content:center;align-items:center;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:100%;max-width:600px;z-index:5;padding:1.5rem;text-align:center}.overlay.svelte-1vb4462{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:4}.btns.svelte-1vb4462{display:flex;justify-content:space-around;margin-top:20px}",
  map: null
};
const ModalPrompt = (0, import_index_80978f94.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_index_80978f94.b)();
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$3);
  return `<div class="${"prompt svelte-1vb4462"}">${(0, import_index_80978f94.v)(import_stores_f168da72.I, "InnerCard").$$render($$result, { modal: true }, {}, {
    default: () => {
      return `${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, { size: "h3", text }, {}, {})}
       <div class="${"btns svelte-1vb4462"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.B, "Button").$$render($$result, { type: "secondary", text: "Yes" }, {}, {})}
           ${(0, import_index_80978f94.v)(import_Button_a2d409b1.B, "Button").$$render($$result, { type: "danger", text: "No" }, {}, {})}</div>`;
    }
  })}</div>

<div class="${"overlay svelte-1vb4462"}"></div>`;
});
var NewInvoiceModal_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".btns.svelte-1gwlgpj div.svelte-1gwlgpj,.btns.svelte-1gwlgpj.svelte-1gwlgpj{display:flex}form.svelte-1gwlgpj .billFrom.svelte-1gwlgpj{display:flex;flex-direction:column}form.svelte-1gwlgpj .billTo_information.svelte-1gwlgpj,form.svelte-1gwlgpj .billFrom_information.svelte-1gwlgpj{display:grid}form.svelte-1gwlgpj .billTo_information-city.svelte-1gwlgpj,form.svelte-1gwlgpj .billFrom_information-city.svelte-1gwlgpj{display:grid;grid-template-columns:repeat(2, 1fr);gap:10px}form.svelte-1gwlgpj p.svelte-1gwlgpj{color:#7c5dfa;margin:1rem 0;font-weight:bold}form.svelte-1gwlgpj .items.svelte-1gwlgpj{margin-bottom:5rem}form.svelte-1gwlgpj .title.svelte-1gwlgpj{margin-bottom:2.1875rem}form.svelte-1gwlgpj .billFrom.svelte-1gwlgpj{margin-top:2.1875rem}@media(min-width: 768px){form.svelte-1gwlgpj .billFrom_information-city.svelte-1gwlgpj{grid-template-columns:1fr 1fr 1fr}}form.svelte-1gwlgpj .billFrom_information-country.svelte-1gwlgpj{grid-column:span 2/span 2}@media(min-width: 768px){form.svelte-1gwlgpj .billFrom_information-country.svelte-1gwlgpj{grid-column:unset}}form.svelte-1gwlgpj .billTo.svelte-1gwlgpj{display:grid;grid-template-columns:1fr;gap:15px}@media(min-width: 768px){form.svelte-1gwlgpj .billTo_invoiceInformation.svelte-1gwlgpj{display:grid;grid-template-columns:1fr 1fr;gap:10px}}form.svelte-1gwlgpj .billTo_information-city.svelte-1gwlgpj{margin:1rem 0}@media(min-width: 768px){form.svelte-1gwlgpj .billTo_information-city.svelte-1gwlgpj{grid-template-columns:1fr 1fr 1fr}}form.svelte-1gwlgpj .billTo_information-country.svelte-1gwlgpj{grid-column:span 2/span 2}@media(min-width: 768px){form.svelte-1gwlgpj .billTo_information-country.svelte-1gwlgpj{grid-column:unset}}.modal.svelte-1gwlgpj.svelte-1gwlgpj{width:100%;height:100%;z-index:2;position:fixed;margin:2rem 0 0 0;max-width:37.5rem;margin:4.375rem 0 0 0}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1gwlgpj.svelte-1gwlgpj{max-width:700px}}@media(min-width: 992px){.modal.svelte-1gwlgpj.svelte-1gwlgpj{max-width:575px;margin:0 0 0 4.6875rem}}div.overlay.svelte-1gwlgpj.svelte-1gwlgpj{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:1}.btns.svelte-1gwlgpj.svelte-1gwlgpj{justify-content:center;max-width:37.5rem;transform:translateY(-2.5rem);position:sticky;margin:2rem 0}@media(min-width: 520px){.btns.svelte-1gwlgpj.svelte-1gwlgpj{justify-content:space-between}}@media(min-width: 992px){.btns.svelte-1gwlgpj.svelte-1gwlgpj{margin:0}}.btns.svelte-1gwlgpj div.svelte-1gwlgpj{gap:10px;margin-left:0.5rem}@media(min-width: 992px){.btns.svelte-1gwlgpj.svelte-1gwlgpj{transform:translateY(-1rem)}}.itemList.svelte-1gwlgpj.svelte-1gwlgpj{display:grid;margin-bottom:2rem;gap:10px}@media(min-width: 520px){.itemList.svelte-1gwlgpj.svelte-1gwlgpj{display:grid;grid-template-columns:0.7fr 1.5fr}}.itemList.svelte-1gwlgpj .nameField.svelte-1gwlgpj{display:grid;grid-template-columns:1fr}.attributes.svelte-1gwlgpj.svelte-1gwlgpj{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px}@media(min-width: 768px){.attributes.svelte-1gwlgpj.svelte-1gwlgpj{grid-template-columns:1fr 1fr 1.5fr 0.3fr}}i.svelte-1gwlgpj.svelte-1gwlgpj{color:red;font-size:1.1rem}button.svelte-1gwlgpj.svelte-1gwlgpj{height:5.5rem}",
  map: null
};
const NewInvoiceModal = (0, import_index_80978f94.c)(($$result, $$props, $$bindings, slots) => {
  let newInvoice;
  let senderAddress;
  let clientAddress;
  let items;
  let $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_80978f94.a)(import_functionStore_c189635e.g, (value) => value);
  const options = [
    { id: 0, text: "Within 30 Days", value: 30 },
    { id: 1, text: "Within 60 Days", value: 60 }
  ];
  let terms = 30;
  let isValid = false;
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
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
      paymentDue: (0, import_functionStore_c189635e.c)(new Date()),
      createdAt: "",
      status: "",
      description: "",
      total: 0
    };
    {
      if ((0, import_functionStore_c189635e.s)(newInvoice.senderAddress.street) && (0, import_functionStore_c189635e.s)(newInvoice.senderAddress.city) && (0, import_functionStore_c189635e.s)(newInvoice.senderAddress.country) && (0, import_functionStore_c189635e.s)(newInvoice.senderAddress.postCode) && (0, import_functionStore_c189635e.s)(newInvoice.clientAddress.street) && (0, import_functionStore_c189635e.s)(newInvoice.clientAddress.city) && (0, import_functionStore_c189635e.s)(newInvoice.clientAddress.country) && (0, import_functionStore_c189635e.s)(newInvoice.clientAddress.postCode) && (0, import_functionStore_c189635e.s)(newInvoice.clientName) && (0, import_functionStore_c189635e.e)(newInvoice.clientEmail) && (0, import_functionStore_c189635e.s)(newInvoice.description) && newInvoice.items.length > 0 && newInvoice.items.every((item) => (0, import_functionStore_c189635e.s)(item.name)) && newInvoice.items.every((item) => item.quantity > 5) && newInvoice.items.every((item) => item.price > 5)) {
        isValid = true;
      } else {
        isValid = false;
      }
    }
    ({ senderAddress, clientAddress, items } = newInvoice);
    $$rendered = `<div class="${"modal svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_functionStore_c189635e.C, "Card").$$render($$result, { modal: true }, {}, {
      default: () => {
        return `<form class="${"svelte-1gwlgpj"}"><div class="${"title svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, {
          title: true,
          size: "h2",
          text: "Add New Invoice"
        }, {}, {})}
        ${(0, import_index_80978f94.v)(import_stores_f168da72.B, "BackButton").$$render($$result, {}, {}, {})}</div>

        <div class="${"billFrom svelte-1gwlgpj"}"><p class="${"svelte-1gwlgpj"}">Bill From</p>    
            <div class="${"billFrom_information svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          title: true,
          text: "Street Address",
          id: "senderStreet",
          placeholder: "Street Address",
          valid: (0, import_functionStore_c189635e.s)(senderAddress.street),
          invalidMessage: "Please enter a valid street address",
          value: newInvoice.senderAddress.street
        }, {
          value: ($$value) => {
            newInvoice.senderAddress.street = $$value;
            $$settled = false;
          }
        }, {})}

                <div class="${"billFrom_information-city svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          title: true,
          text: "City",
          id: "senderCity",
          placeholder: "City",
          valid: (0, import_functionStore_c189635e.s)(senderAddress.city),
          invalidMessage: "Please enter a valid City",
          value: senderAddress.city
        }, {
          value: ($$value) => {
            senderAddress.city = $$value;
            $$settled = false;
          }
        }, {})}
                    ${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          title: true,
          text: "Postal Code",
          id: "senderPostCode",
          placeholder: "Postal code",
          valid: (0, import_functionStore_c189635e.s)(senderAddress.postCode),
          invalidMessage: "Please enter a valid postCode",
          value: senderAddress.postCode
        }, {
          value: ($$value) => {
            senderAddress.postCode = $$value;
            $$settled = false;
          }
        }, {})}
                    <div class="${"billFrom_information-country svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          title: true,
          id: "senderCountry",
          text: "Country",
          placeholder: "Country",
          valid: (0, import_functionStore_c189635e.s)(senderAddress.country),
          invalidMessage: "Please enter a valid Country",
          value: senderAddress.country
        }, {
          value: ($$value) => {
            senderAddress.country = $$value;
            $$settled = false;
          }
        }, {})}</div></div></div></div>
    

    <div class="${"billTo svelte-1gwlgpj"}"><p class="${"svelte-1gwlgpj"}">Bill To</p>
        ${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          text: "Client's Name",
          id: "clientName",
          placeholder: "Name",
          valid: (0, import_functionStore_c189635e.s)(newInvoice.clientName),
          invalidMessage: "Please enter a valid Name",
          value: newInvoice.clientName
        }, {
          value: ($$value) => {
            newInvoice.clientName = $$value;
            $$settled = false;
          }
        }, {})}
        ${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          text: "Client's Email",
          id: "clientEmail",
          placeholder: "Email",
          valid: (0, import_functionStore_c189635e.e)(newInvoice.clientEmail),
          invalidMessage: "Please enter a valid Email",
          value: newInvoice.clientEmail
        }, {
          value: ($$value) => {
            newInvoice.clientEmail = $$value;
            $$settled = false;
          }
        }, {})}
        ${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          text: "Street Address",
          id: "clientStreet",
          placeholder: "Street Address",
          valid: (0, import_functionStore_c189635e.s)(clientAddress.street),
          invalidMessage: "Please enter a valid Street",
          value: clientAddress.street
        }, {
          value: ($$value) => {
            clientAddress.street = $$value;
            $$settled = false;
          }
        }, {})}

        <div class="${"billTo_information svelte-1gwlgpj"}"><div class="${"billTo_information-city svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          text: "City",
          id: "clientCity",
          placeholder: "City",
          valid: (0, import_functionStore_c189635e.s)(clientAddress.city),
          invalidMessage: "Please enter a valid City",
          value: clientAddress.city
        }, {
          value: ($$value) => {
            clientAddress.city = $$value;
            $$settled = false;
          }
        }, {})}
                ${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          text: "Postal Code",
          id: "clientPostCode",
          placeholder: "Postal code",
          valid: (0, import_functionStore_c189635e.s)(clientAddress.postCode),
          invalidMessage: "Please enter a valid postal code",
          value: clientAddress.postCode
        }, {
          value: ($$value) => {
            clientAddress.postCode = $$value;
            $$settled = false;
          }
        }, {})}
                <div class="${"billTo_information-country svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          id: "clientCountry",
          text: "Country",
          placeholder: "Country",
          valid: (0, import_functionStore_c189635e.s)(clientAddress.country),
          invalidMessage: "Please enter a valid Country",
          value: clientAddress.country
        }, {
          value: ($$value) => {
            clientAddress.country = $$value;
            $$settled = false;
          }
        }, {})}</div></div></div>

        <div class="${"billTo_invoiceInformation svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          text: "Payment Due",
          id: "paymentDue",
          disabled: true,
          value: (0, import_functionStore_c189635e.c)(new Date(), terms),
          valid: true
        }, {}, {})}
            ${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
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
        ${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          text: "Project Description",
          id: "description",
          placeholder: "Project Description",
          valid: (0, import_functionStore_c189635e.s)(newInvoice.description),
          invalidMessage: "Please enter a valid Description",
          value: newInvoice.description
        }, {
          value: ($$value) => {
            newInvoice.description = $$value;
            $$settled = false;
          }
        }, {})}</div>

    <p class="${"svelte-1gwlgpj"}">Item list</p>
    <div class="${"items svelte-1gwlgpj"}">${(0, import_index_80978f94.d)(items, (item, i) => {
          return `<div class="${"itemList svelte-1gwlgpj"}"><div class="${"nameField svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
            title: true,
            id: "Name" + i,
            text: "Name",
            placeholder: "Item",
            valid: (0, import_functionStore_c189635e.s)(item.name),
            invalidMessage: "Must be greater than 5 characters",
            value: item.name
          }, {
            value: ($$value) => {
              item.name = $$value;
              $$settled = false;
            }
          }, {})}</div>
                <div class="${"attributes svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
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
                    ${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
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
                    ${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
            title: true,
            value: "$" + (0, import_functionStore_c189635e.n)(item.quantity * item.price),
            valid: true,
            id: "total" + i,
            disabled: true,
            text: "Total",
            placeholder: "Total"
          }, {}, {})}
                    <button class="${"svelte-1gwlgpj"}"><i class="${"fas fa-trash svelte-1gwlgpj"}"></i>
                </button></div>
            </div>`;
        })}
        ${(0, import_index_80978f94.v)(import_Button_a2d409b1.B, "Button").$$render($$result, {
          rounded: true,
          icon: "plus",
          fluid: true,
          text: "Add Item"
        }, {}, {})}</div>
    <div class="${"btns svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.B, "Button").$$render($$result, {
          type: "danger",
          icon: "trash",
          size: "medium",
          rounded: true,
          text: "Discard"
        }, {}, {})}
        <div class="${"svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.B, "Button").$$render($$result, {
          type: "secondary",
          icon: "save",
          size: "medium",
          disabled: !isValid,
          rounded: true,
          text: "Save as Draft"
        }, {}, {})}
            ${(0, import_index_80978f94.v)(import_Button_a2d409b1.B, "Button").$$render($$result, {
          type: "primary",
          size: "medium",
          icon: "paper-plane",
          disabled: !isValid,
          rounded: true,
          text: "Save and Send"
        }, {}, {})}</div></div></form>`;
      }
    })}</div>


<div class="${"overlay svelte-1gwlgpj"}"></div>



${``}

${``}

${``}`;
  } while (!$$settled);
  $$unsubscribe_globalStore();
  return $$rendered;
});
var EditInvoiceModal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btns.svelte-1gwlgpj div.svelte-1gwlgpj,.btns.svelte-1gwlgpj.svelte-1gwlgpj{display:flex}form.svelte-1gwlgpj .billFrom.svelte-1gwlgpj{display:flex;flex-direction:column}form.svelte-1gwlgpj .billTo_information.svelte-1gwlgpj,form.svelte-1gwlgpj .billFrom_information.svelte-1gwlgpj{display:grid}form.svelte-1gwlgpj .billTo_information-city.svelte-1gwlgpj,form.svelte-1gwlgpj .billFrom_information-city.svelte-1gwlgpj{display:grid;grid-template-columns:repeat(2, 1fr);gap:10px}form.svelte-1gwlgpj p.svelte-1gwlgpj{color:#7c5dfa;margin:1rem 0;font-weight:bold}form.svelte-1gwlgpj .items.svelte-1gwlgpj{margin-bottom:5rem}form.svelte-1gwlgpj .title.svelte-1gwlgpj{margin-bottom:2.1875rem}form.svelte-1gwlgpj .billFrom.svelte-1gwlgpj{margin-top:2.1875rem}@media(min-width: 768px){form.svelte-1gwlgpj .billFrom_information-city.svelte-1gwlgpj{grid-template-columns:1fr 1fr 1fr}}form.svelte-1gwlgpj .billFrom_information-country.svelte-1gwlgpj{grid-column:span 2/span 2}@media(min-width: 768px){form.svelte-1gwlgpj .billFrom_information-country.svelte-1gwlgpj{grid-column:unset}}form.svelte-1gwlgpj .billTo.svelte-1gwlgpj{display:grid;grid-template-columns:1fr;gap:15px}@media(min-width: 768px){form.svelte-1gwlgpj .billTo_invoiceInformation.svelte-1gwlgpj{display:grid;grid-template-columns:1fr 1fr;gap:10px}}form.svelte-1gwlgpj .billTo_information-city.svelte-1gwlgpj{margin:1rem 0}@media(min-width: 768px){form.svelte-1gwlgpj .billTo_information-city.svelte-1gwlgpj{grid-template-columns:1fr 1fr 1fr}}form.svelte-1gwlgpj .billTo_information-country.svelte-1gwlgpj{grid-column:span 2/span 2}@media(min-width: 768px){form.svelte-1gwlgpj .billTo_information-country.svelte-1gwlgpj{grid-column:unset}}.modal.svelte-1gwlgpj.svelte-1gwlgpj{width:100%;height:100%;z-index:2;position:fixed;margin:2rem 0 0 0;max-width:37.5rem;margin:4.375rem 0 0 0}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-1gwlgpj.svelte-1gwlgpj{max-width:700px}}@media(min-width: 992px){.modal.svelte-1gwlgpj.svelte-1gwlgpj{max-width:575px;margin:0 0 0 4.6875rem}}div.overlay.svelte-1gwlgpj.svelte-1gwlgpj{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:1}.btns.svelte-1gwlgpj.svelte-1gwlgpj{justify-content:center;max-width:37.5rem;transform:translateY(-2.5rem);position:sticky;margin:2rem 0}@media(min-width: 520px){.btns.svelte-1gwlgpj.svelte-1gwlgpj{justify-content:space-between}}@media(min-width: 992px){.btns.svelte-1gwlgpj.svelte-1gwlgpj{margin:0}}.btns.svelte-1gwlgpj div.svelte-1gwlgpj{gap:10px;margin-left:0.5rem}@media(min-width: 992px){.btns.svelte-1gwlgpj.svelte-1gwlgpj{transform:translateY(-1rem)}}.itemList.svelte-1gwlgpj.svelte-1gwlgpj{display:grid;margin-bottom:2rem;gap:10px}@media(min-width: 520px){.itemList.svelte-1gwlgpj.svelte-1gwlgpj{display:grid;grid-template-columns:0.7fr 1.5fr}}.itemList.svelte-1gwlgpj .nameField.svelte-1gwlgpj{display:grid;grid-template-columns:1fr}.attributes.svelte-1gwlgpj.svelte-1gwlgpj{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px}@media(min-width: 768px){.attributes.svelte-1gwlgpj.svelte-1gwlgpj{grid-template-columns:1fr 1fr 1.5fr 0.3fr}}i.svelte-1gwlgpj.svelte-1gwlgpj{color:red;font-size:1.1rem}button.svelte-1gwlgpj.svelte-1gwlgpj{height:5.5rem}",
  map: null
};
const EditInvoiceModal = (0, import_index_80978f94.c)(($$result, $$props, $$bindings, slots) => {
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
  $$unsubscribe_globalStore = (0, import_index_80978f94.a)(import_functionStore_c189635e.g, (value) => $globalStore = value);
  $$unsubscribe_page = (0, import_index_80978f94.a)(import_stores_f168da72.p, (value) => value);
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
    isValid = false;
    prompt = null;
    {
      if ((0, import_functionStore_c189635e.s)(senderAddress.street) && (0, import_functionStore_c189635e.s)(senderAddress.city) && (0, import_functionStore_c189635e.s)(senderAddress.country) && (0, import_functionStore_c189635e.s)(senderAddress.postCode) && (0, import_functionStore_c189635e.s)(clientAddress.street) && (0, import_functionStore_c189635e.s)(clientAddress.city) && (0, import_functionStore_c189635e.s)(clientAddress.country) && (0, import_functionStore_c189635e.s)(clientAddress.postCode) && (0, import_functionStore_c189635e.s)(clientName) && (0, import_functionStore_c189635e.e)(clientEmail) && (0, import_functionStore_c189635e.s)(description) && items.length > 0 && items.every((item) => item.name.length > 5) && items.every((item) => item.price >= 4.9) && items.every((item) => item.quantity >= 4.9)) {
        isValid = true;
      } else {
        isValid = false;
      }
    }
    $$rendered = `<div class="${"modal svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_functionStore_c189635e.C, "Card").$$render($$result, { modal: true }, {}, {
      default: () => {
        return `<form class="${"svelte-1gwlgpj"}"><div class="${"title svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_functionStore_c189635e.T, "Text").$$render($$result, {
          title: true,
          size: "h2",
          text: "Editing #" + id
        }, {}, {})}
        ${(0, import_index_80978f94.v)(import_stores_f168da72.B, "BackButton").$$render($$result, {}, {}, {})}</div>

        <div class="${"billFrom svelte-1gwlgpj"}"><p class="${"svelte-1gwlgpj"}">Bill From</p>    
            <div class="${"billFrom_information svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          title: true,
          text: "Street Address",
          id: "senderStreet",
          placeholder: "Street Address",
          valid: (0, import_functionStore_c189635e.s)(senderAddress.street),
          invalidMessage: "Please enter a valid street address",
          value: senderAddress.street
        }, {
          value: ($$value) => {
            senderAddress.street = $$value;
            $$settled = false;
          }
        }, {})}

                <div class="${"billFrom_information-city svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          title: true,
          text: "City",
          id: "senderCity",
          placeholder: "City",
          valid: (0, import_functionStore_c189635e.s)(senderAddress.city),
          invalidMessage: "Please enter a valid City",
          value: senderAddress.city
        }, {
          value: ($$value) => {
            senderAddress.city = $$value;
            $$settled = false;
          }
        }, {})}
                    ${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          title: true,
          text: "Postal Code",
          id: "senderPostCode",
          placeholder: "Postal code",
          valid: (0, import_functionStore_c189635e.s)(senderAddress.postCode),
          invalidMessage: "Please enter a valid postCode",
          value: senderAddress.postCode
        }, {
          value: ($$value) => {
            senderAddress.postCode = $$value;
            $$settled = false;
          }
        }, {})}
                    <div class="${"billFrom_information-country svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          title: true,
          id: "senderCountry",
          text: "Country",
          placeholder: "Country",
          valid: (0, import_functionStore_c189635e.s)(senderAddress.country),
          invalidMessage: "Please enter a valid Country",
          value: senderAddress.country
        }, {
          value: ($$value) => {
            senderAddress.country = $$value;
            $$settled = false;
          }
        }, {})}</div></div></div></div>
    

    <div class="${"billTo svelte-1gwlgpj"}"><p class="${"svelte-1gwlgpj"}">Bill To</p>
        ${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          text: "Client's Name",
          id: "clientName",
          placeholder: "Name",
          valid: (0, import_functionStore_c189635e.s)($globalStore.editedInvoice.clientName),
          invalidMessage: "Please enter a valid Name",
          value: $globalStore.editedInvoice.clientName
        }, {
          value: ($$value) => {
            $globalStore.editedInvoice.clientName = $$value;
            $$settled = false;
          }
        }, {})}
        ${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          text: "Client's Email",
          id: "clientEmail",
          placeholder: "Email",
          valid: (0, import_functionStore_c189635e.e)($globalStore.editedInvoice.clientEmail),
          invalidMessage: "Please enter a valid Email",
          value: $globalStore.editedInvoice.clientEmail
        }, {
          value: ($$value) => {
            $globalStore.editedInvoice.clientEmail = $$value;
            $$settled = false;
          }
        }, {})}
        ${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          text: "Street Address",
          id: "clientStreet",
          placeholder: "Street Address",
          valid: (0, import_functionStore_c189635e.s)(clientAddress.street),
          invalidMessage: "Please enter a valid Street",
          value: clientAddress.street
        }, {
          value: ($$value) => {
            clientAddress.street = $$value;
            $$settled = false;
          }
        }, {})}

        <div class="${"billTo_information svelte-1gwlgpj"}"><div class="${"billTo_information-city svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          text: "City",
          id: "clientCity",
          placeholder: "City",
          valid: (0, import_functionStore_c189635e.s)(clientAddress.city),
          invalidMessage: "Please enter a valid City",
          value: clientAddress.city
        }, {
          value: ($$value) => {
            clientAddress.city = $$value;
            $$settled = false;
          }
        }, {})}
                ${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          text: "Postal Code",
          id: "clientPostCode",
          placeholder: "Postal code",
          valid: (0, import_functionStore_c189635e.s)(clientAddress.postCode),
          invalidMessage: "Please enter a valid postal code",
          value: clientAddress.postCode
        }, {
          value: ($$value) => {
            clientAddress.postCode = $$value;
            $$settled = false;
          }
        }, {})}
                <div class="${"billTo_information-country svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          id: "clientCountry",
          text: "Country",
          placeholder: "Country",
          valid: (0, import_functionStore_c189635e.s)(clientAddress.country),
          invalidMessage: "Please enter a valid Country",
          value: clientAddress.country
        }, {
          value: ($$value) => {
            clientAddress.country = $$value;
            $$settled = false;
          }
        }, {})}</div></div></div>

        <div class="${"billTo_invoiceInformation svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          text: "Payment Due",
          id: "paymentDue",
          disabled: true,
          value: (0, import_functionStore_c189635e.c)(new Date(), terms),
          valid: true
        }, {}, {})}
            ${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
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
        ${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
          text: "Project Description",
          id: "description",
          placeholder: "Project Description",
          valid: (0, import_functionStore_c189635e.s)($globalStore.editedInvoice.description),
          invalidMessage: "Please enter a valid Description",
          value: $globalStore.editedInvoice.description
        }, {
          value: ($$value) => {
            $globalStore.editedInvoice.description = $$value;
            $$settled = false;
          }
        }, {})}</div>

    <p class="${"svelte-1gwlgpj"}">Item list</p>
    <div class="${"items svelte-1gwlgpj"}">${(0, import_index_80978f94.d)(items, (item, i) => {
          return `<div class="${"itemList svelte-1gwlgpj"}"><div class="${"nameField svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
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
                <div class="${"attributes svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
            title: true,
            id: "qty" + i,
            form: "number",
            text: "Qty",
            valid: item.quantity > Number(4.9),
            invalidMessage: "Must be greater than 4.9",
            value: item.quantity
          }, {
            value: ($$value) => {
              item.quantity = $$value;
              $$settled = false;
            }
          }, {})}
                    ${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
            title: true,
            step: Number(0.1),
            id: "price" + i,
            form: "number",
            text: "Price",
            valid: item.price > Number(4.9),
            invalidMessage: "Must be greater than 4.9",
            value: item.price
          }, {
            value: ($$value) => {
              item.price = $$value;
              $$settled = false;
            }
          }, {})}
                    ${(0, import_index_80978f94.v)(import_Button_a2d409b1.F, "FormField").$$render($$result, {
            title: true,
            value: "$" + (0, import_functionStore_c189635e.n)(item.quantity * item.price),
            valid: true,
            id: "total" + i,
            disabled: true,
            text: "Total",
            placeholder: "Total"
          }, {}, {})}
                    <button class="${"svelte-1gwlgpj"}"><i class="${"fas fa-trash svelte-1gwlgpj"}"></i>
                </button></div>
            </div>`;
        })}
        ${(0, import_index_80978f94.v)(import_Button_a2d409b1.B, "Button").$$render($$result, {
          rounded: true,
          icon: "plus",
          fluid: true,
          text: "Add Item"
        }, {}, {})}</div>
    <div class="${"btns svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.B, "Button").$$render($$result, {
          type: "danger",
          icon: "trash",
          size: "medium",
          rounded: true,
          text: "Discard"
        }, {}, {})}
        <div class="${"svelte-1gwlgpj"}">${(0, import_index_80978f94.v)(import_Button_a2d409b1.B, "Button").$$render($$result, {
          type: "secondary",
          icon: "save",
          size: "medium",
          disabled: !isValid,
          rounded: true,
          text: "Save as Draft"
        }, {}, {})}
            ${(0, import_index_80978f94.v)(import_Button_a2d409b1.B, "Button").$$render($$result, {
          type: "primary",
          size: "medium",
          icon: "paper-plane",
          disabled: !isValid,
          rounded: true,
          text: "Save and Send"
        }, {}, {})}</div></div></form>`;
      }
    })}</div>


<div class="${"overlay svelte-1gwlgpj"}"></div>



${prompt == "discard" ? `${(0, import_index_80978f94.v)(ModalPrompt, "ModalPrompt").$$render($$result, {
      text: "You want to discard this invoice?"
    }, {}, {})}` : ``}

${prompt === "draft" ? `${(0, import_index_80978f94.v)(ModalPrompt, "ModalPrompt").$$render($$result, {
      text: "You want to Save this invoice as draft?"
    }, {}, {})}` : ``}

${prompt === "pending" ? `${(0, import_index_80978f94.v)(ModalPrompt, "ModalPrompt").$$render($$result, {
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
const _layout = (0, import_index_80978f94.c)(($$result, $$props, $$bindings, slots) => {
  let theme;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_80978f94.a)(import_functionStore_c189635e.g, (value) => $globalStore = value);
  $$result.css.add(css);
  theme = $globalStore.theme;
  $$unsubscribe_globalStore();
  return `${$globalStore.modalStatus === "add" ? `${(0, import_index_80978f94.v)(NewInvoiceModal, "NewInvoiceModal").$$render($$result, {}, {}, {})}` : ``}

${$globalStore.modalStatus === "edit" ? `${(0, import_index_80978f94.v)(EditInvoiceModal, "EditInvoiceModal").$$render($$result, {}, {}, {})}` : ``}
${(0, import_index_80978f94.v)(Navigation, "Navigation").$$render($$result, {}, {}, {})}
<main class="${"bgColor" + (0, import_index_80978f94.e)(theme) + " svelte-17tl8y2"}">${slots.default ? slots.default({}) : ``}</main>`;
});
