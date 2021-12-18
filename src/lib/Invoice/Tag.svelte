<script lang="ts">
    export let status = "paid"
    // SCSS FILES //
    import "../../scss/styles.scss";
</script>


<style lang="scss">
    @import "../../scss/util/index";


    div{
        margin-top: .5rem;
        @include tabletUp{
            margin: 0
        }
        h3{
            @include centered;
            text-transform: capitalize;
            height: 3rem;
            width: toRem(140);
            @include desktop{
                margin-top: .5rem;
            }
            &.paid{
                color: darken($color: rgb(35, 223, 160), $amount: 10);
                background-color: rgba($color: rgb(61, 179, 61), $alpha: .15);
            }
            &.pending{
                color: darken($color: rgb(240, 183, 26), $amount: 10);
                background-color: rgba($color: rgb(221, 182, 6), $alpha: .15);
            }
            &.draft{
                color: darken($color: rgb(255, 255, 255), $amount: 10);
                background-color: rgba($color: rgb(41, 41, 41), $alpha: .5);
            }
        }
    }
</style>


<div class={status}>
    <h3 class={status}>{status}</h3>
</div>