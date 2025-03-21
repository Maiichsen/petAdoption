<script setup>
import { usePetStore } from '@/stores/PetStore';

// FORSÆT HER!!! 
const petStore = usePetStore();
const pet = petStore.getPet($route.params.id);
console.log(pet)
</script>

<template>
    <div>
Pet details
{{ $route.params.id }}
    </div>
</template>



<style lang="scss" scoped>

</style>