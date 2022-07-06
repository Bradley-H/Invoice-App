<script lang="ts">
    // COMPONENTS //
    import Card from "$lib/Card/Card.svelte";
    import FormField from "$lib/FormField/FormField.svelte";
    import BackButton from "$lib/Button/BackButton.svelte";
    import Text from "$lib/Text/Text.svelte";
    import Button from "$lib/Button/Button.svelte";
    import ModalPrompt from "./ModalPrompt.svelte";
    // SVELTE IMPORTS //
    import { fade, fly } from "svelte/transition";
    import { page } from "$app/stores";
    import { onDestroy, onMount } from "svelte";
    // STORES //
    import { globalStore } from "../../store/globalStore";
    // LIFECYCLE HOOKS //
    onMount(() => {
        if ($globalStore.modalStatus === "edit") {
            // if the modal is in edit mode
            // FIND THE EDITED INVOICE //
            let invoice = $globalStore.invoices.find(
                (invoice) => invoice.id === $page.params.invoice
            );
            // FILL IN THE FORM FIELDS //
            newInvoice.id = invoice.id;
            newInvoice.senderAddress = invoice.senderAddress;
            newInvoice.clientAddress = invoice.clientAddress;
            newInvoice.items = invoice.items;
            newInvoice.clientName = invoice.clientName;
            newInvoice.clientEmail = invoice.clientEmail;
            newInvoice.paymentDue = invoice.paymentDue;
            newInvoice.description = invoice.description;
            newInvoice.total = invoice.total;
            newInvoice.status = invoice.status;
            newInvoice.createdAt = invoice.createdAt;
        }
    });
    onDestroy(() => {
        $globalStore.modalStatus = null;
        newInvoice = null;
    });
    // FUNCTIONS //
    import {
        closeModal,
        convertDate,
        numberWithCommas,
        strValid,
        emailValid,
    } from "../../store/functionStore";
    // CONSTANTS //
    import { options } from "../../constants/InvoiceOptions";
    // VARIABLES //
    let isValid = false; // is the invoice valid or not //
    let prompt = null; // is the prompt showing or not //
    let terms = 30; // the invoice terms //
    // PACKAGES //
    import { uid } from "uid";
    // REACTIVE VALUES //
    // CHECK IF EVERYTHING HAS A LENGTH GREATER THAN 5 OR PROPER EMAIL //
    $: if (
        strValid(senderAddress.street) &&
        strValid(senderAddress.city) &&
        strValid(senderAddress.country) &&
        strValid(senderAddress.postCode) &&
        strValid(clientAddress.street) &&
        strValid(clientAddress.city) &&
        strValid(clientAddress.country) &&
        strValid(clientAddress.postCode) &&
        strValid(newInvoice.clientName) &&
        emailValid(newInvoice.clientEmail) &&
        strValid(newInvoice.description) &&
        items.length > 0 &&
        items.every((item) => strValid(item.name)) &&
        items.every((item) => item.quantity > 0) &&
        items.every((item) => item.price > 0)
    ) {
        isValid = true;
    } else {
        isValid = false;
    }

    let newInvoice = {
        id:
            $globalStore.modalStatus === "edit"
                ? $page.params.invoice
                : uid(6).toUpperCase(),
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
        items: [
            {
                name: "",
                quantity: +0,
                price: +0,
                total: +0,
            },
        ],
        clientName: "",
        clientEmail: "",
        paymentDue: convertDate(new Date(), terms),
        // CONVERT TO TODAYS DATE //
        createdAt: convertDate(new Date(), 0),
        status: "",
        terms: +terms,
        description: "",
        total: +0,
        addItem() {
            newInvoice.items = [...items,{
                    name: "",
                    quantity: 0,
                    price: 0,
                    total: 0,
                },
            ];
        },
        discardInvoice() {
            prompt = null;
            closeModal();
        },
        calculateTotal() {
            let total = 0;
            items.forEach((item) => {
                total += item.quantity * item.price;
            });
            newInvoice.total = total;
            return total;
        },
        saveInvoice(status) {
            // IF MODALSTATUS IS EDIT MODE, FIND THE INVOICE //
            newInvoice.status = status;
            if ($globalStore.modalStatus === "edit") {
                let invoice = $globalStore.invoices.find(
                    (invoice) => invoice.id === $page.params.invoice
                );
                this.calculateTotal();
                // UPDATE THE IVOICE //
                invoice.senderAddress = senderAddress;
                invoice.clientAddress = clientAddress;
                invoice.items = items;
                invoice.clientName = newInvoice.clientName;
                invoice.clientEmail = newInvoice.clientEmail;
                invoice.paymentDue = convertDate(new Date(), terms);
                invoice.createdAt = newInvoice.createdAt;
                invoice.description = newInvoice.description;
                invoice.total = newInvoice.total;
                invoice.terms = newInvoice.terms;
                invoice.status = status;
                // SAVE THE IVOICE TO INVOICE STORE //
                $globalStore.invoices = [...$globalStore.invoices];
                // SAVE TO LOCAL STORAGE //
                localStorage.setItem("invoices", JSON.stringify($globalStore.invoices));
                // CLOSE THE MODAL //
                closeModal();
                // REFRESH THE PAGE //
                location.reload();
            } else {
                // CALCULATE TOTAL
                this.calculateTotal();
                // ADD THE IVOICE //
                $globalStore.invoices = [...$globalStore.invoices, newInvoice];
                // SAVE TO LOCAL STORAGE //
                localStorage.setItem("invoices", JSON.stringify($globalStore.invoices)
                );
                // CLOSE THE MODAL //
                closeModal();
            }
        },
        filterItem(index) {
            items = items.filter((item, i) => i !== index);
        },
    };
    // DESTRUCTURE THE INVOICE //
    $: ({ senderAddress, clientAddress, items, id,clientName, description, clientEmail, filterItem, saveInvoice, discardInvoice, addItem, calculateTotal} = newInvoice);
    // SCSS FILES //
    import "../../scss/styles.scss";
</script>

<div class="modal" transition:fly={{ duration: 900, opacity: 1, x: -710 }}>
    <Card modal>
        <form>
            <div class="title">
                <Text
                    title
                    size="h2"
                    text={$globalStore.modalStatus === "add"
                        ? "Add New Invoice"
                        : `Edit Invoice #${id}`}/>

                <BackButton on:click={discardInvoice} />
            </div>

            <div class="billFrom">
                <p>Bill From</p>
                <div class="billFrom_information">
                    <FormField
                        title
                        text="Street Address"
                        id="senderStreet"
                        placeholder="Street Address"
                        bind:value={senderAddress.street}
                        valid={strValid(senderAddress.street)}
                        invalidMessage="Please enter a valid street address"/>

                    <div class="billFrom_information-city">
                        <FormField
                            title
                            text="City"
                            id="senderCity"
                            placeholder="City"
                            bind:value={senderAddress.city}
                            valid={strValid(senderAddress.city)}
                            invalidMessage="Please enter a valid City"/>

                        <FormField
                            title
                            text="Postal Code"
                            id="senderPostCode"
                            placeholder="Postal code"
                            bind:value={senderAddress.postCode}
                            valid={strValid(senderAddress.postCode)}
                            invalidMessage="Please enter a valid postCode"/>

                        <div class="billFrom_information-country">
                            <FormField
                                title
                                id="senderCountry"
                                text="Country"
                                placeholder="Country"
                                bind:value={senderAddress.country}
                                valid={strValid(senderAddress.country)}
                                invalidMessage="Please enter a valid Country"/>

                        </div>
                    </div>
                </div>
            </div>

            <div class="billTo">
                <p>Bill To</p>
                <FormField
                    text="Client's Name"
                    id="clientName"
                    placeholder="Name"
                    bind:value={newInvoice.clientName}
                    valid={strValid(clientName)}
                    invalidMessage="Please enter a valid Name"/>

                <FormField
                    text="Client's Email"
                    id="clientEmail"
                    placeholder="Email"
                    bind:value={newInvoice.clientEmail}
                    valid={emailValid(clientEmail)}
                    invalidMessage="Please enter a valid Email"/>

                <FormField
                    text="Street Address"
                    id="clientStreet"
                    placeholder="Street Address"
                    bind:value={clientAddress.street}
                    valid={strValid(clientAddress.street)}
                    invalidMessage="Please enter a valid Street"/>

                <div class="billTo_information">
                    <div class="billTo_information-city">
                        <FormField
                            text="City"
                            id="clientCity"
                            placeholder="City"
                            bind:value={clientAddress.city}
                            valid={strValid(clientAddress.city)}
                            invalidMessage="Please enter a valid City"/>

                        <FormField
                            text="Postal Code"
                            id="clientPostCode"
                            placeholder="Postal code"
                            bind:value={clientAddress.postCode}
                            valid={strValid(clientAddress.postCode)}
                            invalidMessage="Please enter a valid postal code"/>

                        <div class="billTo_information-country">

                            <FormField
                                id="clientCountry"
                                text="Country"
                                placeholder="Country"
                                bind:value={clientAddress.country}
                                valid={strValid(clientAddress.country)}
                                invalidMessage="Please enter a valid Country"/>
                        </div>
                    </div>
                </div>

                <div class="billTo_invoiceInformation">
                    <FormField
                        text="Payment Due"
                        id="paymentDue"
                        disabled
                        value={convertDate(new Date(), terms)}
                        valid={true}/>

                    <FormField
                        form="select"
                        text="Payment Terms"
                        {options}
                        id="paymentTerms"
                        bind:value={terms}/>
                </div>
                <FormField
                    text="Project Description"
                    id="description"
                    placeholder="Project Description"
                    bind:value={newInvoice.description}
                    valid={strValid(description)}
                    invalidMessage="Please enter a valid Description"/>
            </div>

            <p>Item list</p>
            <div class="items">
                {#each items as item, i (i)}
                    <div class="itemList">
                        <div class="nameField">
                            <FormField
                                title
                                bind:value={item.name}
                                id="Name{i}"
                                text="Name"
                                placeholder="Item"
                                valid={strValid(item.name)}
                                invalidMessage={"Must be greater than 5 characters"}/>
                        </div>
                        <div class="attributes">
                            <FormField
                                title
                                bind:value={item.quantity}
                                id="qty{i}"
                                form="number"
                                text="Qty"
                                valid={item.quantity >= 1}
                                invalidMessage={"Must be greater than 1"}/>

                            <FormField
                                title
                                bind:value={item.price}
                                id="price{i}"
                                form="number"
                                text="Price"
                                valid={item.price >= 1}
                                invalidMessage={"Must be greater than 1"}/>

                            <FormField
                                title
                                value="${numberWithCommas(item.quantity * item.price)}"
                                valid={true}
                                id="total{i}"
                                disabled
                                text="Total"
                                placeholder="Total"/>
                            <button
                                on:click|preventDefault={() => filterItem(i)}><i class="fas fa-trash" on:click />
                            </button>
                        </div>
                    </div>
                {/each}
                <Button
                    rounded
                    icon="plus"
                    fluid
                    text="Add Item"
                    on:click={addItem}/>
            </div>
            <div class="btns">
                <Button
                    type="danger"
                    icon="trash"
                    size="medium"
                    rounded
                    text="Discard"
                    on:click={() => (prompt = "discard")}/>
                <div>
                    <Button
                        type="secondary"
                        icon="save"
                        size="medium"
                        disabled={!isValid}
                        rounded
                        text="Save as Draft"
                        on:click={() => (prompt = "draft")}/>
                    <Button
                        type="primary"
                        size="medium"
                        icon="paper-plane"
                        disabled={!isValid}
                        rounded
                        text="Save and Send"
                        on:click={() => (prompt = "pending")}/>
                </div>
            </div>
        </form>
    </Card>
</div>

<div
    class="overlay"
    in:fade={{ duration: 555 }}
    out:fade={{ duration: 300 }}
    on:click={() => (prompt = "discard")}/>

<!-- IF PROMPT === DISCARD/DRAFT/PENDING, ASK FOR CONFIRMATION -->
{#if prompt == "discard"}
    <ModalPrompt
        on:decline={() => (prompt = null)}
        on:accept={closeModal}
        text={"You want to discard the changes?"}/>
{/if}

{#if prompt === "draft"}
    <ModalPrompt
        on:decline={() => (prompt = null)}
        on:accept={() => saveInvoice("draft")}
        text={"You want to save this invoice as draft?"}/>
{/if}

{#if prompt === "pending"}
    <ModalPrompt
        on:decline={() => (prompt = null)}
        on:accept={() => saveInvoice("pending")}
        text={"You want to save this invoice as pending?"}/>
{/if}

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
                    @include tabletUp {
                        grid-template-columns: 1fr 1fr 1fr;
                    }
                }
                &-country {
                    grid-column: span 2 / span 2;
                    @include tabletUp {
                        grid-column: unset;
                    }
                }
            }
        }
        .billTo {
            display: grid;
            grid-template-columns: 1fr;
            gap: 15px;

            &_invoiceInformation {
                @include tabletUp {
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
                    @include tabletUp {
                        grid-template-columns: 1fr 1fr 1fr;
                    }
                }
                &-country {
                    grid-column: span 2 / span 2;
                    @include tabletUp {
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
        inset: 0 0 0 0;
        @include tablet {
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

    .btns {
        @extend %flex;
        justify-content: center;
        max-width: $invoiceModalWidthMobile;
        transform: translateY(-2.5rem);
        position: sticky;
        margin: 2rem 0;
        @include mobileMaxUp {
            justify-content: space-between;
        }
        @include laptopUp {
            margin: 0;
        }
        div {
            @extend %flex;
            gap: 10px;
            margin-left: 0.5rem;
        }
        @include laptopUp {
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
            grid-template-columns: 1fr 1fr 1.5fr 0.3fr;
        }
    }
    i {
        color: red;
        font-size: 1.1rem;
    }

    button {
        height: 5.5rem;
    }
</style>
