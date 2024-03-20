<template>
  <main>
    <img :src="store.bgFont" class="w-full h-screen absolute -z-10" />
    <nuxt-layout />
    <h1
      class="ml-[10.5rem] my-20 text-3xl font-extralight font-[barlow] tracking-widest max-[1224px]:ml-12 max-[1224px]:my-8 max-[1224px]:text-xl"
    >
      <span class="text-[#46474a] font-bold mr-4">01</span>PICK YOUR DESTINATION
    </h1>
    <div class="flex items-center justify-center">
      <destination-template />
    </div>
  </main>
</template>
<script setup lang="ts">
const store = myStore();
const imageSources = {
  small: "_nuxt/assets/destination/background-destination-mobile.jpg",
  medium: "_nuxt/assets/destination/background-destination-tablet.jpg",
  large: "_nuxt/assets/destination/background-destination-desktop.jpg",
};
store.setData(imageSources);
</script>
<style scoped></style>
