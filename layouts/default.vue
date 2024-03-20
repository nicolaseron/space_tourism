<template>
  <nav class="pt-10 pl-10">
    <div class="flex items-center justify-between">
      <img src="../assets/shared/logo.svg" />
      <div
        class="w-[37%] ml-32 border absolute z-10 border-[#363636] max-[1400px]:hidden"
      ></div>
      <div
        class="flex items-center gap-20 backdrop-blur-2xl min-w-[58%] bg-opacity-10 py-8 pl-44 pr-4 bg-[#47474715] max-lg:pl-4 max-[850px]:gap-5 max-[850px]:justify-center tracking-widest text-lg max-[600px]:hidden"
      >
        <NuxtLink to="/" class="linkNav relative" activeClass="navBar">
          <span class="font-extrabold font-[barlow] mr-2 max-lg:hidden"
            >00</span
          >
          HOME
        </NuxtLink>
        <NuxtLink
          to="/destination"
          class="linkNav relative"
          activeClass="navBar"
          ><span class="font-extrabold mr-2 max-lg:hidden">01</span>
          DESTINATION</NuxtLink
        >
        <NuxtLink to="/crew" class="linkNav relative" activeClass="navBar"
          ><span class="font-extrabold mr-2 max-lg:hidden">02</span>
          CREW</NuxtLink
        >
        <NuxtLink to="/technology" class="linkNav relative" activeClass="navBar"
          ><span class="font-extrabold mr-2 max-lg:hidden">03</span>
          TECHNOLOGY</NuxtLink
        >
      </div>
      <div
        :class="{ active: isActive }"
        class="h-screen w-1/2 fixed top-0 backdrop-blur-3xl z-20 -right-1/2 sideNav hidden max-[600px]:block"
      >
        <img
          class="absolute cursor-pointer right-7 top-7"
          @click="toggleActive"
          src="../assets/shared/icon-close.svg"
          alt=""
        />
        <ul class="pt-36">
          <li>
            <NuxtLink to="/">
              <span class="font-extrabold mr-2">00</span> HOME
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/destination"
              ><span class="font-extrabold mr-2">01</span> DESTINATION</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/crew"
              ><span class="font-extrabold mr-2">02</span> CREW</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/technology"
              ><span class="font-extrabold mr-2">03</span> TECHNOLOGY</NuxtLink
            >
          </li>
        </ul>
      </div>
      <img
        class="hidden max-[600px]:block pr-10 cursor-pointer"
        src="../assets/shared/icon-hamburger.svg"
        v-if="!isActive"
        @click="toggleActive"
        alt=""
      />
    </div>
  </nav>
</template>
<script setup lang="ts">
const isActive = ref(false);
function toggleActive() {
  isActive.value = !isActive.value;
}
</script>
<style scoped>
.navBar.router-link-exact-active {
  position: relative;
}
.navBar.router-link-exact-active::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -32px;
  background-color: #fff;
}

.linkNav:hover:not(.navBar.router-link-exact-active)::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -32px;
  background-color: #ffffff59;
}
.sideNav {
  transition: right 0.5s ease;
}
.sideNav.active {
  right: 0;
}
.sideNav a {
  padding: 20px 30px;
  font-size: 20px;
  display: block;
}
</style>
