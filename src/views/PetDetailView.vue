<script setup>
import { usePetStore } from '@/stores/PetStore';
import { useRoute } from 'vue-router';
const route = useRoute()

const petStore = usePetStore();
const pet = petStore.getPet(route.params.id);
console.log("Pet",pet)


</script>

<template>
    <div>
      <h1>Pet Details</h1>
      <div v-if="pet">
        <p>Name: {{ pet.name }}</p>
        <p>Type: {{ pet.type }}</p>
        <p>Age: {{ pet.age }}</p>
        <p>Description: {{ pet.description }}</p>
        <p>Adopted: {{ pet.adopted }}</p>
      </div>
      <div v-else>
        <p>Loading pet details...</p>
      </div>
    </div>
  </template>



<style lang="scss" scoped>

</style>