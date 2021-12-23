<!-- <script lang="ts">
    import FormField from "./FormField.svelte";
    import {globalStore} from '../../store/globalStore';
    // SVELTE IMPORTS //
    import { numberWithCommas } from "../../store/functionStore";
     // PROPS // 

    export let i = 0;
    $: qty = $globalStore.modalStatus = "edit" ? $globalStore.currentInvoice[0].items[i].quantity : 0;
    $: price = $globalStore.modalStatus = "edit" ? $globalStore.currentInvoice[0].items[i].price : 0;
    $: name = $globalStore.modalStatus = "edit" ? $globalStore.currentInvoice[0].items[i].name : "";
    $: total = `$${numberWithCommas((qty * price).toFixed(2))}`;
    export const items = {qty, price, name, total}

  $: console.log(qty, price, name, total, i);
    
     // FUNCTIONS //
     function dispatchInput(e) {
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

 -->
