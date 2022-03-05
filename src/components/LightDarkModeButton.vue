<script setup>
import IconSun from "./icons/IconSun.vue";
import IconMoon from "./icons/IconMoon.vue";
</script>

<template>
    <div id="light-dark-mode-button-container" >
        <button 
            id="light-dark-mode-button" 
            :class="{'button-light-mode' : isLightMode, 'button-dark-mode' : !isLightMode}"
            @click="toggleColorScheme"
        >
            <IconSun class="light-dark-mode-icon light-mode-icon" v-if="isLightMode" />
            <IconMoon class="light-dark-mode-icon dark-mode-icon" v-else-if="!isLightMode" />
        </button>
    </div>
</template>
<script>
export default {
    name: 'LightDarkModeButton',
    data: function() {
        return {
            isLightMode: true
        }
    },
    methods: {
        toggleColorScheme: function() {
            this.isLightMode = !this.isLightMode
            this.$emit('toggleColorScheme')
        }
    },
}
</script>
<style lang="css">
    /* Global */

    /* Elements */

    /* Classes */
    .button-light-mode {
        background-color: var(--color-card-light) !important;
        box-shadow: 0px 0px 5px 3px #d7d7d7;
        border: none;
    }
    .button-dark-mode {
        background-color: var(--color-card-dark) !important;
        box-shadow: 0px 0px 5px 3px #202020;
        border: none;
    }
    .light-mode-icon {
        fill: var(--color-text-light)
    }
    .dark-mode-icon {
        fill: var(--color-text-dark);
    }
    .light-dark-mode-icon {
        height: 30px;
        width: 30px;
    }

    /* Id */
    #light-dark-mode-button-container {
        position: absolute;
        bottom: 40px;
        right: 40px;
    }
    #light-dark-mode-button {
        padding: 10px;
        border-radius: 100%;
        display: flex;
        transition: all 300ms ease-in-out;
    }

    .button-light-mode:hover {
        transition: all 300ms ease-in-out;
        background-color: #bebebe !important;
    }
    .button-dark-mode:hover {
        transition: all 300ms ease-in-out;
        background-color: #303030 !important;
    }
    
    /* Media Queries */
    
</style>