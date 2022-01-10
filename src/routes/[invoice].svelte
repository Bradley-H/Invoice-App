<script lang="ts">
    // COMPONENTS //
    import Text from "$lib/Text/Text.svelte";
    import InvoiceInformation from "$lib/Invoice/InvoiceInformation.svelte";
    // VARIABLES //
    let innerWidth;
    // STORES //
    import {page} from '$app/stores';
    import { globalStore } from "../store/globalStore";
    // FUNCTIONS //
    import {getInvoicesIndex} from '../store/functionStore'
    async function getInvoiceInformation(path){
        await getInvoicesIndex()
        return $globalStore.invoices.find(invoice => invoice.id === path)
    }
    // SASS DEFINITIONS //
    import "../scss/styles.scss";
</script>

<style lang="scss">
    @import "../scss/util/index.scss";
    .loader{
        @include centered;
        height: 100%;
    }
</style>

<svelte:window bind:innerWidth={innerWidth}/>

{#await getInvoiceInformation($page.params.invoice)}
    <div class="loader">
        <Text size="h2" text="Getting invoice information, please wait..." />
    </div>
    {:then inv}
  <InvoiceInformation {...inv}/>
    {:catch err}
        <Text size="h1" text={err}/>
{/await}