<script setup>

</script>


<template>
 <div class="menu">
        <a href="/pets" class="menu-link">Pets</a>
        <a href="/add" class="menu-link">Add</a>
    </div>
</template>

<style lang="scss" scoped>
.menu {
    display: flex;
    gap: 10px; /* Giver afstand mellem links */
}

.menu-link {
    text-decoration: none; 
    color: white; 
    background-color: deeppink; 
    padding: 10px 15px; 
    border-radius: 5px; 
    transition: background-color 0.3s ease;
}

.menu-link:hover {
    background-color: hotpink; 
}
</style>