<template>
  <div>
    <TopNav />
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute()
</script>