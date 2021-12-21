<script lang="ts">
    export let href:string = ""
    export let text:string = ""
    export let type:string = "primary";
    export let icon:string = "";
    export let size:any = null
    export let fluid:boolean = false;
    export let rounded: Boolean = false
</script>


<style lang="scss">
    @import "../../scss/util/index";

    a,button{
        @include centered;
        padding: .5rem;
        font-weight: bold;
        min-width: 5rem;
        font-size: toRem(14);
        min-height: 2.5rem;
        max-height: 5.5rem;
        cursor: pointer;
        &.primary{
            background-color: $colorLight;
        }
        &.secondary{
            background-color: lighten($colorDark,36%);
            color: white
        }
        &.accent{
            background-color: $colorLightest;
        }
        &.danger{
            background-color: $colorDanger;
        }
        &.fluid{
            width: 100% !important;
        }
        i{
            margin-right: .7rem;
            font-size: 1.1rem;
        }
        &.rounded{
            border-radius: 17px;
        }
        &.medium{
            width: 7rem;
        }
        &.small{
            width: 5rem;
        }
        &.large{
            width: 9rem;
        }
    }
</style>


{#if !href}
    <button class:rounded={rounded} on:click|preventDefault class:fluid={fluid} class="{type} {size}"><i class="fas fa-{icon}"></i>{text}</button>
{:else}
    <a on:click|preventDefault class="{type}" {href}><i class="fas fa-{icon}"></i>{text}</a>
{/if}