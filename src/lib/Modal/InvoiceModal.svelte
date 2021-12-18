<script lang="ts">
    // COMPONENTS //
    import Card from "$lib/Card/Card.svelte";
    import FormField from "$lib/FormField/FormField.svelte";
    import BackButton from "$lib/Button/BackButton.svelte";
    import Text from "$lib/Text/Text.svelte";
    import ItemList from "../FormField/ItemList.svelte";
    import Button from "$lib/Button/Button.svelte";
    // STORES //
    import { globalStore } from "../../store/globalStore";
    // CONSTANTS //
    const options = [
        { id: 0, text: "30 Days", value: 30 },
        { id: 1, text: "60 Days", value: 60 },
    ];
    // VARIABLES //
    $: title =
        $globalStore.modalStatus === "Add" ? "Add Invoice" : `Edit #${id}`;
    $: length = 1;
    // PROPS //
    export let id = "";
    export let paymentDue = "";
    export let description = "";
    export let paymentTerms = 30;
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
    // SVELTE IMPORTS //
    import { fade, fly } from "svelte/transition";
    // FUNCTIONS //
    function removeModal() {
        $globalStore.modalStatus = null;
    }
    function submitItemList(e) {
        items = [{ ...e.detail }];
    }
    // SCSS FILES //
    import "../../scss/styles.scss";
</script>

<style lang="scss">
    @import "../../scss/util/index.scss";

    form {
        p {
            color: $colorLight;
            margin: 1rem 0;
            font-weight: bold;
        }
        .items {
        margin-bottom: 5rem;
        }
        .title {
        margin-top: toRem(40);
        margin-bottom: toRem(35);
        }
        .billFrom {
            @extend %flexCol;
            margin-top: toRem(35);
            &_information {
                @extend %grid;
                &-city {
                    @extend %grid2;
                }
                &-country {
                    grid-column: span 2 / span 2;
                }
            }
        }
        .billTo {
            margin-bottom: 2.5rem;
            &_information {
                @extend %grid;
                &-city {
                    @extend %grid2;
                }
                &-country {
                    grid-column: span 2 / span 2;
                }
            }
        }
    }

    

    .modal {
        width: 100%;
        height: 100%;
        z-index: 2;
        position: fixed;
        margin: 2rem 0 0 0;
        @include tablet {
            max-width: $invoiceModalWidthMobile;
            margin: $navHeight 0 0 0;
        }
        @include laptopUp {
            max-width: $invoiceModalWidthLaptop;
            margin: 0 $navWidth 0 0;
        }
    }

    div.overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }

    .btns{
        @extend %grid3;
        gap: 10px;
        position: sticky;
        left: 0;
        background-color: lighten($bgColorDark, 10%);
        width: 100%;
        max-width: $invoiceModalWidthMobile;
        height: 5rem;
        padding: 1rem .8rem;
        transform: translateY(-3rem);
    }
</style>



{#if $globalStore.modalStatus !== null}
<div class="modal" transition:fly={{duration: 888, x:-555}}>
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
                <div class="billFrom_information-city">
                    <FormField text="City" id="senderCity" placeholder="City" bind:value={senderCity} />
                    <FormField text="Postal Code" id="senderPostCode" placeholder="Postal code" bind:value={senderPostCode}/>
                    <div class="billFrom_information-country">
                        <FormField id="senderCountry" text="Country" placeholder="Country" bind:value={senderCountry}/>
                    </div>
                </div>
            </div>
          
        </div>
    

    <div class="billTo">
        <p>Bill To</p>
        <FormField text="Client's Name" id="clientName" placeholder="Name" bind:value={clientName}/>
        <FormField text="Client's Email" id="clientEmail" placeholder="Email" bind:value={clientEmail}/>
        <FormField text="Street Address" id="clientStreet" placeholder="Street Address" bind:value={clientStreet}/>

        <div class="billTo_information">
            <div class="billTo_information-city">
                <FormField text="City" id="clientCity" placeholder="City" bind:value={clientCity}/>
                <FormField text="Postal Code" id="clientPostCode" placeholder="Postal Code" bind:value={clientPostCode}/>
            </div>
            <div class="billTo_information-country">
                <FormField text="Country" id="clientCountry" placeholder="Country" bind:value={clientCountry}/>
            </div>
        </div>

        <div class="billTo_invoiceInformation">
            <FormField text="Invoice Date" id="paymentDue" disabled bind:value={paymentDue}/>
            <FormField form="select" text="Payment Terms" {options} id="paymentTerms" placeholder="Payment Terms" bind:value={paymentTerms}/>
        </div>
        <FormField text="Project Description" id="description" placeholder="Project Description" bind:value={description}/>
    </div>

    <p>Item list</p>
    <div class="items">
        {#each {length} as _, i (i)}
            <ItemList index={i} on:inputItemList={submitItemList}/>
        {/each}
        <Button type="primary" icon="plus" fluid text="Add Item" on:click={() => length++}/>
    </div>
    <div class="btns">
        <Button type="primary" fluid text="Add" on:click={() => length++}/>
        <Button type="primary" fluid text="Add" on:click={() => length++}/>
        <Button type="primary" fluid text="Add" on:click={() => length++}/>
    </div>
    </form>
    
</Card>
</div>


<div class="overlay" transition:fade={{duration: 500}} on:click={removeModal}/>

{/if}

   