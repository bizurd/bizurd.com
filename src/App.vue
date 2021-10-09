<script setup lang="ts">
import BizurdTitle from './components/BizurdTitle.vue'
import BizurdExplanation from './components/BizurdExplanation.vue'
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
    <div class="flex flex-col items-center">
      <header class="flex items-center">
        <BizurdTitle />
        <HandWave class="ml-4" />
      </header>

      <BizurdExplanation class="mt-3 md:mt-8" />

      <p class="text-xl md:text-2xl text-gray-900 mt-6 md:mt-12 font-extrabold">
        Coming soon!! 😉
      </p>
    </div>
  </main>
</template>
