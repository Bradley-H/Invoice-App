<script lang="ts">
        import FormField from "./FormField.svelte";
    // SVELTE IMPORTS //
        import { createEventDispatcher } from "svelte";
        const dispatch = createEventDispatcher();
    // REACTIVE STATEMENTS //
        export let qty = 0;
        export let price = 0;
        export let name = "";
        $: total = +(qty * price).toFixed(2);
    // PROPS //
        export let index = 0;
    // FUNCTIONS //
        function dispatchInput(e) {
            dispatch("inputItemList", {qty, price, name, total});
        }
import "../../scss/styles.scss";
</script>

<style lang="scss">
    @import "../../scss/util/index.scss";
    .itemList {
        margin: toRem(25) 0;
    }

    .attributes {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 9px;
    }
</style>

<div class="itemList" on:change={dispatchInput}>
    <FormField bind:value={name} id="Name{index}" text="Item Name" placeholder="Item"  />
    <div class="attributes">
        <FormField bind:value={qty} id="qty{index}" form="number" text="Qty" placeholder="Qty"   />
        <FormField bind:value={price} id="price{index}" form="number" text="Price" placeholder="Price"   />
        <FormField bind:value={total}  id="total{index}" form="number" disabled text="Total" placeholder="Total" />
        <button><i class="fas fa-trash" /></button>
    </div>
</div>
