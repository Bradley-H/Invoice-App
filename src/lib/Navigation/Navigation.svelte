<script lang="ts">
    // STORES //
    import { globalStore } from "../../store/globalStore";
    // SCSS DEFINITIONS //
    import "../../scss/styles.scss";
    // VARIABLES //
    let icon = "moon"
    // FUNCTIONS //
    function themeSwitch(){
        if($globalStore.theme === "Dark"){
            $globalStore.theme = "Light";
            document.querySelector("body").classList.remove("bgColorDark");
            document.querySelector("body").classList.add("bgColorLight");
            icon = "sun";
        } else {
            $globalStore.theme = "Dark";            
            document.querySelector("body").classList.add("bgColorDark");
            document.querySelector("body").classList.remove("bgColorLight");
            icon = "moon";
        }
    }    
</script>

<style lang="scss">
    @import "../../scss/util/index";

    nav {
        display: flex;
        height: $navHeight;
        width: 100%;
        background-color: $colorDarker;
        z-index: 3;
        @include laptopUp {
            flex-direction: column;
            height: 100%;
            width: $navWidth;
            position: fixed;
            left: 0;
            top: 0;
        }
        .settings {
            @include centered;
            flex-direction: row;
            color: white;
            height: 100%;
            font-size: toRem(28);
            margin: 0 0 0 auto;
            @include laptopUp{
                flex-direction: column;
                width: $navWidth;
                height: 100%;
                margin: auto 0 0 0;
            }
            i {
                cursor: pointer;
                @include centered;
                height: 100%;
                width: 100%;
            }
            .themeSwitcher {
                border-right: 2px solid rgba($color: grey, $alpha: 0.6);
                height: 100%;
                padding:0 toRem(25) 0 toRem(25);
                @include laptopUp{
                    border-bottom: 2px solid rgba($color: grey, $alpha: 0.6);
                    border-right: none;
                    width: $navWidth;
                    padding: 0 0 toRem(33) 0;
                    margin-top: auto;
                    height: 0;
                }
            }
            .avatar {
                padding: 0 toRem(25);
                @include laptopUp{
                    padding: toRem(20) 0 toRem(15) 0;
                }
            }
        }
    }

    a {
        @include centered;
        background-color: $colorLight;
        color: white;
        width: $navWidth;
        height: $navHeight;
        font-size: toRem(25);
        border-radius: 0 12px 12px 0;
        transition: transform 0.7s ease-in-out;
        &:hover {
            transform: scale(1.1);
        }
    }
</style>



<nav>
    <a on:click={() => $globalStore.modalStatus = null ? "" : $globalStore.modalStatus = null} href="/"><i class="fas fa-home"></i></a>
    <div class="settings">
        <div class="themeSwitcher">
           <i on:click={themeSwitch} class="fas fa-{icon}">
        </div>
        <div class="avatar">
            <i class="fas fa-user-circle"/>
        </div>
    </div>
</nav>