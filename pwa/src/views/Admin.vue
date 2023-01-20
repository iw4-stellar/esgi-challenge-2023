<template>
    <div class="app">
        <AdminSideBar></AdminSideBar>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import  AdminSideBar from '../components/admin/Sidebar.vue'
export default {
    name: 'Admin',
    components: {
        AdminSideBar
    }
} 
</script>