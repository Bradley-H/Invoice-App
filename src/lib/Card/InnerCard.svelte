<script lang="ts">
    import {globalStore} from '../../store/globalStore'

</script>

<style lang="scss">
    @import "../../scss/util/index";
     div{
        display: block;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        border: 2px solid black;
        padding: .5rem;
        position: relative;
        width: 100%;
        max-width: $containerWidth;

        &.Dark{
            background-color: lighten($color: $bgColorDark, $amount: 15);
        }
        &.Light{
            background-color: darken($color: $bgColorLight, $amount: 10);
        }
    }
</style>

<div class={$globalStore.theme}>
    <slot />
</div>