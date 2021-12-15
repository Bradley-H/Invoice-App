<script lang="ts">
// COMPONENTS //
import Card from '$lib/Card/Card.svelte';
import FormField from '$lib/FormField/FormField.svelte';
import BackButton from '$lib/Button/BackButton.svelte';
import Text from '$lib/Text/Text.svelte';
import ItemList from '../FormField/ItemList.svelte';
import Button from '$lib/Button/Button.svelte';
// STORES //
import { globalStore } from '../../store/globalStore';
// VARIABLES //
$: title = $globalStore.modalStatus === "Add" ? "Add Invoice" : `Edit #${id}`;
$: length = 1;
export let id = "";
export let paymentDue = "";
export let description = "";
export let paymentTerms = "";
export let clientName = "";
export let clientEmail = "";
export let senderStreet = "";
export let senderCity = "";
export let senderPostCode = "";
export let senderCountry = "";
export let clientStreet = "";
export let clientCity = "";
export let clientPostCode = "";
export let clientCountry = "";
export let items = [];

// FUNCTIONS //
function removeModal(){
    $globalStore.modalStatus = null;
}
function submitItemList(e){
    items = [{...e.detail}]
    console.log(items);
}
// SCSS FILES //
import "../../scss/styles.scss";
</script>

<style lang="scss">
@import "../../scss/util/index.scss";

div.overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 1;
}

.billFrom{
    display: flex;
    flex-direction: column;
    margin-top: toRem(35);
}

p{
    color: $colorLight;
    margin: 1rem 0;
    font-weight: bold;
}

.items{
    margin-bottom: 4rem;
}
</style>

{#if $globalStore.modalStatus !== null}
    <Card modal>
        <form>
        <div class="title">
        <Text title size="h2" text={title}/>
        <BackButton on:click={removeModal}/>
        </div>

        <div class="billFrom">
            <p>Bill From</p>    
            <div class="billFrom_information">
                <FormField text="Street Address" id="senderStreet" placeholder="Street Address" bind:value={senderStreet} />
                <FormField text="City" id="senderCity" placeholder="City" bind:value={senderCity} />
                <FormField text="Postal Code" id="senderPostCode" placeholder="Postal code" bind:value={senderPostCode}/>
            </div>
            <FormField id="senderCountry" text="Country" placeholder="Country" bind:value={senderCountry}/>
        </div>
    

    <div class="billTo">
        <p>Bill To</p>
        <FormField text="Client's Name" id="clientName" placeholder="Name" bind:value={clientName}/>
        <FormField text="Client's Email" id="clientEmail" placeholder="Email" bind:value={clientEmail}/>
        <FormField text="Street Address" id="clientStreet" placeholder="Street Address" bind:value={clientStreet}/>

        <div class="billTo_information">
            <FormField text="City" id="clientCity" placeholder="City" bind:value={clientCity}/>
            <FormField text="Postal Code" id="clientPostCode" placeholder="Postal Code" bind:value={clientPostCode}/>
            <FormField text="Country" id="clientCountry" placeholder="Country" bind:value={clientCountry}/>
        </div>

        <div class="billTo_invoiceInformation">
            <FormField text="Invoice Date" id="paymentDue" disabled bind:value={paymentDue}/>
            <FormField text="Payment Terms" id="paymentTerms" placeholder="Payment Terms" bind:value={paymentTerms}/>
        </div>
        <FormField text="Project Description" id="description" placeholder="Project Description" bind:value={description}/>
    </div>

    <p>Item list</p>
    <div class="items">
        {#each {length} as _, i (i)}
            <ItemList index={i} on:inputItemList={submitItemList}/>
        {/each}
        <Button type="primary" fluid text="Add Item" on:click={() => length++}/>
    </div>
    </form>
    </Card>

    <div class="overlay" on:click={removeModal}/>
{/if}