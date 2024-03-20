<template>
  <div class="bg-[#0c0d19] absolute w-full h-screen -z-50">
    <NuxtPage />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Bellefair&display=swap");
* {
  color: #fff;
  font-family: "Barlow", sans-serif;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
