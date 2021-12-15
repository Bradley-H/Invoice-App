<script>
    import Invoice from '$lib/Invoice/Invoice.svelte';


    import "../scss/styles.scss";
</script>



<style lang="scss">
    @import "../scss/util/index";
    div{
        display: flex;
        margin-top: 1rem;
        width: 100%;
        max-width: $containerWidth;
        @include tabletUp{
            padding: 0 1.5rem 0 6rem;
        }
    }
</style>


<div>
    <Invoice/>
</div>