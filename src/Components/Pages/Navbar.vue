<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <span class="navbar-brand">Free Books</span>

        <button 
            class="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"/>
        </button>

        <div 
            id="navbarNav" 
            class="collapse navbar-collapse align-right">
            <ul class="navbar-nav ml-auto">
                <li 
                    v-if="isAuthed" 
                    class="nav-item dropdown user-dropdown-menu">
                    <div class="row">
                        <div 
                            v-if="userPhotoUrl" 
                            class="user-image-container mr-2">
                            <img 
                                :src="userPhotoUrl" 
                                alt="Profile Image">
                                
                        </div>

                        <span 
                            id="navbarDropdownMenuLink" 
                            class="nav-link dropdown-toggle" 
                            data-toggle="dropdown">
                            {{ userDisplayName }}
                        </span>

                        <div 
                            class="dropdown-menu col-md-12 col-sm-12" 
                            aria-labelledby="navbarDropdownMenuLink">
                            <router-link 
                                to="/expenses" 
                                class="dropdown-item">Expenses
                            </router-link>

                            <span 
                                class="dropdown-item" 
                                @click="$firebaseLogout">Logout</span>
                        </div>
                    </div>
                </li>

                <li 
                    v-if="isAuthed" 
                    class="nav-item dropdown user-dropdown-mobile-menu">
                    <router-link 
                        to="/expenses" 
                        class="nav-link">Expenses
                    </router-link>

                    <span 
                        class="nav-link" 
                        @click="$firebaseLogout">Logout</span>
                </li>

                <li 
                    v-if="!isAuthed" 
                    class="nav-item">
                    <router-link 
                        to="/login" 
                        class="nav-link">Login</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import authMixin from "@/Services/Firebase/auth";
import { getCurrentUser } from "@/Services/Firebase/auth";

export default {
    mixins: [authMixin],

    props: {
        isAuthed: { type: Boolean, required: true }
    },

    computed: {
        userDisplayName() {
            const user = getCurrentUser();
            return this.isAuthed && user ? user.displayName || user.email : null;
        },

        userPhotoUrl() {
            const user = getCurrentUser();
            return this.isAuthed && user ? user.photoURL : null;
        }
    }
};
</script>

<style scoped>
.user-image-container img {
    max-height: 40px;
    border-radius: 50%;
}

.user-dropdown-mobile-menu {
    display: none;
}

/* Media query for reorienting user dropdown menu on smaller screens */
@media (max-width: 992px) {
    .user-dropdown-menu {
        display: none;
    }

    .user-dropdown-mobile-menu {
        display: block;
    }
}
</style>

