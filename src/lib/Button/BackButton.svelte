<script lang="ts">
    export let href: string = "";
</script>


<style lang="scss">
    @import "../../scss/util/index.scss";
    a, button{
        font-size: 1rem;
        margin: .5rem 0;
    }

    i{
        color: $colorLight;
        font-weight: bold;
        margin-right: .35rem;
    }
</style>



{#if href}
<a {href} on:click><i class="fas fa-chevron-left"/>Go Back</a>
{:else}
<button on:click><i class="fas fa-chevron-left"/>Go back</button>
{/if}