<script lang="ts">
    // PROPS //
    export let status: string = "" 
    // STORES //
    import {globalStore} from '../../store/globalStore';
    // SCSS FILES //
    import "../../scss/styles.scss";
</script>


<style lang="scss">
    @import "../../scss/util/index";


    div{
        @include tabletUp{
            margin: 0;
        }
        h3{
            @include centered;
            text-transform: capitalize;
            height: 3rem;
            border-radius: 5px;
            width: toRem(140);
            &.Light{
            &.paid{
                color: rgb(43, 148, 43);
                background-color: rgba($color: rgb(24, 109, 28), $alpha: .3);
            }
            &.pending{
                color: darken($color: rgb(206, 164, 50), $amount: 10);
                background-color: rgba($color: rgb(199, 165, 15), $alpha: .15);
            }
            &.draft{
                color: darken($color: rgb(255, 255, 255), $amount: 10);
                background-color: rgba($color: rgb(21, 21, 21), $alpha: .6);
            }
            }

            &.Dark{
            &.paid{
                color: darken($color: rgb(37, 241, 173), $amount: 13);
                background-color: rgba($color: rgb(45, 100, 45), $alpha: .17);
            }
            &.pending{
                color: darken($color: rgb(240, 183, 26), $amount: 10);
                background-color: rgba($color: rgb(221, 182, 6), $alpha: .15);
            }
            &.draft{
                color: darken($color: rgb(255, 255, 255), $amount: 10);
                background-color: rgba($color: rgb(56, 56, 56), $alpha: .5);
            }
            }
        }
    }
</style>


<div class={status}>
    <h3 class="{$globalStore.theme} {status}">{status}</h3>
</div>