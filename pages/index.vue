<template>
  <main>
    <img
      :src="store.bgFont"
      id="bg_font"
      class="w-full h-screen absolute -z-10"
    />
    <nuxt-layout />
    <section
      class="flex items-center justify-between max-[1024px]:flex-col max-[1024px]:text-center"
    >
      <div
        id="content_text"
        class="pt-52 ml-[10.5rem] max-[1024px]:m-auto max-[1024px]:pt-14"
      >
        <h2 class="text-[28px] max-[1024px]:text-[20px] text-[#D0D6F9]">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1
          class="text-[150px] ml-1 font-[bellefair] max-[1024px]:text-[120px] max-[480px]:text-[80px]"
        >
          SPACE
        </h1>
        <p
          class="max-w-[450px] text-[#D0D6F9] leading-7 text-[18px] max-[480px]:mx-4"
        >
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <nuxt-link
        to="/destination"
        id="btn"
        class="bg-white text-black rounded-full h-1 w-1 flex justify-center items-center p-36 text-[32px] right-64 top-48 relative max-[1650px]:right-24 font-[bellefair] max-[1024px]:right-0 max-[1024px]:top-16 max-[1024px]:p-24"
        >EXPLORE</nuxt-link
      >
    </section>
  </main>
</template>
<script setup lang="ts">
const store = myStore();
const imageSources = {
  small: "_nuxt/assets/home/background-home-mobile.jpg",
  medium: "_nuxt/assets/home/background-home-tablet.jpg",
  large: "_nuxt/assets/home/background-home-desktop.jpg",
};
store.setData(imageSources);
</script>
<style scoped>
a:hover {
  animation: hoverBtn 0.5s ease-out forwards;
}
@media (max-height: 1080px) {
  #content_text {
    padding-top: 8rem;
  }
  #btn {
    top: 5rem;
  }
  @media (max-height: 1080px) and (max-width: 1024px) {
    #content_text {
      padding-top: 3rem;
    }
    #btn {
      top: 3rem;
    }
  }
  @media (max-height: 750px) and (max-width: 1024px) {
    #content_text {
      padding-top: 1rem;
    }
    #btn {
      top: 1rem;
    }
  }
  @media (max-height: 660px) {
    #content_text {
      padding-top: 1rem;
    }
    #btn {
      top: 1rem;
    }
  }
  @media (max-height: 700px) {
    #bg_font {
      height: auto;
    }
   
  }
}
@keyframes hoverBtn {
  from {
    box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.14);
    -webkit-box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.14);
    -moz-box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.14);
  }
  to {
    box-shadow: 0px 0px 0px 69px rgba(255, 255, 255, 0.14);
    -webkit-box-shadow: 0px 0px 0px 69px rgba(255, 255, 255, 0.14);
    -moz-box-shadow: 0px 0px 0px 69px rgba(255, 255, 255, 0.14);
  }
}
</style>
