<script lang="ts">
    // STORES //
    import { page } from "$app/stores";
    import {globalStore} from '../store/globalStore';
    // COMPONENTS //
    import Text from "$lib/Text/Text.svelte";
    // VARIABLES //
    let innerWidth;
    // PROPS //
    // FUNCTIONS //
    import { getInvoices } from "../store/functionStore";
    async function editInvoice(){
        let res = await fetch('./json/data.json')
        let data = await res.json();
        let getData = data.find(invoice => invoice.id === $page.path.slice(1));
        $globalStore.currentInvoice = [];
        $globalStore.modalStatus = 'edit';
        return $globalStore.currentInvoice = [getData];       
    }
    // SASS DEFINITIONS //
    import "../scss/styles.scss";
import InvoiceInformation from "$lib/Invoice/InvoiceInformation.svelte";
</script>

<style lang="scss">
    @import "../scss/util/index.scss";

</style>

<svelte:window bind:innerWidth={innerWidth}/>

{#await getInvoices($page.path.slice(1))}
    <div class="loader">
        <Text size="h2" text="Getting invoice information, please wait..." />
    </div>
    {:then inv}
  <InvoiceInformation {...inv}/>
    {:catch err}
        {err}
{/await}