<script lang="ts">
    // PROPS //
    export let id: string = ""
    export let paymentDue: string = "";
    export let total: number = 0;
    export let clientName: string = "";
    export let status: string = "";
// COMPONENTS //
    import Card from "$lib/Card/Card.svelte";
    import Text from '$lib/Text/Text.svelte';
    import Tag from '$lib/Invoice/Tag.svelte';
// FUNCTIONS //
import {convertDate, numberWithCommas} from '../../store/functionStore'
// SCSS FILES //
    import "../../scss/styles.scss";
</script>


<style lang="scss">
    @import "../../scss/util/index";
    
    .container-invoice{
        display: grid;
        grid-template-columns:1fr 0fr;
        width: 100%;
        @include laptopUp{
            grid-template-columns:2fr 1fr;
        }
            div{
            @extend %flexCol;
            justify-content: end;
            @include tablet{
                flex-direction: row;
                align-items: center;
            }
            @include tabletUp{
                padding: 1rem;
            }
    }

    .dueInformation{
        display: grid;
        grid-template-columns: 1fr;
        padding: 1rem;
        gap: 10px;
        @include mobileMax{
            grid-template-columns: 1fr 2fr;
            place-items: center;
        }
        @include tablet{
            grid-template-columns: 1fr 2fr;
            text-align: center;
            padding: 0;
        }
        @include laptop{
            grid-template-columns: 1fr 70%;
            text-align: center;
            align-items: center;
        }
        @include desktop{
            grid-template-columns: 1fr 2fr;
            align-items: center;
            padding: 0;
        }
        div{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            gap: 5px;
            @include mobileMax{
                display: grid;
                grid-template-columns: 1fr;
                align-items: center;
                gap: 10px;
            }
            @include tablet{
                display: grid;
                place-items: center;
                margin: 0;
                grid-template-columns: 1fr 1fr;
            }
            @include laptop{
                display: grid;
                grid-template-columns: 2fr 1fr;
                align-items: center;
            }
            @include desktop{
            display: grid;
            text-align: center;
            gap: 10px;
            }
        }
    }

    .paymentInformation{
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        text-align: center;
        align-items: center;
        padding: .5rem;
        width: 95%;
        margin-right: -1rem;
        gap: 7px;
        @include mobileMax{
            display: grid;
            grid-template-columns: 1fr 1fr;
            place-items: center;
            gap: 16px;
            justify-content: center;
        }
        @include laptop{
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        @include desktop{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 .5rem 0 0;
        }
    }
    }
    
</style>

<Card inv {id}>
    <div class="container-invoice">
        <div class="dueInformation">
            <Text size="h3" text="#{id}"/>
            <div>
                <Text size="p" text="Due: {convertDate(paymentDue, 0)}"/>
                <Text size="h3" text="${numberWithCommas(total.toFixed(2))}"/>
            </div>
        </div>
    <div class="paymentInformation">
        <Text size="p" text="{clientName}"/>
        <Tag {status}/>
    </div>
</div>
</Card>