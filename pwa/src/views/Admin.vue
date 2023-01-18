<template>
    <div class="app">
        <p class="text-red-600">Admin</p>
        <AdminNavBar></AdminNavBar>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import  AdminNavBar  from '../components/admin/navbar.vue'
export default {
    name: 'Admin',
    components: {
        AdminNavBar
    }
}
</script>