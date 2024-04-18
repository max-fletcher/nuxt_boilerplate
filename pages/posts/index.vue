<template>
  <div class="bg-slate-200 dark:bg-gray-800 text-slate-800 dark:text-cyan-400">
    All Posts Table
  </div>
</template>

<script setup>
  definePageMeta({
    // NOTICE THAT THE LAYOUT COMPONENT IS NAMED MainLayout BUT HERE WE ARE CALLING IT main-layout. THIS IS BECAUSE WE CAN'T USE UNDERSCORES AND CAPITALS HERE AND ANY CAMELCASE IS PARSED AS 
    // KEBAB-CASE BY NUXT FOR DEFINE-COMPOSABLES
    layout: 'main-layout',
  })

  

</script>

<style lang="scss" scoped>

</style>