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
async function getInvoices(){
    let res = await fetch('./data.json');
    let data = await res.json();
    $globalStore.invoices = data;
    // GET LOCALSTORE INVOICES //
    localStorage.getItem("invoices") ? $globalStore.invoices = JSON.parse(localStorage.getItem("invoices")) : null;
}
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
        &_invoice{
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-right: 1rem;
        }
        .settings{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            @include tabletUp{
                place-items: initial;
            }
        }
    }
    .loading{
        height: 100vh;
        max-height: 100%;
    }
    }
   
</style>


<div class="container">
    {#await getInvoices()}
    <div class="loading">
        <Text size="h1" text="Getting invoices, please wait"/>
    </div>
    {:then} 
    <div class="helperBar">
        <div class="helperBar_invoice">
            <Text size="h2" text="Invoices"/>
            <Text size="p" text="{filteredInvoices.length} invoices"/>
        </div>
        <div class="settings">
            <FormField id="filter" form="select" {options} bind:value={filter} text=""/>
            <Button rounded icon="plus" text="Add Invoice" on:click={() => $globalStore.modalStatus = "add"}/>
        </div>
    </div>
    <div class="invoices">
        {#each filteredInvoices as {id, paymentDue, total, clientName, status}, i (i)}
                <Invoice {id} {paymentDue} {total} {clientName} {status} />
        {/each}
        </div>
    {/await}
</div>