<script lang="ts">
    // COMPONENTS //
    import Text from "$lib/Text/Text.svelte";
    import InvoiceInformation from "$lib/Invoice/InvoiceInformation.svelte";

    // VARIABLES //
    let msg: string = "Getting invoice information, please wait...";
    // STORES //
    import { page } from "$app/stores";
    import { globalStore } from "../store/globalStore";
    import { getInvoicesIndex } from "../store/functionStore";
    // FUNCTIONS //
    async function getInvoiceInformation(path) {
        await getInvoicesIndex();
        let invoice = $globalStore.invoices.find((invoice) => invoice.id === path);
        if (invoice) {
            return {...invoice}
        } else {
            setTimeout(() => {
                location.href = "/";
            }, 3000);
            clearTimeout();
            throw new Error(
                "Invoice not found - redirecting you back to the invoice list in 3 seconds..."
            );
        }
    }
    
    // SASS DEFINITIONS //
    import "../scss/styles.scss";
</script>

<style lang="scss">
    @import "../scss/util/index.scss";
    .loader {
        @include centered;
        flex-direction: column;
        gap: 10px;
        height: 100%;
    }
</style>





{#await getInvoiceInformation($page.params.invoice)}
    <div class="loader">
        <Text size="h2" text={msg} />
    </div>
{:then inv}
    <InvoiceInformation {...inv} />
{:catch error}
    <div class="loader">
        <Text size="h2" text={error} />
    </div>
{/await}
