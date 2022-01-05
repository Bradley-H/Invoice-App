<!-- <script lang="ts">
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
        quantity: +0.00,
        price: +0,
        total: +0    
    }
    // FUNCTIONS //
    function dispatchValues(){
        item.total = item.price * item.quantity;
        dispatch('update-item', {item});
        typeof(item.quantity) == "number"
        console.log(item); 
    }
    import "../../scss/styles.scss";

</script>

<style lang="scss">
    @import "../../scss/util/index.scss";
    .itemList {
        display: grid;
        margin-bottom: 2rem;
        gap: 10px;
        @include mobileMaxUp {
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
            grid-template-columns: 1fr 1fr 1.5fr .3fr;
        }
    }
        i{
        color: red;
        font-size: 1.1rem;
    }

    button{
        height: 5.5rem;
    }
    -->
<!-- </style> -->



MIGHT COME BACK TO THIS LATER


<!-- 
<div class="itemList" on:change={dispatchValues}>
    <div class="nameField">
        <FormField title bind:value={item.name} id="Name{index}" text="Name" placeholder="Item" valid={item.name !== ""}  invalidMessage={"Must be greater than 5 characters"}/>
    </div>
    <div class="attributes">
        <FormField title bind:value={item.quantity} id="qty{index}" form="number" text="Qty" valid={item.quantity >= 1} invalidMessage={"Must be greater than 0"}/>
        <FormField title bind:value={item.price} step={.1} id="price{index}" form="number" text="Price"  valid={item.price >= 1} invalidMessage={"Must be greater than 0"}/>
        <FormField title value="${numberWithCommas(item.quantity * item.price)}" valid={true}  id="total{index}" disabled text="Total"  placeholder="Total"/>
        <button on:click|preventDefault><i class="fas fa-trash" on:click/>
    </div>
</div> -->



MIGHT COME BACK TO THIS LATER