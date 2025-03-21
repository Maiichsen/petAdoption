import { ref } from 'vue';
import { defineStore } from 'pinia';
import * as petService from '@/services/PetService';

export const usePetStore = defineStore('pets', () => {
  const pets = ref([]);

  petService.onUpdate((data) => pets.value = data);

  const createPet = (pets) => {
    return petService.createPet(pets)
  };

  return {
    createPet,
    pets,
  };
});
