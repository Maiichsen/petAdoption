import { ref } from 'vue';
import { defineStore } from 'pinia';
import * as petService from '@/services/PetService';

export const usePetStore = defineStore('pets', () => {
  const pets = ref([]);

  petService.onUpdate((data) => pets.value = data);
  petService.getPets().then((data) => {

    pets.value = data;
    console.log("Got data");
  });

  const createPet = (pets) => {
    return petService.createPet(pets)
  };

  const getPet = (id) => {
    console.log("Getting pet");
    return pets.value.find((element) => element.id === id)
  }

  return {
    createPet,
    pets,
    getPet,
  };
});
