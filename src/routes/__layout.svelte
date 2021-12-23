<script lang="ts">
    // STORES //
import {globalStore} from '../store/globalStore';
// COMPONENTS //
import Navigation from "$lib/Navigation/Navigation.svelte";
import InvoiceModal from '$lib/Modal/InvoiceModal.svelte'
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
    padding: 2rem 1.5rem;
    overflow: auto;
    @include laptopUp{
        padding: 1rem 2rem 2rem 6.5rem;
    }
}
</style>


<Navigation/>
<InvoiceModal/>
<main class="bgColor{theme}">
    <slot/>
</main>
