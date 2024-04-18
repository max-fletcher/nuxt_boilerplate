<template>
  <div>
    <TopNav />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
  const route = useRoute()
</script>