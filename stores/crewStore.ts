import data from "../src/data.json";
import { defineStore } from "pinia";
export const crewStore = defineStore("myCrewTemplate", () => {
  const { name, role, images, bio } = data.crew[0];
  const title = ref(name);
  const grade = ref(role);
  const img = ref(images.png);
  const desc = ref(bio);
  const activeButton = ref(0);
  function changePersonInCrew(i: number) {
    const { name, role, images, bio } = data.crew[i];
    title.value = name;
    grade.value = role;
    img.value = images.png;
    desc.value = bio;
    activeButton.value = i;
  }
  return { title, grade, img, desc, activeButton, changePersonInCrew };
});
