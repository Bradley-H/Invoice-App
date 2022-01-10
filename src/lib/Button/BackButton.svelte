<script lang="ts">
    import Text from '$lib/Text/Text.svelte'
    export let href: boolean = false
</script>


<style lang="scss">
    @import "../../scss/util/index.scss";
    a, button{
        display: flex;
        justify-content: center;
        font-size: 1rem;
        margin: 1.5rem 0;
        cursor: pointer;
    }

    i{
        color: $colorLight;
        font-weight: bold;
        margin-right: .5rem;
        font-size: 1.2rem;
    }
</style>



{#if href}
<a href="/"><i class="fas fa-chevron-left"/><Text size="h3" text="Go back"/></a>
{:else}
<button on:click|preventDefault><i class="fas fa-chevron-left"/><Text size="h3" text="Go back"/></button>
{/if}