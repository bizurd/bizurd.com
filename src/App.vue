<script setup lang="ts">
import BizurdTitle from './components/BizurdTitle.vue'
import HandWave from './components/HandWave.vue'
</script>

<template>
  <main
    class="
      h-screen
      w-full
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-purple-700
      to-blue-500
    "
  >
    <header class="text-center">
      <div class="flex items-center">
        <BizurdTitle />
        <HandWave class="ml-4" />
      </div>

      <p class="font-extrabold text-2xl">
        <span>Absurd</span>
        <span>+</span>
        <span>Bizarre</span>
        <span>=</span>
        <span>Bizurd</span>
      </p>
    </header>
  </main>
</template>
