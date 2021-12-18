<script lang="ts">
//COMPONENTS //
import Button from '$lib/Button/Button.svelte';
import Invoice from '$lib/Invoice/Invoice.svelte';
import Text from '$lib/Text/Text.svelte';
$: total = 0
$: filter = "All";
// STORES
import { globalStore } from '../store/globalStore';
// FUNCTIONS //
async function getInvoices(){
    let res = await fetch('./json/data.json');
    let data = await res.json();
    total = data.length;
    return data
}
// CONSTANTS //
const options = [
    {id: 0, text: "All", value:"All"},
    {id: 1, text: "Paid", value:"Paid"},
    {id: 2, text: "Pending", value:"Pending"},
    {id: 3, text: "Draft", value:"Draft"},

]
// VARIABLES AND REACTIVE VALUES //

    import "../scss/styles.scss";
import FormField from '$lib/FormField/FormField.svelte';
</script>



<style lang="scss">
    @import "../scss/util/index";
    .container{
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1500px;
        @include laptopUp{
            padding: 0 0 0 5rem;
        }
        @include desktop{
            display: grid;
            grid-template-columns: 1fr;
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
        }
    }
    .helperBar{
        display: grid;
        grid-template-columns: 30% 2fr;
        margin-top: 1rem;
        @include mobileMax{
            grid-template-columns: 1fr 1fr;
        }
        @include tabletUp{
            display: flex;
            justify-content: space-between;
        }
        &_invoice{
            display: flex;
            flex-direction: column;
            justify-content: center;
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
    {:then invoice} 
    <div class="helperBar">
        <div class="helperBar_invoice">
            <Text size="h3" text="Invoices"/>
            <Text size="p" text="{total} invoices"/>
        </div>
        <div class="settings">
            <FormField id="filter" bind:value={filter} form="select" {options}/>
            <Button rounded icon="plus" text="Add Invoice" on:click={() => $globalStore.modalStatus = "Add"}/>
        </div>
    </div>
    <div class="invoices">
        {#each invoice as inv}
            <Invoice {...inv}/>
            {/each}
        </div>
    {/await}
</div>