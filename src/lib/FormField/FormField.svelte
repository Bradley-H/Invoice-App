<script lang="ts">
// COMPONENTS //
    import Text from "$lib/Text/Text.svelte";
// STORES //
    import { globalStore } from "../../store/globalStore";
// VARIBLES //
$: theme = $globalStore.theme
// PROPS //
    export let form:string = "text";
    export let title:boolean = false;
    export let id:string = "";
    export let text:string = "";
    export let value: any;
    export let options = [];
    export let valid: boolean = false;
    export let disabled: boolean = false;
    export let placeholder: string = "";
    export let invalidMessage: string = "";
    function numField(e) {
        // CHECK IF IT'S A NUMBER //
        if (e.target.value.match(/^[0-9]*$/)) {
            // IF IT IS, SET VALUE //
            value = e.target.value;
            // SEE IF IT'S A STRING WITH A FLOATING POITN NUMBER //
        } else if (e.target.value.match(/^[0-9]*\.[0-9]*$/)) {
            // IF IT IS, SET VALUE //
            value = e.target.value;
            // IF IT'S NOT A NUMBER, SET VALUE TO 0 //
        } else {
            value = 0;
        } 
    }
    import "../../scss/styles.scss";

   let touched = false;
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
            height: 3.8rem;
            &.invalid{
                border: 1px solid $colorDanger;
            }
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

    p{
        display: none;
        color: $colorDanger;
        margin: .3rem 0;
        &.invalid{
            display: block;
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
    <label {disabled} for={id}> <Text {disabled} size="p" title {text}/></label>
{#if form === "text"}
    <input {disabled} class="{theme}" class:invalid={!valid && touched} {id} type="text" {placeholder} bind:value={value} on:blur={() => touched = true} />
{:else if form === "number"}
    <input {disabled} class="{theme}" class:invalid={!valid && touched} on:keydown={numField} {id} type="number" {placeholder} on:blur={() => touched = true}  bind:value={value} />
{:else if form === "date"}
    <input {disabled} {id} type="date" {placeholder} class:invalid={!valid}  bind:value={value}/>
    {:else if form === "select"}
    <select class="{theme}" bind:value={value}>
        {#each options as val }
            <option value={val.value} on:click>{val.text}</option>
        {/each}
    </select>
{/if}
{#if invalidMessage && !valid && touched}
<p class:invalid={!valid}>{invalidMessage}</p>
{/if}
</div>