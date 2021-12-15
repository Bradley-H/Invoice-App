<script lang="ts">
// COMPONENTS //
    import Text from "$lib/Text/Text.svelte";
// STORES //
    import { globalStore } from "../../store/globalStore";
// PROPS //
    export let form = "text";
    export let id = "";
    export let text = "";
    export let value;
    export let disabled: boolean = false;
    export let placeholder: string = "";

    import "../../scss/styles.scss";
</script>

<style lang="scss">
    @import "../../scss/util/index.scss";
    div {
        width: 100%;
        margin-bottom: 1.2rem;
        input {
            padding: 0.8rem;
            border-radius: 5px;
            font-weight: bold;
            width: 100%;
            &[type="number"]{
                appearance: textfield;
            }
            &.Dark {
                background-color: lighten($color: $bgColorDark, $amount: 12);
                color: #fff;
            }
            &.Light {
                background-color: darken($color: $bgColorLight, $amount: 22);
                color: black;
            }
            &:disabled {
                opacity: 0.6;
            }
        }
    }
</style>



<div>
    <label {disabled} for={id}><Text {disabled} size="p" title {text}/></label>
{#if form === "text"}
    <input on:keypress {disabled} class="{$globalStore.theme}" {id} type="text" bind:value={value} {placeholder} />
{:else if form === "number"}
    <input on:keypress  {disabled} class="{$globalStore.theme}"  {id} type="number" bind:value={value} {placeholder} />
{:else if form === "date"}
    <input on:keypress {disabled} {id} type="date" bind:value={value} {placeholder} />
{/if}
</div>