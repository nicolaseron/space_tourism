import data from "../src/data.json";
import { defineStore } from "pinia";
export const technologyStore = defineStore("myTechnologyStore", () => {
  const { name, images, description } = data.technology[0];
  const title = ref(name);
  const img = ref(images.portrait);
  const desc = ref(description);
  const activeButton = ref(0);
  const windowWidth = ref(0);

  function changeTechnology(i: number) {
    const { name, images, description } = data.technology[i];
    title.value = name;
    if (windowWidth.value && windowWidth.value <= 1040) {
      img.value = images.landscape;
    } else {
      img.value = images.portrait;
    }
    desc.value = description;
    activeButton.value = i;
  }

  watch(windowWidth, () => {
    changeTechnology(activeButton.value);
  });

  onMounted(() => {
    if (process.client) {
      windowWidth.value = window.innerWidth;
      window.addEventListener("resize", () => {
        windowWidth.value = window.innerWidth;
      });
    }
  });

  return { title, img, desc, activeButton, changeTechnology };
});
