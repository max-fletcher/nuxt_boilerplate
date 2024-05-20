<template>
  <div class="w-56 px-1 py-5">
    <div class="items-top flex gap-x-2">
      <Checkbox id="terms1" :checked="proxyValue" @update:checked="handleChange" />
      {{ proxyValue }}
      <div class="grid gap-1.5 leading-none">
        <label
          for="terms1"
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <p class="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>

      <div v-if="errorMessage" class="text-red-500 mt-1 ml-2">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Checkbox } from '@/components/ui/checkbox'

const props = defineProps<{
  handleChange: Function,
  defaultValue?: string | number
  // modelValue?: string | number
  // value: string,
  errorMessage?: string
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

// const emit = defineEmits(['update:modelValue'])

const proxyValue = defineModel()
</script>