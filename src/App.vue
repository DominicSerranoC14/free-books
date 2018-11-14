<template>
    <div id="app">
        <navbar :is-authed="isAuthed"/>

        <div class="app-container my-4">
            <loader v-if="loading"/>

            <router-view v-else />
        </div>
    </div>
</template>

<script>
import Navbar from "@/Components/Pages/Navbar.vue";
import Loader from "@/Components/Global/Loader.vue";
import authMixin from "@/Services/Firebase/auth";

export default {
    name: "App",

    components: {
        Loader,
        Navbar
    },

    mixins: [authMixin],

    data() {
        return {
            isAuthed: false,
            loading: true
        };
    },

    async created() {
        this.loading = true;
        // Set auth listeners
        this.$setAuthStateChangedListener();
        await this.$setGoogleRedirectListener();

        this.loading = false;
    }
};
</script>

<style lang="scss" scoped>
.app-container {
    width: 80vw;
    margin: auto;
}
</style>


