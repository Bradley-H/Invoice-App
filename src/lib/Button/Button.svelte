<script>
    export let href = ""
    export let text = ""
    export let type = "primary";
    export let icon = "";
    export let fluid = false;
</script>


<style lang="scss">
    @import "../../scss/util/index";

    a,button{
        @include centered;
        padding: .75rem;
        border-radius: 0 12px 12px 0;
        color: white;
        font-weight: bold;
        min-width: 5rem;
        font-size: 1.1rem;
        &.primary{
            background-color: $colorLight;
        }
        &.secondary{
            background-color: $colorDark;
        }
        &.accent{
            background-color: $colorLightest;
        }
        &.danger{
            background-color: $colorDanger;
        }
        &.fluid{
            width: 100%;
            border-radius: 8px;
        }
    }
</style>


{#if !href}
    <button on:click|preventDefault class:fluid={fluid} class="{type}"><i class="fas fa-{icon}"></i>{text}</button>
{:else}
    <a on:click|preventDefault class="{type}" {href}>{text}</a>
{/if}