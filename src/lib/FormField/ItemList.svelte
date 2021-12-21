<script lang="ts">
        import FormField from "./FormField.svelte";
    // SVELTE IMPORTS //
        import { createEventDispatcher } from "svelte";
        import {numberWithCommas} from '../../store/functionStore'
        const dispatch = createEventDispatcher();
        // FUNCTIONS //
        function dispatchInput(e) {
            dispatch("inputItemList", {qty, price, name, total} );
        }
    // REACTIVE STATEMENTS //
        export let qty = 0;
        export let price = 0.00
        export let name = "";
        $: total =`$${numberWithCommas((qty * price).toFixed(2))}`;


        $: console.log(qty);
        
    // PROPS //
        export let index = 0;
import "../../scss/styles.scss";

</script>

<style lang="scss">
    @import "../../scss/util/index.scss";
    .itemList {
        display: flex;
        margin-bottom: 2rem;
        gap: 10px;
        @include tabletUp{
            display: grid;
            grid-template-columns: .7fr 1.5fr;
        }
        .nameField{
            display: grid;
            grid-template-columns: 1fr;
        }
    }

    .attributes {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 10px;
        @include tabletUp{
            grid-template-columns: .8fr .8fr 1.5fr 1fr;
        }
    }
</style>

<div class="itemList" on:change={dispatchInput}>
    <div class="nameField">
        <FormField title bind:value={name} id="Name{index}" form="number" text="Name" placeholder="Item"  />
    </div>
    <div class="attributes">
        <FormField title bind:value={qty} id="qty{index}" text="Qty" placeholder="Qty"   />
        <FormField title bind:value={price} id="price{index}" form="number" text="Price" placeholder="Price"   />
        <FormField title bind:value="{total}"  id="total{index}" disabled text="Total" placeholder="Total" />
        <button on:click|preventDefault><i class="fas fa-trash" /></button>
    </div>
</div>
