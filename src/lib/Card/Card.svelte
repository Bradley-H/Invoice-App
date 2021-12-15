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
        border-radius: 12px;
        width: 100%;
        padding: 0.9rem;
        &.Dark {
            background-color: lighten($color: $bgColorDark, $amount: 15);
        }
        &.Light {
            background-color: darken($color: $bgColorLight, $amount: 11);
        }
        &.inv {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            height: 8rem;
            margin: 1.2rem;
            width: 100%;
            max-width: $containerWidth;
            @include tabletUp {
                padding: 0;
                margin: 0.5rem;
            }
        }
        &.modal {
            @extend %flexCol;
            height: 100%;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 2;
            overflow: auto;
            padding: 1rem;
            &.Dark {
                background-color: lighten($color: $bgColorDark, $amount: 1);
            }
            &.Light {
                background-color: darken($color: $bgColorLight, $amount: 15);
            }
            @include tablet {
                max-width: 700px;
                margin: $navHeight 0 0 0;
            }
            @include laptopUp {
                max-width: 450px;
                margin: 0 0 0 $navWidth;
            }
        }
    }
</style>


{#if !inv}
<div class:modal={modal} class={$globalStore.theme}>
    <slot/>
</div>
{:else}
<a href="/{id}" class:inv={inv} class={$globalStore.theme}>
    <slot/>
</a>
{/if}