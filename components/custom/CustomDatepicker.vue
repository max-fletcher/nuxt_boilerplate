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
    // modelValue?: string | number // replaced with defineModel
    errorMessage?: string
    class?: HTMLAttributes['class']
  }>()

  // const emits = defineEmits(['update:modelValue']) // replaced with defineModel

  const proxyValue = defineModel() // has a default if empty. Right now, it is actually defineModel('modelValue')
  // End Date Component

  // For processing defaultValue if provided
  import { CalendarDate } from '@internationalized/date'
  if(props.defaultValue){
    const [year, month, day] = props.defaultValue.split("-").map(item => parseInt(item))
    proxyValue.value = new CalendarDate(year, month, day) // If you want to set a default value
    // proxyValue.value =  // If you want to set a default value
  }

  console.log(proxyValue);
</script>