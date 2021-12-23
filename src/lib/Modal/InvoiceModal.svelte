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
    import {formateDate} from '../../store/functionStore';
    // PROPS //
    $: id = 0
    $: paymentDue = 0
    $: description = ""
    $: paymentTerms = 30
    $: clientName = ""
    $: clientEmail = ""
    $: senderStreet = "" 
    $: senderCity = ""
    $: senderPostCode = ""
    $: senderCountry = ""
    $: clientStreet = ""
    $: clientCity = ""
    $: clientPostCode = "" 
    $: clientCountry = "";
    $: items = []
    // CONSTANTS //
        const options = [
            { id: 0, text: "30 Days", value: 30 },
            { id: 1, text: "60 Days", value: 60 },
        ];
    // SVELTE IMPORTS //
    import { fade, fly } from "svelte/transition";
    // VARIABLES //
    $: title = $globalStore.modalStatus === "add" ? "Add Invoice" : `Edit #${id}`;
    $: length = 0
    function removeModal() {
        $globalStore.modalStatus = null;
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
        z-index: 4;
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
                <FormField title text="Street Address" id="senderStreet" placeholder="Street Address" bind:value={senderStreet} />
                <div class="billFrom_information-city">
                    <FormField title text="City" id="senderCity" placeholder="City" bind:value={senderCity} />
                    <FormField title text="Postal Code" id="senderPostCode" placeholder="Postal code" bind:value={senderPostCode}/>
                    <div class="billFrom_information-country">
                        <FormField title id="senderCountry" text="Country" placeholder="Country" bind:value={senderCountry}/>
                    </div>
                </div>
            </div>
        </div>
    

    <div class="billTo">
        <p>Bill To</p>
        <FormField text="Client's Name" id="clientName" placeholder="Name" bind:value={clientName}/>
        <FormField text="Client's Email" id="clientEmail" placeholder="Email" bind:value={clientEmail}/>
        <FormField text="Street Address" id="clientStreet" placeholder="Street Address" bind:value={clientStreet} />

        <div class="billTo_information">
            <div class="billTo_information-city">
                <FormField text="City" id="clientCity" placeholder="City" bind:value={clientCity} />
                <FormField text="Postal Code" id="clientPostCode" placeholder="Postal code" bind:value={clientPostCode}/>
                <div class="billTo_information-country">
                    <FormField id="clientCountry" text="Country" placeholder="Country" bind:value={clientCountry}/>
                </div>
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
            <ItemList i={i} />
        {/each}
        <Button rounded icon="plus" fluid text="Add Item" on:click={() => {
            length++;
        }}/>
    </div>
    <div class="btns">
        <Button type="danger" icon="trash" size="medium" rounded text="Discard" />
        <div>
            <Button type="secondary" icon="save" size="medium" rounded text="Save as Draft"/>
            <Button type="primary" size="medium" icon="paper-plane" rounded text="Save and Send"/>
        </div>
        
    </div>
    </form>
    
</Card>
</div>


<div class="overlay" transition:fade={{duration: 500}} on:click={removeModal}/>

{/if}

   