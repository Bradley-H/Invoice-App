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
var import_index_905b6237 = __toModule(require("../../chunks/index-905b6237.js"));
var import_Button_svelte_svelte_type_style_lang_13fe77f7 = __toModule(require("../../chunks/Button.svelte_svelte_type_style_lang-13fe77f7.js"));
var import_Button_e9b3d195 = __toModule(require("../../chunks/Button-e9b3d195.js"));
var import_BackButton_ea71b0cc = __toModule(require("../../chunks/BackButton-ea71b0cc.js"));
var import_uid = __toModule(require("uid"));
var Navigation_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "nav.svelte-cy09dy.svelte-cy09dy{display:flex;height:4.375rem;width:100%;background-color:#1e2139;z-index:3}@media(min-width: 992px){nav.svelte-cy09dy.svelte-cy09dy{flex-direction:column;height:100%;width:4.6875rem;position:fixed;left:0;top:0}}nav.svelte-cy09dy .settings.svelte-cy09dy{display:flex;justify-content:center;align-items:center;flex-direction:row;color:white;height:100%;font-size:1.75rem;margin:0 0 0 auto}@media(min-width: 992px){nav.svelte-cy09dy .settings.svelte-cy09dy{flex-direction:column;width:4.6875rem;height:100%;margin:auto 0 0 0}}nav.svelte-cy09dy .settings i.svelte-cy09dy{cursor:pointer;display:flex;justify-content:center;align-items:center;height:100%;width:100%}nav.svelte-cy09dy .settings .themeSwitcher.svelte-cy09dy{border-right:2px solid rgba(128, 128, 128, 0.6);height:100%;padding:0 1.5625rem 0 1.5625rem}@media(min-width: 992px){nav.svelte-cy09dy .settings .themeSwitcher.svelte-cy09dy{border-bottom:2px solid rgba(128, 128, 128, 0.6);border-right:none;width:4.6875rem;padding:0 0 2.0625rem 0;margin-top:auto;height:0}}nav.svelte-cy09dy .settings .avatar.svelte-cy09dy{padding:0 1.5625rem}@media(min-width: 992px){nav.svelte-cy09dy .settings .avatar.svelte-cy09dy{padding:1.25rem 0 0.9375rem 0}}a.svelte-cy09dy.svelte-cy09dy{display:flex;justify-content:center;align-items:center;background-color:#7C5DFAFF;color:white;width:4.6875rem;height:4.375rem;font-size:1.5625rem;border-radius:0 12px 12px 0;transition:transform 0.7s ease-in-out}a.svelte-cy09dy.svelte-cy09dy:hover{transform:scale(1.1)}",
  map: null
};
const Navigation = (0, import_index_905b6237.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_905b6237.a)(import_Button_svelte_svelte_type_style_lang_13fe77f7.g, (value) => value);
  let icon = "moon";
  $$result.css.add(css$3);
  $$unsubscribe_globalStore();
  return `<nav class="${"svelte-cy09dy"}"><a href="${"/"}" class="${"svelte-cy09dy"}"><i class="${"fas fa-home svelte-cy09dy"}"></i></a>
    <div class="${"settings svelte-cy09dy"}"><div class="${"themeSwitcher svelte-cy09dy"}"><i class="${"fas fa-" + (0, import_index_905b6237.e)(icon) + " svelte-cy09dy"}"></i></div>
        <div class="${"avatar svelte-cy09dy"}"><i class="${"fas fa-user-circle svelte-cy09dy"}"></i></div></div></nav>`;
});
var ItemList_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".itemList.svelte-5o02vr.svelte-5o02vr{display:flex;margin-bottom:2rem;gap:10px}@media(min-width: 768px){.itemList.svelte-5o02vr.svelte-5o02vr{display:grid;grid-template-columns:0.7fr 1.5fr}}.itemList.svelte-5o02vr .nameField.svelte-5o02vr{display:grid;grid-template-columns:1fr}.attributes.svelte-5o02vr.svelte-5o02vr{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px}@media(min-width: 768px){.attributes.svelte-5o02vr.svelte-5o02vr{grid-template-columns:0.8fr 0.8fr 1.5fr 1fr}}i.svelte-5o02vr.svelte-5o02vr{color:red;font-size:1.1rem;transform:translateY(0.2rem)}",
  map: null
};
const ItemList = (0, import_index_905b6237.c)(($$result, $$props, $$bindings, slots) => {
  let nameValid;
  let quantityValid;
  let priceValid;
  (0, import_index_905b6237.b)();
  let { index = 0 } = $$props;
  let { item = {
    name: "",
    quantity: 0,
    price: 0,
    total: 0
  } } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    nameValid = (0, import_Button_svelte_svelte_type_style_lang_13fe77f7.s)(item.name);
    quantityValid = (0, import_Button_svelte_svelte_type_style_lang_13fe77f7.n)(item.quantity);
    priceValid = (0, import_Button_svelte_svelte_type_style_lang_13fe77f7.n)(item.price);
    $$rendered = `<div class="${"itemList svelte-5o02vr"}"><div class="${"nameField svelte-5o02vr"}">${(0, import_index_905b6237.v)(import_Button_e9b3d195.F, "FormField").$$render($$result, {
      title: true,
      id: "Name" + index,
      text: "Name",
      placeholder: "Item",
      valid: nameValid,
      invalidMessage: "Must be greater than 5 characters",
      value: item.name
    }, {
      value: ($$value) => {
        item.name = $$value;
        $$settled = false;
      }
    }, {})}</div>
    <div class="${"attributes svelte-5o02vr"}">${(0, import_index_905b6237.v)(import_Button_e9b3d195.F, "FormField").$$render($$result, {
      title: true,
      id: "qty" + index,
      form: "number",
      text: "Qty",
      placeholder: "Qty",
      valid: quantityValid,
      invalidMessage: "Must be greater than 0",
      value: item.quantity
    }, {
      value: ($$value) => {
        item.quantity = $$value;
        $$settled = false;
      }
    }, {})}
        ${(0, import_index_905b6237.v)(import_Button_e9b3d195.F, "FormField").$$render($$result, {
      title: true,
      step: 0.1,
      id: "price" + index,
      form: "number",
      text: "Price",
      placeholder: "Price",
      valid: priceValid,
      invalidMessage: "Must be greater than 0",
      value: item.price
    }, {
      value: ($$value) => {
        item.price = $$value;
        $$settled = false;
      }
    }, {})}
        ${(0, import_index_905b6237.v)(import_Button_e9b3d195.F, "FormField").$$render($$result, {
      title: true,
      value: "$" + (0, import_Button_svelte_svelte_type_style_lang_13fe77f7.a)(item.quantity * item.price),
      valid: true,
      id: "total" + index,
      disabled: true,
      text: "Total",
      placeholder: "Total"
    }, {}, {})}
        <button><i class="${"fas fa-trash svelte-5o02vr"}"></i></button></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
var InvoiceModal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btns.svelte-inxhcl div.svelte-inxhcl,.btns.svelte-inxhcl.svelte-inxhcl{display:flex}form.svelte-inxhcl .billFrom.svelte-inxhcl{display:flex;flex-direction:column}form.svelte-inxhcl .billTo_information.svelte-inxhcl,form.svelte-inxhcl .billFrom_information.svelte-inxhcl{display:grid}form.svelte-inxhcl .billTo_information-city.svelte-inxhcl,form.svelte-inxhcl .billFrom_information-city.svelte-inxhcl{display:grid;grid-template-columns:repeat(2, 1fr);gap:10px}form.svelte-inxhcl p.svelte-inxhcl{color:#7C5DFAFF;margin:1rem 0;font-weight:bold}form.svelte-inxhcl .items.svelte-inxhcl{margin-bottom:5rem}form.svelte-inxhcl .title.svelte-inxhcl{margin-bottom:2.1875rem}form.svelte-inxhcl .billFrom.svelte-inxhcl{margin-top:2.1875rem}@media(min-width: 768px){form.svelte-inxhcl .billFrom_information-city.svelte-inxhcl{grid-template-columns:1fr 1fr 1fr}}form.svelte-inxhcl .billFrom_information-country.svelte-inxhcl{grid-column:span 2/span 2}@media(min-width: 768px){form.svelte-inxhcl .billFrom_information-country.svelte-inxhcl{grid-column:unset}}form.svelte-inxhcl .billTo.svelte-inxhcl{display:grid;grid-template-columns:1fr;gap:15px}@media(min-width: 768px){form.svelte-inxhcl .billTo_invoiceInformation.svelte-inxhcl{display:grid;grid-template-columns:1fr 1fr;gap:10px}}form.svelte-inxhcl .billTo_information-city.svelte-inxhcl{margin:1rem 0}@media(min-width: 768px){form.svelte-inxhcl .billTo_information-city.svelte-inxhcl{grid-template-columns:1fr 1fr 1fr}}form.svelte-inxhcl .billTo_information-country.svelte-inxhcl{grid-column:span 2/span 2}@media(min-width: 768px){form.svelte-inxhcl .billTo_information-country.svelte-inxhcl{grid-column:unset}}.modal.svelte-inxhcl.svelte-inxhcl{width:100%;height:100%;z-index:2;position:fixed;margin:2rem 0 0 0;max-width:37.5rem;margin:4.375rem 0 0 0}@media(min-width: 768px) and (max-width: 991px){.modal.svelte-inxhcl.svelte-inxhcl{max-width:700px}}@media(min-width: 992px){.modal.svelte-inxhcl.svelte-inxhcl{max-width:575px;margin:0 0 0 4.6875rem}}div.overlay.svelte-inxhcl.svelte-inxhcl{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:1}.btns.svelte-inxhcl.svelte-inxhcl{justify-content:center;max-width:37.5rem;transform:translateY(-2.5rem);position:sticky;margin:2rem 0}@media(min-width: 520px){.btns.svelte-inxhcl.svelte-inxhcl{justify-content:space-between}}@media(min-width: 992px){.btns.svelte-inxhcl.svelte-inxhcl{margin:0}}.btns.svelte-inxhcl div.svelte-inxhcl{gap:10px;margin-left:0.5rem}@media(min-width: 992px){.btns.svelte-inxhcl.svelte-inxhcl{transform:translateY(-1rem)}}",
  map: null
};
function validator(value) {
  if (value.length >= 5) {
    return true;
  }
  if (value < 1 || value.length < 1 || value === "" || value === null) {
    return false;
  }
}
const InvoiceModal = (0, import_index_905b6237.c)(($$result, $$props, $$bindings, slots) => {
  let title;
  let newInvoice;
  let isEmpty;
  let valid;
  let senderAddress;
  let clientAddress;
  let items;
  let clientName;
  let clientEmail;
  let paymentDue;
  let paymentTerms;
  let description;
  let total;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_905b6237.a)(import_Button_svelte_svelte_type_style_lang_13fe77f7.g, (value) => $globalStore = value);
  const options = [{ id: 0, text: "30 Days", value: 30 }, { id: 1, text: "60 Days", value: 60 }];
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    title = $globalStore.modalStatus === "add" ? "Add Invoice" : `Editing #`;
    newInvoice = {
      id: "",
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
      paymentDue: "",
      status: "",
      paymentTerms: 30,
      description: "",
      total: 0
    };
    isEmpty = {
      clientAddress: {
        city: validator(newInvoice.clientAddress.city),
        country: validator(newInvoice.clientAddress.country),
        postCode: validator(newInvoice.clientAddress.postCode),
        street: validator(newInvoice.clientAddress.street)
      },
      senderAddress: {
        city: validator(newInvoice.senderAddress.city),
        country: validator(newInvoice.senderAddress.country),
        postCode: validator(newInvoice.senderAddress.postCode),
        street: validator(newInvoice.senderAddress.street)
      },
      clientEmail: validator(newInvoice.clientEmail),
      clientName: validator(newInvoice.clientName),
      description: validator(newInvoice.description),
      items: newInvoice.items.map((item) => {
        return {
          name: (0, import_Button_svelte_svelte_type_style_lang_13fe77f7.s)(item.name),
          quantity: (0, import_Button_svelte_svelte_type_style_lang_13fe77f7.n)(item.quantity),
          price: (0, import_Button_svelte_svelte_type_style_lang_13fe77f7.n)(item.price),
          total: true
        };
      })
    };
    {
      if (isEmpty.clientAddress.city && isEmpty.clientAddress.country && isEmpty.clientAddress.postCode && isEmpty.clientAddress.street && isEmpty.clientEmail && isEmpty.clientName && isEmpty.description && isEmpty.items) {
        valid = true;
      } else {
        valid = false;
      }
    }
    valid = false;
    ({ senderAddress, clientAddress, items, clientName, clientEmail, paymentDue, paymentTerms, description, total } = newInvoice);
    $$rendered = `${$globalStore.modalStatus !== null ? `<div class="${"modal svelte-inxhcl"}">${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.C, "Card").$$render($$result, { modal: true }, {}, {
      default: () => `<form class="${"svelte-inxhcl"}"><div class="${"title svelte-inxhcl"}">${(0, import_index_905b6237.v)(import_Button_svelte_svelte_type_style_lang_13fe77f7.T, "Text").$$render($$result, { title: true, size: "h2", text: title }, {}, {})}
        ${(0, import_index_905b6237.v)(import_BackButton_ea71b0cc.B, "BackButton").$$render($$result, {}, {}, {})}</div>

        <div class="${"billFrom svelte-inxhcl"}"><p class="${"svelte-inxhcl"}">Bill From</p>    
            <div class="${"billFrom_information svelte-inxhcl"}">${(0, import_index_905b6237.v)(import_Button_e9b3d195.F, "FormField").$$render($$result, {
        title: true,
        text: "Street Address",
        id: "senderStreet",
        placeholder: "Street Address",
        invalidMessage: "Please enter a valid street address",
        valid: isEmpty.senderAddress.street,
        value: senderAddress.street
      }, {
        value: ($$value) => {
          senderAddress.street = $$value;
          $$settled = false;
        }
      }, {})}

                <div class="${"billFrom_information-city svelte-inxhcl"}">${(0, import_index_905b6237.v)(import_Button_e9b3d195.F, "FormField").$$render($$result, {
        title: true,
        text: "City",
        id: "senderCity",
        placeholder: "City",
        valid: isEmpty.senderAddress.city,
        value: senderAddress.city
      }, {
        value: ($$value) => {
          senderAddress.city = $$value;
          $$settled = false;
        }
      }, {})}
                    ${(0, import_index_905b6237.v)(import_Button_e9b3d195.F, "FormField").$$render($$result, {
        title: true,
        text: "Postal Code",
        id: "senderPostCode",
        placeholder: "Postal code",
        valid: isEmpty.senderAddress.postCode,
        value: senderAddress.postCode
      }, {
        value: ($$value) => {
          senderAddress.postCode = $$value;
          $$settled = false;
        }
      }, {})}
                    <div class="${"billFrom_information-country svelte-inxhcl"}">${(0, import_index_905b6237.v)(import_Button_e9b3d195.F, "FormField").$$render($$result, {
        title: true,
        id: "senderCountry",
        text: "Country",
        placeholder: "Country",
        valid: isEmpty.senderAddress.country,
        value: senderAddress.country
      }, {
        value: ($$value) => {
          senderAddress.country = $$value;
          $$settled = false;
        }
      }, {})}</div></div></div></div>
    

    <div class="${"billTo svelte-inxhcl"}"><p class="${"svelte-inxhcl"}">Bill To</p>
        ${(0, import_index_905b6237.v)(import_Button_e9b3d195.F, "FormField").$$render($$result, {
        text: "Client's Name",
        id: "clientName",
        placeholder: "Name",
        valid: isEmpty.clientName,
        value: newInvoice.clientName
      }, {
        value: ($$value) => {
          newInvoice.clientName = $$value;
          $$settled = false;
        }
      }, {})}
        ${(0, import_index_905b6237.v)(import_Button_e9b3d195.F, "FormField").$$render($$result, {
        text: "Client's Email",
        id: "clientEmail",
        placeholder: "Email",
        valid: isEmpty.clientEmail,
        value: newInvoice.clientEmail
      }, {
        value: ($$value) => {
          newInvoice.clientEmail = $$value;
          $$settled = false;
        }
      }, {})}
        ${(0, import_index_905b6237.v)(import_Button_e9b3d195.F, "FormField").$$render($$result, {
        text: "Street Address",
        id: "clientStreet",
        placeholder: "Street Address",
        valid: isEmpty.clientAddress.street,
        value: clientAddress.street
      }, {
        value: ($$value) => {
          clientAddress.street = $$value;
          $$settled = false;
        }
      }, {})}

        <div class="${"billTo_information svelte-inxhcl"}"><div class="${"billTo_information-city svelte-inxhcl"}">${(0, import_index_905b6237.v)(import_Button_e9b3d195.F, "FormField").$$render($$result, {
        text: "City",
        id: "clientCity",
        placeholder: "City",
        valid: isEmpty.clientAddress.city,
        value: clientAddress.city
      }, {
        value: ($$value) => {
          clientAddress.city = $$value;
          $$settled = false;
        }
      }, {})}
                ${(0, import_index_905b6237.v)(import_Button_e9b3d195.F, "FormField").$$render($$result, {
        text: "Postal Code",
        id: "clientPostCode",
        placeholder: "Postal code",
        valid: isEmpty.clientAddress.postCode,
        value: clientAddress.postCode
      }, {
        value: ($$value) => {
          clientAddress.postCode = $$value;
          $$settled = false;
        }
      }, {})}
                <div class="${"billTo_information-country svelte-inxhcl"}">${(0, import_index_905b6237.v)(import_Button_e9b3d195.F, "FormField").$$render($$result, {
        id: "clientCountry",
        text: "Country",
        placeholder: "Country",
        valid: isEmpty.clientAddress.country,
        value: clientAddress.country
      }, {
        value: ($$value) => {
          clientAddress.country = $$value;
          $$settled = false;
        }
      }, {})}</div></div></div>

        <div class="${"billTo_invoiceInformation svelte-inxhcl"}">${(0, import_index_905b6237.v)(import_Button_e9b3d195.F, "FormField").$$render($$result, {
        text: "Invoice Date",
        id: "paymentDue",
        disabled: true,
        valid: true,
        value: newInvoice.paymentDue
      }, {
        value: ($$value) => {
          newInvoice.paymentDue = $$value;
          $$settled = false;
        }
      }, {})}
            ${(0, import_index_905b6237.v)(import_Button_e9b3d195.F, "FormField").$$render($$result, {
        form: "select",
        text: "Payment Terms",
        options,
        id: "paymentTerms",
        placeholder: "Payment Terms",
        value: newInvoice.paymentTerms
      }, {
        value: ($$value) => {
          newInvoice.paymentTerms = $$value;
          $$settled = false;
        }
      }, {})}</div>
        ${(0, import_index_905b6237.v)(import_Button_e9b3d195.F, "FormField").$$render($$result, {
        text: "Project Description",
        id: "description",
        placeholder: "Project Description",
        valid: isEmpty.description,
        value: newInvoice.description
      }, {
        value: ($$value) => {
          newInvoice.description = $$value;
          $$settled = false;
        }
      }, {})}</div>

    <p class="${"svelte-inxhcl"}">Item list</p>
    <div class="${"items svelte-inxhcl"}">${(0, import_index_905b6237.d)(items, (item, i) => `${(0, import_index_905b6237.v)(ItemList, "ItemList").$$render($$result, { index: i, item }, {}, {})}`)}
        ${(0, import_index_905b6237.v)(import_Button_e9b3d195.B, "Button").$$render($$result, {
        rounded: true,
        icon: "plus",
        fluid: true,
        text: "Add Item"
      }, {}, {})}</div>
    <div class="${"btns svelte-inxhcl"}">${(0, import_index_905b6237.v)(import_Button_e9b3d195.B, "Button").$$render($$result, {
        type: "danger",
        icon: "trash",
        size: "medium",
        rounded: true,
        text: "Discard"
      }, {}, {})}
        <div class="${"svelte-inxhcl"}">${(0, import_index_905b6237.v)(import_Button_e9b3d195.B, "Button").$$render($$result, {
        type: "secondary",
        icon: "save",
        size: "medium",
        disabled: !valid,
        rounded: true,
        text: "Save as Draft"
      }, {}, {})}
            ${(0, import_index_905b6237.v)(import_Button_e9b3d195.B, "Button").$$render($$result, {
        type: "primary",
        size: "medium",
        icon: "paper-plane",
        disabled: !valid,
        rounded: true,
        text: "Save and Send"
      }, {}, {})}</div></div></form>`
    })}</div>


<div class="${"overlay svelte-inxhcl"}"></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_globalStore();
  return $$rendered;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1q82shh{display:flex;align-items:center;flex-direction:column;height:100vh;width:100%;padding:2rem 1.5rem;overflow:auto}@media(min-width: 992px){main.svelte-1q82shh{padding:1rem 2rem 2rem 6.5rem}}",
  map: null
};
const _layout = (0, import_index_905b6237.c)(($$result, $$props, $$bindings, slots) => {
  let theme;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = (0, import_index_905b6237.a)(import_Button_svelte_svelte_type_style_lang_13fe77f7.g, (value) => $globalStore = value);
  $$result.css.add(css);
  theme = $globalStore.theme;
  $$unsubscribe_globalStore();
  return `${(0, import_index_905b6237.v)(Navigation, "Navigation").$$render($$result, {}, {}, {})}
${(0, import_index_905b6237.v)(InvoiceModal, "InvoiceModal").$$render($$result, {}, {}, {})}
<main class="${"bgColor" + (0, import_index_905b6237.e)(theme) + " svelte-1q82shh"}">${slots.default ? slots.default({}) : ``}</main>`;
});
