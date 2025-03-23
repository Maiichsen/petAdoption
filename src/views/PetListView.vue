<script setup>
import { usePetStore } from '@/stores/PetStore';


const petStore = usePetStore();
</script>

<template>
    <h1>Pet List</h1>
    <table class="pet-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Age</th>
                    <th>Adopted</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pet in petStore.pets" :key="pet.id">
                    <td>{{ pet.name }}</td>
                    <td>{{ pet.type }}</td>
                    <td>{{ pet.age }}</td>
                    <td>{{ pet.adopted ? 'Yes' : 'No' }}</td>
                    <td>
                        <router-link :to="'/pet/' + pet.id">Read more</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
</template>



<style lang="scss" scoped>
.pet-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.pet-table th, .pet-table td {
    border: 1px solid #838383;
    padding: 8px;
    text-align: left;
}

.pet-table th {
    background-color: #6b6b6b;
    font-weight: bold;
}

.pet-table tr:nth-child(even) {
    background-color: #1f1f1f;;
}


</style>