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
    // PACKAGES //
    import {uid} from 'uid'
    // CONSTANTS //
        const options = [
            { id: 0, text: "30 Days", value: 30 },
            { id: 1, text: "60 Days", value: 60 },
        ];
    // SVELTE IMPORTS //
    import { fade, fly } from "svelte/transition";
    // VARIABLES //
        $: title = $globalStore.modalStatus === "add" ? "Add Invoice" : `Editing #`;
        // THE FORM BIDNINGS //
        $: newInvoice = {
            id: "",
            senderAddress: {
                street: "",
                city: "",
                country: "",
                postCode: "",
            },
            clientAddress: {
                street: "",
                city: "",
                country: "",
                postCode: "",
            },
            items: [{
                name: "",
                quantity: 0,
                price: 0,
                total: 0
            }],
            clientName: "",
            clientEmail: "",
            paymentDue: "",
            status: "",
            paymentTerms: 30,
            description: "",
            total: 0,
        }
        // USES THE VALIDATOR TO CHECK IF THAT FIELD IS VALID OR NOT //
        $: isEmpty = {
            clientAddress: {
                city: validator(newInvoice.clientAddress.city),
                country: validator(newInvoice.clientAddress.country),
                postCode: validator(newInvoice.clientAddress.postCode),
                street: validator(newInvoice.clientAddress.street),
            },
            senderAddress: {
                city: validator(newInvoice.senderAddress.city),
                country: validator(newInvoice.senderAddress.country),
                postCode: validator(newInvoice.senderAddress.postCode),
                street: validator(newInvoice.senderAddress.street),
            },
            clientEmail: validator(newInvoice.clientEmail),
            clientName: validator(newInvoice.clientName),
            description: validator(newInvoice.description),
            items: newInvoice.items.map(item => {
                return {
                    name: strValid(item.name),
                    quantity: numValid(item.quantity),
                    price: numValid(item.price),
                    total: true,
                }
            })
        }
        //IF THE FORM IS VALID, IT'S ALLOW THE FORM TO BE SUBMITTED //
    $: if(isEmpty.clientAddress.city && isEmpty.clientAddress.country && isEmpty.clientAddress.postCode && isEmpty.clientAddress.street && isEmpty.clientEmail && isEmpty.clientName && isEmpty.description && isEmpty.items) {
        valid = true
        } else {
            valid = false
        }
    // IF YOU CAN SEND THE FORM OR NOT //
    $: valid = false
    // SCSS FILES //
    import "../../scss/styles.scss";

    // FUNCTIONS //
    import {closeModal, strValid, numValid} from '../../store/functionStore';
    function addItem(){
        newInvoice.items = [...newInvoice.items, {
            name: "",
            quantity: 0,
            price: 0,
            total: 0,
        }]
    }
    function discardInvoice(){
        closeModal()
        // RESET ALL THE FORM FIELDS //
            newInvoice.senderAddress = {
                street: "",
                city: "",
                country: "",
                postCode: "",
            }
            newInvoice.clientAddress = {
                street: "",
                city: "",
                country: "",
                postCode: "",
            }
            newInvoice.items = [
                {
                    name: "",
                    quantity: 0,
                    price: 0,
                    total: 0
                }
            ]
            newInvoice.clientName = "";
            newInvoice.clientEmail = "";
            newInvoice.paymentDue = ""
            newInvoice.paymentTerms = 30;
            newInvoice.description = "";
            newInvoice.status = "";
            newInvoice.total = 0;
    }
    async function draftInvoice(){
        newInvoice.status = "draft";
        newInvoice.id = uid(6).toUpperCase()
        // CONVERT newInvoice to JSON //
        let invoice = JSON.stringify(newInvoice);
        // SAVE TO JSON FILE //
        let file = await fetch("./data.json");
        let data = await file.json();
        invoice = JSON.parse(invoice);
        data = [...data, invoice];
        $globalStore.invoices = data
        // SAVE TO LOCAL STORAGE //
        localStorage.setItem("invoices", JSON.stringify(data));
        // closeModal //
        closeModal();
    }
    function filterItem(index){
        newInvoice.items = newInvoice.items.filter((item, i) => i !== index)
    }
    function validator(value){
        // CHECK IF THE LENGTH IS GREATER THAN 5 //
        if(value.length >= 5){ return true}
        if (value < 1 || value.length < 1 || value === "" || value ===  null  ){ return false}
    }
    function updateItems(e){
        // REASSIGN THE VALUES OF isEmpty.items from e.detail //
        isEmpty.items = e.detail;
    }   

    // DESTRUCTURE THE INVOICE //
    $: ({senderAddress, clientAddress, items, clientName, clientEmail, paymentDue, paymentTerms, description, total} = newInvoice)  
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
</style>




{#if $globalStore.modalStatus !== null}
<div class="modal" transition:fly={{duration: 888, x:-555}}>
<Card modal>
        <form>
        <div class="title">
        <Text title size="h2" text={title}/>
        <BackButton on:click={discardInvoice}/>
        </div>

        <div class="billFrom">
            <p>Bill From</p>    
            <div class="billFrom_information">
                <FormField title text="Street Address" id="senderStreet" placeholder="Street Address" bind:value={senderAddress.street} 
                 invalidMessage="Please enter a valid street address" valid={isEmpty.senderAddress.street}/>

                <div class="billFrom_information-city">
                    <FormField title text="City" id="senderCity" placeholder="City" bind:value={senderAddress.city} valid={isEmpty.senderAddress.city} />
                    <FormField title text="Postal Code" id="senderPostCode" placeholder="Postal code" bind:value={senderAddress.postCode} valid={isEmpty.senderAddress.postCode} />
                    <div class="billFrom_information-country">
                        <FormField title id="senderCountry" text="Country" placeholder="Country" bind:value={senderAddress.country} valid={isEmpty.senderAddress.country}/>
                    </div>
                </div>
            </div>
        </div>
    

    <div class="billTo">
        <p>Bill To</p>
        <FormField text="Client's Name" id="clientName" placeholder="Name" bind:value={newInvoice.clientName} valid={isEmpty.clientName}/>
        <FormField text="Client's Email" id="clientEmail" placeholder="Email" bind:value={newInvoice.clientEmail} valid={isEmpty.clientEmail}/>
        <FormField text="Street Address" id="clientStreet" placeholder="Street Address" bind:value={clientAddress.street} valid={isEmpty.clientAddress.street}/>

        <div class="billTo_information">
            <div class="billTo_information-city">
                <FormField text="City" id="clientCity" placeholder="City" bind:value={clientAddress.city} valid={isEmpty.clientAddress.city} />
                <FormField text="Postal Code" id="clientPostCode" placeholder="Postal code" bind:value={clientAddress.postCode} valid={isEmpty.clientAddress.postCode}/>
                <div class="billTo_information-country">
                    <FormField id="clientCountry" text="Country" placeholder="Country" bind:value={clientAddress.country} valid={isEmpty.clientAddress.country}/>
                </div>
            </div>
        </div>

        <div class="billTo_invoiceInformation">
            <FormField text="Invoice Date" id="paymentDue" disabled bind:value={newInvoice.paymentDue} valid={true}/>
            <FormField form="select" text="Payment Terms" {options} id="paymentTerms" placeholder="Payment Terms" bind:value={newInvoice.paymentTerms} />
        </div>
        <FormField text="Project Description" id="description" placeholder="Project Description" bind:value={newInvoice.description} valid={isEmpty.description}/>
    </div>

    <p>Item list</p>
    <div class="items">
        {#each items as item, i (i)}
            <ItemList index={i} {item} on:click={() => filterItem(i)}  on:update-item={updateItems}/>
        {/each}
        <Button rounded icon="plus" fluid text="Add Item" on:click={addItem}/>
    </div>
    <div class="btns">
        <Button type="danger" icon="trash" size="medium" rounded text="Discard" on:click={discardInvoice}/>
        <div>
            <Button type="secondary" icon="save" size="medium" disabled={!valid} rounded text="Save as Draft" on:click={draftInvoice}/>
            <Button type="primary" size="medium" icon="paper-plane" disabled={!valid} rounded text="Save and Send"/>
        </div>
        
    </div>
    </form>
    
</Card>
</div>


<div class="overlay" transition:fade={{duration: 500}} on:click={discardInvoice}/>

{/if}
