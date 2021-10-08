<template>
  <h1
    v-motion
    class="font-extrabold text-8xl"
    :initial="{
      x: -100,
      opacity: 0.3,
    }"
    :enter="{
      x: 0,
      opacity: 1,
    }"
  >
    Bizurd
  </h1>
</template>
