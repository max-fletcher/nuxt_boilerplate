<template>
  <div>
    <TopNav />
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
  const route = useRoute()
</script>