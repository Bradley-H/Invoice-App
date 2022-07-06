<script lang="ts">
// STORES //
import {globalStore} from '../store/globalStore';
// COMPONENTS //
import Navigation from "$lib/Navigation/Navigation.svelte";
import InvoiceModal from '$lib/Modal/InvoiceModal.svelte';
// VARIABLES //
$: theme = $globalStore.theme;
// SASS DEFINITIONS //
import "../scss/styles.scss"
</script>


<style lang="scss">
    @import "../scss/util/index";
main{
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: toRem(20) toRem(17);
    overflow: auto;
    @include laptopUp{
        padding: 1rem 2rem 2rem 6.5rem;
    }
}
</style>


{#if $globalStore.modalStatus !== null}
<InvoiceModal/>
{/if}


<Navigation/>
<main class="bgColor{theme}">
    <slot/>
</main>
