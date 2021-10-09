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
    <header class="text-center">
      <div class="flex items-center">
        <BizurdTitle />
        <HandWave class="ml-4" />
      </div>

      <BizurdExplanation class="mt-8" />

      <p class="text-2xl text-gray-900 mt-12 font-extrabold">
        Coming soon!! 😉
      </p>
    </header>
  </main>
</template>
