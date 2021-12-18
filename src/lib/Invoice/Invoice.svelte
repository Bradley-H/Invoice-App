<script lang="ts">
    // PROPS //
    export let id;
    export let paymentDue: string = "";
    export let total: number = 0;
    export let clientName: string = "";
    export let status: string = "";
// COMPONENTS //
    import Card from "$lib/Card/Card.svelte";
    import Text from '$lib/Text/Text.svelte';
    import Tag from '$lib/Invoice/Tag.svelte';
// FUNCTIONS //
function formateDate(date){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let newDate = new Date(date);
    let month = months[newDate.getMonth()];
    let day = newDate.getDate();
    let year = newDate.getFullYear();
    return `${month} ${day}, ${year}`;

}
// SCSS FILES //
    import "../../scss/styles.scss";
</script>


<style lang="scss">
    @import "../../scss/util/index";
    
    .container{
        display: grid;
        grid-template-columns:1fr 0fr;
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
        @include mobileMax{
            grid-template-columns: 1fr 2fr;
            place-items: center;
        }
        @include tablet{
            grid-template-columns: 1fr 2fr;
            text-align: center;
        }
        @include laptop{
            grid-template-columns: 1fr 70%;
            text-align: center;
            align-items: center;
        }
        @include desktop{
            grid-template-columns: 1fr 2fr;
            align-items: center;
        }
        div{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
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
        text-align: center;
        align-items: center;
        padding: 1rem .5rem;
        width: 95%;
        margin-right: -1rem;
        @include mobileMax{
            display: grid;
            grid-template-columns: 1fr 1fr;
            place-items: center;
            gap: 16px;
        }
        @include tablet{
            padding: 0;
        }
        @include laptop{
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 0;
        }
        @include desktop{
            @include centered;
            padding-right: .5rem;
        }
    }
    }
    
</style>


<Card inv {id}>
    <div class="container">
        <div class="dueInformation">
            <Text size="h3" text="#{id}"/>
            <div>
                <Text size="p" text="Due: {formateDate(paymentDue)}"/>
                <Text size="h3" text="${total.toFixed(2)}"/>
            </div>
        </div>
    <div class="paymentInformation">
        <Text size="p" text="{clientName}"/>
        <Tag {status}/>
    </div>
</div>
</Card>