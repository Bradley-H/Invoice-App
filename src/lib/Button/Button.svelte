<script lang="ts">
    export let href:string = ""
    export let text:string = ""
    export let type:string = "primary";
    export let icon:string = "";
    export let size:string = ""
    export let fluid:boolean = false;
    export let disabled: boolean = false;
    export let rounded: Boolean = false
</script>


<style lang="scss">
    @import "../../scss/util/index";

    a,button{
        @include centered;
        padding: .5rem;
        font-weight: bold;
        min-width: 5rem;
        font-size: toRem(12);
        height: 100%;
        @include mobileMaxUp{
            font-size: toRem(14);
            min-width: 6rem;
        }
        @include tabletUp{
            font-size: toRem(16);
            min-width: 8.25rem;
        }
        cursor: pointer;
        &.primary{
            background-color: $colorLight;
        }
        &.secondary{
            background-color: lighten($colorDark, 36%);
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
            border-radius: 20px;
        }
        &.small{
            width: 5rem;
        }
        &.medium{
            min-width: 3rem;
            max-width: 10rem;
            height: 3rem;
        }
        &.large{
            width: 9rem;
        }
    }

    button[disabled]{
            opacity: .5;
        }
</style>


{#if !href}
    <button class:rounded={rounded} {disabled} on:click|preventDefault class:fluid={fluid} class="{type} {size}"><i class="fas fa-{icon}"></i>{text}</button>
{:else}
    <a on:click|preventDefault class="{type}" {href}><i class="fas fa-{icon}"></i>{text}</a>
{/if}