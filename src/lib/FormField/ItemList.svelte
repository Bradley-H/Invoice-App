<script lang="ts">
        import FormField from "./FormField.svelte";
    // SVELTE IMPORTS //
        import { createEventDispatcher } from "svelte";
        const dispatch = createEventDispatcher();
    // REACTIVE STATEMENTS //
        let qty = 0;
        let price = 0;
        let name = "";
        $: total = +(qty * price).toFixed(2);
    // PROPS //
        export let index = 0;
    // FUNCTIONS //
        function dispatchInput(e) {
            dispatch("inputItemList", {qty, price, name, total});
        }
        function numField(e) {
            if (e.key <= 9 || e.key === "Backspace" || e.key === "Tab") {
                dispatchInput(e);
            } else {
                e.preventDefault();
            }
        }
</script>

<style lang="scss">
    .itemList {
        margin: 2rem 0 3rem 0;
    }

    .attributes {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 9px;
    }
</style>

<div class="itemList">
    <FormField on:keypress={dispatchInput} id="Name{index}" text="Item Name" placeholder="Item" bind:value={name} />
    <div class="attributes">
        <FormField on:keypress={numField} id="qty{index}" form="number" text="Qty" placeholder="Qty"  bind:value={qty} />
        <FormField on:keypress={numField} id="price{index}" form="number" text="Price" placeholder="Price"  bind:value={price} />
        <FormField on:keypress={numField} id="total{index}" form="number" disabled text="Total" placeholder="Total" bind:value={total}/>
        <button><i class="fas fa-trash" /></button>
    </div>
</div>
