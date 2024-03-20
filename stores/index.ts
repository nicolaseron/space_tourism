import { defineStore } from "pinia";

export const myStore = defineStore("myTestStore", () => {
  const viewport = useViewport();
  interface ImageSources {
    small: string;
    medium: string;
    large: string;
  }
  let imageSources!: ImageSources;
  const bgFont = ref();
  function setData(data: ImageSources) {
    imageSources = data;
    changeBgFont();
  }
  function changeBgFont() {
    if (viewport.isLessThan("mobileWide")) {
      bgFont.value = imageSources.small;
    } else if (viewport.isLessThan("desktop")) {
      bgFont.value = imageSources.medium;
    } else {
      bgFont.value = imageSources.large;
    }
  }
  onMounted(changeBgFont);
  watch(viewport.breakpoint, changeBgFont);
  return { changeBgFont, bgFont, imageSources, setData };
});
