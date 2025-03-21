<script setup>
import { usePetStore } from '@/stores/PetStore';


const petStore = usePetStore();
</script>

<template>
    <div v-for="pet in petStore.pets">
{{ pet.name }}
{{ pet.type }}
{{ pet.age }}
{{ pet.adopted }}
{{ pet.id }}
<router-link :to="'/pet/' + pet.id"><a >Read more ></a></router-link>
    </div>
</template>



<style lang="scss" scoped>

</style>