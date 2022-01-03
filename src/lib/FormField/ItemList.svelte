<script lang="ts">
    // COMPONENTS //
    import FormField from "./FormField.svelte";
    // SVELTE IMPORTS //
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();
    // STORES //
    import { numberWithCommas } from "../../store/functionStore";
    // PROPS //
    export let index = 0;
    export let item = {
        name: "",
        quantity: 0,
        price: 0,
        total: 0
    }
    $:nameValid = strValid(item.name)
    $:quantityValid = numValid(item.quantity)
    $:priceValid = numValid(item.price)
    // FUNCTIONS //
    import {strValid, numValid} from "../../store/functionStore";
    function dispatchValues(){
        dispatch('update-item', {
            nameValid,
            quantityValid,
            priceValid,
        });
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
        i{
        color: red;
        font-size: 1.1rem;
        transform: translateY(.2rem);
    }
   
</style>


<div class="itemList" on:change={dispatchValues}>
    <div class="nameField">
        <FormField title bind:value={item.name} id="Name{index}" text="Name" placeholder="Item" valid={nameValid}  invalidMessage={"Must be greater than 5 characters"}/>
    </div>
    <div class="attributes">
        <FormField title bind:value={item.quantity} id="qty{index}" form="number" text="Qty" placeholder="Qty" valid={quantityValid} invalidMessage={"Must be greater than 0"}/>
        <FormField title bind:value={item.price} step={.1} id="price{index}" form="number" text="Price" placeholder="Price" valid={priceValid} invalidMessage={"Must be greater than 0"}/>
        <FormField title value="${numberWithCommas(item.quantity * item.price)}" valid={true}  id="total{index}" disabled text="Total"  placeholder="Total"/>
        <button on:click|preventDefault><i class="fas fa-trash" on:click/>
    </div>
</div>