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

.disabled{
        color: grey;
    }


.title{
    margin-bottom: .3rem;
}


</style>



    <svelte:element this={size} class:disabled={disabled} class:title={title} class="txtColor{theme}">{text}</svelte:element>