<template>
  <div>
    <header class="p-4 bg-gray-800 text-2xl font-bold text-cyan-400">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div class="flex lg:flex-1">
          <img width="50" src="/icons/android-chrome-192x192.png" alt="Spearhead Logo" />
          <span class="ms-3 mt-2">
            TopNav
          </span>
        </div>
        <div class="hidden sm:flex lg:gap-x-12">
          <div class="text-sm font-semibold leading-6 mx-1">asdawd</div>
          <div class="text-sm font-semibold leading-6 mx-1">asdawd</div>
          <div class="text-sm font-semibold leading-6 mx-1">asdawd</div>
          <div class="text-sm font-semibold leading-6 mx-1">asdawd</div>
        </div>
        <div class="flex flex-1 justify-end align-baseline">
          <button @click="isDark = !isDark" class="mb-1">
            <Icon v-if="isDark" size="32" name="jam:sun" />
            <Icon v-else size="32" name="jam:moon" />
          </button>
          <button @click="$generalStore.isMainSidebarOpen = true" class="ms-3">
            <Icon size="40" name="iconamoon:menu-burger-horizontal" />
          </button>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
  // FOR TOGGLING DARK MODE
  const colorMode = useColorMode()
  const isDark = computed({
    get () {
      return colorMode.value === 'dark'
    },
    set () {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
      console.log(colorMode.preference);
    }
  })

  import { storeToRefs } from 'pinia'

  const { $generalStore } = useNuxtApp()
  const { isMainSidebarOpen } = storeToRefs($generalStore)

</script>

<style lang="scss" scoped>

</style>