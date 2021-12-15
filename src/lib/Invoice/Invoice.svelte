<script lang="ts">
// COMPONENTS //
    import Card from "$lib/Card/Card.svelte";
    import Text from '$lib/Text/Text.svelte';
    import Tag from '$lib/Invoice/Tag.svelte';
// SCSS FILES //
    import "../../scss/styles.scss";
</script>


<style lang="scss">
    @import "../../scss/util/index";
    
    div{
        @extend %flexCol;
        justify-content: space-between;
        @include tablet{
            flex-direction: row;
            align-items: center;
        }
    }

    .dueInformation{
        text-align: center;
        @include tabletUp{
            display: grid;
            grid-template-columns: 1fr 70%;
            align-items: center;
            @include laptopUp{
                grid-template-columns: 1fr 60%;

            }
        }
        div{
            margin-right: 1rem;
            @include tabletUp{
                display: grid;
                grid-template-columns: 1fr 1fr;
                place-items: center;
                margin: 0;
            }
        }
    }

    .paymentInformation{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        text-align: end;
        @include tabletUp{
            display: flex;
            flex-direction: row;
            width: 85%;
            justify-content: space-evenly;
            align-items: center;
            text-align: center;
        }
    }
</style>


<Card inv>
        <div class="dueInformation">
            <Text size="h3" text="#H3TV6"/>
            <div>
                <Text size="p" text="Due: 19 Aug, 2021"/>
                <Text size="h3" text="$1500.25"/>
            </div>
        </div>
    <div class="paymentInformation">
        <Text size="p" text="Jensen Guiag"/>
        <Tag/>
    </div>
</Card>