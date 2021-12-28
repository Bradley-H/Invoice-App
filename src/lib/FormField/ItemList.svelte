<script lang="ts">
    // COMPONENTS //
    import FormField from "./FormField.svelte";
    // STORES //
    import { globalStore } from "../../store/globalStore";
    import { numberWithCommas } from "../../store/functionStore";
    // PROPS //
    export let index: number = 0;
    // FUNCTIONS //
    function dispatchForm(){
        $globalStore.currentInvoice[0].items[index] = {
            name: $globalStore.currentInvoice[0].items[index].name,
            price: $globalStore.currentInvoice[0].items[index].price,
            quantity: $globalStore.currentInvoice[0].items[index].quantity,
            total: $globalStore.currentInvoice[0].items[index].total
        }
        console.log("itemList", $globalStore.currentInvoice);
    }
    function removeItem(){
        // filter out the item with the same index as the index of the item //
        return $globalStore.currentInvoice[0].items = $globalStore.currentInvoice[0].items.slice().filter((item, i) => i !== index);
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


<div class="itemList" on:submit={dispatchForm}>
    <div class="nameField">
        <FormField title bind:value={$globalStore.currentInvoice[0].items[index].name} id="Name{index}" text="Name" placeholder="Item"  />
    </div>
    <div class="attributes">
        <FormField title bind:value={$globalStore.currentInvoice[0].items[index].quantity} id="qty{index}" form="number" text="Qty" placeholder="Qty"   />
        <FormField title bind:value={$globalStore.currentInvoice[0].items[index].price} step={.1} id="price{index}" form="number" text="Price" placeholder="Price"/>
        <FormField title value="${$globalStore.currentInvoice[0].items[index].total = numberWithCommas($globalStore.currentInvoice[0].items[index].quantity * $globalStore.currentInvoice[0].items[index].price)}"  id="total{index}" disabled text="Total" placeholder="Total"/>
        <button on:click|preventDefault={removeItem}><i class="fas fa-trash" /></button>
    </div>
</div>