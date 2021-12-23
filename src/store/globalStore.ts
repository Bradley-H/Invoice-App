import { writable } from 'svelte/store';

export let globalStore = writable({
    theme: "Dark",
    modalStatus: null,
    invoices: [], //all the invoices //
    currentInvoice: [] // the current invoice that is being made, edited or being viewed //
})