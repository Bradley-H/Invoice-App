<script lang="ts">
    // STORE //
    import { globalStore } from "../../store/globalStore";
    // COMPONENTS //
    // PROPS //
    export let inv: boolean = false;
    export let id: string = "";
    export let modal: boolean = false;
</script>

<style lang="scss">
    @import "../../scss/util/index";
    div,
    a {
        @extend %flexCol;
        position: relative;
        width: 100%;
        &.Dark {
            background-color: lighten($color: $bgColorDark, $amount: 9);
        }
        &.Light {
            background-color: darken($color: $bgColorLight, $amount: 11);
        }
        &.inv {
           display: flex;
           width: 100%;
           border-radius: 12px;
           margin: .25rem 0;
        }
        &.modal {
            @extend %flexCol;
            height: 100%;
            width: 100%;
            z-index: 2;
            overflow: auto;
            padding: 1.5rem;
            &.Dark {
                background-color: lighten($color: $bgColorDark, $amount: 1);
            }
            &.Light {
                background-color: darken($color: $bgColorLight, $amount: 15);
            }
            @include tablet {
                max-width: $invoiceModalWidthMobile;
                margin: $navHeight 0 0 0;
            }
            @include laptopUp {
                max-width: $invoiceModalWidthLaptop;
                margin: 0 0 0 $navWidth;
            }
        }
    }
</style>



{#if !inv}
    <div class:modal class={$globalStore.theme}>
        <slot />
    </div>
{:else}
    <a href="/{id}" class:inv class={$globalStore.theme}>
        <slot />
    </a>
{/if}
