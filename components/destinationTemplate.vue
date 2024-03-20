<template>
  <main>
    <div
      class="flex items-center gap-72 max-[1224px]:flex-col max-[1224px]:gap-0 max-[1224px]:text-center"
    >
      <img
        class="max-[1224px]:w-60 max-[1224px]:mb-5 max-[450px]:w-40"
        :src="store.img"
        alt=""
      />
      <div>
        <nav
          class="flex items-center gap-10 text-xl text-[#d0d6f9] max-[1224px]:justify-center max-[370px]:gap-4"
        >
          <button
            @click="updateDisplay(0)"
            :class="{ active: store.activeIndex === 0 }"
            class="max-[1224px]:text-lg"
          >
            MOON
          </button>
          <button
            @click="updateDisplay(1)"
            :class="{ active: store.activeIndex === 1 }"
            class="max-[1224px]:text-lg"
          >
            MARS
          </button>
          <button
            @click="updateDisplay(2)"
            :class="{ active: store.activeIndex === 2 }"
            class="max-[1224px]:text-lg"
          >
            EUROPA
          </button>
          <button
            @click="updateDisplay(3)"
            :class="{ active: store.activeIndex === 3 }"
            class="max-[1224px]:text-lg"
          >
            TITAN
          </button>
        </nav>
        <transition>
          <h1
            class="text-[100px] uppercase mt-7 font-[bellefair] max-[1224px]:text-[60px] max-[1224px]:mt-3 max-[450px]:text-[50px]"
          >
            {{ store.title }}
          </h1>
        </transition>
        <p
          class="max-w-[450px] leading-7 text-[18px] mb-14 text-[#d0d6f9] max-[1224px]:mb-5 max-[1224px]:max-w-[620px] max-[650px]:mx-4"
        >
          {{ store.desc }}
        </p>
        <hr class="border-[#383b4b]" />
        <div
          class="flex items-center gap-28 mt-5 max-[1224px]:justify-center max-[450px]:flex-col max-[450px]:gap-4"
        >
          <div>
            <p class="text-[#d0d6f9] mb-3">AVG. DISTANCE</p>
            <p class="text-3xl uppercase font-[bellefair]">
              {{ store.dist }}
            </p>
          </div>
          <div>
            <p class="text-[#d0d6f9] mb-3">EST. TRAVEL TIME</p>
            <p class="text-3xl uppercase font-[bellefair]">
              {{ store.voyage }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
const store = destinationStore();
function updateDisplay(i: number) {
  store.updateElem(i);
}
</script>
<style scoped>
.active {
  position: relative;
  color: #fff;
}
button {
  position: relative;
}
button:hover:not(.active)::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: -10px;
  background-color: #8b8d92;
}
.active::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: -10px;
  background-color: #fff;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
