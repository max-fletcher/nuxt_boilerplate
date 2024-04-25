<template>
  <div>
    <header class="p-4 text-2xl font-bold bg-slate-200 dark:bg-gray-800 text-slate-800 dark:text-cyan-400">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <NuxtLink class="flex" to="/">
          <img width="50" src="/icons/android-chrome-192x192.png" alt="Spearhead Logo" />
          <span class="ms-3 mt-2">
            TopNav
          </span>
        </NuxtLink>
        <div class="hidden sm:flex sm:gap-x-6 lg:gap-x-12">
          <NuxtLink class="text-sm font-semibold leading-6 mx-1" to="/posts">Posts</NuxtLink>
          <NuxtLink class="text-sm font-semibold leading-6 mx-1" to="/posts/create">Create Post</NuxtLink>
          <div class="text-sm font-semibold leading-6 mx-1">asdawd</div>
          <div class="text-sm font-semibold leading-6 mx-1">asdawd</div>
        </div>
        <div class="flex justify-end align-baseline">
          <button class="mb-1" @click="isDark = !isDark">
            <Icon v-if="isDark" size="32" name="jam:sun" />
            <Icon v-else size="32" name="jam:moon" />
          </button>
          <button class="ms-3 hidden md:block" @click="$generalStore.isMainSidebarOpen = true">
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