<template>
  <main>
    <NuxtImg :src="store.bgFont" class="w-full h-screen absolute -z-10" />
    <nuxt-layout />
    <h1
      class="ml-[10.5rem] my-20 text-3xl font-extralight font-[barlow] tracking-widest max-[1280px]:ml-12 max-[1280px]:my-4 max-[1280px]:text-xl"
    >
      <span class="text-[#46474a] font-bold mr-4">02</span> MEET YOUR CREW
    </h1>
    <crew-template class="ml-[10.5rem]" />
  </main>
</template>
<script setup lang="ts">
const store = myStore();
const imageSources = {
  small: "crew/background-crew-mobile.jpg",
  medium: "crew/background-crew-tablet.jpg",
  large: "crew/background-crew-desktop.jpg",
};
store.setData(imageSources);
</script>
