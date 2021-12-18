<script lang="ts">
    export let href = ""
    export let text = ""
    export let type = "primary";
    export let icon = "";
    export let fluid = false;
    export let rounded: Boolean = false
</script>


<style lang="scss">
    @import "../../scss/util/index";

    a,button{
        @include centered;
        padding: .5rem;
        font-weight: bold;
        min-width: 5rem;
        font-size: 1.1rem;
        cursor: pointer;
        &.primary{
            background-color: $colorLight;
        }
        &.secondary{
            background-color: $colorDark;
            color: $miscDark;
        }
        &.accent{
            background-color: $colorLightest;
        }
        &.danger{
            background-color: $colorDanger;
        }
        &.fluid{
            width: 100%;
        }
        i{
            margin-right: .5rem;
        }
        &.rounded{
            border-radius: 15px;
        }
    }
</style>


{#if !href}
    <button class:rounded={rounded} on:click|preventDefault class:fluid={fluid} class="{type}"><i class="fas fa-{icon}"></i>{text}</button>
{:else}
    <a on:click|preventDefault class="{type}" {href}><i class="fas fa-{icon}"></i>{text}</a>
{/if}