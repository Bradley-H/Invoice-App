<script lang="ts">
    export let status = "paid"
    // SCSS FILES //
    import "../../scss/styles.scss";
</script>


<style lang="scss">
    @import "../../scss/util/index";
    div{
        h3{
            @include centered;
            text-transform: capitalize;
            height: 3rem;
            width: toRem(140);
            &.paid{
                color: darken($color: lime, $amount: 10);
                background-color: rgba($color: lime, $alpha: .3)
            }
        }
    }
</style>


<div class={status}>
    <h3 class={status}>{status}</h3>
</div>