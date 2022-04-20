<script lang="ts">
//COMPONENTS //
import Button from '$lib/Button/Button.svelte';
import Invoice from '$lib/Invoice/Invoice.svelte';
import Text from '$lib/Text/Text.svelte';
import FormField from '$lib/FormField/FormField.svelte';
// CONSTANTS //
const options = [
    {id: 0, text: "All", value:"all"},
    {id: 1, text: "Paid", value:"paid"},
    {id: 2, text: "Pending", value:"pending"},
    {id: 3, text: "Draft", value:"draft"},
]
// STORES //
import { globalStore } from '../store/globalStore';
// VARIABLES AND REACTIVE VALUES //
$: filter = "all";
$: filteredInvoices = $globalStore.invoices.filter(invoice => invoice.status === filter || filter === "all");
// FUNCTIONS //
import {getInvoicesIndex} from '../store/functionStore';
// SASS FILES //
    import "../scss/styles.scss";
</script>

<style lang="scss">
    @import "../scss/util/index";
    .container{
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: $containerWidth;
        @include desktop{
            display: grid;
            grid-template-columns: 1fr;
            max-width: $containerWidthDesktop;
        }
        div.invoices{
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: $containerWidth;
        margin-top: 1.5rem;
        @include laptop{
            display: grid;
            place-items: center;
        }
        @include desktop{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 7px;
            justify-self: center;
            max-width: $containerWidthDesktop;
        }
    }
    .helperBar{
        display: flex;
        justify-content: space-between;
        margin-top: toRem(20);
        &_invoice{
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-right: 1rem;
            gap: toRem(5);
        }
        .settings{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            @include tabletUp{
                place-items: initial;
                gap: 30px;
            }
        }
    }
    .loading{
        @include centered;
        height: 80vh;
    }
    }


    .noInvoices{
            @include centered;
            flex-direction: column;
            min-height: 50vh;
            div{
                text-align: center;
                margin-top: 1rem;
            }
        }
</style>


<div class="container">
    {#await getInvoicesIndex()}
    <div class="loading">
        <Text size="h3" text="Getting invoices, please wait"/>
    </div>
    {:then} 
    <div class="helperBar">
        <div class="helperBar_invoice">
            <Text size="h2" text="Invoices"/>
            <Text size="p" text="{filteredInvoices.length} invoices"/>
        </div>
        <div class="settings">
            <FormField id="filter" form="select" {options} bind:value={filter}/>
            <Button rounded icon="plus" text="Add Invoice" on:click={() => $globalStore.modalStatus = "add"}/>
        </div>
    </div>
    {#if $globalStore.invoices.length > 0}
    <div class="invoices">
    {#each filteredInvoices as {id, paymentDue, total, clientName, status}, i (i)}
                <Invoice {id} {paymentDue} {total} {clientName} {status} />
        {/each}
        </div>
        {:else}
        <div class="noInvoices">
            <img src="./noinvoice.svg" alt="No invoice">
            <div>
                <Text title size="h2" text="No Invoices"/>
                <Text title size="p" text="To Create an Invoice"/>
                <Text title size="p" text="Click 'Add invoice' at the top"/>
            </div>
        </div>
        {/if}
    {/await}
</div>