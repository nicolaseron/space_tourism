<template>
  <main
    class="mt-28 max-[1280px]:m-auto max-[1280px]:mt-5 max-[1280px]:text-center"
  >
    <div>
      <h1 class="text-3xl uppercase font-light text-[#8f9095] font-[bellefair]">
        {{ store.grade }}
      </h1>
      <h2
        class="text-6xl uppercase mt-7 mb-10 font-[bellefair] max-[1280px]:my-4 max-[1280px]:text-5xl max-[600px]:mx-4 max-[500px]:text-4xl"
      >
        {{ store.title }}
      </h2>
      <p
        class="max-w-[450px] text-[#d0d6f9] leading-7 text-[18px] max-[1280px]:m-auto max-[1280px]:text-base max-[480px]:mx-4"
      >
        {{ store.desc }}
      </p>
      <div
        class="flex gap-5 fixed bottom-32 max-[1280px]:static max-[1280px]:justify-center max-[1280px]:mt-4"
      >
        <button
          @click="changePerson(0)"
          :class="{ active: store.activeButton === 0 }"
        ></button>
        <button
          @click="changePerson(1)"
          :class="{ active: store.activeButton === 1 }"
        ></button>
        <button
          @click="changePerson(2)"
          :class="{ active: store.activeButton === 2 }"
        ></button>
        <button
          @click="changePerson(3)"
          :class="{ active: store.activeButton === 3 }"
        ></button>
      </div>
    </div>
    <NuxtImg
      class="fixed bottom-0 right-64 max-[1500px]:right-10 max-[1280px]:right-1/2 max-[1280px]:translate-x-1/2 max-[1280px]:bottom-0 max-[1280px]:h-2/5"
      :src="store.img"
    />
  </main>
</template>
<script setup lang="ts">
const store = crewStore();
function changePerson(i: number) {
  store.changePersonInCrew(i);
}
</script>
<style scoped>
button {
  width: 15px;
  height: 15px;
  background-color: #363841;
  border-radius: 100%;
}
button:not(.active):hover {
  background-color: #626676;
}
.active {
  background-color: #fff;
}
</style>
