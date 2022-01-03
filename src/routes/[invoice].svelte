<script lang="ts">
    // COMPONENTS //
    import Text from "$lib/Text/Text.svelte";
    // VARIABLES //
    let innerWidth;
    // SASS DEFINITIONS //
    import "../scss/styles.scss";
import InvoiceInformation from "$lib/Invoice/InvoiceInformation.svelte";
</script>

<style lang="scss">
    @import "../scss/util/index.scss";

</style>

<svelte:window bind:innerWidth={innerWidth}/>

{#await getInvoices()}
    <div class="loader">
        <Text size="h2" text="Getting invoice information, please wait..." />
    </div>
    {:then inv}
  <InvoiceInformation {...inv}/>
    {:catch err}
        {err}
{/await}