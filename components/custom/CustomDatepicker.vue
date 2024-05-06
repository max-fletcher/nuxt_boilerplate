<template>
  <div>
    <Popover>
      <PopoverTrigger as-child>
        <Button
          variant="outline"
          :class="cn(
            'w-[280px] justify-start text-left font-normal',
            !proxyValue && 'text-muted-foreground',
          )"
        >
          <CalendarIcon class="mr-2 h-4 w-4" />
          {{ proxyValue ? df.format(proxyValue.toDate(getLocalTimeZone())) : "Pick a date" }}
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0">
        <Calendar v-model="proxyValue" initial-focus />
      </PopoverContent>
    </Popover>
    {{  }}
    <div v-if="errorMessage" class="text-red-500 mt-1 ml-2">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
  // Date Component
  import {
    DateFormatter,
    type DateValue,
    getLocalTimeZone,
  } from '@internationalized/date'
  import { Calendar as CalendarIcon } from 'lucide-vue-next'
  import { Calendar } from '@/components/ui/calendar'
  import { Button } from '@/components/ui/button'
  import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
  import { cn } from '@/lib/utils'

  const df = new DateFormatter('en-US', {
    dateStyle: 'long',
  })

  const props = defineProps<{
    defaultValue?: string | number
    modelValue?: string | number
    errorMessage?: string
    class?: HTMLAttributes['class']
  }>()

  const emits = defineEmits<{
    (e: 'update:modelValue', payload: string | number): void
  }>()

  const proxyValue = defineModel()
  // End Date Component
</script>