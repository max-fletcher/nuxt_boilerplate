<template>
  <div class="w-56 px-1 py-5">
    <Input v-model="proxyValue" :class="class" />
    <div v-if="errorMessage" class="text-red-500 mt-1 ml-2">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  errorMessage?: string
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

// const modelValue = useVModel(props, 'modelValue', emits, {
//   passive: true,
//   defaultValue: props.defaultValue,
// })
const proxyValue = defineModel()
</script>