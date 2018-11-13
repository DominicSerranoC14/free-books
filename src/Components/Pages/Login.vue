<template>
    <div class="row text-center">
        <h4 class="col-md-12">Welcome to something awesome! Please sign in.</h4>

        <div class="col-md-12 mt-4">
            <button 
                class="btn btn-primary" 
                @click="$googleRedirectSignIn">
                Sign In With Google
                <i class="fa fa-google-plus-official" />
            </button>
        </div>
    </div>
</template>

<script>
import authMixin from "@/Services/Firebase/auth";

export default {
    mixins: [authMixin]
};
</script>
