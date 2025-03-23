<script setup>
import { ref } from 'vue';
import { usePetStore } from '@/stores/PetStore';

const petStore = usePetStore();

const name = ref('');
const type = ref('');
const age = ref('');
const description = ref('');

const onCreatePet = async () => {
    await petStore.createPet({
        name: name.value,
        type: type.value,
        age: age.value,
        description: description.value,
    })

    name.value = "";
    type.value = "";
    age.value = "";
    description.value = "";
};
</script>

<template>
    <div>
<h1>Add pets</h1>
<form @submit.prevent="onCreatePet">
    <input v-model="name" type="text" placeholder="name">
    <input v-model="type" type="text" placeholder="type">
    <input v-model="age" type="text" placeholder="age">
    <input v-model="description" type="text" placeholder="description">
    <button type="submit">Create</button>
</form>
<!-- <router-link to="/">Back to Home</router-link> -->
    </div>
</template>



<style lang="scss" scoped>

</style>