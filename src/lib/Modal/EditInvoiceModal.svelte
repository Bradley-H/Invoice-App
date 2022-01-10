<script lang="ts">
    // COMPONENTS //
    import Card from "$lib/Card/Card.svelte";
    import FormField from "$lib/FormField/FormField.svelte";
    import BackButton from "$lib/Button/BackButton.svelte";
    import Text from "$lib/Text/Text.svelte";
    import Button from "$lib/Button/Button.svelte";
    import ModalPrompt from "./ModalPrompt.svelte";
    // STORES //
    import { globalStore } from "../../store/globalStore";
    // CONSTANTS //
        const options = [
            { id: 0, text: "Within 30 Days", value: 30 },
            { id: 1, text: "Within 60 Days", value: 60 },
        ];
    // DESTRUCTURE THE INVOICE //
        $: ({senderAddress, id, clientAddress, createdAt, items, clientEmail, clientName ,description, paymentTerms, paymentDue, total} = $globalStore.editedInvoice)
    // SVELTE IMPORTS //
    import { fade, fly } from "svelte/transition";
    // VARIABLES //
    $:terms = 30;
        // CHECK IF EVERYTHING HAS A LENGTH GREATER THAN 5 //
        $: if(
            senderAddress.street.length > 5 
            && senderAddress.city.length > 5 
            && senderAddress.country.length > 5 
            && senderAddress.postCode.length > 5 
            && clientAddress.street.length > 5 
            && clientAddress.city.length > 5 
            && clientAddress.country.length > 5 
            && clientAddress.postCode.length > 5 
            && clientName.length > 5 
            && clientEmail.length > 5 
            && description.length > 5
            && items[items.length - 1].name !== ""
            && items[items.length - 1].quantity !== 0
            && items[items.length - 1].price !== 0){
            isValid = true;
            } else {
                isValid = false
            }
            // IF THE FORM IS VALID //
        $: isValid = false;
        // IF PROMPT IS SHOWING //
        $: prompt = null
            
    // FUNCTIONS //
    import {closeModal, convertDate, numberWithCommas} from '../../store/functionStore';
    function discardInvoice(){
        prompt = null
        closeModal()
    }
    function calculateTotal(){
        $globalStore.editedInvoice.total = 0;
        $globalStore.editedInvoice.items.forEach(item => {
            $globalStore.editedInvoice.total += item.quantity * item.price;
        });
    }
    function saveInvoice(status){
        // AUTOMATICALLY FILL IN FIELDS IN INVOICE //
        calculateTotal()        
        status = status;
        paymentDue = `${new Date().getFullYear()}-${new Date().getMonth() + 1 + (paymentTerms / 30)}-${new Date().getDate()}`
        createdAt = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
        //FIND INVOICE IN THE INVOICES AND SAVE IT //    
        let findInvoice = $globalStore.invoices.find(invoice => invoice.id === $page.params.invoices);
        findInvoice = $globalStore.editedInvoice
        
        // SAVE $globalStore TO LOCAL STOREAGE //
        localStorage.setItem("invoices", JSON.stringify($globalStore.invoices));
        // closeModal //
        closeModal();
        location.reload();
    }
    function filterItem(index){
        items = items.filter((item, i) => i !== index)     
    }
    function addItem(){
        $globalStore.editedInvoice.items = [...$globalStore.editedInvoice.items, {
            name: "",
            quantity: 0,
            price: 0,
            total: 0,
        }]

    }
    function showPrompt(status){
        prompt = status
    }
     // SCSS FILES //
     import "../../scss/styles.scss";      
import { page } from "$app/stores";
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
</style>

<div class="modal" transition:fly={{duration: 888, x:-555}}>
<Card modal>
        <form>
        <div class="title">
        <Text title size="h2" text="Editing #{id}"/>
        <BackButton on:click={discardInvoice}/>
        </div>

        <div class="billFrom">
            <p>Bill From</p>    
            <div class="billFrom_information">
                <FormField title text="Street Address" id="senderStreet" placeholder="Street Address" bind:value={senderAddress.street} valid={senderAddress.street.trim().length >= 5}
                 invalidMessage="Please enter a valid street address"/>

                <div class="billFrom_information-city">
                    <FormField title text="City" id="senderCity" placeholder="City" bind:value={senderAddress.city} valid={senderAddress.city.trim().length > 5} invalidMessage="Please enter a valid City"/>
                    <FormField title text="Postal Code" id="senderPostCode" placeholder="Postal code" bind:value={senderAddress.postCode}  valid={senderAddress.postCode.trim().length > 5} invalidMessage="Please enter a valid postCode"/>
                    <div class="billFrom_information-country">
                        <FormField title id="senderCountry" text="Country" placeholder="Country" bind:value={senderAddress.country} valid={senderAddress.country.trim().length > 5} invalidMessage="Please enter a valid Country"/>
                    </div>
                </div>
            </div>
        </div>
    

    <div class="billTo">
        <p>Bill To</p>
        <FormField text="Client's Name" id="clientName" placeholder="Name" bind:value={$globalStore.editedInvoice.clientName} valid={clientName.trim().length > 5} invalidMessage="Please enter a valid Name"/>
        <FormField text="Client's Email" id="clientEmail" placeholder="Email" bind:value={$globalStore.editedInvoice.clientEmail} valid={clientEmail.trim().length > 5} invalidMessage="Please enter a valid Email"/>
        <FormField text="Street Address" id="clientStreet" placeholder="Street Address" bind:value={clientAddress.street} valid={clientAddress.street.trim().length > 5} invalidMessage="Please enter a valid Street"/>

        <div class="billTo_information">
            <div class="billTo_information-city">
                <FormField text="City" id="clientCity" placeholder="City" bind:value={clientAddress.city} valid={clientAddress.city.trim().length > 5} invalidMessage="Please enter a valid City"/>
                <FormField text="Postal Code" id="clientPostCode" placeholder="Postal code" bind:value={clientAddress.postCode} valid={clientAddress.postCode.trim().length > 5} invalidMessage="Please enter a valid postal code"/>
                <div class="billTo_information-country">
                    <FormField id="clientCountry" text="Country" placeholder="Country" bind:value={clientAddress.country} valid={clientAddress.country.trim().length > 5} invalidMessage="Please enter a valid Country"/>
                </div>
            </div>
        </div>

        <div class="billTo_invoiceInformation">
            <FormField text="Payment Due" id="paymentDue" disabled value={convertDate(new Date(), terms ) } valid={true}/>
            <FormField form="select" text="Payment Terms" {options} id="paymentTerms" bind:value={terms} />
        </div>
        <FormField text="Project Description" id="description" placeholder="Project Description" bind:value={description} valid={description.trim().length > 5} invalidMessage="Please enter a valid Description"/>
    </div>

    <p>Item list</p>
    <div class="items">
        {#each items as item, i (i)}
            <div class="itemList">
                <div class="nameField">
                    <FormField title bind:value={item.name} id="Name{i}" text="Name" placeholder="Item" valid={item.name.length >= 5 }  invalidMessage={"Must be greater than 5 characters"}/>
                </div>
                <div class="attributes">
                    <FormField title bind:value={item.quantity} id="qty{i}" form="number" text="Qty" valid={item.quantity >= 1} invalidMessage={"Must be greater than 0"}/>
                    <FormField title bind:value={item.price} step={.1} id="price{i}" form="number" text="Price"  valid={item.price >= 1} invalidMessage={"Must be greater than 0"}/>
                    <FormField title value="${numberWithCommas(item.quantity * item.price)}" valid={true}  id="total{i}" disabled text="Total"  placeholder="Total"/>
                    <button on:click|preventDefault={() => filterItem(i)}><i class="fas fa-trash" on:click/>
                </div>
            </div>
        {/each}
        <Button rounded icon="plus" fluid text="Add Item" on:click={addItem}/>
    </div>
    <div class="btns">
        <Button type="danger" icon="trash" size="medium" rounded text="Discard" on:click={showPrompt}/>
        <div>
            <Button type="secondary" icon="save" size="medium" disabled={!isValid}  rounded text="Save as Draft" on:click={() => showPrompt("draft")}/>
            <Button type="primary" size="medium" icon="paper-plane" disabled={!isValid} rounded text="Save and Send" on:click={() => showPrompt("pending")}/>
        </div>
        
    </div>
    </form>
    
</Card>
</div>


<div class="overlay" in:fade={{duration: 555}} out:fade={{duration: 300}} on:click={showPrompt}/>


<!-- IF PROMPT === DISCARD/DRAFT/PENDING, ASK FOR CONFIRMATION -->
{#if prompt == "discard"}
    <ModalPrompt on:decline={() => prompt = null} on:accept={discardInvoice} text={"You want to discard this invoice?"}/>
{/if}

{#if prompt === "draft"}
    <ModalPrompt on:decline={() => prompt = null} on:accept={() => saveInvoice("draft")} text={"You want to Save this invoice as draft?"}/>
{/if}

{#if prompt === "pending"}
    <ModalPrompt on:decline={() => prompt = null} on:accept={() => saveInvoice("pending")} text={"You want to Save this invoice as pending?"}/>
{/if}