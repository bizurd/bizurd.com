<script setup lang="ts">
import StyledGlowingText from './Styled/StyledGlowingText.vue'
</script>

<template>
  <p class="font-extrabold text-2xl md:text-4xl text-gray-900">
    <StyledGlowingText text="Absurd" color="brand-blue" />
    <span class="mx-3">+</span>
    <StyledGlowingText text="Bizarre" color="brand-purple" />
    <span class="mx-3">=</span>
    <StyledGlowingText text="Bizurd" />
  </p>
</template>
