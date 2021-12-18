import { writable } from 'svelte/store';

export let globalStore = writable({
    theme: "Dark",
    modalStatus: null
})