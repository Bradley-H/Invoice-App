<script lang="ts">
// STORES //
import {globalStore} from '../store/globalStore';
// COMPONENTS //
import Navigation from "$lib/Navigation/Navigation.svelte";
import NewInvoiceModal from "$lib/Modal/NewInvoiceModal.svelte";
import EditInvoiceModal from "$lib/Modal/EditInvoiceModal.svelte";
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
    height: 100vh;
    width: 100%;
    padding: 1rem 1.5rem;
    overflow: auto;
    @include laptopUp{
        padding: 1rem 2rem 2rem 6.5rem;
    }
}
</style>

{#if $globalStore.modalStatus === "add"}
<NewInvoiceModal/>
{/if}

{#if $globalStore.modalStatus === "edit"}
<EditInvoiceModal/>
{/if}
<Navigation/>
<main class="bgColor{theme}">
    <slot/>
</main>
