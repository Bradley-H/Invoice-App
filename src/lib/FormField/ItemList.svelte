<script lang="ts">
    // COMPONENTS //
    import FormField from "./FormField.svelte";
    // SVELTE IMPORTS //
    import { page } from "$app/stores";
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();
     // PROPS //
    export let i: number = 0;

    // VARIABLES //
    let quantity = 0;
    let price = 0.00
    let name = ""
    let total = `$${numberWithCommas((quantity * price).toFixed(2))}`;
    $: if ($globalStore.modalStatus === "edit"){
        getItems();
    }
    // STORES //
    import { globalStore } from "../../store/globalStore";
     // FUNCTIONS //
     import { numberWithCommas } from "../../store/functionStore";
     function dispatchInput() {
       dispatch("getItemData", {quantity, price, name, total})
    }
    async function getItems(){
        let res = await fetch('./json/data.json');
        let data = await res.json();
        let getData = data.find(item => item.id === $page.path.slice(1));
        try {
            quantity = getData.items[i].quantity;
            price = getData.items[i].price;
            name = getData.items[i].name;
            total = `$${numberWithCommas((quantity * price).toFixed(2))}`;
            $globalStore.currentInvoice = getData;
        } catch (error) {
            return
        }
        
    }

    import "../../scss/styles.scss";



</script>

<style lang="scss">
    @import "../../scss/util/index.scss";
    .itemList {
        display: flex;
        margin-bottom: 2rem;
        gap: 10px;
        @include tabletUp {
            display: grid;
            grid-template-columns: 0.7fr 1.5fr;
        }
        .nameField {
            display: grid;
            grid-template-columns: 1fr;
        }
    }

    .attributes {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 10px;
        @include tabletUp {
            grid-template-columns: 0.8fr 0.8fr 1.5fr 1fr;
        }
    }
</style>


<div class="itemList" on:change={dispatchInput}>
    <div class="nameField">
        <FormField title bind:value={name} id="Name{i}" text="Name" placeholder="Item"  />
    </div>
    <div class="attributes">
        <FormField title bind:value={quantity} id="qty{i}" form="number" text="Qty" placeholder="Qty"   />
        <FormField title bind:value={price} id="price{i}" form="number" text="Price" placeholder="Price"/>
        <FormField title bind:value="{total}"  id="total{i}" disabled text="Total" placeholder="Total"/>
        <button on:click|preventDefault><i class="fas fa-trash" /></button>
    </div>
</div>