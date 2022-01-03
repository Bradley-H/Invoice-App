<script>
    // COMPONENTS //
    import Card from "$lib/Card/Card.svelte";
    import InnerCard from "$lib/Card/InnerCard.svelte";
    import Text from "$lib/Text/Text.svelte";
    import Button from "$lib/Button/Button.svelte";
    import BackButton from "$lib/Button/BackButton.svelte";
    import Tag from "$lib/Invoice/Tag.svelte";
     // STORES //
     import { page } from "$app/stores";
    import {globalStore} from '../../store/globalStore';
    // VARIABLES //
    let innerWidth;
    // PROPS //
    export let status;
    export let id;
    export let description;
    export let createdAt;
    export let paymentDue;
    export let clientName;
    export let clientCity;
    export let clientCountry;
    export let clientAddress;
    export let clientEmail;
    export let clientPostCode;
    export let senderAddress;
    export let senderCity;
    export let senderCountry;
    export let senderPostCode;
    export let items = [];
    export let total;
    // FUNCTIONS //
    import {numberWithCommas, formateDate } from "../../store/functionStore";
    // FUNCTIONS //
    async function editInvoice(){
        let res = await fetch('./json/data.json');
        let data = await res.json();
        let getData = data.find(invoice => invoice.id === $page.path.slice(1));  
    }
    // SASS DEFINITIONS //
     import "../../store/globalStore";
</script>

<style lang="scss">
    @import "../../scss/util/index.scss";
    .invoiceContainer{
        @extend %flexCol;
        width: 100%;
        max-width: $containerWidth;
    }

    .topCard{
        @extend %flex;
        margin-bottom: 1rem;
        @include tabletUp{
            justify-content: space-between;
        }
        &_invoiceStatus{
            @include centered;
            gap: toRem(15);
            width: 100%;
            padding: toRem(2);
            @include mobileMax{
                justify-content: center;
                gap: 3rem;
            }
            @include tabletUp{
                justify-content: center
            }
        }
        &_btns{
            @extend %flex;
            width: 100%;
            justify-content: end;
            margin-right: 1rem;
            gap: toRem(25);
        }
    }


    .bottomCard{
        @extend %flexCol;
        &_invoiceInfo{
            @extend %grid;
            padding: .4rem;
            width: 100%;
            &-ID{
                @extend %flexCol;
                gap: 7px;
            }
            &-details{
                @extend %grid;
                margin-bottom: 3rem;
                @include mobileMaxUp{
                    grid-template-columns: 1fr 1fr;
                }
            }
            &-senderInfo{
                @extend %flexCol;
                gap: toRem(4);
                margin: 2rem 0;
                @include mobileMaxUp{
                    margin: 0;
                    align-items: flex-end;
                }
            }
            &-itemList{
                @extend %grid;
                place-self: center;
                margin: 2rem 0 0 0;
                max-width: 600px;
                width: 100%;
                &-items{
                    @extend %flex;
                    justify-content:space-between;
                    padding: .5rem;
                    margin-bottom: .5rem;
                    align-items: center;
                    &-total{
                        @extend %flex;
                        justify-content: space-between;
                        background-color: black;
                        padding: 1rem;
                        width: 100%;
                        border-bottom-left-radius: 12px;
                        border-bottom-right-radius: 12px;
                        h3{
                            color: white
                        }
                    }
                }
            }
            &-billTo{
                @extend %grid;
                grid-template-columns: 1fr 1fr;
                gap: 35px;
                @include tabletUp{
                    grid-template-columns: 1fr 1fr 0fr;
                }
                &-invoices{
                    @extend %grid;
                gap: 20px;
            }
            &
            &-email{
                @extend %grid;
                grid-column: span 2 / span 2;
                gap: 9px;
                @include tabletUp{
                    display: flex;
                    flex-direction: column;
                    grid-column: unset;
                }
            }
            &-client{
                @extend %flexCol;
                @include mobileMax{
                    justify-content: flex-end;
                }
                &-information{
                        line-height: 1.6;
                    }
            }
            &-invoiceDate,
            &-invoiceDue,
            &-client{
                    @extend %flexCol;
                    gap: 9px;
                }
            }
        }
    }
   
    .backButton{
        @extend %flex;
    }

   .btns{
       @extend %flex;
       justify-content: space-evenly;
       align-items: center;
       width: 100%;
       gap: toRem(6);
   }
</style>

<svelte:window bind:innerWidth={innerWidth}/>

<div class="invoiceContainer">
    <div class="backButton">
        <BackButton href/>
    </div>

    <div class="topCard">
        <Card round>
            <div class="topCard_invoiceStatus">
                <Text size="p" text="Status:"/>
                {#key status}      
                    <Tag status={status}/>
                {/key}
            </div>
            {#if innerWidth >= 768}
            <div class="topCard_btns">
                <Button size="medium" on:click={editInvoice} text="Edit" type="secondary" icon="pen" rounded/>
                <Button size="medium" text="Delete" type="danger" icon="trash" rounded/>
                <Button text="Mark as Paid" icon="check" rounded/>
            </div>
            {/if}
        </Card>
    </div>



    <div class="bottomCard">
        <Card round>
            <div class="bottomCard_invoiceInfo">
                <div class="bottomCard_invoiceInfo-details">
                    <div class="bottomCard_invoiceInfo-ID">
                        <Text size="h3" text="#{id}"/>
                        <Text size="p" text="{description}"/>
                    </div> 
    
                    <div class="bottomCard_invoiceInfo-senderInfo">
                        <Text size="p" text="{senderAddress}"/>
                        <Text size="p" text="{senderCity}"/>
                        <Text size="p" text="{senderPostCode}"/>
                        <Text size="p" text="{senderCountry}"/>
                    </div>
                </div>
            
                

                <div class="bottomCard_invoiceInfo-billTo">
                    <div class="bottomCard_invoiceInfo-billTo-invoices">
                        <div class="bottomCard_invoiceInfo-billTo-invoiceDate">
                            <Text size="p" text="Invoice Date"/>
                            <Text size="h3" text="{formateDate(createdAt)}"/>
                        </div>
    
                        <div class="bottomCard_invoiceInfo-billTo-invoiceDue">
                            <Text size="p" text="Payment Due"/>
                            <Text size="h3" text="{formateDate(paymentDue)}"/>
                        </div>
                    </div>

                    <div class="bottomCard_invoiceInfo-billTo-client">
                        <Text size="p" text="Bill To"/>
                        <div>
                            <Text size="h3" text="{clientName}"/>
                        </div>
                        <div class="bottomCard_invoiceInfo-billTo-client-information">
                            <Text size="p" text="{clientAddress}"/>
                            <Text size="p" text="{clientCity}"/>
                            <Text size="p" text="{clientPostCode}"/>
                            <Text size="p" text="{clientCountry}"/>
                        </div>
                    </div>
                
                    <div class="bottomCard_invoiceInfo-billTo-email">
                        <Text size="p" text="Sent to"/>
                        <Text size="h3" text="{clientEmail}"/>
                    </div>
                
                </div>

                <div class="bottomCard_invoiceInfo-itemList">
                    <InnerCard>
                        {#each items as item, i (i)}
                            <div class="bottomCard_invoiceInfo-itemList-items">
                                <div class="bottomCard_invoiceInfo-itemList-items-description">
                                    <Text size="h3" text="{item.itemName}"/>
                                    <Text size="p" text="${numberWithCommas(item.itemPrice.toFixed(2))} x {item.itemQuantity} "/>
                                </div>
                                <Text size="h3" text="${numberWithCommas((item.itemQuantity * item.itemPrice).toFixed(2) )}"/>
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

{#if innerWidth <= 768}
        <Card>
            <div class="btns">
                <Button size="medium" text="Edit" type="secondary" icon="pen" rounded/>
                <Button size="medium" text="Delete" type="danger" icon="trash" rounded/>
                <Button text="Mark as Paid" icon="check" rounded/>
            </div>
        </Card>
{/if}