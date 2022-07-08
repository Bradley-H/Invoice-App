var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  file: () => file,
  imports: () => imports,
  index: () => index,
  module: () => module2,
  stylesheets: () => stylesheets
});
module.exports = __toCommonJS(stdin_exports);
var module2 = __toESM(require("../entries/pages/index.svelte.js"));
const index = 3;
const file = "pages/index.svelte-a8fe6e4e.js";
const imports = ["pages/index.svelte-a8fe6e4e.js", "chunks/index-c31d24eb.js", "chunks/functionStore-77b9cad8.js", "chunks/index-c0292bc6.js", "chunks/Tag-ea31a010.js", "chunks/InvoiceOptions-29f4fe2c.js"];
const stylesheets = ["assets/pages/index.svelte-e197cffe.css", "assets/functionStore-27d95290.css", "assets/Tag-efb70688.css", "assets/InvoiceOptions-b071cc79.css"];
