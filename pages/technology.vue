<template>
  <main>
    <img :src="store.bgFont" class="w-full h-screen absolute -z-10" />
    <nuxt-layout />
    <h1
      class="ml-[10.5rem] my-20 text-3xl font-extralight font-[barlow] tracking-widest max-[1370px]:ml-12 max-[1370px]:my-8 max-[1370px]:text-xl max-[1040px]:my-0 max-[1040px]:mt-4"
    >
      <span class="text-[#46474a] font-bold mr-4">03</span> SPACE LAUNCH 101
    </h1>
    <technology-template
      class="ml-[10.5rem] max-[1370px]:ml-10 max-[1040px]:ml-0"
    />
  </main>
</template>
<script setup lang="ts">
const store = myStore();
const imageSources = {
  small: "_nuxt/assets/technology/background-technology-mobile.jpg",
  medium: "_nuxt/assets/technology/background-technology-tablet.jpg",
  large: "_nuxt/assets/technology/background-technology-desktop.jpg",
};
store.setData(imageSources);
</script>
