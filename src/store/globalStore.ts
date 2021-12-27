import { writable } from 'svelte/store';

export let globalStore = writable({
    theme: "Dark",
    modalStatus: null,
    invoices: [], //all the invoices //
    currentInvoice:<any> [], // the current invoice that is being made, edited or being viewed //
    items: [], // the items that are being added or edited to the current invoice //
})