<script lang="ts">
    // COMPONENTS //
    import Card from "$lib/Card/Card.svelte";
    import InnerCard from "$lib/Card/InnerCard.svelte";
    import Text from "$lib/Text/Text.svelte";
    import Button from "$lib/Button/Button.svelte";
    import BackButton from "$lib/Button/BackButton.svelte";
    import Tag from "$lib/Invoice/Tag.svelte";
    import ModalPrompt from "$lib/Modal/ModalPrompt.svelte";
    // VARIABLES //
    let prompt;
    // PROPS //
    export let status: string = "";
    export let id: string = "";
    export let description: string = ""; 
    export let createdAt: string = "";
    export let paymentDue: string = "";
    export let clientName: string = "";
    export let clientAddress;
    export let clientEmail: string = "";
    export let senderAddress;
    export let items = [];
    export let total: number = 0;
    // FUNCTIONS //
    import { numberWithCommas, convertDate } from "../../store/functionStore";
    // STORES //
    import { page } from "$app/stores";
    import { globalStore } from "../../store/globalStore";
    // CLASS
    let invoiceInformation = {
        editInvoice() {
            $globalStore.modalStatus = "edit";
        },
        markAsPaid() {
            let invoice = $globalStore.invoices.find((invoice) => invoice.id === $page.params.invoice );
            globalStore.update(($store) => {
                invoice.status = "paid";
                return $store;
            });
            localStorage.setItem("invoices", JSON.stringify($globalStore.invoices));
            prompt = null;
        },
        deleteInvoice() {
            // REMOVE FROM STORE //
            globalStore.update(($store) => {
                $store.invoices = $store.invoices.filter((invoice) => invoice.id !== $page.params.invoice);
                return { ...$store };
            });
            // UPDATE LOCALSTORAGE //
            localStorage.setItem("invoices", JSON.stringify($globalStore.invoices));
            // REDIRECT //
            location.href = "/";
        },
    };
    // DESTRUCTURING //
    $: ({ editInvoice, markAsPaid, deleteInvoice } = invoiceInformation);
    // SASS DEFINITIONS //
    import "../../store/globalStore";
</script>

<div class="invoiceContainer">
    <div class="backButton">
        <BackButton href />
    </div>

    <div class="topCard">
        <Card round>
            <div class="topCard_invoiceStatus">
                <Text size="p" text="Status:" />
                {#key status}
                    <Tag {status} />
                {/key}
            </div>
                <div class="topCard_buttons">
                    <Button
                        size="large"
                        text="Edit"
                        type="secondary"
                        icon="pen"
                        rounded
                        on:click={editInvoice}/>
                    <Button
                        size="large"
                        text="Delete"
                        type="danger"
                        icon="trash"
                        rounded
                        on:click={() => (prompt = "delete")}/>
                    <Button
                        text="Mark as Paid"
                        size="large"
                        disabled={status === "paid"}
                        icon="check"
                        rounded
                        on:click={() => (prompt = "paid")}/>
                </div>
        </Card>
    </div>

    <div class="bottomCard">
        <Card round>
            <div class="bottomCard_invoiceInfo">
                <div class="bottomCard_invoiceInfo-details">
                    <div class="bottomCard_invoiceInfo-ID">
                        <Text size="h3" text="#{id}" />
                        <Text size="p" text={description} />
                    </div>

                    <div class="bottomCard_invoiceInfo-senderInfo">
                        <Text size="p" text={senderAddress.street} />
                        <Text size="p" text={senderAddress.city} />
                        <Text size="p" text={senderAddress.postCode} />
                        <Text size="p" text={senderAddress.country} />
                    </div>
                </div>

                <div class="bottomCard_invoiceInfo-billTo">
                    <div class="bottomCard_invoiceInfo-billTo-invoices">
                        <div class="bottomCard_invoiceInfo-billTo-invoiceDate">
                            <Text size="p" text="Invoice Date" />
                            <Text size="h3" text={convertDate(createdAt, 0)} />
                        </div>

                        <div class="bottomCard_invoiceInfo-billTo-invoiceDue">
                            <Text size="p" text="Payment Due" />
                            <Text size="h3" text={convertDate(paymentDue, 0)} />
                        </div>
                    </div>

                    <div class="bottomCard_invoiceInfo-billTo-client">
                        <Text size="p" text="Bill To" />
                        <div>
                            <Text size="h3" text={clientName} />
                        </div>
                        <div
                            class="bottomCard_invoiceInfo-billTo-client-information">
                            <Text size="p" text={clientAddress.street} />
                            <Text size="p" text={clientAddress.city} />
                            <Text size="p" text={clientAddress.postCode} />
                            <Text size="p" text={clientAddress.country} />
                        </div>
                    </div>

                    <div class="bottomCard_invoiceInfo-billTo-email">
                        <Text size="p" text="Sent to" />
                        <Text size="h3" text={clientEmail} />
                    </div>
                </div>

                <div class="bottomCard_invoiceInfo-itemList">
                    <InnerCard>
                        {#each items as item, i (i)}
                            <div class="bottomCard_invoiceInfo-itemList-items">
                                <div
                                    class="bottomCard_invoiceInfo-itemList-items-description">
                                    <Text size="h3" text={item.name} />
                                    <Text
                                        size="p"
                                        text="${Number(items[i].price).toFixed(2)} x {items[i].quantity}"/>
                                </div>
                                <Text
                                    size="h3"
                                    text="${numberWithCommas((item.quantity * item.price).toFixed(2))}"/>
                            </div>
                        {/each}
                    </InnerCard>
                    <div class="bottomCard_invoiceInfo-itemList-items-total">
                        <h3>Amount Due</h3>
                        <h3>${numberWithCommas(total.toFixed(2))}</h3>
                    </div>
                </div>
            </div>
        </Card>
    </div>
</div>

<div class="bottomCard_buttons">
    <Card>
        <div class="btns">
            <Button
                size="medium"
                fluid
                text="Edit"
                type="secondary"
                icon="pen"
                rounded
                on:click={editInvoice}/>
            <Button
                size="medium"
                fluid
                text="Delete"
                type="danger"
                icon="trash"
                rounded
                on:click={() => (prompt = "delete")}/>
            <Button
                text="Mark as Paid"
                size="medium"
                fluid
                icon="check"
                disabled={status === "paid"}
                rounded
                on:click={() => (prompt = "paid")}/>
        </div>
    </Card>
</div>


{#if prompt === "delete"}
    <ModalPrompt
        on:decline={() => (prompt = null)}
        on:accept={deleteInvoice}
        text={"You want to delete this invoice? This cannot be reversed."}/>
{/if}

{#if prompt === "paid"}
    <ModalPrompt
        on:decline={() => (prompt = null)}
        on:accept={markAsPaid}
        text={"You want to mark this invoice as paid?"}/>
{/if}

<style lang="scss">
    @import "../../scss/util/index.scss";
    .invoiceContainer {
        @extend %flexCol;
        width: 100%;
        max-width: $containerWidth;
    }

    .topCard {
        @extend %flex;
        margin-bottom: 1rem;
        @include tabletUp {
            justify-content: space-between;
        }
        &_invoiceStatus {
            @include centered;
            gap: toRem(15);
            width: 100%;
            padding: toRem(2);
            @include mobileMax {
                justify-content: center;
                gap: 3rem;
            }
            @include tabletUp {
                justify-content: center;
            }
        }
        &_buttons {
            display: none;
            width: 100%;
            justify-content: end;
            margin-right: 1rem;
            gap: toRem(25);
            @include tabletUp {
                display: flex;
            }
        }
    }

    .bottomCard {
        @extend %flexCol;
        &_buttons{
            @extend %flex;
            width: 100%;
            @include tabletUp {
                display: none;
            }
        }
        &_invoiceInfo {
            @extend %grid;
            padding: 0.4rem;
            width: 100%;
            &-ID {
                @extend %flexCol;
                gap: 7px;
            }
            &-details {
                @extend %grid;
                margin-bottom: 3rem;
                @include mobileMaxUp {
                    grid-template-columns: 1fr 1fr;
                }
            }
            &-senderInfo {
                @extend %flexCol;
                gap: toRem(6);
                margin: 2rem 0;
                @include mobileMaxUp {
                    margin: 0;
                    align-items: flex-end;
                }
            }
            &-itemList {
                @extend %grid;
                place-self: center;
                margin: 2rem 0 0 0;
                max-width: 600px;
                width: 100%;
                &-items {
                    @extend %flex;
                    justify-content: space-between;
                    padding: 0.5rem;
                    margin-bottom: 0.5rem;
                    align-items: center;
                    &-total {
                        @extend %flex;
                        justify-content: space-between;
                        background-color: black;
                        padding: 1rem;
                        width: 100%;
                        border-bottom-left-radius: 12px;
                        border-bottom-right-radius: 12px;
                        h3 {
                            color: white;
                        }
                    }
                    &-description {
                        @extend %flexCol;
                        gap: 5px;
                    }
                }
            }
            &-billTo {
                @extend %grid;
                grid-template-columns: 1fr 1fr;
                gap: 35px;
                @include tabletUp {
                    grid-template-columns: 1fr 1fr 0.25fr;
                }
                &-invoices {
                    @extend %grid;
                    gap: 20px;
                }
                & &-email {
                    @extend %grid;
                    grid-column: span 2 / span 2;
                    gap: 9px;
                    @include tabletUp {
                        display: flex;
                        flex-direction: column;
                        grid-column: unset;
                    }
                }
                &-client {
                    @extend %flexCol;
                    @include mobileMax {
                        justify-content: flex-end;
                    }
                    &-information {
                        @extend %flexCol;
                        gap: toRem(7);
                    }
                }
                &-invoiceDate,
                &-invoiceDue,
                &-client {
                    @extend %flexCol;
                    gap: 9px;
                }
            }
        }
    }

    .backButton {
        @extend %flex;
    }

    .btns {
        @extend %flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        gap: toRem(6);
    }
</style>
