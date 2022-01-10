<script lang="ts">
    import {globalStore} from '../../store/globalStore'
    export let modal = false;
</script>

<style lang="scss">
    @import "../../scss/util/index";
     div{
        display: block;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        border: 2px solid black;
        padding: .8rem;
        position: relative;
        width: 100%;
        max-width: $containerWidth;
        &.Dark{
            background-color: lighten($color: $bgColorDark, $amount: 15);
        }
        &.Light{
            background-color: darken($color: $bgColorLight, $amount: 10);
        }
        &.modal{
            border-radius: 0;
            &.Dark{
            background-color: lighten($color: $bgColorDark, $amount: 9);
        }
        &.Light{
            background-color: darken($color: $bgColorLight, $amount: 15);
        }
        }
    }
</style>

<div class={$globalStore.theme} class:modal={modal}>
    <slot />
</div>