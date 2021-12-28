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
    // SVELTE IMPORTS //
    import { fade, fly } from "svelte/transition";
    // VARIABLES //
    $: title = $globalStore.modalStatus === "add" ? "Add Invoice" : `Edit #${$globalStore.currentInvoice.id}`;

    // FUNCTIONS //
    function addItem(){
        // makes a new item in the currentInvoice array
       $globalStore.currentInvoice[0].items = [...$globalStore.currentInvoice[0].items, {name: "", price: 0.00, quantity: 0, total: 0}];
    }

    async function draftInvoice(){
        let res = await fetch('./json/data.json');
        let data = await res.json();
        let invoice = data.find(inv => $globalStore.currentInvoice[0].id === inv.id);
        // reassign the status in the data to draft //
        invoice.status = "draft";
        // update the data //
        data[data.indexOf(invoice)] = invoice;
        console.log(invoice);
        
        return invoice;
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
        margin-bottom: toRem(35);
        }
        .billFrom {
            @extend %flexCol;
            margin-top: toRem(35);
            &_information {
                @extend %grid;
                &-city {
                    @extend %grid2;
                    @include tabletUp{
                        grid-template-columns: 1fr 1fr 1fr;
                    }
                }
                &-country {
                    grid-column: span 2 / span 2;
                    @include tabletUp{
                        grid-column: unset;
                    }
                }
            }
        }
        .billTo {
            display: grid;
            grid-template-columns: 1fr;
            gap: 15px;

            &_invoiceInformation{
                @include tabletUp{
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }
            }
            &_information {
                @extend %grid;
                &-city {
                    @extend %grid2;
                    margin: 1rem 0;
                    @include tabletUp{
                        grid-template-columns: 1fr 1fr 1fr;
                    }
                }
                &-country {
                    grid-column: span 2 / span 2;
                    @include tabletUp{
                        grid-column: unset;
                    }
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
        max-width: $invoiceModalWidthMobile;
        margin: $navHeight 0 0 0;
        @include tablet{
            max-width: 700px;
        }
        @include laptopUp {
            max-width: 575px;
            margin: 0 0 0 $navWidth;
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
        @extend %flex;
        justify-content: center;
        max-width: $invoiceModalWidthMobile;
        transform: translateY(-2.5rem);
        position: sticky;
        margin: 2rem 0;
        @include mobileMaxUp{
            justify-content: space-between
        }
        @include laptopUp{
            margin: 0;
        }
        div{
            @extend %flex;
            gap: 10px;
            margin-left: .5rem;
        }
        @include laptopUp{
            transform: translateY(-1rem);
        }
    }


    // .itemList {
    //     display: flex;
    //     margin-bottom: 2rem;
    //     gap: 10px;
    //     @include tabletUp {
    //         display: grid;
    //         grid-template-columns: 0.7fr 1.5fr;
    //     }
    //     .nameField {
    //         display: grid;
    //         grid-template-columns: 1fr;
    //     }
    // }

    // .attributes {
    //     display: grid;
    //     grid-template-columns: 1fr 1fr 1fr 1fr;
    //     gap: 10px;
    //     @include tabletUp {
    //         grid-template-columns: 0.8fr 0.8fr 1.5fr 1fr;
    //     }
    // }
</style>




{#if $globalStore.modalStatus !== null}
<div class="modal" transition:fly={{duration: 888, x:-555}}>
<Card modal>
        <form>
        <div class="title">
        <Text title size="h2" text={title}/>
        <BackButton on:click={() => $globalStore.modalStatus = null}/>
        </div>

        <div class="billFrom">
            <p>Bill From</p>    
            <div class="billFrom_information">
                <FormField title text="Street Address" id="senderStreet" placeholder="Street Address" bind:value={$globalStore.currentInvoice[0].senderAddress.street} />
                <div class="billFrom_information-city">
                    <FormField title text="City" id="senderCity" placeholder="City" bind:value={$globalStore.currentInvoice[0].senderAddress.city} />
                    <FormField title text="Postal Code" id="senderPostCode" placeholder="Postal code" bind:value={$globalStore.currentInvoice[0].senderAddress.postCode}/>
                    <div class="billFrom_information-country">
                        <FormField title id="senderCountry" text="Country" placeholder="Country" bind:value={$globalStore.currentInvoice[0].senderAddress.country}/>
                    </div>
                </div>
            </div>
        </div>
    

    <div class="billTo">
        <p>Bill To</p>
        <FormField text="Client's Name" id="clientName" placeholder="Name" bind:value={$globalStore.currentInvoice[0].clientName}/>
        <FormField text="Client's Email" id="clientEmail" placeholder="Email" bind:value={$globalStore.currentInvoice[0].clientEmail}/>
        <FormField text="Street Address" id="clientStreet" placeholder="Street Address" bind:value={$globalStore.currentInvoice[0].clientAddress.street} />

        <div class="billTo_information">
            <div class="billTo_information-city">
                <FormField text="City" id="clientCity" placeholder="City" bind:value={$globalStore.currentInvoice[0].clientAddress.city} />
                <FormField text="Postal Code" id="clientPostCode" placeholder="Postal code" bind:value={$globalStore.currentInvoice[0].clientAddress.postCode}/>
                <div class="billTo_information-country">
                    <FormField id="clientCountry" text="Country" placeholder="Country" bind:value={$globalStore.currentInvoice[0].clientAddress.country}/>
                </div>
            </div>
        </div>

        <div class="billTo_invoiceInformation">
            <FormField text="Invoice Date" id="paymentDue" disabled bind:value={$globalStore.currentInvoice[0].paymentDue}/>
            <FormField form="select" text="Payment Terms" {options} id="paymentTerms" placeholder="Payment Terms" bind:value={$globalStore.currentInvoice[0].paymentTerms}/>
        </div>
        <FormField text="Project Description" id="description" placeholder="Project Description" bind:value={$globalStore.currentInvoice[0].description}/>
    </div>

    <p>Item list</p>
    <div class="items">
        {#each $globalStore.currentInvoice[0].items as _, i (i)}
            <ItemList index={i}/>
        {/each}
        <Button rounded icon="plus" fluid text="Add Item" on:click={addItem}/>
    </div>
    <div class="btns">
        <Button type="danger" icon="trash" size="medium" rounded text="Discard" on:click={() => $globalStore.modalStatus = null}/>
        <div>
            <Button type="secondary" icon="save" size="medium" rounded text="Save as Draft" on:click={draftInvoice}/>
            <Button type="primary" size="medium" icon="paper-plane" rounded text="Save and Send"/>
        </div>
        
    </div>
    </form>
    
</Card>
</div>


<div class="overlay" transition:fade={{duration: 500}} on:click={() => $globalStore.modalStatus = null}/>

{/if}

<!-- MIGHT NEED THIS LATER, PLEASE KEEP JUST INCASE -->
<!-- <div class="itemList">
    <div class="nameField">
        <FormField title bind:value={itm.name} id="Name{i}" text="Name" placeholder="Item"  />
    </div>
    <div class="attributes">
        <FormField title bind:value={itm.quantity} id="qty{i}" form="number" text="Qty" placeholder="Qty"   />
        <FormField title bind:value={itm.price} id="price{i}" form="number" text="Price" placeholder="Price"/>
        <FormField title value="${itm.total = numberWithCommas(itm.price * itm.quantity)}"  id="total{i}" disabled text="Total" placeholder="Total"/>
        <button on:click|preventDefault><i class="fas fa-trash" /></button>
    </div>
</div> -->