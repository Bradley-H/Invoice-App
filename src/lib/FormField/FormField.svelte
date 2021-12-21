<script lang="ts">
// COMPONENTS //
    import Text from "$lib/Text/Text.svelte";
// STORES //
    import { globalStore } from "../../store/globalStore";
// PROPS //
    export let form:string = "text";
    export let title:boolean = false;
    export let id:string = "";
    export let text:string = "";
    export let value: any;
    export let options = [];
    export let disabled: boolean = false;
    export let placeholder: string = "";
    function numField(e) {
            if (e.key <= 9 || e.key === "Backspace" || e.key === "Tab") {
                return
            } else {
                e.preventDefault();
            }
        }
    import "../../scss/styles.scss";
</script>

<style lang="scss">
    @import "../../scss/util/index.scss";
    div {
        width: 100%;
        &.title{
            margin-bottom: .7rem;
        }
        input, select {
            padding: 0.8rem;
            border-radius: 5px;
            font-weight: bold;
            width: 100%;
            height: 3.5rem;
            &.Dark {
                background-color: lighten($color: $bgColorDark, $amount: 7);
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


    select{
        border: none;
        margin: 0;
        font-size: 1.1rem;
        height: 3.5rem;
    }
    input[type="number"]{
                appearance: textfield;
            }
</style>



<div class:title={title}>
    <label {disabled} for={id}><Text {disabled} size="p" title {text}/></label>
{#if form === "text"}
    <input {disabled} class="{$globalStore.theme}" {id} type="text"  {placeholder} bind:value={value} />
{:else if form === "number"}
    <input {disabled} class="{$globalStore.theme}" on:keypress={numField} {id} type="number" {placeholder}  bind:value={value} />
{:else if form === "date"}
    <input {disabled} {id} type="date" {placeholder}  bind:value={value}/>
    {:else if form === "select"}
    <select class="{$globalStore.theme}" bind:value={value}>
        {#each options as val }
            <option value={val.value} on:click>{val.text}</option>
        {/each}
    </select>
{/if}
</div>