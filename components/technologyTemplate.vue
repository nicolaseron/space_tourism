<template>
  <main
    class="flex gap-10 mt-20 max-[1040px]:flex-col max-[1040px]:mt-5 max-[1040px]:text-center max-[1040px]:gap-0"
  >
    <div
      class="flex flex-col items-start mr-10 order-2 max-[1040px]:flex-row max-[1040px]:justify-center max-[1040px]:gap-8 max-[1040px]:mr-0"
    >
      <button
        :class="{ active: store.activeButton === 0 }"
        class="btn"
        @click="changeTech(0)"
      >
        1
      </button>
      <button
        :class="{ active: store.activeButton === 1 }"
        class="btn"
        @click="changeTech(1)"
      >
        2
      </button>
      <button
        :class="{ active: store.activeButton === 2 }"
        class="btn"
        @click="changeTech(2)"
      >
        3
      </button>
    </div>
    <div class="order-3">
      <h1 class="text-xl mt-5 uppercase font-light text-[#d0d6f9]">
        THE TERMINOLOGY...
      </h1>
      <h2
        class="text-6xl uppercase mt-5 mb-5 font-[bellefair] max-[1370px]:text-4xl"
      >
        {{ store.title }}
      </h2>
      <p
        class="text-[#d0d6f9] leading-7 text-[18px] max-w-[445px] max-[1040px]:m-auto max-[1040px]:max-w-[600px] max-[650px]:mx-4"
      >
        {{ store.desc }}
      </p>
    </div>
    <img
      class="absolute right-0 top-64 max-[1370px]:w-96 max-[1040px]:static max-[1040px]:-start-0 order-2 max-[1040px]:order-1 max-[1040px]:w-screen max-[1040px]:h-60"
      :src="store.img"
    />
  </main>
</template>
<script setup lang="ts">
const store = technologyStore();
function changeTech(i: number) {
  store.changeTechnology(i);
}
</script>
<style scoped>
.btn {
  border-radius: 100%;
  border: 1px solid #4d4e56;
  padding: 40px;
  height: 1px;
  width: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin: 15px 0;
}
@media screen and (max-width: 600px) {
  .btn {
    padding: 30px;
    font-size: 20px;
  }
}
.btn:hover {
  border: 1px solid #fff;
}
.active {
  background-color: #fff;
  color: #000;
  border: 1px solid transparent;
}
</style>
