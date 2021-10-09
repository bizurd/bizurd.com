<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    text: string
    color: string
    as: string
  }>(),
  { color: 'brand-mixed', as: 'span' }
)

const gradientStops = computed(() => {
  return {
    'brand-mixed': 'from-purple-600 via-blue-400 to-purple-600',
    'brand-blue': 'from-blue-400 via-blue-700 to-blue-400',
    'brand-purple': 'from-purple-500 via-purple-800 to-purple-500',
  }[props.color]
})
</script>

<template>
  <component :is="as" class="relative inline-block">
    <h1 v-motion class="relative z-10 text-gray-900 opacity-90">
      {{ text }}
    </h1>
    <h1
      v-motion
      :initial="{
        backgroundPosition: '0% 0%',
      }"
      :enter="{
        backgroundPosition: '100% 0%',
        transition: {
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 2000,
        },
      }"
      style="background-size: 200% 100%"
      :class="`
        absolute
        z-0
        top-0
        text-transparent
        bg-clip-text bg-gradient-to-r
        filter
        blur-lg
        brightness-150
        ${gradientStops}
      `"
    >
      {{ text }}
    </h1>
  </component>
</template>
