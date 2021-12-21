<script lang="ts">
    import { page } from "$app/stores";
    // COMPONENTS //
    import Card from "$lib/Card/Card.svelte";
    import InnerCard from "$lib/Card/InnerCard.svelte";
    import Text from "$lib/Text/Text.svelte";
    import Button from "$lib/Button/Button.svelte";
    import BackButton from "$lib/Button/BackButton.svelte";
    import Tag from "$lib/Invoice/Tag.svelte";
    // VARIABLES //
    $: path = $page.path.slice(1);
    let innerWidth;
    // FUNCTIONS //
    import { getInvoices, numberWithCommas, formateDate } from "../store/functionStore";
    // SASS DEFINITIONS //
    import "../scss/styles.scss";
</script>

<style lang="scss">
    @import "../scss/util/index.scss";

    .invoiceContainer{
        @extend %flex;
        flex-direction: column;
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
            gap: 15px;
            width: 100%;
            padding: .1rem;
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
            gap: 20px;
        }
    }


    .bottomCard{
        display: flex;
        flex-direction: column;
    }
   
</style>

<svelte:window bind:innerWidth={innerWidth}/>


{#await getInvoices(path)}
    <div class="loader">
        <Text size="h2" text="Getting invoice information, please wait..." />
    </div>
{:then inv}
<div class="invoiceContainer">

    <div class="topCard">
        <Card round>
            <div class="topCard_invoiceStatus">
                 <Text size="p" text="Status:"/>
                 <Tag status={inv.status}/>
            </div>
            {#if innerWidth >= 768}
            <div class="topCard_btns">
                <Button size="medium" text="Edit" type="secondary" icon="pen" rounded/>
                <Button size="medium" text="Delete" type="danger" icon="trash" rounded/>
                <Button text="Mark as Paid" icon="check" rounded/>
            </div>
            {/if}
        </Card>
    </div>



    <div class="bottomCard">
        <Card>
            <h5>Hello</h5>
        </Card>
    </div>



</div>
{:catch err}
    {err}
{/await}
