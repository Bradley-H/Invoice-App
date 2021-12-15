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
    padding: 5rem 0 0 0;
    &.bgColorDark{
        background-color: $bgColorDark;
    }
}
</style>


<Navigation/>
<InvoiceModal/>
<main class="bgColor{theme}">
    <slot/>
</main>