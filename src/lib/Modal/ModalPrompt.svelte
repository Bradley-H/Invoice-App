<script lang="ts">
    // COMPONENTS //
        import InnerCard from '../Card/InnerCard.svelte';
        import Text from '../Text/Text.svelte';
        import Button from '../Button/Button.svelte'
    // CREATE EVENT DISPATCHER //
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();
    // PROPS //
    export let text;
    // SVELTE IMPORTS //
    import {scale, fade} from 'svelte/transition'
    // FUNCTIONS // 
    function decline(){
        dispatch('decline', false);
    }

    function accept(){
        dispatch('accept', false);
    }
    // SCSS DEFINITIONS  //
        import "../../scss/styles.scss"; 
</script>


<style lang="scss">
    @import "../../scss/util/index";
    // prompt is centered //
    .prompt {
        @include centered;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        max-width: 600px;
        z-index: 5;
        padding: 1.5rem;
        text-align: center;
    }

    .overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 4;
    }

    .btns{
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }
</style>

<div class="prompt" transition:scale={{duration: 400}}>
    <InnerCard modal>
       <Text size="h3" {text}/>
       <div class="btns">
           <Button type="secondary" text="Yes" on:click={accept}/>
           <Button type="danger" text="No" on:click={decline}/>
       </div>
    </InnerCard>
</div>

<div class="overlay" in:fade={{duration: 400}} out:fade={{duration: 200}}></div>