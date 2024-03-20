import data from "../src/data.json";
import { defineStore } from "pinia";
export const destinationStore = defineStore("myDestinationStore", () => {
  const { name, description, distance, travel, images } = data.destinations[0];
  const title = ref(name);
  const desc = ref(description);
  const dist = ref(distance);
  const voyage = ref(travel);
  const img = ref(images.netlify.baseURL);
  const activeIndex = ref(0);
  function updateElem(i: number) {
    const { name, description, distance, travel, images } =
      data.destinations[i];
    title.value = name;
    desc.value = description;
    dist.value = distance;
    voyage.value = travel;
    img.value = images.png;
    activeIndex.value = i;
  }
  return { title, desc, dist, voyage, img, activeIndex, updateElem };
});
