<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LightDarkModeButton from '@/components/LightDarkModeButton.vue'
import { onUpdated } from '@vue/runtime-core'
</script>

<template>
  <div 
    id="app-container" 
    :class="{'app-container-light' : isLightMode, 'app-container-dark' : !isLightMode}"
  >
    <RouterView />
    <light-dark-mode-button @toggleColorScheme="toggleColorSchemeApp()"/>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      isLightMode: true
    }
  },
  methods: {
    toggleColorSchemeApp: function() {
      this.isLightMode = !this.isLightMode;
    }
  },
  
}
</script>

<style>
@import '@/assets/base.css';

#app {
  height: 100vh;
  width: 100vw;
}
#app-container {
  height: 100%;
  width: 100%;
  position: relative;
}
.card{
  max-width: 360px;
  padding: 1.8rem 1.5rem;
  border-radius: 10px;
}

.app-container-light {
  background-color: var(--color-background-light);
  color: var(--color-text-light);
}
.app-container-light .card {
  background-color: var(--color-card-light);
  box-shadow: 0px 0px 5px 3px #d7d7d7;
}

.app-container-dark {
  background-color: var(--color-background-dark);
  color: var(--color-text-dark);
}
.app-container-dark .card {
  background-color: var(--color-card-dark);
  box-shadow: 0px 0px 5px 3px #202020;
}

main {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
