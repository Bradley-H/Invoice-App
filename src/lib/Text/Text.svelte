<script lang="ts">
    // STORES //
import {globalStore} from '../../store/globalStore';
$: theme = $globalStore.theme;
    // PROPS //
export let text:any = "Hello World"
export let size = "h1";
export let title: boolean = false;
export let disabled: boolean = false;
    // SCSS DEFINITIONS //
import "../../scss/styles.scss";
</script>


<style lang="scss">
@import "../../scss/util/index";

h1,h2,h3,p{
    font-family: $primaryFont;
    &.disabled{
        color: grey;
    }
}

.title{
    margin-bottom: .3rem;
}


</style>


{#if size === "h1"}
    <h1 class:disabled={disabled}  class:title={title} class="txtColor{theme}">{text}</h1>
{:else if size === "h2"}
    <h2 class:disabled={disabled} class:title={title} class="txtColor{theme}">{text}</h2>
{:else if size === "h3"}
    <h3 class:disabled={disabled} class:title={title} class="txtColor{theme}">{text}</h3>
{:else}
    <p class:disabled={disabled} class:title={title} class="txtColor{theme}">{text}</p>
{/if}