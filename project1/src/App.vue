<template>
    <div id="app">
        <router-link to="/allorders"></router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "app",
    data(){
        return{
            user_name: "User",
            page_name: "yyyy"
        }
    },
}
</script>
