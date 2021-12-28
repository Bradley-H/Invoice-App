import { writable } from 'svelte/store';

export let globalStore = writable({
    theme: "Dark",
    modalStatus: null,
    currentInvoice:<any> [], // the current invoice that is being made, edited or being viewed //
})